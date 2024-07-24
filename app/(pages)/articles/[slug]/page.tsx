import CustomMDX from "@/app/_components/base/custom-mdx";
import ArticlesCard2 from "@/app/_components/widgets/articles/card2";
import getArticle from "@/app/_services/articles/getArticle";
import getArticles from "@/app/_services/articles/getArticles";

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
    const articlesData = await getArticles()
    const article = await getArticle(params.slug)

    return (
        <div>
            <div className="bg-mineshaft" id="header">
                <div className="min-h-screen container mx-auto flex flex-col items-center justify-center gap-3 text-center px-7 md:px-64">
                    <h1 className="text-nero font-semibold text-3xl">{article?.title}</h1>
                    <span className="text-silver">{(new Date(article?.createdAt as string)).toDateString()}</span>
                </div>
            </div>
            <div className="flex flex-col px-10 md:px-40 divide-y divide-mineshaft">
                <div className="flex flex-row gap-7 py-20">
                    <div className="w-1/4 hidden md:flex flex-col gap-4">
                        <span className="text-nero font-bold text-xl">Table of Contents</span>
                        <div className="flex flex-col gap-3 text-sm">
                            <span className="font-semibold text-nero">Nextjs base folder structure</span>
                            <span className="text-jumbo">What is Atomic Design</span>
                            <span className="text-jumbo">Atomic Design structure</span>
                            <span className="text-jumbo ml-7">Atoms</span>
                            <span className="text-jumbo ml-7">Molecules</span>
                            <span className="text-jumbo ml-7">Organisms</span>
                            <span className="text-jumbo ml-7">Templates</span>
                            <span className="text-jumbo">Atomic Design best practices</span>
                            <span className="text-jumbo">Examples</span>
                            <span className="text-jumbo">Closure</span>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 text-nero flex flex-col gap-5">
                        <CustomMDX source={article?.body as string} />
                    </div>
                </div>
                <div className="flex flex-col py-20 gap-10">
                    <h2 className="text-nero font-bold text-3xl">Other articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {articlesData && articlesData
                            .filter((article) => article.post.frontmatter.slug != params.slug)
                            .map((article: any, i: any) => <ArticlesCard2 article={article.post} key={i} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}