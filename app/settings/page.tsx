"use client"

import ContentContainer from "../../components/pages/ContentContainer"
import { Variants, motion } from "framer-motion"
import React from "react"
import { Award } from "lucide-react"

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

          {/*System Theme: content container*/}
          <motion.div
            className="flex w-full flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="group flex w-full flex-col justify-between rounded-lg border border-border bg-card p-6"
            >
              {/* Section header */}
              <h2 className={"mb-2 text-lg font-bold text-foreground"}>
                Theme
              </h2>

              {/*Flex container for each of the buttons*/}
              <div className={"flex w-full justify-between gap-4"}>
                {/*Card*/}
                <div
                  className={
                    "group flex w-full flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/50 hover:text-primary"
                  }
                >
                  {/* Decorative Icon Box */}
                  <div className="inline-flex items-center justify-center p-2.5">
                    <Award className="h-20 w-20" />
                  </div>

                  {/*Title*/}
                  <h3 className="mt-2 text-center text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                    Dark
                  </h3>
                </div>
                {/*Card*/}
                <div
                  className={
                    "group flex w-full flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/50 hover:text-primary"
                  }
                >
                  {/* Decorative Icon Box */}
                  <div className="inline-flex items-center justify-center p-2.5">
                    <Award className="h-20 w-20" />
                  </div>

                  {/*Title*/}
                  <h3 className="mt-2 text-center text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                    Dark
                  </h3>
                </div>
                {/*Card*/}
                <div
                  className={
                    "group flex w-full flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/50 hover:text-primary"
                  }
                >
                  {/* Decorative Icon Box */}
                  <div className="inline-flex items-center justify-center p-2.5">
                    <Award className="h-20 w-20" />
                  </div>

                  {/*Title*/}
                  <h3 className="mt-2 text-center text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                    Dark
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </ContentContainer>
    </>
  )
}
