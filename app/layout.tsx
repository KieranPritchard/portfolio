import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { PortfolioSidebar } from "@/components/main-components/portfolio-sidebar"
import { ModeToggle } from "@/components/main-components/mode-toggle"
import { Geist, Geist_Mono, Roboto, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

// Creates the heading styling variable
const notoSansHeading = Noto_Sans({ subsets: ['latin'], variable: '--font-heading' });
// Creates the roboto styling variable
const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '700'] })
// Creates the font mono styling variable
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// Exports a read only function for the root layout
export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased", 
        fontMono.variable, 
        roboto.variable, 
        notoSansHeading.variable,
        "font-sans"
      )}
    >
      <body>
        {/* Wraps the app in a theme provider context */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Wraps the app in the sidebar */}
          <SidebarProvider>
            {/* Ports on the portfolio */}
            <PortfolioSidebar />
            {/* Main function */}
            <main className="relative flex min-h-screen flex-col w-full">
              {/* Contains the header */}
              <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between bg-background px-4">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                </div>
                <div className="flex items-center gap-2">
                  <ModeToggle />
                </div>
              </header>
              {/* Stores the container */}
              <div className="flex flex-1 flex-col gap-4 p-4">
                {children}
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}