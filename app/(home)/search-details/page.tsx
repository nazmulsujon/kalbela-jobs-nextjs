"use client"

import React, { useState } from "react"
import { useSearchParams } from "next/navigation"
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
import JobCardSkeleton from "@/components/JobCardSkeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import PrimaryBtn from "@/components/PrimaryBtn"
import useJobsSearch from "@/app/hooks/useJobSearch"

import FilterSelect from "./components/FilterSelect"
import JobcardLarge from "./components/JobCardLarge"

const SearchDetails: React.FC = () => {
  const { theme } = useTheme()
  const customStyles = selectCustomStyles(theme || "light")

  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("query")

  const [query, setQuery] = useState(searchQuery || "")
  const [pageNumber, setPageNumber] = useState(1)

  const { jobs, totalJobs, hasMore, loading, error } = useJobsSearch({
    endpoint: "jobs",
    query,
    pageNumber,
    fetchOnMount: true,
  })

  const handleLoadMore = () => {
    if (hasMore) setPageNumber((prev) => prev + 1)
  }

  return (
    <section>
      <MaxWidthWrapper className="pt-2 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <PrimaryBtn className="flex items-center justify-between px-3 text-sm">
              <Filter className="me-2 size-4" /> Filter All
            </PrimaryBtn>
          </SheetTrigger>
          <SheetContent className="h-[90vh]" side="bottom">
            <SheetHeader className="mb-4">
              <SheetTitle>All Filters</SheetTitle>
            </SheetHeader>
            <div className="w-full rounded border p-4 shadow-sm">
              <FilterSelect customStyles={customStyles} />
            </div>
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col gap-6 p-4 lg:flex-row">
        <aside className="hidden h-fit w-full rounded border p-4 shadow-sm md:sticky md:top-20 lg:block lg:w-1/4">
          <h3 className="mb-4 text-lg font-semibold">All Filters</h3>
          <FilterSelect customStyles={customStyles} />
        </aside>

        <div className="flex-grow">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm">{`1 - ${jobs.length} of ${totalJobs} Jobs`}</p>
            <div className="w-44 max-w-44">
              <Select
                options={[
                  { value: "Relevance", label: "Sort by: Relevance" },
                  { value: "Date", label: "Sort by: Date" },
                ]}
                styles={customStyles}
                isSearchable={false}
              />
            </div>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <JobCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <JobcardLarge job={job} key={index} />
              ))}
            </div>
          )}

          {error && <p>Error loading jobs</p>}

          {hasMore && !loading && (
            <button onClick={handleLoadMore} className="mt-4 w-full">
              Load More
            </button>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default SearchDetails
