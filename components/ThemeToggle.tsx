"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
      const { setTheme, theme } = useTheme()


      React.useEffect(() => {
            if (theme === "system") {
                  setTheme("light")
            }
            if (theme === "light") {
                  document.documentElement.classList.remove("dark")
            } else {
                  document.documentElement.classList.add("dark")
            }
      }, [theme, setTheme])


      return (
            <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="rounded-sm"
            >
                  <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
                  <Moon className="hidden h-5 w-5 dark:block" />
                  <span className="sr-only">Toggle theme</span>
            </Button>
      )
}
