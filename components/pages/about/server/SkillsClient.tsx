"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Skill } from "@/types/skill"
import { containerVariants, itemVariants } from "@/lib/animations"
import ContentContainer from "../../ContentContainer"

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
          className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2"
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
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    {/* Skill Name and Percentage Label */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-muted-foreground">
                        {skill.value}%
                      </span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                      {/* Animated Progress Bar Fill */}
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ContentContainer>
  )
}
