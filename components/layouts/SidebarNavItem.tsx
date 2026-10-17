import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Link from "next/link"
import { ForwardRefExoticComponent, RefAttributes } from "react"
import {
  Home,
  LucideProps,
  Mail,
  NotebookPen,
  Settings,
  Toolbox,
  User,
} from "lucide-react"
import { cn } from "../../lib/utils"

/**
 * Shape of a single sidebar navigation item.
 */
export type NavItem = {
  title: string
  url: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

/**
 * Configuration for the main sidebar navigation items.
 */
export const items: NavItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Projects", url: "/projects", icon: Toolbox },
  { title: "Blog", url: "/blog", icon: NotebookPen },
  { title: "Contact", url: "/contact", icon: Mail },
]

/**
 * Configuration for the settings item, pinned to the sidebar footer.
 */
export const settingsItem: NavItem = {
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
export default function SidebarNavItem({
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
