"use client"

import { dummyJobs } from "@/public/assets/dummyData"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ApplyModal from "@/components/ApplyModal"
import PrimaryBtn from "@/components/PrimaryBtn"

const CompanyJobs = () => {
  return (
    <div className="my-10">
      <div className="relative w-full border border-gray-300 py-3 text-center">
        <h2 className="cursor-pointer text-lg font-semibold">Jobs</h2>
        <p className="absolute -bottom-3 left-0 right-0 top-0 mx-auto mb-3 w-11 border-b-4 border-gray-700 pt-3"></p>
      </div>

      {/* Comapany all Jobs here */}
      <div className="mt-10 flex justify-center gap-10 px-4 lg:px-44">
        <div className="flex-1">
          <div>
            <h2 className="font-sans text-2xl font-extrabold text-gray-900 dark:text-white">
              Jobs at Bright Future Soft
            </h2>
          </div>
          <div className="mt-24 space-y-2">
            {dummyJobs.map((job) => (
              <Card
                key={job.id}
                className="w-full border-0 border-b pb-5 shadow-none dark:bg-white"
              >
                <div className="flex items-center justify-between p-4">
                  <div className="space-y-1">
                    <h1 className="font-sans text-xl font-bold text-gray-900">
                      {job.title}
                    </h1>
                    <p className="font-serif text-[15px] text-gray-700">
                      {job.company} • {job.jobType} • {job.location} •{" "}
                      {job.salary}
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
                    <PrimaryBtn>Details</PrimaryBtn>
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
