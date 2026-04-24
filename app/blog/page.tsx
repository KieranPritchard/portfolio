// app/blog/page.tsx
import AboutMe from "@/components/pages/blog/AboutMe"
import TrendingTopics from "@/components/pages/blog/TrendingTopics"
import BlogList from "@/components/pages/blog/BlogList"
import { Metadata } from 'next'
import ContentContainer from "@/components/pages/ContentContainer"
import type { BlogSummary } from "@/types/blog"
import  WhoAmI from "@/components/pages/blog/Widgets/WhoAmI"
import TagCloud from "@/components/pages/blog/Widgets/TagCloud"
import { getAllBlogs } from "@/lib/blogs"

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Unfinished',
}

export default async function Page() {
    // Stores the blogs
    const blogs = getAllBlogs()
    
    return (
        <ContentContainer>
            <BlogList posts={blogs} />
        </ContentContainer>
    )
}