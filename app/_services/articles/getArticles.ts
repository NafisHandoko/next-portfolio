import { cache } from 'react'
import githubBlogInstance from "./githubBlogInstance";

const getArticles = cache(async () => {
    const articles = await githubBlogInstance.getPosts({
        query: {
            type: 'article',
            state: 'published',
        },
        pager: { limit: 10, offset: 0 },
    })
    return articles.edges
})

export default getArticles