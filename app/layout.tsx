// app/layout.tsx
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PortfolioSidebar } from "@/components/layouts/Sidebar"
import { Geist_Mono, Roboto, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { MotionProvider } from "@/components/providers/MotionProvider"
import { AnimationWrapper } from "@/components/providers/AnimationWrapper"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Footer from "@/components/layouts/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { createPageMetadata } from "@/lib/page-metadata"

/**
 * Global Metadata Configuration
 * 
 * Defines the default page titles and descriptions for search engine optimization (SEO).
 */
export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Kieran Pritchard | Software Developer & Ethical Hacker",
    description:
      "Kieran Pritchard is a software development student and ethical hacker building secure web apps, cybersecurity tools, and automation.",
    path: "/",
    section: "PORTFOLIO",
  }),
  metadataBase: new URL("https://www.kpritchard.co.uk"),
  title: { default: 'Kieran Pritchard', template: '%s | Kieran Pritchard' },
  keywords: ['Kieran Pritchard', 'software developer Bournemouth', 'junior developer UK', 'ethical hacker', 'T Level software development', 'CTF write-ups'],
  authors: [{name: 'Kieran Pritchard'}],
  robots: {
    index: true,
    follow: true,
  },
}

/**
 * Font Initialization
 * 
 * Configures Google Fonts with CSS variables for seamless integration with Tailwind CSS.
 */
const notoSansHeading = Noto_Sans({ subsets: ['latin'], variable: '--font-heading' });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-sans' });
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

/**
 * RootLayout Component
 * 
 * The primary layout wrapper for the entire application.
 * It initializes global providers (Theme, Motion, Tooltip, Sidebar), 
 * sets up the navigation structure, and defines the global font styling.
 * 
 * @param children - The active page content to be rendered within the layout.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased overflow-x-hidden", fontMono.variable, roboto.variable, notoSansHeading.variable)}>
        {/* MotionProvider: Manages global animation toggle state */}
        <MotionProvider>
          {/* AnimationWrapper: Conditionally enables/disables Framer Motion animations */}
          <AnimationWrapper>
            {/* ThemeProvider: Manages light/dark mode with system preference support */}
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {/* TooltipProvider: Required for Radix UI tooltip components */}
              <TooltipProvider delayDuration={0}>
                {/* SidebarProvider: Orchestrates the collapsible navigation sidebar */}
                <SidebarProvider>
                  <PortfolioSidebar />
                  <SidebarInset className="min-w-0">
                    {/* Sticky Global Header */}
                    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1" />
                      </div>
                    </header>
                    {/* Main Content Area */}
                    <main className="flex flex-1 flex-col gap-4 p-4 md:p-8 min-w-0">
                      {children}
                    </main>
                    <Footer />
                  </SidebarInset>
                </SidebarProvider>
              </TooltipProvider>
            </ThemeProvider>
          </AnimationWrapper>
        </MotionProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
