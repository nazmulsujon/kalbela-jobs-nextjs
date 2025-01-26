"use client"

import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import useApiRequest from "@/app/hooks/useApiRequest"

const Govt_jobs = () => {
  const { data, loading, error } = useApiRequest<any>(
    "jobs/get-all-govt-jobs",
    "GET"
  )

  console.log("data from featured jobs", data)

  return (
    <section>
      <MaxWidthWrapper className="py-6 md:py-10">
        <h2 className="mb-4 flex items-center text-xl font-bold md:text-3xl">
          <span className="mr-2 text-red-500">🔥</span> Government Jobs
        </h2>

        <div className="col-span-3 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start rounded-sm border p-4 md:flex-row"
                >
                  <Skeleton className="mr-3 h-14 w-14 rounded-full" />
                  <div className="flex-grow">
                    <Skeleton className="mb-2 h-5 w-24" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              ))
            : data?.data?.map((job: any) => (
                <Link
                  href={`/govt-jobs/${job._id}`}
                  key={job._id}
                  className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-sm border p-4 md:flex-row"
                >
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      className="w-20 rounded-full border-2 border-gray-300 bg-white object-contain p-2 shadow-md"
                      src={
                        job?.organization?.logo ||
                        "https://via.placeholder.com/64"
                      }
                      alt={job?.organization?.name || "Company Logo"}
                    />
                  </Avatar>
                  <div className="flex-grow text-center md:text-start">
                    <h3 className="font-semibold hover:text-blue-500">
                      {job?.organization?.name}
                    </h3>
                    <p className="text-xs">{job.title}</p>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-end bg-black bg-opacity-60 pe-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <ChevronRight className="text-gray-800 group-hover:text-white dark:text-white" />
                  </div>
                </Link>
              ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Govt_jobs
