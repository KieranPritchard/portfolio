import { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blogs'
import { getAllProjects } from '@/lib/projects'

/**
 * Sitemap Generator
 * 
 * Automatically generates a sitemap.xml file for the portfolio website.
 * Includes static routes (home, about, etc.) and dynamic routes for all 
 * blog articles and portfolio projects.
 * 
 * @returns A promise that resolves to an array of sitemap entries.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    /** The base URL of the deployed website. */
    const baseUrl = 'https://www.kpritchard.co.uk'

    /**
     * Define static routes with their respective priorities and change frequencies.
     */
    const staticRoutes = [
        '',
        '/about',
        '/blog',
        '/portfolio',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    /**
     * Dynamically generate routes for all blog posts.
     */
    const blogs = getAllBlogs()
    const blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    /**
     * Dynamically generate routes for all portfolio projects.
     */
    const projects = getAllProjects()
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(project.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Combine all routes into a single sitemap array
    return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}