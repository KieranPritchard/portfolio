import AboutMe from "@/components/content/blog/AboutMe"
import ContentContainer from "@/components/content/ContentContainer"
import { getAllBlogs } from "@/lib/blogs"
import { Metadata } from 'next'
import TrendingTopics from "../../components/content/blog/TrendingTopics"

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Unfinished',
}

export default async function Page() {
    // Gets all of the blogs
    const blogs = getAllBlogs()

    return (
        <>
            <ContentContainer>
                <AboutMe />
            </ContentContainer>
            <ContentContainer>
                <TrendingTopics />
            </ContentContainer>
        </>
    )
}
