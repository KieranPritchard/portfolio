"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import React from "react"
import Image from "next/image"
import ContentContainer from "../ContentContainer"

// Resources
import profilePic from "../../../public/kieran-pritchard.jpg"

/**
 * Metadata displayed as a list of labels and values on the About page.
 */
const METADATA: { label: string; value: string }[] = [
  { label: "Name", value: "Kieran Pritchard" },
  { label: "Role", value: "Ethical hacker & developer" },
  { label: "Location", value: "Bournemouth, England" },
  { label: "Studying", value: "T-Level Digital Software Development" },
  { label: "Institution", value: "Bournemouth & Poole College" },
  { label: "Email", value: "KieranPritchard06@gmail.com" },
]

/**
 * AboutMe Component
 *
 * The main biographical section of the About page. It features a profile image,
 * a metadata list, and a detailed narrative about the user's background and goals.
 *
 * @param className - Optional CSS class name for the section container.
 */
export default function AboutMe({
  className,
}: Readonly<{ className?: string }>): React.JSX.Element {
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
    <ContentContainer>
      <section
        id="about"
        className={cn(
          "mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-16 px-4 py-20 md:px-6 lg:grid-cols-[450px_1fr] lg:px-8",
          className
        )}
      >
        {/* Profile Image Section */}
        <motion.div
          className="relative aspect-4/5 w-full max-w-md overflow-hidden rounded-xl bg-muted"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={profilePic}
            alt="Kieran Pritchard"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Content Section: Metadata and Narrative */}
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Metadata List: Key-value pairs for quick information */}
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            {METADATA.map((item: { label: string; value: string }) => (
              <div key={item.label} className="grid grid-cols-[120px_1fr] gap-4">
                <span className="pt-0.5 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  {item.label}
                </span>
                <span className="text-sm text-foreground transition-all duration-300 hover:text-primary">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          <Separator className="bg-border/50" />

          {/* Narrative Section: Title and Detailed Biography */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                - About
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Learning by breaking things.
              </h2>
              {/* Decorative primary color underline */}
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I am a Digital Software Development T Level student at Bournemouth &
                Poole College, focused on ethical hacking and secure software. I build
                security tools in Go, Python and C, and full-stack web apps with React,
                Next.js and TypeScript, which lets me approach security from both the
                attacker’s and the developer’s side. I write up the CTF challenges I
                complete on my blog, serve as a Student Representative, and learned to
                explain technical problems clearly and stay calm under pressure in 1st
                line desktop support. I am now looking for a similar IT support role
                where I can build the hands-on experience that will give me a strong
                foundation for a career in cybersecurity.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ContentContainer>
  )
}
