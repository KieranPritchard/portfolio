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
import { Home, BriefcaseBusiness, User, Contact, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * PortfolioSidebar Component
 * Features dynamic active-state styling to provide navigational context,
 * consistent with the primary accent and scale-transition design language.
 */
const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "About", url: "/about", icon: User },
    { title: "Portfolio", url: "/portfolio", icon: BriefcaseBusiness },
    { title: "Contact", url: "/contact", icon: Contact },
]

export function PortfolioSidebar({ className }: { className?: string }) {
    const pathname = usePathname()

    return (
        <Sidebar 
            variant="floating" 
            className={cn("border-r border-border/50", className)}
        >
            {/* Brand Section */}
            <SidebarHeader className="p-6">
                <div className="flex flex-col gap-2">
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Kieran Pritchard
                    </span>
                    <div className="h-1 w-8 bg-primary rounded-full" />
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {items.map((item) => {
                                const isActive = pathname === item.url
                                
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton 
                                            asChild 
                                            isActive={isActive}
                                            className={cn(
                                                "group relative transition-all duration-300",
                                                isActive 
                                                    ? "bg-primary/10 text-primary hover:bg-primary/15" 
                                                    : "hover:bg-muted"
                                            )}
                                        >
                                            <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                                                {/* Active Indicator Bar */}
                                                {isActive && (
                                                    <div className="absolute left-0 h-4 w-1 bg-primary rounded-r-full" />
                                                )}
                                                
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

            <SidebarFooter className="p-4 border-t border-border/40">
                <div className="flex items-center justify-around py-2">
                    
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}