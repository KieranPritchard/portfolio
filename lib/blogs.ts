import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogCategory, BlogDoc, BlogSummary } from "@/types/blog"
import { calculateReadingTime } from "./utils"

/**
 * Absolute path to the directory containing blog content files.
 */
const contentDir = path.join(process.cwd(), "content/blogs")

/**
 * Type guard to check if a value is a valid BlogCategory.
 * 
 * @param value - The value to check.
 * @returns True if the value is a valid BlogCategory, false otherwise.
 */
function isBlogCategory(value: unknown): value is BlogCategory {
    return (
        value === "developement" ||
        value === "web" ||
        value === "security" ||
        value === "ai" ||
        value === "review" ||
        value === "career-plans"
    )
}

/**
 * Normalizes and validates frontmatter data from a blog markdown file.
 * 
 * @param data - The raw frontmatter data from gray-matter.
 * @param content - Optional content string to calculate reading time if not present in frontmatter.
 * @returns A validated BlogDoc object or null if required fields are missing.
 */
function normaliseFrontmatter(data: Record<string, unknown>, content?: string): BlogDoc | null {
    // Extract and validate basic fields
    const title = typeof data.title === "string" ? data.title : null
    const slug = typeof data.slug === "string" ? data.slug : null
    const category = data.category
    const description = typeof data.description === "string" ? data.description : null
    const tags = Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === "string") : null
    const date = typeof data.date === "string" ? data.date : null
    
    // Determine reading time: either from frontmatter or by calculating it from content
    let readingTime = typeof data.readingTime === "string" ? data.readingTime : null
    if (!readingTime && content) {
        readingTime = calculateReadingTime(content)
    }

    // Ensure all mandatory fields are present
    if (!title || !slug || !isBlogCategory(category) || !description || !tags?.length || !date || !readingTime){
        return null
    }

    // Optional fields
    const coverImage = typeof data.coverImage === "string" ? data.coverImage : undefined
    const coverAlt = typeof data.coverAlt === "string" ? data.coverAlt : undefined

    return {
        title,
        slug,
        category,
        description,
        tags,
        date,
        readingTime,
        coverImage,
        coverAlt,
        content: content ?? "",
    }
}

/**
 * Retrieves all blog file slugs (filenames without extension) from the content directory.
 * 
 * @returns An array of slugs as strings.
 */
export function getBlogFileSlugs(): string[] {
    if (!fs.existsSync(contentDir)) {
        return []
    }

    return fs
        .readdirSync(contentDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => path.basename(file, ".md"))
}

/**
 * Fetches a single blog post by its slug.
 * 
 * @param slug - The unique identifier for the blog post.
 * @returns The blog post data (BlogDoc) or null if not found or invalid.
 */
export function getBlogBySlug(slug: string): BlogDoc | null {
    const fullPath = path.join(contentDir, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
        return null
    }

    // Read and parse markdown file
    const raw = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(raw)
    
    // Normalize and validate the frontmatter
    const base = normaliseFrontmatter(data as Record<string, unknown>, content)
    
    if (!base) {
        return null
    }

    // Security check: ensure the slug in frontmatter matches the requested slug
    if (base.slug !== slug) {
        return null
    }

    return { ...base, content }
}

/**
 * Converts a full BlogDoc to a BlogSummary by removing the content field.
 * 
 * @param doc - The full blog document.
 * @returns A summary object containing metadata only.
 */
function blogSummaryFromDoc(doc: BlogDoc): BlogSummary {
    const { title, slug, category, description, tags, date, readingTime, coverImage, coverAlt } = doc
    return { title, slug, category, description, tags, date, readingTime, coverImage, coverAlt }
}

/**
 * Retrieves all blog posts, sorted by date in descending order.
 * 
 * @returns An array of BlogSummary objects.
 */
export function getAllBlogs(): BlogSummary[] {
    const items = getBlogFileSlugs()
        .map((fileSlug) => getBlogBySlug(fileSlug))
        .filter((doc): doc is BlogDoc => doc !== null)
        .map(blogSummaryFromDoc)

    // Sort by date: newest first
    return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}