import { cn } from "@/lib/utils"

export default function BlogPageLayout({ 
    top, 
    sidebar, 
    main 
}: { 
    top: React.ReactNode; 
    sidebar: React.ReactNode; 
    main: React.ReactNode 
}) {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
            {/* Top section: AboutMe and TrendingTopics at full width */}
            <div className="mb-12 space-y-12">
                {top}
            </div>

            {/* Bottom section: Sidebar on the left, BlogList on the right */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px,1fr] items-start">
                <aside className="space-y-8 lg:sticky lg:top-24">
                    {sidebar}
                </aside>
                <main>
                    {main}
                </main>
            </div>
        </div>
    )
}