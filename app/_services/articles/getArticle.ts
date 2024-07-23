import githubBlogWrapper from "./githubBlogWrapper"

const getArticle = async (slug: string) => {
    const article = await githubBlogWrapper.getPost({
        query: {
            search: slug,
        }
    })
    return article.post
}

export default getArticle