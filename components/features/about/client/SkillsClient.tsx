"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Skill } from "@/types/skill"
import { containerVariants, itemVariants } from "@/lib/animations"
import ContentContainer from "@/components/layouts/ContentContainer"

/**
 * Skills Component
 *
 * Renders a set of progress bars grouped by skill categories.
 * Features staggered entrance for categories and animated fill for progress bars.
 *
 * @param className - Optional CSS class name for the section container.
 */
export default function SkillsClient({
  skills,
  className,
}: Readonly<{ skills: Skill[]; className?: string }>): React.JSX.Element {
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
            - Skills
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Calibration.
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        {/* Skills Content: Grid of categories with animated progress bars */}
        <motion.div
          className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] text-foreground/80 uppercase transition-colors duration-200 hover:border-muted-foreground/40 hover:bg-muted"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ContentContainer>
  )
}
