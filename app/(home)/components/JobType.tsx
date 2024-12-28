"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

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
import useApiRequest from "@/app/hooks/useApiRequest"

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
  const { data, loading, error } = useApiRequest<any>("job-type", "GET")

  console.log("data", data)

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
    <section>
      <MaxWidthWrapper>
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="flex w-full items-center justify-between"
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
                  <Skeleton key={index} className="mx-2 h-[60px] w-[180px]" />
                ))
              : data?.data?.map((type: any) => (
                  <CarouselItem
                    key={type._id}
                    className="lg:basis-1/8 min-w-40 basis-1/2 md:min-w-48 md:basis-1/6"
                  >
                    <Link
                      href={type.slag}
                      className={cn(
                        "flex h-full w-full items-center justify-between rounded-sm border p-2"
                      )}
                    >
                      <div className="flex size-10 h-auto items-center justify-center">
                        <img
                          className="mr-1 size-8 md:size-10"
                          src={type.image}
                          style={{ aspectRatio: "3/2" }}
                          alt={`${type.label} image`}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="max-w-sm truncate text-sm font-medium">
                        {type.name}
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
