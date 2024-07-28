import { MotionDiv, MotionH2 } from "@/app/_components/wrapper/framer";
import ArticlesCard2 from "@/app/_components/widgets/articles/card2";
import getArticles from "@/app/_services/articles/getArticles";
import { fadeInTransition, textVariantTransition } from "@/app/_utils/transitions";

export default async function ArticlesPage() {
    const articlesData = await getArticles()

    return (
        <div className="container mx-auto flex flex-col items-center px-10 md:px-40 py-24 pt-36 gap-16" id="header">
            <MotionH2
                variants={textVariantTransition(0)}
                animate="show"
                initial="hidden"
                className="uppercase text-nero font-bold text-3xl"
            >Articles</MotionH2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {articlesData && articlesData.map((article, i) =>
                    <MotionDiv
                        key={i}
                        variants={fadeInTransition("up", "tween", 0.2, 0.7)}
                        viewport={{ once: true, amount: 0.25 }}
                        whileInView="show"
                        initial="hidden"
                    >
                        <ArticlesCard2 article={article.post} />
                    </MotionDiv>
                )}
            </div>
        </div>
    )
}