// app/blog/page.tsx
import AboutMe from "@/components/content/blog/AboutMe"
import TrendingTopics from "@/components/content/blog/TrendingTopics"
import BlogList from "@/components/content/blog/BlogList"
import { Metadata } from 'next'
import ContentContainer from "@/components/content/ContentContainer"
import type { BlogSummary } from "@/types/blog"

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Unfinished',
}

const dummyBlogs: BlogSummary[] = [
    {
        title: "Mastering Framer Motion Animations",
        slug: "mastering-framer-motion",
        category: "developement",
        description: "Learn how to create fluid, accessible animations for your React components using the latest Framer Motion patterns.",
        tags: ["react", "animation", "ui"],
        date: "2026-04-18",
        coverAlt: "Framer Motion logo"
    },
    {
        title: "Securing Your Next.js API Routes",
        slug: "securing-nextjs-api-routes",
        category: "security",
        description: "A deep dive into server-side validation and authentication strategies to keep your API routes safe from common vulnerabilities.",
        tags: ["security", "nextjs", "backend"],
        date: "2026-04-10",
        coverAlt: "Security shield icon"
    },
    {
        title: "AI Trends in 2026",
        slug: "ai-trends-2026",
        category: "ai",
        description: "Exploring the shifting landscape of generative AI and its impact on modern software development workflows.",
        tags: ["ai", "future", "trends"],
        date: "2026-04-05",
        coverAlt: "AI neural network abstract"
    }
]

export default async function Page() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 space-y-12">
            {/* Top Section */}
            <ContentContainer>
                <AboutMe />
            </ContentContainer>
            <ContentContainer>
                <TrendingTopics />
            </ContentContainer>

            {/* Layout Wrapper: Switches from column (mobile) to row (md+) */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
                
                {/* Sidebar Column: Fixed width, won't shrink */}
                <aside className="w-full md:w-[300px] flex-shrink-0 md:sticky md:top-24 space-y-8">
                    <div className="rounded-lg border border-border/50 bg-card p-6">
                        <h3 className="mb-4 font-bold">Widgets</h3>
                        <p className="text-sm text-muted-foreground">Sidebar content goes here.</p>
                    </div>
                </aside>
                
                {/* Main Content Column: Fills remaining space */}
                <main className="flex-1 w-full">
                    <BlogList posts={dummyBlogs} />
                </main>
            </div>
        </div>
    )
}