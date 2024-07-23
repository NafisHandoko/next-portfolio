import Button from "../base/button";
import ArticlesCard from "../widgets/articles/card";
import getArticles from "@/app/_services/articles/getArticles";

export default async function ArticlesSection() {
    const articlesData = await getArticles()

    return (
        <section id="articles" className="container mx-auto flex flex-col px-10 md:px-40 py-24 gap-10">
            <h2 className="uppercase text-nero font-bold text-3xl">Articles</h2>
            <div className="flex flex-col">
                {articlesData && articlesData.map((article: any, i: any) => <ArticlesCard article={article.post} key={i} />)}
            </div>
            <Button type="Link" href="/articles" text="Show more" className="self-center" />
        </section>
    )
}