"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"
import ContactForm from "@/components/content/contact/ContactForm"
import { cn } from "@/lib/utils"

export default function Contact({ className }: Readonly<{ className?: string }>) {
  const toEmail = "KieranPritchard06@gmail.com"
  const phoneNumber = "+44 07763 534145"
  const linkedinUrl = "https://www.linkedin.com/in/kieran-pritchard/"
  const xUrl = "https://x.com/OverF10w_0x"

  // Parent container variant for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  // Individual item entrance variants
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  }

  // Variants for the interactive contact links block
  const contactBlockVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { delay: 0.5, duration: 0.6, ease: "circOut" } 
    },
  }

  return (
    <section 
      id="contact" 
      className={cn("mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 overflow-hidden", className)}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        {/* Contact Information Column */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section */}
          <motion.div className="space-y-2" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Contact
            </h2>
            <motion.div 
              className="h-1 bg-primary rounded-full" 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          {/* Intro Text */}
          <motion.p 
            className="text-lg leading-relaxed text-muted-foreground md:max-w-lg"
            variants={itemVariants}
          >
            Have a project in mind or want to chat about collaboration? Send a
            message and I’ll get back to you.
          </motion.p>

          {/* Contact Links Block with interaction animations */}
          <motion.div 
            className="space-y-6 rounded-2xl border border-border/50 bg-muted/20 p-6 shadow-2xl shadow-primary/5 transition-all duration-300 hover:border-primary/40 hover:bg-muted/50"
            variants={contactBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            {/* Email */}
            <div className="flex items-start gap-4 group">
              <Mail className="mt-1 size-5 text-primary group-hover:animate-pulse" aria-hidden />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                <a 
                  className="font-medium text-primary hover:underline underline-offset-2 break-all" 
                  href={`mailto:${toEmail}`}
                >
                  {toEmail}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <Phone className="mt-1 size-5 text-primary group-hover:rotate-12 transition-transform" aria-hidden />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</p>
                <a 
                  className="font-medium text-primary hover:underline underline-offset-2" 
                  href={`tel:${phoneNumber}`}
                >
                  {phoneNumber}
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 group">
              <IconBrandLinkedin className="mt-1 size-5 text-primary group-hover:scale-110 transition-transform" aria-hidden />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                <a 
                  className="font-medium text-primary hover:underline underline-offset-2" 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            </div>

            {/* X (Twitter) */}
            <div className="flex items-start gap-4 group">
              <IconBrandX className="mt-1 size-5 text-primary group-hover:rotate-12 transition-transform" aria-hidden />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">X / Twitter</p>
                <a 
                  className="font-medium text-primary hover:underline underline-offset-2 break-all" 
                  href={xUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Follow @kieranpritchard
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          <ContactForm toEmail={toEmail} />
        </motion.div>
      </div>
    </section>
  )
}