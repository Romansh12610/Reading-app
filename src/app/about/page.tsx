import styles from "@/styles/modules/about/aboutPage.module.scss";
import { textDataForAboutPage } from "./textData";
import { splitTextToParagraphs } from "@/utils/textFormat/dotsToParagraphs";
import { TextBlock } from "./client/TextBlock";

export default function AboutPage() {

    const renderingBlocksOfText = textDataForAboutPage.map((textData, index) => (
        <TextBlock key={index} index={index}>
            {splitTextToParagraphs(textData)}
        </TextBlock>
    )); 

    return (
        <main className={styles.main}>
            <h2>О приложении <span>Бук</span><span>Лайф</span></h2>
            <div>Авторы:</div>
            <a href="https://github.com/MaximSadovskiy/">https://github.com/MaximSadovskiy</a>
            <a href="https://github.com/Romansh12610/">https://github.com/Romansh12610</a>
            <section className={styles.textSection}>
                {renderingBlocksOfText}
            </section>
            {/* contacts / donate */}
        </main>
    )
};