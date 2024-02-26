'use server';
import db from "@/database/db";
import { PromiseValueType } from "@/interfaces/promiseValueTypeUtil";
import { GenreLiterals } from "@/interfaces/storage/bookInterface";
import { getUserById } from "@/database/db_helpers";
import { getBookById, updateBookRating } from "@/database/db_helpers_BOOKS";
import { revalidatePath } from "next/cache";
import { auth } from "$/auth";

// Popular Books
type PopularBooksReturnTypePromise = ReturnType<typeof getPopularBooksAction>;
export type CarouselBooks = PromiseValueType<PopularBooksReturnTypePromise>;

// errors
enum ErrorMessages {
    USER_NO_FOUND = 'Ошибка: пользователь не был найден, попробуйте перезайти в аккаунт',
    USER_UNAUTHORIZED = 'Ошибка: пользователь не авторизован, войдите в аккаунт, чтобы совершить действие',
    BOOK_NO_FOUND = 'Ошибка: книга не найдена, приносим свои извинения',
}

export const getPopularBooksAction = async (limit: number) => {
    const books = await db.book.findMany({
        take: limit,
        orderBy: { rating: 'desc' },
        include: { author: true },
    });

    // id, title, author, rating, thumbnail
    const popularBooks = books.map(book => {

        const { id, title, thumbnail, rating, author } = book;
        const { name } = author;

        return { id, title, authorName: name, thumbnail, rating };
    });

    return popularBooks;
};


// Recomendation Books by genre
export const getBookRecomendationsByGenre = async (genre: GenreLiterals, limit: number = 10): Promise<CarouselBooks> => {
    const booksOnGenre = await db.book.findMany({
        where: { genres: { has: genre }},
        take: limit,
        orderBy: { rating: 'desc' },
        include: { author: true },
    });

    // id, title, author, rating, thumbnail
    const recomendationBooks = booksOnGenre.map(book => {

        const { id, title, thumbnail, rating, author } = book;
        const { name } = author;

        return { id, title, authorName: name, thumbnail, rating };
    });


    return recomendationBooks;
};

// SIGNLE BOOK page

// rate book
export const rateBookAction = async (ratingScore: number, userId: string, bookId: number) => {
    const user = await getUserById(userId);
    if (!user) {
        return { error: ErrorMessages['USER_NO_FOUND'] };
    }
    const book = await getBookById(bookId);
    if (!book) {
        return { error: ErrorMessages['BOOK_NO_FOUND'] };
    }
    // check if Authorized (2 time for edge cases)
    const isAuthorized = await auth();
    if (!isAuthorized) {
        return { error: ErrorMessages['USER_UNAUTHORIZED']}
    }

    // if user already rate book
    const hasAlreadyRate = await db.rating.findUnique({
        where: {
            ratingId: {
                userId: user.id,
                bookId: book.id,
            }
        }
    });

    if (hasAlreadyRate) {
        return { error: 'Ошибка: вы не можете оценивать одну книгу более одного раза' }
    }

    // create new Rating record
    await db.rating.create({
        data: {
            ratingScore,
            userId: user.id,
            bookId: book.id,
        }
    });

    // update Global book rating
    await updateBookRating(book.id);

    revalidatePath('/books');

    return { success: 'Спасибо, что поделились своим мнением' }
};

// Unrate book
export const unrateBookAction = async (userId: string, bookId: number) => {
    const user = await getUserById(userId);
    if (!user) {
        return { error: ErrorMessages['USER_NO_FOUND'] };
    }
    const book = await getBookById(bookId);
    if (!book) {
        return { error: ErrorMessages['BOOK_NO_FOUND'] };
    }

    // deleting rating record
    await db.rating.delete({
        where: { 
            ratingId: {
                userId: user.id,
                bookId: book.id,
            }
        },
    });

    // update Global book rating
    await updateBookRating(book.id);

    revalidatePath('/books');

    return { success: 'Оценка отменена!' }
};

