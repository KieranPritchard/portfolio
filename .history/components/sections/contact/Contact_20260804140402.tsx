"use client"

import { Mail, MapPin, Clock } from "lucide-react"
import { IconBrandLinkedin, IconBrandGithub, IconBrandDiscord, IconBrandX } from "@tabler/icons-react"
import ContactForm from "@/components/sections/contact/ContactForm"

/**
 * Contact Component
 * 
 * The main page component for the Contact section.
 * Features a structured layout with contact information (email, location, response time),
 * social media links, and a functional message form.
 */
export default function Contact() {
  /** The primary contact email address. */
  const toEmail = "KieranPritchard06@gmail.com"

  return (
    <section>
      {/* Header Section: Branded heading and introductory summary */}
      <div className="mb-12 space-y-4">
        <p className="text-[10px] font-mono uppercase tracking-widest text-primary">— CONTACT</p>
        <h2 className="text-5xl font-bold tracking-tight">Get in touch.</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          Placements, CTF invites, collaborations, or just a hello — I reply to everything reasonable. Usually within a day.
        </p>
      </div>

      {/* Main Layout Grid: Sidebar for information and main area for the form */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
        {/* Sidebar Column: Contact Metadata & Social Links */}
        <div className="space-y-8">
          <div className="rounded-2xl border bg-muted/20 border-border overflow-hidden">
            {/* Info Items: Email, Location, and Availability */}
            <div className="divide-y divide-border">
              {[
                { icon: Mail, label: "EMAIL", value: toEmail, href: `mailto:${toEmail}` },
                { icon: MapPin, label: "BASED IN", value: "Bournemouth, England" },
                { icon: Clock, label: "RESPONSE TIME", value: "Usually < 24h" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6">
                  <div className="p-2 rounded-lg bg-muted/30 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/70">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links Matrix: Easy-access buttons for profile navigation */}
            <div className="grid grid-cols-2 gap-px bg-muted/20 border-t border-border">
              {[
                { icon: Mail, label: "Email", href: `mailto:${toEmail}` },
                { icon: IconBrandGithub, label: "GitHub", href: "https://github.com/KieranPritchard" },
                { icon: IconBrandLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kieran-pritchard/" },
                { icon: IconBrandX, label: "X", href: "https://x.com/OverF10w_0x" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-4 hover:bg-primary/10 transition-colors"
                >
                  <item.icon className="size-4 text-primary" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Column: Contact Form Integration */}
        <ContactForm toEmail={toEmail} />
      </div>
    </section>
  )
}