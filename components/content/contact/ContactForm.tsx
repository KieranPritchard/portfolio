"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { CheckCircle2, Copy } from "lucide-react"

export default function ContactForm({ toEmail }: Readonly<{ toEmail: string }>) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [manualBody, setManualBody] = useState<string | null>(null)

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border/50 bg-card p-6 md:p-8 shadow-xl shadow-primary/5"
    >
      <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
        Copy message to clipboard
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form and I’ll format your message for you. Paste it into an email to{" "}
        <span className="font-medium text-primary">{toEmail}</span>.
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          setIsSubmitting(true)
          setStatus(null)
          setManualBody(null)

          const body = [
            `To: ${toEmail}`,
            `Name: ${name || "-"}`,
            `Email: ${email || "-"}`,
            "",
            message || "-",
          ].join("\n")

          const finish = () => {
            setIsSubmitting(false)
          }

          if (typeof navigator !== "undefined" && "clipboard" in navigator) {
            navigator.clipboard
              .writeText(body)
              .then(() => {
                setStatus("Copied! Paste the message into your email client.")
              })
              .catch(() => {
                setStatus("Copy failed. You can still copy the message manually below.")
                setManualBody(body)
              })
              .finally(() => {
                finish()
              })

            return
          }

          setStatus("Clipboard unavailable. Copy the message from the box below.")
          setManualBody(body)
          finish()
        }}
      >
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground/80" htmlFor="contact-name">
            Name
          </label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            required
            className="rounded-xl border-border/50 bg-muted/20 focus-visible:ring-primary/20"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground/80" htmlFor="contact-email">
            Email
          </label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
            className="rounded-xl border-border/50 bg-muted/20 focus-visible:ring-primary/20"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground/80" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            required
            rows={7}
            className="min-h-45 w-full resize-none rounded-2xl border border-border/50 bg-muted/20 px-3 py-2 text-base outline-none transition-all focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 placeholder:text-muted-foreground"
          />
        </div>

        <div className="pt-2">
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full rounded-xl font-bold py-6 group transition-all"
          >
            {isSubmitting ? (
              <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex items-center gap-2"
              >
                Formatting...
              </motion.span>
            ) : (
              <span className="flex items-center gap-2">
                <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Copy message
              </span>
            )}
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {status && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: 10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 flex items-center gap-2 text-sm text-primary font-medium"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="h-4 w-4" />
            {status}
          </motion.div>
        )}

        {manualBody && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Manual copy</p>
            <textarea
              value={manualBody}
              readOnly
              rows={6}
              className="w-full resize-none rounded-xl border-none bg-background/50 px-3 py-2 text-sm outline-none font-mono"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}