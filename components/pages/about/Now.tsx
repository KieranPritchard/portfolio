"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Rocket, BookOpen, Coffee, Calendar } from "lucide-react"
import React from "react"

/**
 * NowSection Component
 *
 * Inspired by the "Now" page movement, this component provides a snapshot of
 * current focus areas, learning goals, and personal balance.
 *
 * @param className - Optional CSS class name for the section container.
 */
export default function NowSection({
  className,
}: Readonly<{ className?: string }>): React.JSX.Element {
  /**
   * Date of the last update for this section.
   */
  const lastUpdated = "April 2026"

  /**
   * Focus areas with titles, icons, and descriptions.
   */
  const sections = [
    {
      title: "Current Projects",
      icon: Rocket,
      description:
        "Deep-diving into Golang and refining automation workflows using Python. Currently iterating on this portfolio to improve its performance and accessibility.",
    },
    {
      title: "Learning & Growth",
      icon: BookOpen,
      description:
        "Studying for upcoming exams and practical assessments. On the side, I'm exploring Python to create automation scripts for my ethical hacking hobby.",
    },
    {
      title: "Life & Balance",
      icon: Coffee,
      description:
        "Making more time for touching grass on the weekends and working through my backlog of novels. Currently reading: Angels & Demons.",
    },
  ]

  /**
   * Animation variants for the grid container to stagger child items.
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  /**
   * Animation variants for individual focus area items.
   */
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <section
      className={cn(
        "mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8",
        className
      )}
    >
      {/* Section Header: Title and Last Updated Status */}
      <motion.div
        className="mb-16 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              - Now
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I&apos;m doing now.
            </h2>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-full bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
        <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
      </motion.div>

      {/* Content Grid: Staggered entry for focus area pages */}
      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {sections.map((item) => (
          <motion.div
            key={item.title}
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {item.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
