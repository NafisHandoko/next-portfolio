import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/app/_utils/transitions";
import Button from "../base/button";
import { MotionDiv, MotionH2, MotionSection } from "../wrapper/framer";
import ArticlesCard from "../widgets/articles/card";
import getArticles from "@/app/_services/articles/getArticles";

export default async function ArticlesSection() {
    const articlesData = await getArticles()

    return (
        <MotionSection
            variants={staggeredContainer(0.1, 0.1)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="show"
            initial="hidden"
            id="articles"
            className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10"
        >
            <MotionH2
                variants={textVariantTransition(0)}
                className="uppercase text-nero font-bold text-3xl"
            >
                Articles
            </MotionH2>
            <div className="flex flex-col">
                {articlesData && articlesData.map((article, i) =>
                    <MotionDiv key={i} variants={textVariantTransition(i * 0.5)} >
                        <ArticlesCard article={article.post} />
                    </MotionDiv>
                )}
            </div>
            <MotionDiv variants={fadeInTransition("up", "tween", 1, 0.7)} className="self-center">
                <Button type="Link" href="/articles" text="Show more" />
            </MotionDiv>
        </MotionSection>
    )
}