import styles from "@/styles/modules/readLayout/readPage.module.scss";
import path from "path";
import { ReadBlockComponent } from "@/components/readLayout/ReadBlock";
import { File } from "@/utils/FileUtil";
import { getBookDataRead, DB_Book_Record } from "@/database/db_helpers_BOOKS";

type ReadPageParams = { params: { bookId: string } };
async function getBookFilePath(bookData: DB_Book_Record | null) {
    // path + query params
    const CURRENT_ABS_PATH = path.resolve(".");
    // it should not happen
    if (!bookData) {
        return null;
    }
    return path.join(CURRENT_ABS_PATH, bookData.filePath);
}
export default async function ReadPage({ params }: ReadPageParams) {
    const numberBookId = parseInt(params.bookId);
    const bookData = await getBookDataRead(numberBookId);
    const filePath = await getBookFilePath(bookData);
    const file = await File.getFile(filePath);

    if (file === null || bookData === null) {
        return <div>BOOK CANNOT BE FOUND!</div>;
    }

    let sections = file.getListOfSections();
    if (sections === undefined) {
        sections = [];
    }
    if (sections.length < 1) {
        file.text = "";
    }

    return (
        <main className={styles.main}>
            <section className={styles.readerBlock}>
                <ReadBlockComponent
                    text={file.text}
                    title={bookData.title}
                    authorName={bookData.authorName}
                    sections={JSON.parse(JSON.stringify(sections))}
                    thumbnailPath={bookData.thumbnail}
                ></ReadBlockComponent>
            </section>
        </main>
    );
}
