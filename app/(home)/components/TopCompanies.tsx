"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SecondaryBtn from "@/components/SecondaryBtn"

const topCompaniessArr = [
  {
    company_name: "Fortune 500",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Walton",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Fortune 500 LTD.",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Brack Bank",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Fortune 500 Chain",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Pathao",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Fortune 500",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Fortune 500",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Fortune 500",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Fortune 500",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
  {
    company_name: "Fortune 500",
    job_title: "Leading global telecom company.",
    logo: "/company-logo.png",
  },
]

const TopCompanies: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

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
    <section className="pb-6 md:pb-10 lg:pb-16">
      <MaxWidthWrapper>
        <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center">
          Top companies hiring now
        </h2>
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
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
              ? Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="w-full h-auto mx-2" />
                ))
              : topCompaniessArr.map((company, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/4 lg:basis-1/5"
                  >
                    <Link
                      href="#"
                      className="w-full h-full flex flex-col justify-between items-center border rounded-sm p-2 py-4"
                    >
                      <div className="size-24 flex justify-center items-center">
                        <img
                          className="size-full rounded-sm mr-1 object-cover"
                          src={company.logo}
                          style={{ aspectRatio: "3/2" }}
                          alt={`${company.company_name} image`}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-sm font-medium max-w-sm truncate my-2">
                        {company.company_name}
                      </h3>
                      <p className="text-xs mb-2 text-center">
                        {company.job_title}
                      </p>
                      <SecondaryBtn className="mt-2">View jobs</SecondaryBtn>
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

export default TopCompanies
