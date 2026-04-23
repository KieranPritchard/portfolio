import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip" // Added this
import { PortfolioSidebar } from "@/components/main-components/portfolio-sidebar"
import { Geist_Mono, Roboto, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from 'next'
import Footer from "@/components/main-components/Footer"

export const metadata: Metadata = {
  title: {
    default: 'Kieran Pritchard', // The title used if a child page doesn't define one
    template: '%s | Kieran Pritchard', // The layout for child pages (%s is the placeholder)
  },
  description: 'Software student focused on ethical hacking and secure dev.',
}

const notoSansHeading = Noto_Sans({ subsets: ['latin'], variable: '--font-heading' });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-sans' });
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontMono.variable,
          roboto.variable,
          notoSansHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* TooltipProvider wrapped around SidebarProvider fixes the crash */}
          <TooltipProvider delayDuration={0}>
            <SidebarProvider>
              <PortfolioSidebar />
              <SidebarInset className="min-w-0">
                <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-1" />
                  </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 md:p-8 min-w-0">
                  {children}
                </div>
                <Footer />
              </SidebarInset>
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}