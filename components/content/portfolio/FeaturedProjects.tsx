"use client"

import { cn } from "@/lib/utils"
import type { ProjectSummary } from "@/types/project"
import { ArrowRight, Code, Shield, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Import Next.js Image component
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { LinkButton } from "@/components/Buttons/LinkButton"

/**
 * FeaturedProjectsList Component
 * Renders four projects in a vertical list format.
 * Reveals the coverImage with a subtle animation when the card is hovered.
 */
export default function FeaturedProjectsList({ className, projects }: { className?: string; projects: ProjectSummary[] }) {
  const featured = projects.slice(0, 4)

  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 md:px-6", className)}>
      <div className="mb-12 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Selected Projects</h2>
        <div className="h-1 w-20 rounded-full bg-primary" />
      </div>

      <div className="flex flex-col gap-6">
        {featured.map((project) => (
          <Card
            key={project.slug}
            /* added "group" class here to trigger child hover effects */
            className="group overflow-hidden border-border/50 bg-card/40 transition-all duration-300 hover:border-primary/30 hover:bg-card"
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                
                {/* Visual Accent/Icon Sidebar OR Cover Image on Hover */}
                <div className="relative flex items-center justify-center bg-muted/30 p-6 md:w-36 md:border-r border-border/50 overflow-hidden">
                  
                  {/* Default State: Icon */}
                  <div className="rounded-full bg-background p-3 shadow-sm text-primary transition-opacity duration-300 group-hover:opacity-0">
                    {project.category === "security" && <Shield className="h-7 w-7" />}
                    {project.category === "web" && <Code className="h-7 w-7" />}
                    {project.category === "automation" && <Zap className="h-7 w-7" />}
                  </div>

                  {/* Hover State: Image. Using group-hover:opacity-100 */}
                  {project.coverImage && (
                    <div className="absolute inset-0 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                      <Image 
                        src={project.coverImage} 
                        alt={project.coverAlt || `Cover image for ${project.title}`}
                        fill
                        className="object-cover"
                        // Optional: sizes for responsive optimization
                        sizes="(max-width: 768px) 100vw, 144px" 
                      />
                    </div>
                  )}
                </div>

                {/* Main Content Area */}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground italic">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/portfolio/${project.slug}`} className="group/title inline-block">
                    <h3 className="text-2xl font-bold transition-colors group-hover/title:text-primary">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:max-w-2xl">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      Read full case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                    <span className="hidden h-4 w-px bg-border md:block" />

                    <div className="flex gap-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Source code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <LinkButton
          text="Browse Full Portfolio"
          link="/portfolio"
          kind="outline"
          className="px-8"
        />
      </div>
    </section>
  )
}