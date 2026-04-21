// Blog cateogory type
export type BlogCategory =
  | "development"
  | "developement"
  | "web"
  | "security"
  | "ai"
  | "review"

// Type for the blog frontmatter
export type BlogFrontmatter = {
    title: string
    slug: string
    category: BlogCategory
    description: string
    tags: string[]
    date: string
    coverImage?: string
    coverAlt: string
}

// Exports the project summary
export type BlogSummary = BlogFrontmatter

// Exports the document
export type BlogDoc = BlogFrontmatter & {
    content: string
}