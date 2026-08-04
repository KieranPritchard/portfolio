"use client"

import { motion, Variants } from "framer-motion"
import { Mail, MapPin, Clock } from "lucide-react"
import { IconBrandLinkedin, IconBrandGithub, IconBrandX } from "@tabler/icons-react"
import ContactForm from "@/components/sections/contact/ContactForm"
import { cn } from "@/lib/utils"

export default function Contact({ className }: Readonly<{ className?: string }>) {
  const toEmail = "KieranPritchard06@gmail.com"

  /**
   * Animation variants matching your Intro, About, and WhatIDo section entries.
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  // All icons here are now guaranteed to be pure React Components
  const socialLinks = [
    { icon: Mail, label: "Email", href: `mailto:${toEmail}` },
    { icon: IconBrandGithub, label: "GitHub", href: "https://github.com/KieranPritchard" },
    { icon: IconBrandLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kieran-pritchard/" },
    { icon: IconBrandX, label: "X", href: "https://x.com/OverF10w_0x" },
  ]

  const contactDetails = [
    { icon: Mail, label: "EMAIL", value: toEmail, href: `mailto:${toEmail}` },
    { icon: MapPin, label: "BASED IN", value: "Bournemouth, England" },
    { icon: Clock, label: "RESPONSE TIME", value: "Usually < 24h" },
  ]

  return (
    <section
      id="contact-home"
      className={cn(
        "mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8 overflow-hidden",
        className
      )}
    >
      {/* Section Header */}
      <motion.div
        className="mb-12 space-y-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs text-primary font-mono">— CONTACT</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          Get in touch.
        </h2>
        <motion.div
          className="h-1 bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <p className="pt-2 max-w-2xl text-md leading-relaxed text-muted-foreground md:text-lg">
          Placements, CTF invites, collaborations, or just a hello — I reply to everything reasonable. Usually within a day.
        </p>
      </motion.div>

      {/* Main Grid Layout */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Sidebar Column */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <div className="rounded-2xl border bg-muted/20 border-border/50 overflow-hidden shadow-sm">
            {/* Metadata Rows */}
            <div className="divide-y divide-border/50">
              {contactDetails.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div key={idx} className="flex items-center gap-4 p-6">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                      <IconComponent className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-foreground hover:text-primary transition-colors truncate block text-sm sm:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground text-sm sm:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Links Matrix */}
            <div className="grid grid-cols-2 gap-px bg-border/50 border-t border-border/50">
              {socialLinks.map((item, i) => {
                const IconComponent = item.icon
                const isExternal = item.href.startsWith("http")

                return (
                  <a
                    key={i}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-4 bg-background/50 hover:bg-primary/10 transition-colors group"
                  >
                    <IconComponent className="size-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div variants={itemVariants}>
          <ContactForm toEmail={toEmail} />
        </motion.div>
      </motion.div>
    </section>
  )
}