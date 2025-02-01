"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import useApiRequest from "@/app/hooks/useApiRequest"
import { useRouter } from "next/navigation"

const Page = () => {
      const { data, loading, error } = useApiRequest<any>("jobs/get-all-org-jobs", "GET")
      const [searchTerm, setSearchTerm] = useState("")
      const router = useRouter()

      const get_org_all_jobs = (jobs: any) => {
            return jobs.reduce((acc: number, job: any) => acc + job.vacancy, 0)
      }

      const filteredData = data?.data?.filter((org: any) => org.name.toLowerCase().includes(searchTerm.toLowerCase()))

      return (
            <div className="w-full mt-8 lg:mt-0 ">
                  <section className="border border-green-200 rounded-lg p-2 relative w-full">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
                              <h2 className="flex items-center justify-center font-bold whitespace-nowrap">
                                    <img
                                          src="https://image.kalbelajobs.com/api/v1/image/679674886283397bf670bc7d.png"
                                          alt="Government Jobs"
                                          className="mr-2 w-6 h-6"
                                    />
                                    Government Jobs
                              </h2>
                        </div>

                        <div className="flex flex-col gap-2 max-h-[500px] scrollbar-hide overflow-y-auto pt-2">
                              {loading
                                    ? Array.from({ length: 8 }).map((_, index) => (
                                          <div key={index} className="flex flex-col rounded-lg border p-4 shadow-sm">
                                                <div className="flex items-center gap-4">
                                                      <Skeleton className="h-16 w-16 rounded-full" />
                                                      <div className="flex-1">
                                                            <Skeleton className="mb-2 h-5 w-32" />
                                                            <Skeleton className="h-4 w-24" />
                                                      </div>
                                                </div>
                                                <Skeleton className="mt-4 h-10 w-full" />
                                          </div>
                                    ))
                                    : data?.data
                                          ?.slice(0, 8)
                                          .sort((a: any, b: any) => a.name.length - b.name.length)
                                          ?.map((org: any) => (
                                                <Link
                                                      href={`/govt-jobs/${org?.jobs[0]?._id}`}
                                                      key={org._id}
                                                      className="flex flex-col justify-between rounded-lg border p-4 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
                                                >
                                                      <div className="flex items-start gap-4">
                                                            <Avatar className="h-16 w-16 rounded-lg">
                                                                  <AvatarImage
                                                                        src={org.logo}
                                                                        alt={org.name}
                                                                        className="rounded-lg border bg-white object-contain p-1"
                                                                  />
                                                                  <AvatarFallback>{org.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                  <h3 className="font-semibold capitalize text-sm sm:text-base leading-tight line-clamp-2">
                                                                        {org.name}
                                                                  </h3>
                                                                  <div className="flex flex-wrap items-center gap-2 mt-2">
                                                                        <p className="flex items-center text-xs text-gray-600">
                                                                              <Star className="mr-1 w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                                              Openings: {org.job_count}
                                                                        </p>
                                                                        <p className="flex items-center text-xs text-gray-600">
                                                                              <User className="mr-1 w-3 h-3 text-blue-500" />
                                                                              Vacancy: {get_org_all_jobs(org.jobs)}
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </Link>
                                          ))}
                        </div>
                  </section>
            </div>
      )
}

export default Page
