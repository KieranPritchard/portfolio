import Link from "next/link"
import { notFound } from "next/navigation"
import ContentContainer from "@/components/sections/ContentContainer"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { ProjectArticleHeader } from "@/components/sections/portfolio/ProjectArticleHeader"
import { ProjectBreadcrumbs } from "@/components/sections/portfolio/ProjectBreadcrumbs"
import { ProjectMarkdown } from "@/components/sections/portfolio/ProjectMarkdown"
import {
  getAllProjects,
  getProjectBySlug,
  getProjectFileSlugs,
} from "@/lib/projects"
import { ProjectDoc } from "../../../types/project"

// Function to generate static parameters
export async function generateStaticParams() {
  // Returns the project file slugs
  return getProjectFileSlugs().map((slug) => ({ slug }))
}

// Generates metadata
export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  // Stores the slug
  const { slug } = await params
  // Gets the project by the slug
  const project = getProjectBySlug(slug)

  // Checks if the project isnt there
  if (!project) {
    // Returns an empty arrary
    return {}
  }

  // Retuns the metadata
  return {
    title: `${project.title}`,
    description: project.description,
  }
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
    if (project.link === "#") {
      return (
        <LinkButton
          text="Source"
          link={project.github}
          kind="outline"
          className="sm:flex-1"
        />
      )
    } else {
      return (
        <>
          <LinkButton
            text="Source"
            link={project.github}
            kind="outline"
            className="sm:flex-1"
          />
          <LinkButton
            text="Live demo"
            link={project.link}
            kind="default"
            className="sm:flex-1"
          />
        </>
      )
    }
  }

  // Gets the related projects
  const related = getAllProjects()
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3)
  // returns content and summary
  const { content, ...summary } = project

  return (
    <ContentContainer className="max-w-3xl pb-20">
      <ProjectBreadcrumbs
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <ProjectArticleHeader project={summary} className="mb-14" />

      <ProjectMarkdown content={content} />

      <div className="mt-16 flex flex-col gap-3 border-t pt-10 sm:flex-row">
        {displayLinkButtons()}
      </div>

      {related.length ? (
        <aside className="mt-16 rounded-xl border bg-muted/20 p-6">
          <h2 className="font-heading text-lg font-semibold">More projects</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {related.map((item) => (
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
    </ContentContainer>
  )
}
