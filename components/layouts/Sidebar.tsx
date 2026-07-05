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
    SidebarFooter
} from "@/components/ui/sidebar"
import { Home, Toolbox, User, NotebookPen, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/main-components/ModeToggle"
import { AnimationToggle } from "@/components/main-components/AnimationToggle"

/**
 * Configuration for sidebar navigation items.
 */
const items = [
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
export function PortfolioSidebar({ className }: { className?: string }) {
    const pathname = usePathname()

    return (
        <Sidebar 
            variant="floating" 
            className={cn(className)}
        >
            {/* Brand Section: Displays name and a decorative accent */}
            <SidebarHeader className="p-6">
                <div className="flex flex-col gap-2">
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Kieran Pritchard
                    </span>
                    <div className="h-1 w-8 bg-primary rounded-full" />
                </div>
            </SidebarHeader>

            {/* Navigation Section: Maps through the items to create link buttons */}
            <SidebarContent className="px-2">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {items.map((item) => {
                                const isActive = pathname === item.url
                                
                                return (
                                    <SidebarMenuItem key={item.title} className="relative">
                                        {/* Active Indicator Bar: A vertical bar showing the active route */}
                                        {isActive && (
                                            <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-8 w-1 bg-primary rounded-full" />
                                        )}
                                        
                                        <SidebarMenuButton 
                                            asChild 
                                            isActive={isActive}
                                            className={cn(
                                                "group transition-all duration-300 rounded-md",
                                                isActive 
                                                    ? "bg-primary/15! text-primary" 
                                                    : "hover:bg-muted"
                                            )}
                                        >
                                            <a href={item.url} className="flex items-center gap-3 px-3 py-6">
                                                <item.icon className={cn(
                                                    "size-5 transition-transform duration-300 group-hover:scale-110",
                                                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                                )} />
                                                
                                                <span className={cn(
                                                    "font-medium tracking-tight",
                                                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                                                )}>
                                                    {item.title}
                                                </span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer Section: Contains theme and animation toggles */}
            <SidebarFooter className="p-2 my-2">
                <div className="flex items-center justify-center gap-2 w-full">
                    <ModeToggle />
                    <AnimationToggle />
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}