import ArticlesCard2 from "@/app/_components/widgets/articles/card2";
import { articlesData } from "@/app/_data/articles";

export default function ArticlesPage() {
    return (
        <div className="container mx-auto flex flex-col items-center px-10 md:px-40 py-24 pt-36 gap-16">
            <h2 className="uppercase text-nero font-bold text-3xl">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {articlesData && articlesData.map((article: any, i: any) => <ArticlesCard2 article={article} key={i} />)}
            </div>
        </div>
    )
}