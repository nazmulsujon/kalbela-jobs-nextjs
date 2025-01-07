import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontPoppins } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from "@/components/navbar/Navbar"

import { Sidebar } from "./components/Sideber"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["job search", "employment", "career", "recruitment"],
  creator: siteConfig.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontPoppins.variable
        )}
      >
        <ThemeProvider attribute="class" enableSystem>

          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <Navbar />
            </header>
            <MaxWidthWrapper>
              <div className="mx-auto flex flex-col lg:flex-row">
                <div className="lg:fixed w-full lg:h-screen lg:w-[250px]">
                  <Sidebar />
                </div>
                <main className="flex-1 p-6 lg:pl-[270px] overflow-y-auto px-4 md:px-8 mx-auto sm:px-6 w-auto">
                  {children}
                </main>
              </div>
            </MaxWidthWrapper>
          </div>

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
