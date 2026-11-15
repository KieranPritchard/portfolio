import BlogList from "@/components/pages/blog/BlogList"
import { getAllBlogs } from "@/lib/blogs"
import { createPageMetadata } from "@/lib/page-metadata"

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Articles on software development, web projects, cybersecurity, and AI, plus lessons learned from building and exploring technology.",
  path: "/blog",
  section: "BLOG",
})

export default async function Page() {
  // Stores the blogs
  const blogs = getAllBlogs()

  return <BlogList posts={blogs} />
}
