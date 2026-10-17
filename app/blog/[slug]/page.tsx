import { getBlogFileSlugs, getBlogBySlug, getAllBlogs } from "@/lib/blogs"
import Link from "next/link"
import { notFound } from "next/navigation"
import ContentContainer from "@/components/pages/ContentContainer"
import { ProjectBreadcrumbs } from "@/components/pages/portfolio/ProjectBreadcrumbs"
import { ProjectMarkdown } from "@/components/pages/portfolio/ProjectMarkdown"
import { BlogArticleHeader } from "@/components/pages/blog/BlogArticleHeader"

// Function to generate static parameters
export async function generateStaticParams() {
  // Returns the project file slugs
  return getBlogFileSlugs().map((slug) => ({ slug }))
}

// Generates metadata
export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  // Stores the slug
  const { slug } = await params
  // Gets the project by the slug
  const blog = getBlogBySlug(slug)

  // Checks if the blog isn't there
  if (!blog) {
    // Returns an empty array
    return {}
  }

  // Returns the metadata
  return {
    title: `${blog.title}`,
    description: blog.description,
  }
}

// Function for the page
export default async function Page({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  // Gets the slug
  const { slug } = await params
  // Gets the blog
  const blog = getBlogBySlug(slug)

  // Checks if the project is not found
  if (!blog) {
    // Returns not found
    notFound()
  }

  // Gets the related projects
  const related = getAllBlogs()
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3)
  // returns content and summary
  const { content, ...summary } = blog

  return (
    <ContentContainer className="max-w-3xl pb-20">
      <ProjectBreadcrumbs
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />

      <BlogArticleHeader blog={summary} className="mb-14" />

      <ProjectMarkdown content={content} />

      {related.length ? (
        <aside className="mt-16 rounded-xl border bg-muted/20 p-6">
          <h2 className="font-heading text-lg font-semibold">
            Related articles
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  className="text-primary hover:underline"
                  href={`/blog/${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </ContentContainer>
  )
}
