"use client"

import React from "react"
import { dummyJobs } from "@/public/assets/dummyData"
import { Filter } from "lucide-react"
import { useTheme } from "next-themes"
import Select from "react-select"

import { selectCustomStyles } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import PrimaryBtn from "@/components/PrimaryBtn"

import FilterSelect from "./components/FilterSelect"
import JobcardLarge from "./components/JobCardLarge"

const SearchDetails: React.FC = () => {
  const { theme } = useTheme()
  const customStyles = selectCustomStyles(theme || "light")

  return (
    <section>
      <MaxWidthWrapper className="lg:hidden pt-2">
        <Sheet>
          <SheetTrigger asChild>
            <PrimaryBtn className="flex justify-between items-center px-3 text-sm">
              <Filter className="size-4 me-2" /> Filter All
            </PrimaryBtn>
          </SheetTrigger>
          <SheetContent className="h-[90vh]" side="bottom">
            <SheetHeader className="mb-4">
              <SheetTitle>All Filters</SheetTitle>
            </SheetHeader>
            <div className="w-full p-4 rounded shadow-sm border">
              <FilterSelect customStyles={customStyles} />
            </div>
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col lg:flex-row gap-6 p-4">
        <aside className="hidden lg:block w-full lg:w-1/4 h-fit md:sticky md:top-20 p-4 rounded shadow-sm border">
          <h3 className="font-semibold text-lg mb-4">All Filters</h3>
          <FilterSelect customStyles={customStyles} />
        </aside>

        <div className="flex-grow">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-sm">{`1 - ${dummyJobs.length} of ${dummyJobs.length} Jobs`}</p>
            <div className="max-w-44 w-44">
              <Select
                // value={}
                // onChange={}
                options={[
                  { value: "Relevance", label: "Sort by: Relevance" },
                  { value: "Date", label: "Sort by: Date" },
                ]}
                styles={customStyles}
                isSearchable={false}
              />
            </div>
          </div>
          <div className="space-y-4">
            {dummyJobs.map((job, index) => (
              <JobcardLarge job={job} key={index} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default SearchDetails
