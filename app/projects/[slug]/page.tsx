import Link from "next/link"
import { notFound } from "next/navigation"
import ContentContainer from "@/components/pages/ContentContainer"
import { LinkButton } from "@/components/buttons/LinkButton"
import { ProjectArticleHeader } from "@/components/pages/portfolio/ProjectArticleHeader"
import { ProjectBreadcrumbs } from "@/components/pages/portfolio/ProjectBreadcrumbs"
import { ProjectMarkdown } from "@/components/pages/portfolio/ProjectMarkdown"
import {
  TableOfContents,
} from "@/components/pages/blog/TableOfContents"
import {
  getAllProjects,
  getProjectBySlug,
  getProjectFileSlugs,
} from "@/lib/projects"
import type { Metadata } from "next"
import type { ProjectDoc, ProjectFrontmatter } from "../../../types/project"
import { createPageMetadata } from "@/lib/page-metadata"
import { ReadingProgressBar } from "@/components/pages/blog/ReadingProgressBar"

// Function to generate static parameters
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Returns the project file slugs
  return getProjectFileSlugs().map((slug: string): { slug: string } => ({
    slug,
  }))
}

// Generates metadata
export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>): Promise<Metadata> {
  // Stores the slug
  const { slug } = await params
  // Gets the project by the slug
  const project: ProjectDoc | null = getProjectBySlug(slug)

  // Checks if the project isn't there
  if (!project) {
    // Returns an empty array
    return {}
  }

  // Returns the metadata
  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    section: "PROJECT",
    type: "article",
    publishedTime: project.date,
    tags: project.tags,
  })
}

// Function for the page
export default async function Page({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  // Gets the slug
  const { slug } = await params
  // Gets the project
  const project: ProjectDoc | null = getProjectBySlug(slug)

  // Checks if the project is not found
  if (!project) {
    // Returns not found
    notFound()
  }

  // Function to display the correct link buttons
  const displayLinkButtons = () => {
    // "#" is used as a placeholder for a missing link
    const hasSource = project.github !== "#"
    const hasDemo = project.link !== "#"

    // Nothing to show if neither link exists, so skip the wrapper too
    if (!hasSource && !hasDemo) return null

    return (
      <div className="mt-16 flex flex-col gap-3 border-t pt-10 sm:flex-row">
        {hasSource && (
          <LinkButton
            text="Source"
            link={project.github}
            kind="outline"
            className="sm:flex-1"
          />
        )}
        {hasDemo && (
          <LinkButton
            text="Live demo"
            link={project.link}
            kind="default"
            className="sm:flex-1"
          />
        )}
      </div>
    )
  }

  // Gets the related projects
  const related: ProjectFrontmatter[] = getAllProjects()
    .filter((item: ProjectFrontmatter): boolean => item.slug !== project.slug)
    .slice(0, 3)
  // returns content and summary
  const { content, ...summary } = project

  return (
    <ContentContainer className="max-w-6xl pb-20">
      {/* Thin reading-progress bar across the top of the viewport */}
      <ReadingProgressBar className="lg:hidden" />

      {/* Article column + sticky contents column (contents hidden below lg) */}
      <div className="lg:grid lg:grid-cols-[minmax(0,48rem)_16rem] lg:justify-center lg:gap-12">
        <div className="min-w-0">
          <ProjectBreadcrumbs
            className="mb-8"
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />

          <ProjectArticleHeader project={summary} className="mb-14" />

          {/* The contents box only reads headings from inside this element */}
          <article id="project-content">
            <ProjectMarkdown content={content} />
          </article>

          {displayLinkButtons()}

          {related.length ? (
            <aside className="mt-16 rounded-xl border bg-muted/20 p-6">
              <h2 className="font-heading text-lg font-semibold">
                More projects
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {related.map((item: ProjectFrontmatter) => (
                  <li key={item.slug}>
                    <Link
                      className="text-primary hover:underline"
                      href={`/portfolio/${item.slug}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>

        <aside className="hidden lg:block" aria-label="Contents">
          <TableOfContents
            containerSelector="#project-content"
            className="sticky top-24"
          />
        </aside>
      </div>
    </ContentContainer>
  )
}