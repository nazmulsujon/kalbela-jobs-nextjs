"use client"

import * as React from "react"
import { useState } from "react"
import { Search } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import PrimaryBtn from "@/components/PrimaryBtn"

// Mock data for suggestions
const skillSuggestions = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "Web Developer",
  "Graphic Designer",
  "Content Writer",
]

const locationSuggestions = [
  "Dhaka",
  "Chattogram",
  "Khulna",
  "Rajshahi",
  "Sylhet",
  "Barishal",
  "Mymensingh",
  "Rangpur",
]

const HeroSection = () => {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")

  console.log("theme", theme)

  console.log(location)

  const [filteredSkills, setFilteredSkills] = useState<string[]>([])
  const [showSkillDropdown, setShowSkillDropdown] = useState(false)

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (value) {
      setFilteredSkills(
        skillSuggestions.filter((skill) =>
          skill.toLowerCase().includes(value.toLowerCase())
        )
      )
      setShowSkillDropdown(true)
    } else {
      setShowSkillDropdown(false)
    }
  }

  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-center py-6 md:py-10 md:pb-10 lg:pb-16 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Find your dream job
        </h1>

        <p className="max-w-4xl text-xs md:text-sm text-balance text-center !mb-2">
          Your Career Starts Here with Kalbela Jobs! Discover the latest job
          opportunities in Bangladesh and worldwide, all in one place. Kalbela
          Jobs – where your next opportunity awaits.
        </p>

        <div className="flex items-center w-full max-w-3xl px-4 md:px-6 py-3 space-x-2 rounded-sm shadow-md border bg-white border-gray-200 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-slate-200">
          <div className="relative flex items-center space-x-2 w-full">
            <Search className="size-6 text-gray-500 dark:text-slate-200" />
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSkillChange}
              placeholder="Enter skills / designations / companies"
              className="w-full border-none outline-none placeholder-gray-500 focus-visible:ring-0 shadow-none dark:placeholder-slate-200"
            />
            {showSkillDropdown && filteredSkills.length > 0 && (
              <ul
                className={cn(
                  "absolute z-10 w-full border rounded-sm shadow-md top-full mt-1 max-h-72 overflow-y-auto",
                  {
                    "bg-gray-800 border-gray-700": theme === "dark",
                    "bg-white": theme !== "dark",
                  }
                )}
                style={{ scrollbarWidth: "thin" }}
              >
                {filteredSkills.map((skill) => (
                  <li
                    key={skill}
                    onClick={() => {
                      setSearchQuery(skill)
                      setShowSkillDropdown(false)
                    }}
                    className="p-1.5 hover:bg-gray-100 cursor-pointer m-1 dark:hover:text-gray-800 dark:hover:bg-gray-700 dark:rounded-lg"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="hidden md:flex items-center">
            <Separator
              orientation="vertical"
              className="h-10 w-0.5 bg-slate-400 mx-2"
            />

            <Select onValueChange={(value: any) => setLocation(value)}>
              <SelectTrigger className="border-none outline-none focus:ring-0 shadow-none w-40 dark:bg-gray-800">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent className="max-h-72 bg-white text-gray-900 dark:bg-gray-800 dark:text-slate-200">
                <SelectGroup>
                  {locationSuggestions.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <PrimaryBtn>Search</PrimaryBtn>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default HeroSection
