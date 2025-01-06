"use client"

import Link from "next/link"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import PrimaryBtn from "@/components/PrimaryBtn"
import NoVacancies from "@/app/(home)/search-details/components/NoVacancies"

import CardSkeleton from "./CardSkeleton"

const CompanyJobs = ({ jobs, loading }: { jobs: any; loading: boolean }) => {
  console.log("jobs from ------", jobs)

  return (
    <div className="my-10">
      <div className="relative w-full border border-gray-300 py-3 text-center">
        <h2 className="cursor-pointer text-lg font-semibold">Jobs</h2>
        <p className="absolute -bottom-3 left-0 right-0 top-0 mx-auto mb-3 w-11 border-b-4 border-gray-700 pt-3"></p>
      </div>

      {/* Company all Jobs here */}
      <div className="mt-10 flex justify-center gap-10 px-4 lg:px-44">
        <div className="flex-1">
          <div>
            <h2 className="flex items-center justify-start font-sans text-2xl font-extrabold text-gray-900 dark:text-white">
              {jobs && jobs.length > 0 ? (
                `Jobs at ${jobs[0]?.company_info?.name}`
              ) : (
                <NoVacancies />
              )}
              {loading && <Skeleton className="ms-4 h-6 w-28" />}
            </h2>
          </div>
          <div className="mt-6 space-y-2 md:mt-12">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))
              : jobs &&
                jobs.map((job: any) => (
                  <Card
                    key={job._id}
                    className="job-card w-full border border-b shadow-sm dark:bg-white"
                  >
                    <div className="flex items-center justify-between p-4">
                      <div className="space-y-1">
                        <h1 className="text-xl font-bold text-gray-900">
                          {job.job_title}{" "}
                          <span className="text-sm font-normal">
                            ({job.experience_level})
                          </span>
                        </h1>
                        <p className="text-[15px] text-gray-700">
                          {job.company_info?.name} • {job.job_type} •{" "}
                          {job.location?.remote
                            ? "Remote"
                            : job.location?.country}
                        </p>
                        <p className="text-[15px] text-gray-700">
                          Deadline: {job.expiry_date}
                        </p>
                      </div>

                      <div className="z-20 flex items-center gap-3 p-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <Save className="h-6 w-6" />
                        </Button>
                        <Link href={`/search-details/job-details/${job.url}`}>
                          <PrimaryBtn>Details</PrimaryBtn>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
          </div>

          {/* this use Modal */}
        </div>
        <div className="hidden h-44 w-[300px] md:block">
          <Card className="w-full max-w-sm dark:bg-white">
            <CardHeader>
              <h2 className="text-xl font-bold text-gray-900">
                Company overview
              </h2>
            </CardHeader>
            <CardContent className="space-y-1">
              <div>
                <span className="text-sm font-semibold text-gray-600">
                  Industry
                </span>
                <p className="text-sm font-semibold text-gray-900">
                  Comming Soon{" "}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CompanyJobs
