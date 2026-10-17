"use client"

import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import React from "react"
import SidebarNavItem, { items, NavItem, settingsItem } from "./SidebarNavItem"

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
