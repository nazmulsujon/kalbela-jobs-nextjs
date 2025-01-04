"use client"

import "@/styles/globals.css"
import { useEffect, useState } from "react"
import Link from "next/link"
//@ts-ignore
import { redirect, usePathname, useRouter } from "next/navigation"
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
import { UserNav } from "./UserNav"

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const router = useRouter()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const isAuthenticated = true

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
      className={`${
        isScrolled
          ? "border-b bg-white/75 backdrop-blur-lg dark:border-b-gray-500 dark:bg-black"
          : isHomePage
            ? ""
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
            <img className="mx-auto h-auto w-48" src="/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="hidden md:block">
          <Navigations />
        </div>

        <div className="flex items-center md:space-x-4">
          {isAuthenticated ? (
            <UserNav />
          ) : (
            <div className="me-2 hidden items-center justify-between space-x-4 md:me-0 md:flex">
              <PrimaryBtn onClick={() => router.push("/login")}>
                Login
              </PrimaryBtn>
              <SecondaryBtn onClick={() => router.push("/registration")}>
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
            className={`h-full w-80 overflow-y-auto bg-white pt-[14px] text-gray-800 dark:bg-gray-900 dark:text-slate-200`}
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
