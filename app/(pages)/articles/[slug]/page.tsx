import ArticlesCard2 from "@/app/_components/widgets/articles/card2";
import { articlesData } from "@/app/_data/articles";

export default function ArticleDetailPage() {
    return (
        <div>
            <div className="bg-mineshaft" id="header">
                <div className="min-h-screen container mx-auto flex flex-col items-center justify-center gap-3 text-center px-7 md:px-64">
                    <h1 className="text-nero font-semibold text-3xl">Best way to structure your project in Nextjs using Atomic Design Methodology</h1>
                    <span className="text-silver">May 12, 2024</span>
                </div>
            </div>
            <div className="flex flex-col px-10 md:px-40 divide-y divide-mineshaft">
                <div className="flex flex-row gap-7 py-20">
                    <div className="w-full md:w-3/4 text-nero">
                        Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.
                    </div>
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
                </div>
                <div className="flex flex-col py-20 gap-10">
                    <h2 className="text-nero font-bold text-3xl">Other articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {articlesData && articlesData.map((article: any, i: any) => <ArticlesCard2 article={article} key={i} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}