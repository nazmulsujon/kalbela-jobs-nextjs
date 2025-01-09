import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontPoppins } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from "@/components/navbar/Navbar"
import { ToastContainer } from "react-toastify"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontPoppins.variable
          )}
        >
          <ThemeProvider attribute="class" enableSystem>
            <div className="relative flex min-h-screen flex-col bg-light-theme dark:bg-dark-theme">
              <header className="sticky top-0 z-50">
                <Navbar />
              </header>
              <main>
                <div className="flex-1">{children}</div>
                <ToastContainer />
              </main>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
