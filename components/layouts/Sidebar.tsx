"use client"

import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  Home,
  Toolbox,
  User,
  NotebookPen,
  Mail,
  LucideProps,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/main/ModeToggle"
import { AnimationToggle } from "@/components/main/AnimationToggle"
import React, { ForwardRefExoticComponent, RefAttributes } from "react"

/**
 * Configuration for sidebar navigation items.
 */
const items: {
  title: string
  url: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Projects", url: "/projects", icon: Toolbox },
  { title: "Blog", url: "/blog", icon: NotebookPen },
  { title: "Contact", url: "/contact", icon: Mail },
]

/**
 * PortfolioSidebar Component
 *
 * Provides the main navigation for the portfolio. Features dynamic active-state
 * styling to provide navigational context, consistent with the primary accent
 * and scale-transition design language.
 *
 * @param className - Optional CSS class name for the sidebar container.
 */
export function PortfolioSidebar({
  className,
}: {
  className?: string
}): React.JSX.Element {
  // Brings in the use pathname hook for use
  const pathname: string = usePathname()

  return (
    <Sidebar variant="floating" className={cn(className)}>
      {/* Brand Section: Displays name and a decorative accent */}
      <SidebarHeader className="p-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Kieran Pritchard
          </span>
          <div className="h-1 w-8 rounded-full bg-primary" />
        </div>
      </SidebarHeader>

      {/* Navigation Section: Maps through the items to create link buttons */}
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {items.map(
                (item: {
                  title: string
                  url: string
                  icon: ForwardRefExoticComponent<
                    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
                  >
                }) => {
                  // Checks if the current page is active
                  const isActive: boolean = pathname === item.url

                  return (
                    <SidebarMenuItem key={item.title} className="relative">
                      {/* Active Indicator Bar: A vertical bar showing the active route */}
                      {isActive && (
                        <div className="absolute top-1/2 -left-1 h-8 w-1 -translate-y-1/2 rounded-full bg-primary" />
                      )}

                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={cn(
                          "group rounded-md transition-all duration-300",
                          isActive
                            ? "bg-primary/15! text-primary"
                            : "hover:bg-muted"
                        )}
                      >
                        <a
                          href={item.url}
                          className="flex items-center gap-3 px-3 py-6"
                        >
                          <item.icon
                            className={cn(
                              "size-5 transition-transform duration-300 group-hover:scale-110",
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground group-hover:text-primary"
                            )}
                          />

                          <span
                            className={cn(
                              "font-medium tracking-tight",
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground group-hover:text-foreground"
                            )}
                          >
                            {item.title}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                }
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer Section: Contains theme and animation toggles */}
      <SidebarFooter className="my-2 p-2">
        <div className="flex w-full items-center justify-center gap-2">
          <ModeToggle />
          <AnimationToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
