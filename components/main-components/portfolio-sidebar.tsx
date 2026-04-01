// Imports the shadcn sidebar content
import { 
    Sidebar, 
    SidebarContent, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarHeader, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from "@/components/ui/sidebar"

// Imports the icons needed for the sidebar
import { Home, BriefcaseBusiness, User, Contact } from "lucide-react"

// Items to be displayed in the sidebar
const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "About", url: "/about", icon: User },
    { title: "Portfolio", url: "/portfolio", icon: BriefcaseBusiness },
    { title: "Content", url: "/content", icon:  Contact}
]

// Exports the sidebar
export function PortfolioSidebar() {
    return (
        /* Sidebar container */
        <Sidebar variant="floating">
            <SidebarHeader className="border-b border-sidebar-border p-4 font-semibold tracking-tight">
                Kieran Pritchard
            </SidebarHeader>
            {/* Sidebar content containee */}
            <SidebarContent>
                {/* Groups the sidebar container together */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        {/* Maps the menu to the items map */}
                        <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                {/* Creates sidebar menu button for each itme */}
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}