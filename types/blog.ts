// Blog cateogory type
export type BlogCategory = "developement" | "security" | "ai" | "review"

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