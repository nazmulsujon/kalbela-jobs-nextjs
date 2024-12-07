import React from "react"
import Link from "next/link"
import { jobs } from "@/public/assets/dummyData"

import { cn } from "@/lib/utils"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import PrimaryBtn from "@/components/PrimaryBtn"

const FeaturedJobs: React.FC = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-6 md:py-10 lg:py-16">
        <h2 className="text-xl md:text-3xl font-bold mb-4 flex items-center">
          <span className="text-red-500 mr-2">🔥</span> Featured Jobs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start p-4 border rounded-sm  overflow-hidden group"
            >
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-14 h-14 mr-3 rounded-full object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-semibold hover:text-blue-500">
                  {job.company}
                </h3>
                <p className="text-xs">{job.title}</p>
              </div>

              <Link
                href={`#`}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <PrimaryBtn className="backdrop-blur-md hover:bg-opacity-100">
                  View Details
                </PrimaryBtn>
              </Link>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default FeaturedJobs
