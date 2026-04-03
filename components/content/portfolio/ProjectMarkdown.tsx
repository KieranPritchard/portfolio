"use client"

import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Image from "next/image"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

function estimateReadingMinutes(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

/**
 * Standard animation variants for markdown elements.
 * Elements slide up 30px and fade in.
 */
const markdownItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "circOut" } 
  },
}

/**
 * A reusable wrapper that detects when its children enter the viewport
 * and triggers the fade-up animation. This ensures animations play
 * sequentially as the user scrolls.
 */
const FadeUpObserver = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={markdownItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px" }} // Triggers slightly before element enters visible screen
    >
      {children}
    </motion.div>
  )
}

export function ProjectMarkdown({ content }: Readonly<{ content: string }>) {
  const minutes = estimateReadingMinutes(content)

  return (
    <article className="min-w-0">
      {/* Read time - Animates immediately on page load */}
      <motion.p 
        className="mb-10 text-sm font-semibold tracking-tight text-muted-foreground/80 bg-muted/30 px-4 py-2 rounded-full w-fit border border-border/50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {minutes} min read
      </motion.p>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children, ...props }) => (
            <FadeUpObserver>
              <h2 className="mt-12 scroll-m-20 font-heading text-2xl font-bold tracking-tight text-foreground first:mt-0" {...props}>
                {children}
              </h2>
            </FadeUpObserver>
          ),
          h2: ({ children, ...props }) => (
            <FadeUpObserver>
              <h3 className="mt-10 scroll-m-20 font-heading text-xl font-bold tracking-tight text-foreground/95" {...props}>
                {children}
              </h3>
            </FadeUpObserver>
          ),
          h3: ({ children, ...props }) => (
            <FadeUpObserver>
              <h4 className="mt-8 scroll-m-20 font-heading text-lg font-semibold tracking-tight text-foreground/90" {...props}>
                {children}
              </h4>
            </FadeUpObserver>
          ),
          p: ({ children, ...props }) => (
            <FadeUpObserver>
              <p className="leading-relaxed text-foreground/90 [&:not(:first-child)]:mt-6" {...props}>
                {children}
              </p>
            </FadeUpObserver>
          ),
          // Blockquote itself animates in, but content (p) within it also might.
          // Applying FadeUpObserver directly to the blockquote handles it cleanly.
          blockquote: ({ children, ...props }) => (
            <FadeUpObserver>
              <blockquote
                className="mt-6 border-l-4 border-primary/40 bg-muted/30 py-3 pl-5 pr-3 text-muted-foreground italic rounded-r-lg"
                {...props}
              >
                {children}
              </blockquote>
            </FadeUpObserver>
          ),
          // Tables and code blocks also benefit from the fade-up observer
          table: ({ children, ...props }) => (
            <FadeUpObserver>
              <div className="my-8 w-full overflow-y-auto rounded-xl border border-border/50 bg-card/50 shadow-inner">
                <Table {...props}>{children}</Table>
              </div>
            </FadeUpObserver>
          ),
          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") {
              return null
            }

            if (src.startsWith("/")) {
              return (
                <FadeUpObserver>
                  <span className="my-10 block overflow-hidden rounded-xl border bg-muted/20 shadow-xl shadow-primary/5">
                    <Image
                      src={src}
                      alt={alt ?? ""}
                      width={1200}
                      height={675}
                      className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      priority={false} // Allow lazy loading for content images
                    />
                  </span>
                </FadeUpObserver>
              )
            }

            return (
              <FadeUpObserver>
                <img
                  src={src}
                  alt={alt ?? ""}
                  className="my-10 w-full rounded-xl border bg-muted/20 object-cover shadow-xl shadow-primary/5"
                  loading="lazy"
                />
              </FadeUpObserver>
            )
          },
          // Keep these semantic components, framer motion handles block ancestors
          thead: ({ children, ...props }) => <TableHeader {...props}>{children}</TableHeader>,
          tbody: ({ children, ...props }) => <TableBody {...props}>{children}</TableBody>,
          tr: ({ children, ...props }) => <TableRow className="border-border/50" {...props}>{children}</TableRow>,
          th: ({ children, ...props }) => <TableHead className="text-muted-foreground" {...props}>{children}</TableHead>,
          td: ({ children, ...props }) => <TableCell className="text-foreground/90" {...props}>{children}</TableCell>,
          a: ({ href, children, ...props }) => {
            const external = href?.startsWith("http")
            const baseClass = "font-medium text-primary underline-offset-4 hover:underline transition-colors"
            if (href && external) {
              return <a href={href} className={baseClass} target="_blank" rel="noreferrer noopener" {...props}>{children}</a>
            }
            if (href) {
              return <Link href={href} className={baseClass} {...props}>{children}</Link>
            }
            return <span className="font-medium text-primary" {...props}>{children}</span>
          },
          code: ({ children, className, ...props }) => {
            const isBlock = Boolean(className?.includes("language-"))
            if (isBlock) {
              return <code className={cn("font-mono text-xs sm:text-sm leading-relaxed text-card-foreground", className)} {...props}>{children}</code>
            }
            return <code className="rounded-md bg-muted px-1.5 py-0.5 text-[0.875em] font-mono text-foreground/90 border border-border/50" {...props}>{children}</code>
          },
          pre: ({ children, ...props }) => (
            <FadeUpObserver>
              <pre className="my-8 overflow-x-auto rounded-xl border border-border/50 bg-muted/20 p-5 text-sm shadow-inner" {...props}>
                {children}
              </pre>
            </FadeUpObserver>
          ),
          hr: () => (
            <FadeUpObserver>
              <hr className="my-12 border-border/50" />
            </FadeUpObserver>
          ),
          ul: ({ children, ...props }) => (
            <FadeUpObserver>
              <ul className="my-6 list-disc space-y-3 pl-6 text-foreground/90 marker:text-primary/70" {...props}>
                {children}
              </ul>
            </FadeUpObserver>
          ),
          ol: ({ children, ...props }) => (
            <FadeUpObserver>
              <ol className="my-6 list-decimal space-y-3 pl-6 text-foreground/90 marker:text-primary/70" {...props}>
                {children}
              </ol>
            </FadeUpObserver>
          ),
          li: ({ children, ...props }) => <li className="leading-relaxed" {...props}>{children}</li>,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}