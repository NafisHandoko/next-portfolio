import { GithubBlog } from "@rena.to/github-blog";

const githubBlogInstance = new GithubBlog({
    repo: 'NafisHandoko/next-portfolio',
    token: process.env.GITHUB_TOKEN as string,
})

export default githubBlogInstance