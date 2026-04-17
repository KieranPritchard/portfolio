// Project category type
export type ProjectCategory = "web" | "security" | "automation"

// Stores the front matter
export type ProjectFrontmatter = {
  title: string
  slug: string
  category: ProjectCategory
  description: string
  tags: string[]
  link: string
  github: string
  /** ISO date string for the article-style header */
  date: string
  coverImage?: string
  coverAlt?: string
}

// Exports the project summary
export type ProjectSummary = ProjectFrontmatter

// Exports the doc
export type ProjectDoc = ProjectFrontmatter & {
  content: string
}
