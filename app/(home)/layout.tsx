import "@/styles/globals.css"
import { Metadata } from "next"
import { fontPoppins } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ThemeProvider"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { siteConfig } from "@/config/site"
import { ToastContainer } from "react-toastify"
import BottomNav from "@/components/BottomNav"

export const metadata: Metadata = {
      metadataBase: new URL(siteConfig.url),
      title: {
            default: siteConfig.name,
            template: `%s | ${siteConfig.name}`,
      },
      description: siteConfig.description,
      keywords: siteConfig.keywords,
      authors: [
            {
                  name: siteConfig.author,
                  url: siteConfig.authorUrl,
            },
      ],
      creator: siteConfig.author,
      openGraph: {
            type: 'website',
            locale: 'en_US',
            url: siteConfig.url,
            title: siteConfig.name,
            description: siteConfig.description,
            siteName: siteConfig.name,
            images: [
                  {
                        url: siteConfig.ogImage,
                        width: 1200,
                        height: 630,
                        alt: siteConfig.name,
                  },
            ],
      },
      twitter: {
            card: 'summary_large_image',
            title: siteConfig.name,
            description: siteConfig.description,
            images: [siteConfig.ogImage],
            creator: siteConfig.twitterHandle,
      },
      robots: {
            index: true,
            follow: true,
      },
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
            <html lang="en" suppressHydrationWarning className={cn("antialiased", fontPoppins.variable)}>
                  <head>
                        <meta name="theme-color" content="#DEEBFF" media="(prefers-color-scheme: light)" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta charSet="UTF-8" />
                        <meta name="description" content='Kalbela Jobs - A platform for job seekers and employers to connect and find each other.' />
                        <meta name="keywords" content='Jobs, Job Seeker, Employer, Job Portal, Job Posting' />
                        <meta name="author" content='Kalbela Jobs' />
                        <link rel="icon" href="/favicon.ico" />
                  </head>
                  <body className="min-h-screen bg-background font-sans">
                        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                              <div className="relative flex min-h-screen flex-col justify-between bg-light-theme dark:bg-dark-theme">
                                    <header className="sticky top-0 z-50">
                                          <Navbar />
                                    </header>
                                    <main className="flex-1">
                                          {children}
                                          <ToastContainer />
                                    </main>
                                    <Footer />
                              </div>
                              <BottomNav />
                        </ThemeProvider>
                  </body>
            </html>
      )
}
