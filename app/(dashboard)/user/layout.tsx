
import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontPoppins } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from "@/components/navbar/Navbar"

import { Sidebar } from "./components/Sideber"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { ToastContainer } from "react-toastify"

import BottomNav from "../../../components/BottomNav"

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

interface DashboardLayoutProps {
      children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

      return (
            <html lang="en" suppressHydrationWarning>
                  <head>
                        <meta name="theme-color" content="#DEEBFF" media="(prefers-color-scheme: light)" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta charSet="UTF-8" />
                        <meta title="Dashboard - Kalbela Jobs" />
                        <meta name="description" content='Dashboard - Kalbela Jobs' />
                        <meta name="keywords" content='Jobs, Job Seeker, Employer, Job Portal, Job Posting' />
                        <meta name="author" content='Kalbela Jobs' />
                        <link rel="icon" href="/favicon.ico" />
                        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                        <link rel="shortcut icon" href="/favicon-16x16.png" />
                        <link rel="manifest" href="/manifest.json" />


                  </head>
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
                                                      <aside className="hidden w-64 shrink-0 border-r lg:block min-h-screen">
                                                            <Sidebar />
                                                      </aside>
                                                </div>
                                                <main className="flex-1 p-6 lg:pl-[270px] overflow-y-auto px-4 md:px-8 mx-auto sm:px-6 w-auto">
                                                      {children}
                                                      <ToastContainer />
                                                </main>
                                          </div>
                                    </MaxWidthWrapper>
                              </div>
                              <BottomNav />
                        </ThemeProvider>
                  </body>
            </html>
      )
}
