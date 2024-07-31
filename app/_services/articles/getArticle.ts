import { cache } from "react"
import githubBlogInstance from "./githubBlogInstance"

const getArticle = cache(async (slug: string) => {
    const article = await githubBlogInstance.getPost({
        query: {
            search: slug,
        }
    })
    return article.post
})

export default getArticle