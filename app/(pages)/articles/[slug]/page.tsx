import CustomMDX from "@/app/_components/wrapper/custom-mdx";
import { MotionDiv, MotionH1, MotionH2, MotionSpan } from "@/app/_components/wrapper/framer";
import ArticlesCard2 from "@/app/_components/widgets/articles/card2";
import TOC from "@/app/_components/widgets/articles/toc";
import getArticle from "@/app/_services/articles/getArticle";
import getArticles from "@/app/_services/articles/getArticles";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/app/_utils/transitions";

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
    const articlesData = await getArticles()
    const article = await getArticle(params.slug)
    const headings = article?.body.match(/#{2,4} .+/g)

    return (
        <div>
            <MotionDiv
                variants={staggeredContainer(0.1, 0.1)}
                viewport={{ once: true, amount: 0.25 }}
                whileInView="show"
                initial="hidden"
                className="bg-light-mineshaft dark:bg-dark-mineshaft"
                id="header"
            >
                <div className="min-h-screen container mx-auto flex flex-col items-center justify-center gap-3 text-center px-7 md:px-64">
                    <MotionH1 variants={textVariantTransition(0)} className="text-light-nero dark:text-dark-nero font-semibold text-3xl">{article?.title}</MotionH1>
                    <MotionSpan variants={textVariantTransition(0.15)} className="text-light-silver dark:text-dark-silver">{(new Date(article?.createdAt as string)).toDateString()}</MotionSpan>
                </div>
            </MotionDiv>
            <div className="flex flex-col px-10 md:px-40 divide-y divide-light-mineshaft dark:divide-dark-mineshaft">
                <MotionDiv
                    variants={staggeredContainer(0.1, 0.1)}
                    viewport={{ once: true, amount: 0.25 }}
                    whileInView="show"
                    initial="hidden"
                    className="flex flex-row gap-7 py-20 items-start"
                >
                    {/* trying to animate this but not working, still a bug */}
                    {/* {headings &&
                        <MotionDiv
                            variants={fadeInTransition("right", "tween", 0.1, 0.6)}
                            className="w-1/4 my-0 sticky top-28 hidden md:flex"
                        >
                            <TOC headings={headings} />
                        </MotionDiv>
                    } */}
                    {headings &&
                        <div
                            className="w-1/4 my-0 sticky top-28 hidden md:flex"
                        >
                            <TOC headings={headings} />
                        </div>
                    }

                    {/* trying to animate this but not working, still a bug */}
                    {/* <MotionDiv
                        variants={fadeInTransition("up", "tween", 0.1, 0.6)}
                        className="w-full text-light-nero dark:text-dark-nero flex flex-col gap-5"
                    >
                        <CustomMDX source={article?.body as string} />
                    </MotionDiv> */}
                    <div className="w-full text-light-nero dark:text-dark-nero flex flex-col gap-5">
                        <CustomMDX source={article?.body as string} />
                    </div>
                </MotionDiv>
                <MotionDiv
                    variants={staggeredContainer(0.1, 0.1)}
                    viewport={{ once: true, amount: 0.25 }}
                    whileInView="show"
                    initial="hidden"
                    className="flex flex-col py-20 gap-10"
                >
                    <MotionH2 variants={textVariantTransition(0)} className="text-light-nero dark:text-dark-nero font-bold text-3xl">Other articles</MotionH2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {articlesData && articlesData
                            .filter((article) => article.post.frontmatter.slug != params.slug)
                            .map((article, i) =>
                                <MotionDiv
                                    key={i}
                                    variants={fadeInTransition("up", "tween", 0.2, 0.5)}
                                    viewport={{ once: true, amount: 0.25 }}
                                    whileInView="show"
                                    initial="hidden"
                                >
                                    <ArticlesCard2 article={article.post} />
                                </MotionDiv>
                            )
                        }
                    </div>
                </MotionDiv>
            </div>
        </div>
    )
}