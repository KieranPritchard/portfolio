
import BlogList from "@/components/pages/blog/BlogList"
import { Metadata } from "next"
import { getAllBlogs } from "@/lib/blogs"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on software development, web projects, cybersecurity, and AI, plus lessons learned from building and exploring technology.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description:
      "Articles on software development, web projects, cybersecurity, and AI, plus lessons learned from building and exploring technology.",
    url: "/blog",
    siteName: "Kieran Pritchard",
    images: [
      {
        url: "/kieran-pritchard.jpg",
        width: 1200,
        height: 630,
        alt: "Kieran Pritchard",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
}

export default async function Page() {
  // Stores the blogs
  const blogs = getAllBlogs()

  return (
    <BlogList posts={blogs} />
  )
}
