import { BookInterface } from '@/interfaces/bookInterface';


// export helpers
export type BooksWithoutFiles = Omit<BookInterface, 'files' | 'ratingMarks'>[];
export type BooksForSearch = Pick<BookInterface, 'id' | 'title' | 'author' | 'rating'>[];
export type CarouselBooks = Pick<BookInterface, 'id' | 'title' | 'author' | 'rating' | 'thumbnail'>[];


// MAIN STORAGE
class BooksClass {
    books: BookInterface[];

    constructor() {
        this.books = books;
    }

    // methods
    retrieveBooks() {
        return this.books;
    }

    retrieveBooksWithoutFiles() {
        const booksWithoutFiles: BooksWithoutFiles = books.map(book => {
            const { id, title, author, year, description, quotes, rating, genres, thumbnail, picture } = book;

            return {
                id,
                title,
                author,
                year,
                description,
                quotes,
                genres,
                rating,
                thumbnail,
                picture
            };
        });

        return booksWithoutFiles;
    }
}


export const booksInstance = new BooksClass();  


const books: BookInterface[] = [
    {
        id: '0',
        title: 'Отверженные',
        author: 'В. Гюго',
        year: '1862 г.',
        description: `Отверженные - это роман-эпопея, написанная Виктором Гюго и впервые опубликованная в 1862 году. Этот роман считается одним из величайших произведений XIX века и широко признан мировой литературной критикой и общественностью. Сюжет романа вплетает множество тем и мотивов, включая социальную несправедливость, бедность, несправедливое обращение с нищими и отверженными членами общества, а также мотив прощения и искупления.`,
        genres: ['исторический роман'],
        quotes: [
            'Все люди равны перед законом, но не все равны перед природой',
            'Никто не может быть свободным, если другие не свободны.',
            'Нельзя быть счастливым, если ты не спасаешь других.'
        ],
        rating: 9.1,
        ratingMarks: [],
        thumbnail: '/thumbs/отверженные.jpg',
        picture: '',
        files: {
            book: 'отверженные',
        }
    },
    // Дубли (6), для теста
    {
        id: '10',
        title: 'Отверженные',
        author: 'В. Гюго',
        year: '1862 г.',
        description: `Отверженные - это роман-эпопея, написанная Виктором Гюго и впервые опубликованная в 1862 году. Этот роман считается одним из величайших произведений XIX века и широко признан мировой литературной критикой и общественностью. Сюжет романа вплетает множество тем и мотивов, включая социальную несправедливость, бедность, несправедливое обращение с нищими и отверженными членами общества, а также мотив прощения и искупления.`,
        genres: ['исторический роман'],
        quotes: [
            'Все люди равны перед законом, но не все равны перед природой',
            'Никто не может быть свободным, если другие не свободны.',
            'Нельзя быть счастливым, если ты не спасаешь других.'
        ],
        rating: 9.3,
        ratingMarks: [],
        thumbnail: '/thumbs/отверженные.jpg',
        picture: '',
        files: {
            book: 'отверженные',
        }
    },
    {
        id: '100',
        title: 'Отверженные',
        author: 'В. Гюго',
        year: '1862 г.',
        description: `Отверженные - это роман-эпопея, написанная Виктором Гюго и впервые опубликованная в 1862 году. Этот роман считается одним из величайших произведений XIX века и широко признан мировой литературной критикой и общественностью. Сюжет романа вплетает множество тем и мотивов, включая социальную несправедливость, бедность, несправедливое обращение с нищими и отверженными членами общества, а также мотив прощения и искупления.`,
        genres: ['исторический роман'],
        quotes: [
            'Все люди равны перед законом, но не все равны перед природой',
            'Никто не может быть свободным, если другие не свободны.',
            'Нельзя быть счастливым, если ты не спасаешь других.'
        ],
        rating: 8.5,
        ratingMarks: [],
        thumbnail: '/thumbs/отверженные.jpg',
        picture: '',
        files: {
            book: 'отверженные',
        }
    },
    {
        id: '12',
        title: 'Отверженные',
        author: 'В. Гюго',
        year: '1862 г.',
        description: `Отверженные - это роман-эпопея, написанная Виктором Гюго и впервые опубликованная в 1862 году. Этот роман считается одним из величайших произведений XIX века и широко признан мировой литературной критикой и общественностью. Сюжет романа вплетает множество тем и мотивов, включая социальную несправедливость, бедность, несправедливое обращение с нищими и отверженными членами общества, а также мотив прощения и искупления.`,
        genres: ['исторический роман'],
        quotes: [
            'Все люди равны перед законом, но не все равны перед природой',
            'Никто не может быть свободным, если другие не свободны.',
            'Нельзя быть счастливым, если ты не спасаешь других.'
        ],
        rating: 9.3,
        ratingMarks: [],
        thumbnail: '/thumbs/отверженные.jpg',
        picture: '',
        files: {
            book: 'отверженные',
        }
    },
    {
        id: '102',
        title: 'Отверженные',
        author: 'В. Гюго',
        year: '1862 г.',
        description: `Отверженные - это роман-эпопея, написанная Виктором Гюго и впервые опубликованная в 1862 году. Этот роман считается одним из величайших произведений XIX века и широко признан мировой литературной критикой и общественностью. Сюжет романа вплетает множество тем и мотивов, включая социальную несправедливость, бедность, несправедливое обращение с нищими и отверженными членами общества, а также мотив прощения и искупления.`,
        genres: ['исторический роман'],
        quotes: [
            'Все люди равны перед законом, но не все равны перед природой',
            'Никто не может быть свободным, если другие не свободны.',
            'Нельзя быть счастливым, если ты не спасаешь других.'
        ],
        rating: 8.5,
        ratingMarks: [],
        thumbnail: '/thumbs/отверженные.jpg',
        picture: '',
        files: {
            book: 'отверженные',
        }
    },
    {
        id: '13',
        title: 'Отверженные',
        author: 'В. Гюго',
        year: '1862 г.',
        description: `Отверженные - это роман-эпопея, написанная Виктором Гюго и впервые опубликованная в 1862 году. Этот роман считается одним из величайших произведений XIX века и широко признан мировой литературной критикой и общественностью. Сюжет романа вплетает множество тем и мотивов, включая социальную несправедливость, бедность, несправедливое обращение с нищими и отверженными членами общества, а также мотив прощения и искупления.`,
        genres: ['исторический роман'],
        quotes: [
            'Все люди равны перед законом, но не все равны перед природой',
            'Никто не может быть свободным, если другие не свободны.',
            'Нельзя быть счастливым, если ты не спасаешь других.'
        ],
        rating: 9.3,
        ratingMarks: [],
        thumbnail: '/thumbs/отверженные.jpg',
        picture: '',
        files: {
            book: 'отверженные',
        }
    },
    {
        id: '103',
        title: 'Отверженные',
        author: 'В. Гюго',
        year: '1862 г.',
        description: `Отверженные - это роман-эпопея, написанная Виктором Гюго и впервые опубликованная в 1862 году. Этот роман считается одним из величайших произведений XIX века и широко признан мировой литературной критикой и общественностью. Сюжет романа вплетает множество тем и мотивов, включая социальную несправедливость, бедность, несправедливое обращение с нищими и отверженными членами общества, а также мотив прощения и искупления.`,
        genres: ['исторический роман'],
        quotes: [
            'Все люди равны перед законом, но не все равны перед природой',
            'Никто не может быть свободным, если другие не свободны.',
            'Нельзя быть счастливым, если ты не спасаешь других.'
        ],
        rating: 8.5,
        ratingMarks: [],
        thumbnail: '/thumbs/отверженные.jpg',
        picture: '',
        files: {
            book: 'отверженные',
        }
    },

    {
        id: '1',
        title: 'Война и мир',
        author: 'Л. Н. Толстой',
        year: '1869 г.',
        description: 'Война и мир - это эпический роман Льва Николаевича Толстого, охватывающий период войны против Наполеона в России с 1805 по 1812 годы. Роман описывает жизнь многих персонажей, включая важных исторических фигур, таких как Наполеон и Кутузов, а также обычных людей, живущих в то время. Книга известна своей сложной структурой и детальным изображением социальных, политических и личных отношений в России того времени',
        genres: ['исторический роман'],
        quotes: [
            'Все люди знают, что они умрут, но не все понимают, что они живут.',
            'Быть великим - значит, знать, что ты ничего не знаешь.',
            'Жизнь - это как путешествие, которое продолжается, и ты не знаешь, куда тебя ведут.',
        ],
        rating: 7.7,
        ratingMarks: [],
        thumbnail: '/thumbs/человекКоторыйСмеётся.jpg',
        picture: '',
        files: {
            book: 'война и мир',
        }
    },
    {
        id: '2',
        title: 'Идиот',
        author: 'Ф. М. Достоевский',
        year: '1868 г.',
        description: 'Идиот" - это психологический роман, описывающий жизнь главного героя, князя Мышкина, и его взаимодействия с различными персонажами в обществе. Главный герой представлен как человек, полностью лишенный самолюбия, но неспособный влиять на окружающих людей, несмотря на свою способность видеть их духовные качества.',
        genres: ['психологический роман'],
        quotes: [     
            "Нельзя жить, как будто бы ничего не было, и не думать о том, что есть.",
            "Я не хочу, чтобы они были счастливы, я хочу, чтобы они были мои.",
            "Я не могу быть без тебя, ты мне нужна, как света, чтобы видеть.",
        ],
        rating: 9.1,
        ratingMarks: [],
        thumbnail: '/thumbs/человекКоторыйСмеётся.jpg',
        picture: '',
        files: {
            book: 'идиот',
        }
    }  
];