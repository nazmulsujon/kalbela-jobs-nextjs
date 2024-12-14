"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
//@ts-ignore
import { redirect, usePathname } from "next/navigation"
import { Menu } from "lucide-react"

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
import { Navigations } from "./Navigations"

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const isAuthenticated = false

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const redirect = (path: string) => {
    window.location.href = path // Basic redirection using `window.location`
  }

  return (
    <section
      className={`${
        isScrolled
          ? "bg-white/75 backdrop-blur-lg border-b dark:bg-black dark:border-b-gray-500"
          : isHomePage
          ? ""
          : "dark:bg-[#121a2d]"
      } shadow-none`}
    >
      <MaxWidthWrapper className="h-[64px] flex justify-between items-center">
        <Button
          onClick={() => setIsMobileNavOpen(true)}
          variant="outline"
          size="icon"
          className={`md:hidden text-gray-900 dark:text-slate-200 dark:border-gray-700 dark:hover:bg-gray-900`}
        >
          <Menu
            className={`w-full text-gray-900 dark:text-slate-200 dark:border-gray-700 dark:hover:bg-gray-900`}
          />
        </Button>

        <div>
          <Link href="/">
            <img className="h-auto w-48 mx-auto" src="/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="hidden md:block">
          <Navigations />
        </div>

        <div className="flex items-center md:space-x-4">
          {isAuthenticated ? (
            <PrimaryBtn>Logout</PrimaryBtn>
          ) : (
            <div className="hidden md:flex justify-between items-center space-x-4 me-2 md:me-0">
              <PrimaryBtn onClick={() => redirect("/login")}>Login</PrimaryBtn>
              <SecondaryBtn onClick={() => redirect("/registration")}>
                Registration
              </SecondaryBtn>
            </div>
          )}

          <ThemeToggle />
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
            className={`w-80 h-full overflow-y-auto pt-[14px] bg-white text-gray-800 dark:bg-gray-900 dark:text-slate-200`}
          >
            <SheetHeader>
              <SheetTitle className="text-start">
                <Link href="/">
                  <img className="h-auto w-48" src="/logo.png" alt="logo" />
                </Link>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Mobile navigation for Sunny Footwear website.
              </SheetDescription>
            </SheetHeader>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </section>
  )
}

export default Navbar
