import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogCategory, BlogDoc, BlogSummary } from "@/types/blog"

// Stores the content directory for ease of use
const contentDir = path.join(process.cwd(), "content/blogs")

// Function to check if there is a blog category
function isBlogCategory(value:unknown): value is BlogCategory {
    // Returns the correct value
    return value === "developement" || value === "security" || value === "ai" || value === "review"
}

// Function to normalise frontmatter
function normaliseFrontmatter(data:Record<string, unknown>): BlogDoc | null {
    // Stores front matter data if the correct data type is used
    const title = typeof data.title === "string" ? data.title : null
    const slug = typeof data.slug === "string" ? data.slug : null
    const category = data.category
    const description = typeof data.description === "string" ? data.description : null
    const tags = Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === "string") : null
    const date = typeof data.date === "string" ? data.date : null

    // Checks if all the categories are not there
    if (!title || !slug || !isBlogCategory(category) || !description || !tags?.length || !date){
        return null
    }

    // Gets the cover image
    const coverImage = typeof data.coverImage === "string" ? data.coverImage : undefined
    // Gets the alt text
    const coverAlt = typeof data.coverAlt === "string" ? data.coverAlt : undefined

    // Returns the frontmatter
    return {
        title,
        slug,
        category,
        description,
        tags,
        date,
        coverImage,
        coverAlt,
        content: "",
    }
}

// Function to get the project file slugs
export function getBlogFileSlugs(): string[] {
    // Checks if the file does not exist
    if (!fs.existsSync(contentDir)) {
        // Returns an empty array
        return []
    }

    // Returns the file map
    return fs
        .readdirSync(contentDir)
        .filter((file) => file.endsWith(".md")) // Filters for md files
        .map((file) => path.basename(file, ".md"))
}

// Function to get the project by the slug
export function getBlogBySlug(slug: string): BlogDoc | null {
    // Stores the full path
    const fullPath = path.join(contentDir, `${slug}.md`)
    
    // Checks if the file exists
    if (!fs.existsSync(fullPath)) {
        // Returns null
        return null
    }

    // Gets the raw file
    const raw = fs.readFileSync(fullPath, "utf8")
    // Gets the data and the content
    const { data, content } = matter(raw)
    // Gets the base of the file
    const base = normaliseFrontmatter(data as Record<string, unknown>)
    // Checks if it does not exist
    if (!base) {
        // Returns null
        return null
    }

    // Checks if there is not a slug
    if (base.slug !== slug) {
        return null
    }

    // Returns the base and content
    return { ...base, content }
}

// Gets the project summary from the doc
function blogSummaryFromDoc(doc: BlogDoc): BlogSummary {
    // Stores the project
    const { title, slug, category, description, tags, date, coverImage, coverAlt } = doc
    // Returns the project
    return { title, slug, category, description, tags, date, coverImage, coverAlt }
}

// Function to get all of the projects
export function getAllBlogs(): BlogSummary[] {
    // Stores the items
    const items = getBlogFileSlugs()
        // Maps them to by slug
        .map((fileSlug) => getBlogBySlug(fileSlug))
        // Filters for actual ones
        .filter((doc): doc is BlogDoc => doc !== null)
        .map(blogSummaryFromDoc)

    // Sorts and returns the items
    return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}