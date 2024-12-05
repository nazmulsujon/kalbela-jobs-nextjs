"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

const jobTypesArr = [
  { label: "Remote", icon: "/jobtype-icons/remote-job.svg" },
  { label: "MNC", icon: "/jobtype-icons/mnc.svg" },
  {
    label: "Project Mgmt.",
    icon: "/jobtype-icons/project-management.svg",
  },
  { label: "HR", icon: "/jobtype-icons/hr.svg" },
  { label: "Supply Chain", icon: "/jobtype-icons/sales.svg" },
  { label: "Fresher", icon: "/jobtype-icons/freshers.svg" },
  { label: "Internship", icon: "/jobtype-icons/sales.svg" },
  { label: "Data Science", icon: "/jobtype-icons/data-science.svg" },
  { label: "Sales", icon: "/jobtype-icons/sales.svg" },
  { label: "Marketing", icon: "/jobtype-icons/remote-job.svg" },
  { label: "Fortune 500", icon: "/jobtype-icons/fortune.svg" },
]

const JobType: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { theme } = useTheme()

  console.log(setLoading)

  useEffect(() => {
    if (!api) return
  }, [api])

  const handleNextClick = () => {
    if (api) api.scrollNext()
  }

  const handlePrevClick = () => {
    if (api) api.scrollPrev()
  }

  return (
    <section className="bg-transparent dark:bg-[#323b4c]">
      <MaxWidthWrapper>
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full flex justify-between items-center"
        >
          <div className="h-6 w-6">
            <Button
              onClick={handlePrevClick}
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </div>

          <CarouselContent className="flex">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton key={index} className="w-[180px] h-[60px] mx-2" />
                ))
              : jobTypesArr.map((type, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/6 lg:basis-1/8"
                  >
                    <Link
                      href="#"
                      className={cn(
                        "w-full h-full flex justify-between items-center border rounded-sm p-2",
                        theme === "dark"
                          ? "border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
                          : "bg-white text-gray-900 hover:bg-gray-100"
                      )}
                    >
                      <div className="size-10 flex justify-center items-center h-auto">
                        <img
                          className="size-8 md:size-10 mr-1"
                          src={type.icon}
                          style={{ aspectRatio: "3/2" }}
                          alt={`${type.label} image`}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-sm font-medium max-w-sm truncate">
                        {type.label}
                      </h3>
                      <ChevronRightIcon className="size-4 text-slate-400" />
                    </Link>
                  </CarouselItem>
                ))}
          </CarouselContent>

          <div className="h-6 w-6">
            <Button
              onClick={handleNextClick}
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Carousel>
      </MaxWidthWrapper>
    </section>
  )
}

export default JobType
