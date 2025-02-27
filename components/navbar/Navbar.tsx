"use client"

import "@/styles/globals.css"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
//@ts-ignore
import { usePathname, useRouter } from "next/navigation"
import { useUserData } from "@/utils/encript_decript"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
      Sheet,
      SheetContent,
      SheetDescription,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
} from "@/components/ui/sheet"
import MobileNav from "@/components/navbar/MobileNav"

import MaxWidthWrapper from "../MaxWidthWrapper"
import PrimaryBtn from "../PrimaryBtn"
import SecondaryBtn from "../SecondaryBtn"
import { ThemeToggle } from "../ThemeToggle"
import { Skeleton } from "../ui/skeleton"
import { Navigations } from "./Navigations"

const UserNav = dynamic(() => import("./UserNav"), { ssr: false })

const Navbar: React.FC = () => {
      const pathname = usePathname()
      const { theme } = useTheme()
      console.log(theme, "theme")
      const [user] = useUserData()
      const isHomePage = pathname === "/"

      const router = useRouter()

      const [isScrolled, setIsScrolled] = useState(false)
      const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

      const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
      const [loading, setLoading] = useState(true)

      useEffect(() => {
            ; (async () => {
                  try {
                        setLoading(true)
                        setIsAuthenticated(!!user)
                  } catch (error) {
                        console.error("Error fetching user data:", error)
                        setIsAuthenticated(false)
                  } finally {
                        setLoading(false)
                  }
            })()
      }, [])

      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 50)
            }
            window.addEventListener("scroll", handleScroll)
            return () => {
                  window.removeEventListener("scroll", handleScroll)
            }
      }, [])

      return (
            <section
                  className={`${isScrolled
                        ? "border-b bg-white/75 backdrop-blur-lg dark:border-b-gray-500 dark:bg-black"
                        : isHomePage
                              ? "bg-transparent"
                              : "dark:bg-[#121a2d]"
                        } shadow-none`}
            >
                  <MaxWidthWrapper className="flex h-[64px] items-center justify-between">
                        <Button
                              onClick={() => setIsMobileNavOpen(true)}
                              variant="outline"
                              size="icon"
                              className={`text-gray-900 dark:border-gray-700 dark:text-slate-200 dark:hover:bg-gray-900 md:hidden`}
                        >
                              <Menu
                                    className={`w-full text-gray-900 dark:border-gray-700 dark:text-slate-200 dark:hover:bg-gray-900`}
                              />
                        </Button>

                        <div>
                              <Link href="/">
                                    <img
                                          className="mx-auto h-auto w-36 md:w-48"
                                          src={theme === "dark" ? "/logo_dark.png" : "/logo.png"}
                                          alt="logo"
                                    />
                              </Link>
                        </div>

                        <div className="hidden md:block">
                              <Navigations />
                        </div>

                        <div className="flex  items-center justify-end">
                              <UserNav loading={loading} user={user} />

                              {!user && !loading && (
                                    <div className="hidden items-center justify-between space-x-4 md:me-0 lg:flex">
                                          <PrimaryBtn
                                                className="px-4 py-2"
                                                onClick={() => router.push("/login")}
                                          >
                                                Login
                                          </PrimaryBtn>
                                          <SecondaryBtn
                                                className="px-4 py-2"
                                                onClick={() => router.push("/registration")}
                                          >
                                                Registration
                                          </SecondaryBtn>
                                          <SecondaryBtn
                                                className="whitespace-nowrap px-4 py-2"
                                                onClick={() =>
                                                      window.open("https://app.kalbelajobs.com/admin", "_blank")
                                                }
                                          >
                                                For Employers
                                          </SecondaryBtn>
                                    </div>
                              )}
                              <div className="ml-2">
                                    <ThemeToggle />
                              </div>
                        </div>
                  </MaxWidthWrapper>

                  {/* Mobile Nav */}
                  <div className="md:hidden">
                        <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
                              <SheetTrigger asChild>
                                    <div />
                              </SheetTrigger>

                              <SheetContent
                                    side="left"
                                    className={`h-full w-80 overflow-y-auto pt-[14px] text-gray-800 dark:bg-gray-900 dark:text-slate-200`}
                              >
                                    <SheetHeader>
                                          <SheetTitle className="text-start">
                                                <Link href="/">
                                                      <img
                                                            className="h-auto w-36"
                                                            src={theme === "dark" ? "/logo_dark.png" : "/logo.png"}
                                                            alt="logo"
                                                      />
                                                </Link>
                                          </SheetTitle>
                                          <SheetDescription className="sr-only">
                                                Mobile navigation for Kalbela jobs
                                          </SheetDescription>
                                    </SheetHeader>
                                    <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} />
                              </SheetContent>
                        </Sheet>
                  </div>
            </section>
      )
}

export default Navbar
