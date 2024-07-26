import { GetPostsResult } from "@rena.to/github-blog";
import Link from "next/link";

export default function ArticlesCard2({ article }: { article: GetPostsResult["edges"][number]["post"] }) {
    return (
        <Link href={`/articles/${article.frontmatter.slug}`} className="flex flex-col gap-3 border border-mineshaft hover:border-nero transition-all rounded-md p-5">
            <h3 className="font-semibold text-xl text-nero">{article.title}</h3>
            <span className="text-silver text-sm">{(new Date(article.createdAt)).toDateString()}</span>
        </Link>
    )
}