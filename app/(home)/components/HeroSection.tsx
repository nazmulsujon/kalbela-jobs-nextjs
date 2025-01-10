"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
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

const locationSuggestions = [
  "dhaka",
  "chattogram",
  "khulna",
  "rajshahi",
  "sylhet",
  "barishal",
  "mymensingh",
  "rangpur",
]

const HeroSection = () => {
  const { theme } = useTheme()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [filteredSkills, setFilteredSkills] = useState<string[]>([])
  const [showSkillDropdown, setShowSkillDropdown] = useState(false)

  // Fetch skills from the API
  const fetchSkills = async (query: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_APP_BASE_URL}/api/v1/jobs/get-suggestions?search=${query}`
      ) // Update this with your actual API URL
      const result = await response.json()
      if (!result.error && result.data) {
        const skills = result.data.map(
          (item: { search: string }) => item.search
        )
        setFilteredSkills(skills)
      }
    } catch (error) {
      console.error("Error fetching skills:", error)
    }
  }

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (value) {
      fetchSkills(value)
      setShowSkillDropdown(true)
    } else {
      setFilteredSkills([])
      setShowSkillDropdown(false)
    }
  }

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      query: searchQuery,
      location: location,
    }).toString()
    router.push(`/search-details?${queryParams}`)
  }

  return (
    <div className="z-50">
      <MaxWidthWrapper className="flex flex-col items-center space-y-4 py-6 md:py-10 md:pb-10 lg:pb-16">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Find your dream job
        </h1>

        <p className="!mb-2 max-w-4xl text-balance text-center text-xs md:text-sm">
          Your Career Starts Here with Kalbela Jobs! Discover the latest job
          opportunities in Bangladesh and worldwide, all in one place. Kalbela
          Jobs – where your next opportunity awaits.
        </p>

        <div className="flex w-full max-w-3xl items-center space-x-2 rounded-sm border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-slate-200 md:px-6">
          <div className="relative flex w-full items-center space-x-2">
            <Search className="size-6 text-gray-500 dark:text-slate-200" />
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSkillChange}
              placeholder="Enter skills / designations / companies"
              className="w-full border-none placeholder-gray-500 shadow-none outline-none focus-visible:ring-0 dark:placeholder-slate-200"
            />
            {showSkillDropdown && filteredSkills.length > 0 && (
              <ul
                className={cn(
                  "absolute top-full z-10 mt-1 max-h-72 w-full overflow-y-auto rounded-sm border shadow-md",
                  {
                    "border-gray-700 bg-gray-800": theme === "dark",
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
                    className="m-1 cursor-pointer p-1.5 capitalize hover:bg-gray-100 dark:rounded-lg dark:hover:bg-gray-700 dark:hover:text-gray-800"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="hidden items-center md:flex">
            <Separator
              orientation="vertical"
              className="mx-2 h-10 w-0.5 bg-slate-400"
            />

            <Select onValueChange={(value: any) => setLocation(value)}>
              <SelectTrigger className="w-40 border-none shadow-none outline-none focus:ring-0 dark:bg-gray-800">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent className="max-h-72 bg-white text-gray-900 dark:bg-gray-800 dark:text-slate-200">
                <SelectGroup>
                  {locationSuggestions.map((location) => (
                    <SelectItem
                      key={location}
                      value={location}
                      className="capitalize"
                    >
                      {location}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <PrimaryBtn onClick={handleSearch}>Search</PrimaryBtn>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default HeroSection
