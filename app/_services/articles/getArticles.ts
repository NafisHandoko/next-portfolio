import { cache } from 'react'
import githubBlogWrapper from "./githubBlogWrapper";

const getArticles = cache(async () => {
    const articles = await githubBlogWrapper.getPosts({
        query: {
            type: 'article',
            state: 'published',
        },
        pager: { limit: 10, offset: 0 },
    })
    return articles.edges
})

export default getArticles