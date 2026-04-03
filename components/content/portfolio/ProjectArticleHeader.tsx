"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { ProjectSummary } from "@/types/project"
import { cn } from "@/lib/utils"

function formatArticleDate(iso: string) {
  const parsed = new Date(iso)
  if (Number.isNaN(parsed.getTime())) {
    return iso
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed)
}

export function ProjectArticleHeader({
  project,
  className,
}: Readonly<{ project: ProjectSummary; className?: string }>) {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
    })
  }

  return (
    <header className={cn("space-y-8", className)}>
      <div className="space-y-6 pb-10 relative">
        <div className="space-y-4">
          {/* Metadata Row */}
          <motion.div 
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <time dateTime={project.date}>{formatArticleDate(project.date)}</time>
            <span aria-hidden className="text-border">
              ·
            </span>
            <Badge variant="secondary" className="capitalize px-3 py-0.5">
              {project.category}
            </Badge>
          </motion.div>

          {/* Project Title */}
          <motion.h1 
            className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-2 pt-2"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="bg-background/50 hover:border-primary/50 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>
        </div>

        {/* Decorative Animated Border */}
        <motion.div 
          className="absolute bottom-0 left-0 h-px bg-border w-full"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </div>

      {/* Cover Image with subtle zoom-out entrance */}
      {project.coverImage ? (
        <motion.figure 
          className="overflow-hidden rounded-2xl border bg-muted/30 shadow-2xl shadow-primary/5"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "circOut" }}
        >
          <div className="relative aspect-[21/9] w-full sm:aspect-[2.4/1]">
            <Image
              src={project.coverImage}
              alt={project.coverAlt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
            />
          </div>
        </motion.figure>
      ) : null}
    </header>
  )
}