// Get existing rating score of book by user
type GetRatingScorePromise = ReturnType<typeof getRatingScoreAction>;
export type GetRatingScore = PromiseValueType<GetRatingScorePromise>; 

export const getRatingScoreAction = async (userId: string, bookId: number) => {
    const user = await getUserById(userId);
    if (!user) {
        return { exist: false, value: null };
    }

    const book = await getBookById(bookId);
    if (!book) {
        return { exist: false, value: null };
    }

    const rating = await db.rating.findUnique({
        where: { 
            ratingId: {
                userId: user.id,
                bookId: book.id,
            }
        },
    });
    if (!rating) {
        return { exist: false, value: null };
    }

    return { exist: true, value: rating.ratingScore };
};


// Add to Personal Library
export const addBookToLibraryAction = async (userId: string, bookId: number) => {
    const user = await getUserById(userId);
    if (!user) {
        return { error: ErrorMessages['USER_NO_FOUND'] };
    }
    const book = await getBookById(bookId);
    if (!book) {
        return { error: ErrorMessages['BOOK_NO_FOUND'] };
    }

    // if already inside user library
    const isAlreadyInLibrary = await db.libraryBook.findUnique({
        where: {
            libraryBookId: {
                userId,
                bookId,
            }
        }
    });

    if (isAlreadyInLibrary) {
        return { error: 'Книга уже есть в вашей библиотеке' }
    }

    await db.libraryBook.create({
        data: {
            userId,
            bookId,
        }
    });

    return { success: 'Книга добавлена в вашу библиотеку!' }
};


// delete from library
export const deleteFromLibraryAction = async (userId: string, bookId: number) => {
    const user = await getUserById(userId);
    if (!user) {
        return { error: ErrorMessages['USER_NO_FOUND'] };
    }
    const book = await getBookById(bookId);
    if (!book) {
        return { error: ErrorMessages['BOOK_NO_FOUND'] };
    }

    // deleting book
    await db.libraryBook.delete({
        where: {
            libraryBookId: {
                userId,
                bookId,
            }
        }
    });

    return { success: 'Книга удалена из вашей библиотеки!' }
}

// GET existing library book
type GetLibraryBookPromise = ReturnType<typeof getLibraryBookAction>;
export type GetLibraryBook = PromiseValueType<GetLibraryBookPromise>;

export const getLibraryBookAction = async (userId: string, bookId: number) => {
    const user = await getUserById(userId);
    if (!user) {
        return { exist: false };
    }

    const book = await getBookById(bookId);
    if (!book) {
        return { exist: false };
    }

    // find book
    const libraryBook = await db.libraryBook.findUnique({
        where: { libraryBookId: {
            userId,
            bookId,
        }}
    });

    if (libraryBook) {
        return { exist: true }
    } else {
        return { exist: false }
    }
};  


// COMMENTS & LIKES
export const addCommentAction = async (content: string, userId: string, bookId: number) => {
    const user = await getUserById(userId);
    if (!user) {
        return { error: ErrorMessages['USER_NO_FOUND'] };
    }
    const book = await getBookById(bookId);
    if (!book) {
        return { error: ErrorMessages['BOOK_NO_FOUND'] };
    }

    await db.comment.create({
        data: {
            content,
            authorId: userId,
            authorName: user.username,
            bookId,
        }
    });

    return { success: 'Комментарий добавлен!' }
}

export const deleteCommentAction = async (userId: string, bookId: number) => {
    const user = await getUserById(userId);
    if (!user) {
        return { error: ErrorMessages['USER_NO_FOUND'] };
    }
    const book = await getBookById(bookId);
    if (!book) {
        return { error: ErrorMessages['BOOK_NO_FOUND'] };
    }

    await db.comment.delete({
        where: {
            commendId: {
                authorId: userId,
                bookId,
            }
        }
    });

    return { success: 'Комментарий успешно удалён!' }
}

// LIKE ACTION
export const addLikeAction = async (authorId: string, bookId: number, commentId: string) => {
    
}