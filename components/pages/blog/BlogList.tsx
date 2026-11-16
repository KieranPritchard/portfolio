"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { BlogSummary } from "@/types/blog"
import { ArrowUpRight, BookOpen, Code, Shield, Zap } from "lucide-react"
import Link from "next/link"
import ContentContainer from "../ContentContainer"
import { blogItemVariants, blogContainerVariants } from "@/lib/animations"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import BlogPageWhoAmI from "./Widgets/BlogPageWhoAmI"

/**
 * BlogList Component
 *
 * Renders a list of blog post summaries with images/icons, metadata, titles,
 * descriptions, and tags. Uses Framer Motion for staggered entrance animations.
 *
 * @param className - Optional CSS class name for the container.
 * @param posts - An array of blog post summaries to display.
 */
export default function BlogList({
  className,
  posts,
}: {
  className?: string
  posts: BlogSummary[]
}) {
  const [featuredPost, ...otherPosts] = posts

  /**
   * Returns a Lucide icon based on the blog category.
   *
   * @param category - The category of the blog post.
   * @returns A JSX element containing the category icon.
   */
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "security":
        return <Shield className="h-6 w-6 text-primary" />
      case "web":
        return <Code className="h-6 w-6 text-primary" />
      case "automation":
        return <Zap className="h-6 w-6 text-primary" />
      default:
        return <BookOpen className="h-6 w-6 text-primary" />
    }
  }

  return (
    <ContentContainer>
      <motion.div
        className={cn("space-y-12", className)}
        variants={blogContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="space-y-10">
          {/* Section Header and Author Introduction */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-widest text-primary uppercase">
                - Blog
              </p>
              <h1 className="text-4xl font-bold tracking-tight">
                Field notes.
              </h1>
              <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <BlogPageWhoAmI />
          </div>

          {/* Featured Post */}
          {featuredPost ? (
            <motion.div variants={blogItemVariants}>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block"
                aria-label={`Read featured article: ${featuredPost.title}`}
              >
                <Card className="overflow-hidden border-border bg-muted/20 py-0 transition-colors hover:border-primary/40 hover:bg-muted/30">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
                      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-muted/40 md:aspect-auto md:min-h-72 md:border-r md:border-b-0">
                        {featuredPost.coverImage ? (
                          <Image
                            src={featuredPost.coverImage}
                            alt={featuredPost.coverAlt ?? featuredPost.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <span aria-hidden="true" className="scale-150">
                            {getIcon(featuredPost.category)}
                          </span>
                        )}
                        <span className="absolute top-4 left-4 rounded-full border border-border/70 bg-background/90 px-3 py-1 font-mono text-[10px] tracking-widest text-foreground uppercase">
                          Latest article
                        </span>
                      </div>

                      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                        <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                          <span>
                            {new Date(featuredPost.date).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="tracking-wider uppercase">
                            {featuredPost.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{featuredPost.readingTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                          {featuredPost.title}
                        </h2>
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {featuredPost.description}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                          Read article
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ) : null}
        </div>

        {/* Remaining Posts */}
        {otherPosts.length > 0 ? (
          <section
            className="space-y-8"
            aria-labelledby="more-articles-heading"
          >
            <div className="flex items-center gap-4">
              <h2
                id="more-articles-heading"
                className="text-sm font-bold tracking-wider text-muted-foreground uppercase"
              >
                More articles
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-8">
              {otherPosts.map((post) => (
                <motion.div key={post.slug} variants={blogItemVariants}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-start gap-6 md:gap-8"
                  >
                    {/* Visual Asset: Cover image or category icon */}
                    <div className="hidden h-28 w-40 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/50 transition-colors group-hover:border-primary/50 sm:flex">
                      {post.coverImage ? (
                        <Image
                          width={160}
                          height={120}
                          src={post.coverImage}
                          alt={post.title}
                          className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        getIcon(post.category)
                      )}
                    </div>

                    {/* Post Content Area */}
                    <div className="flex-1 space-y-2">
                      {/* Metadata: Date and Reading Time */}
                      <div className="flex items-center gap-3 font-mono text-[12px] text-muted-foreground">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </div>

                      {/* Post Title: Highlights on hover */}
                      <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>

                      {/* Post Short Description: Clamped to 2 lines */}
                      <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {post.description}
                      </p>

                      {/* Post Tags: Displayed as monospaced hashtags */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        {post.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs text-muted-foreground/80 transition-colors hover:text-primary"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        ) : null}
      </motion.div>
    </ContentContainer>
  )
}
