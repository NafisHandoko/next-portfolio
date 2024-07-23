import { cache } from "react"
import githubBlogWrapper from "./githubBlogWrapper"

const getArticle = cache(async (slug: string) => {
    const article = await githubBlogWrapper.getPost({
        query: {
            search: slug,
        }
    })
    return article.post
})

export default getArticle