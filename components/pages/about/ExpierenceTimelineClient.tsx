"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { staggeredContainerVariants, timelineItemVariants } from "@/lib/animations"
import type { Experience } from "@/types/experience"
import ContentContainer from "../ContentContainer"

/**
 * ExperienceTimeline Component
 *
 * Renders a vertical timeline of professional and educational experience.
 * Features staggered entrance animations and a clean grid layout.
 *
 * @param className - Optional CSS class name for the section container.
 */
export default function ExperienceTimelineClient({
  experience,
  className,
}: Readonly<{ experience: Experience[]; className?: string }>) {
  return (
    <ContentContainer>
      <section
        className={cn(
          "mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8",
          className
        )}
      >
        {/* Section Header */}
        <motion.div
          className="mb-16 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            - Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve been.
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        {/* Timeline List: Mapped from experienceData */}
        <motion.div
          className="flex flex-col gap-12"
          variants={staggeredContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map(
            (
              item: Experience,
              index: number
            ) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 gap-4 border-b border-border/50 md:grid-cols-[200px_1fr]"
                variants={timelineItemVariants}
              >
                {/* Date Column */}
                <div className="pt-1 font-mono text-sm text-muted-foreground">
                  {item.date}
                </div>

                {/* Content Column */}
                <div className="space-y-3 pb-8">
                  <span className="text-xs font-bold tracking-wider text-primary uppercase">
                    {item.organization}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {item.details.map((detail: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex gap-2">
                        <span className="text-primary">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </section>
    </ContentContainer>
  )
}
