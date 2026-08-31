"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { DownloadButton } from "@/components/Buttons/DownloadButton"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"
import { ProjectSummary } from "@/types/project"

/**
 * Intro Component
 *
 * The hero section of the home page. It introduces the user with a title, bio,
 * call-to-action buttons, and a profile image.
 *
 * @param className - Optional CSS class name for the section container.
 * @param projects - An array of project summaries to display the project count.
 */
export default function Intro({
  className,
  projects,
}: Readonly<{ className?: string; projects: ProjectSummary[] }>) {
  /**
   * Staggered entrance variants for the text container and its children.
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  /**
   * Animation variants for individual items within the intro section.
   */
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section
      className={cn(
        "relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-4 md:px-8 lg:px-12",
        className
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 sm:py-12 md:grid-cols-2">
        {/* Content Section: Title, Bio, and Buttons */}
        <motion.div
          className="order-2 flex min-w-0 flex-col gap-6 md:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-3" variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Ethical hacker & <span className="text-primary">software</span>{" "}
              developer.
            </h1>
            <motion.div
              className="h-1.5 w-20 rounded-full bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>

          <motion.p
            className="text-md max-w-150 leading-relaxed text-muted-foreground md:text-lg"
            variants={itemVariants}
          >
            I&apos;m <strong className="text-foreground">Kieran</strong> a
            Digital Software Developement student at
            <strong className="text-foreground">
              {" "}
              Bournemouth & Poole College
            </strong>
            , focused on offensive security, automation, and well built
            software. I build things that are robust because I know how they
            break
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={itemVariants}
          >
            <LinkButton text="Learn More" link="/projects" />
            <DownloadButton
              text="Download C.V"
              link="/kieran_pritchard_cv.pdf"
              fileName="kieran_pritchard_cv.pdf"
              kind="secondary"
            />
          </motion.div>

          {/* Stats/Info Grid */}
          <motion.div
            className="flex flex-wrap items-center justify-between gap-4 text-sm"
            variants={itemVariants}
          >
            <motion.p className="flex-row font-mono">
              <strong className="text-foreground">{projects.length}+</strong>
              <br />
              Shipped Projects
            </motion.p>
            <motion.p>
              <strong className="text-foreground">T Level</strong>
              <br />
              Year 1 - BPC
            </motion.p>
            <motion.p>
              <strong>20</strong>
              <br />
              Years Old
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="relative order-1 flex justify-center md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "circOut" }}
        >
          <div className="relative aspect-square w-full max-w-100 sm:max-w-125">
            <img
              src="kieran-pritchard.jpg"
              alt="Kieran Pritchard"
              className="h-full w-full rounded-full object-cover ring-8 ring-muted/20 transition-all duration-500 hover:ring-primary/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
