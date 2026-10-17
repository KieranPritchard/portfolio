"use client"

import Link from "next/link"
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
  Settings,
  LucideProps,
} from "lucide-react"
import { cn } from "@/lib/utils"
import React, { ForwardRefExoticComponent, RefAttributes } from "react"

/**
 * Shape of a single sidebar navigation item.
 */
type NavItem = {
  title: string
  url: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

/**
 * Configuration for the main sidebar navigation items.
 */
const items: NavItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Projects", url: "/projects", icon: Toolbox },
  { title: "Blog", url: "/blog", icon: NotebookPen },
  { title: "Contact", url: "/contact", icon: Mail },
]

/**
 * Configuration for the settings item, pinned to the sidebar footer.
 */
const settingsItem: NavItem = {
  title: "Settings",
  url: "/settings",
  icon: Settings,
}

/**
 * SidebarNavItem Component
 *
 * A single navigation button with the active indicator bar, accent colours
 * and scale-transition hover effect. Used for both the main navigation and
 * the footer so every button looks and behaves identically.
 *
 * @param item - The navigation item to render.
 * @param pathname - The current route, used to work out the active state.
 */
function SidebarNavItem({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}): React.JSX.Element {
  // Checks if the current page is active
  const isActive: boolean = pathname === item.url

  return (
    <SidebarMenuItem className="relative">
      {/* Active Indicator Bar: A vertical bar showing the active route */}
      {isActive && (
        <div className="absolute top-1/2 -left-1 h-8 w-1 -translate-y-1/2 rounded-full bg-primary" />
      )}

      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={cn(
          "group rounded-md transition-all duration-300",
          isActive ? "bg-primary/15! text-primary" : "hover:bg-muted"
        )}
      >
        <Link href={item.url} className="flex items-center gap-3 px-3 py-6">
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
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

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
              {items.map((item: NavItem) => (
                <SidebarNavItem
                  key={item.title}
                  item={item}
                  pathname={pathname}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer Section: Link to the settings page */}
      {/* Footer Section: Link to the settings page */}
      <SidebarFooter className="my-2 p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarNavItem item={settingsItem} pathname={pathname} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
