"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiGithub, SiX } from "@icons-pack/react-simple-icons"
import { IconBrandLinkedin } from "@tabler/icons-react"

export default function BlogPageWhoAmI() {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
        <Avatar className="h-20 w-20 shrink-0 border-2 border-border">
          <AvatarImage src="/kieran-pritchard.jpg" alt="Kieran Pritchard" />
          <AvatarFallback>KP</AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            - About the author
          </p>
          <h2 className="mt-1 text-xl font-bold tracking-tight">
            Hi, I’m Kieran.
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            I’m a digital software development student focused on ethical
            hacking and secure system architecture. Here I share thoughts,
            lessons, and practical notes from exploring software development,
            cybersecurity, and the technology I build along the way.
          </p>

          <div className="mt-3 flex gap-1">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-primary"
            >
              <a
                href="https://github.com/KieranPritchard"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <SiGithub className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-primary"
            >
              <a
                href="https://x.com/OverF10w_0x"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit X profile"
              >
                <SiX className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-primary"
            >
              <a
                href="https://www.linkedin.com/in/kieran-pritchard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <IconBrandLinkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
