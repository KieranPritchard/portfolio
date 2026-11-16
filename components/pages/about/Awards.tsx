"use client"

import Image from "next/image"
import { MotionConfig, motion } from "framer-motion"
import { Award as AwardIcon, Camera } from "lucide-react"

import awards from "@/data/awards.json"
import { containerVariants, itemVariants } from "@/lib/animations"
import type { Award } from "@/types/award"
import ContentContainer from "@/components/pages/ContentContainer"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function AwardPhoto({ award }: { award: Award }) {
  if (!award.image) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Camera className="size-8" aria-hidden />
        <span className="sr-only">No photo available for {award.title}</span>
      </div>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`View photo: ${award.title}`}
          className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-lg"
        >
          <Image
            src={award.image}
            alt={award.imageAlt ?? award.title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            style={{ objectPosition: award.objectPosition ?? "50% 50%" }}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-2">
        <DialogTitle className="sr-only">{award.title}</DialogTitle>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
          <Image
            src={award.image}
            alt={award.imageAlt ?? award.title}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function AwardCard({ award }: { award: Award }) {
  return (
    <motion.li
      variants={itemVariants}
      className="group flex flex-col gap-5 rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/50"
    >
      <div className="inline-flex items-center justify-center self-start rounded-lg bg-primary/30 p-2.5 text-primary">
        <AwardIcon className="size-5" aria-hidden />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
          {award.title}
        </h3>
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {award.awardedBy}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {award.category}
          </span>
        </div>
      </div>

      <AwardPhoto award={award} />
    </motion.li>
  )
}

export function AwardsSection() {
  return (
    <MotionConfig reducedMotion="user">
      <ContentContainer>
        <section
          id="awards"
          className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8"
        >
          <motion.div
            className="mb-16 space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              - Awards
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Recognition.
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {awards.map((award) => (
              <AwardCard key={award.title} award={award} />
            ))}
          </motion.ul>
        </section>
      </ContentContainer>
    </MotionConfig>
  )
}
