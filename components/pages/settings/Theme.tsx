"use client"

import { Variants, motion } from "framer-motion"
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useSyncExternalStore,
} from "react"
import { Sun, Moon, Monitor, LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

/**
 * The theme values the buttons can select.
 */
type ThemeValue = "light" | "dark" | "system"

/**
 * Shape of a single theme option button.
 */
type ThemeOption = {
  label: string
  value: ThemeValue
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

/**
 * Configuration for the theme option buttons.
 */
const themeOptions: ThemeOption[] = [
  { label: "Light", value: "light", icon: Sun },
  { label: "Dark", value: "dark", icon: Moon },
  { label: "Auto", value: "system", icon: Monitor },
]

export default function Theme(): React.JSX.Element {
  const { theme, setTheme } = useTheme()

  // Returns false on the server and during hydration, then true on the client,
  // so the active state is only applied once the real theme is known
  const mounted: boolean = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

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

  // The currently selected theme, only available once mounted to avoid a hydration mismatch
  const activeTheme: string | undefined = mounted ? theme : undefined

  /**
   * Handles a theme button being clicked.
   *
   * @param value - The theme that was selected.
   */
  const handleThemeChange = (value: ThemeValue): void => {
    setTheme(value)
  }

  return (
    /*System Theme: content container*/
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
        <h2 className={"mb-2 text-lg font-bold text-foreground"}>Theme</h2>

        {/*Flex container for each of the buttons*/}
        <div className={"flex w-full justify-between gap-2 sm:gap-4"}>
          {themeOptions.map((option: ThemeOption) => {
            // Checks if this option is the selected theme
            const isActive: boolean = activeTheme === option.value

            return (
              /*Card*/
              <button
                key={option.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleThemeChange(option.value)}
                className={cn(
                  "group/option flex w-full min-w-0 cursor-pointer flex-col items-center justify-between rounded-lg border bg-card p-3 transition-colors duration-200 hover:border-primary/50 hover:text-primary sm:p-4 lg:p-6",
                  isActive
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border"
                )}
              >
                {/* Decorative Icon Box */}
                <div className="inline-flex w-full items-center justify-center p-1 sm:p-2.5">
                  <option.icon className="h-10 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20" />
                </div>

                {/*Title*/}
                <h3
                  className={cn(
                    "mt-2 text-center text-base font-bold transition-colors duration-200 group-hover/option:text-primary sm:text-xl lg:text-2xl",
                    isActive ? "text-primary" : "text-foreground"
                  )}
                >
                  {option.label}
                </h3>
              </button>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}
