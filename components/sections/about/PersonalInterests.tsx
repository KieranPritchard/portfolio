"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * PersonalInterests Component
 *
 * Showcases non-professional hobbies, music tastes, and media interests.
 * Uses a two-column grid layout with category-specific tags and lists.
 *
 * @param className - Optional CSS class name for the section container.
 */
export default function PersonalInterests({
  className,
}: Readonly<{ className?: string }>) {
  /**
   * List of favorite music artists and bands.
   */
  const musicList: string[] = [
    "Bring Me The Horizon",
    "Bad Omens",
    "Bilmuri",
    "Marilyn Manson",
    "Sleep Token",
    "Linkin Park",
    "Evanescence",
    "Depeche Mode",
    "Panic! at the Disco",
    "Fall Out Boy",
    "My Chemical Romance",
    "Paramore",
    "Halsey",
    "Spiritbox",
    "Poppy",
    "Nine Inch Nails",
    "The Cure",
  ]

  /**
   * List of favorite TV shows and media franchises.
   */
  const mediaList: string[] = [
    "Doctor Who",
    "Peaky Blinders",
    "Stranger Things",
    "Assassins Creed",
    "The Last of Us",
    "Dexter",
    "American Horror Story",
    "Futurama",
    "Helluva Boss",
    "Pokémon",
    "South Park",
  ]

  /**
   * Staggered entrance variants for the interests grid.
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  /**
   * Fade-in and slide-up variants for individual interest sections.
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
    <section
      className={cn(
        "mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8",
        className
      )}
    >
      {/* Section Header */}
      <motion.div
        className="mb-16 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-xs tracking-widest text-primary uppercase">
          - Interests
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Beyond the code.
        </h2>
        <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
      </motion.div>

      {/* Content Grid: Soundtrack and Hobbies */}
      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Soundtrack Section: Music tastes and physical media */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <h3 className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
            The Soundtrack
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Music is my primary fuel for focus. My rotation leans heavily into
            alternative, industrial, and hard-rock.
          </p>
          <div className="flex flex-wrap gap-2">
            {musicList.map((artist: string) => (
              <span
                key={artist}
                className="rounded border border-primary/20 px-2 py-1 font-mono text-[10px] text-primary/80 transition-colors hover:bg-primary/5"
              >
                {artist}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground">
              Fandoms I am part of
            </h4>
            <div className="flex flex-wrap gap-2">
              {mediaList.map((show: string) => (
                <span
                  key={show}
                  className="rounded bg-muted px-2 py-1 text-[10px] font-medium text-foreground transition-colors hover:bg-muted/80"
                >
                  {show}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hobbies Section: TV, Gaming, and other activities */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <h3 className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
            Hobbies & Media
          </h3>

          <div className="border-t border-border/50 pt-4">
            <h4 className="mb-2 text-sm font-bold text-foreground">
              Physical Media Collector
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A collector of physical media, I value high-fidelity audio and
              tangible media ownership.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-border/50 pt-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground">Creative</h4>
              <p className="text-xs text-muted-foreground">
                Photography & building Lego
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground">Active</h4>
              <p className="text-xs text-muted-foreground">
                Gaming & hardware tinkering
              </p>
            </div>
            <div className="col-span-2 space-y-1">
              <h4 className="text-sm font-bold text-foreground">Technical</h4>
              <p className="text-xs text-muted-foreground">
                Side projects & security
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
