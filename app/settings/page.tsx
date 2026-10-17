"use client"

import ContentContainer from "../../components/pages/ContentContainer"
import { Variants, motion } from "framer-motion"
import React from "react"
import Theme from "../../components/pages/settings/Theme"

export default function Page() {
  /**
   * Staggered entrance variants for the content column.
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  /**
   * Fade-in and slide-up variants for individual items.
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
    <>
      <ContentContainer>
        <section
          id="settings"
          className={
            "mx-auto flex w-full max-w-7xl flex-col items-start gap-16 px-4 py-20 md:px-6 lg:px-8"
          }
        >
          {/*Page Header: content flexbox*/}
          <motion.div
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header for settings page */}
            <motion.div className={"space-y-6"} variants={itemVariants}>
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-widest text-primary uppercase">
                  - Settings
                </span>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Settings Page
                </h1>
                {/* Decorative primary color underline */}
                <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              </div>
            </motion.div>
          </motion.div>

          {/* Component for the theme switcher */}
          <Theme />
        </section>
      </ContentContainer>
    </>
  )
}
