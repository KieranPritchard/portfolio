"use client"

import { motion } from "framer-motion"
import React from "react"
import { Switch } from "@/components/ui/switch"
import { useMotionPreference } from "@/components/providers/MotionProvider"
import { containerVariants, itemVariants } from "@/lib/animations"

export default function Miscellaneous(): React.JSX.Element {
  // Brings in the global animation state and its toggle from the motion provider
  const { isAnimationEnabled, toggleAnimation } = useMotionPreference()

  // Reduce Motion is the inverse of animations being enabled
  const reduceMotion: boolean = !isAnimationEnabled

  return (
    /*Miscellaneous: content container*/
    <motion.div
      className="flex w-full flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={itemVariants}
        className="flex w-full flex-col justify-between rounded-lg border border-border bg-card p-4 sm:p-6"
      >
        {/* Section header */}
        <h2 className={"mb-4 text-lg font-bold text-foreground"}>
          Miscellaneous
        </h2>

        {/*Flex container for each of the toggles*/}
        <div className={"flex w-full flex-col gap-4"}>
          {/*Row*/}
          <div className="flex w-full items-center justify-between gap-4">
            {/*Label and description*/}
            <label
              htmlFor="reduceMotion"
              className="flex min-w-0 cursor-pointer flex-col"
            >
              <span className="text-sm font-medium text-foreground sm:text-base">
                Reduce Motion
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">
                Slows down the animations and transitions that are displayed
              </span>
            </label>

            {/*Toggle*/}
            <Switch
              id="reduceMotion"
              checked={reduceMotion}
              onCheckedChange={toggleAnimation}
              className="shrink-0"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
