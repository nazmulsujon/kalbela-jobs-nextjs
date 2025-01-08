"use client"

import { useEffect, useState } from "react"
import {
      Bookmark,
      Building2,
      Calendar,
      ChevronLeft,
      ChevronRight,
      MapPin,
      Search,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
      Card,
      CardContent,
      CardFooter,
      CardHeader,
      CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select"
import useApiRequest from "@/app/hooks/useApiRequest"
import { useUserData } from "@/utils/encript_decript"
import Link from "next/link"

type Job = {
      id: number
      title: string
      company: string
      location: string
      appliedDate: string
      status: "Applied" | "In Review" | "Interview" | "Offer" | "Rejected"
}

// const initialJobs: Job[] = [
//       {
//             id: 1,
//             title: "Frontend Developer",
//             company: "TechCorp",
//             location: "New York, NY",
//             appliedDate: "2023-06-01",
//             status: "In Review",
//       },
//       {
//             id: 2,
//             title: "UX Designer",
//             company: "DesignHub",
//             location: "San Francisco, CA",
//             appliedDate: "2023-05-28",
//             status: "Interview",
//       },
//       {
//             id: 3,
//             title: "Data Scientist",
//             company: "DataWorks",
//             location: "Boston, MA",
//             appliedDate: "2023-05-25",
//             status: "Applied",
//       },
//       {
//             id: 4,
//             title: "Product Manager",
//             company: "InnovateCo",
//             location: "Austin, TX",
//             appliedDate: "2023-05-20",
//             status: "Offer",
//       },
//       {
//             id: 5,
//             title: "DevOps Engineer",
//             company: "CloudSys",
//             location: "Seattle, WA",
//             appliedDate: "2023-05-15",
//             status: "Rejected",
//       },
// ]



export default function AppliedJobs() {

      const [user] = useUserData()
      const { data, loading, error } = useApiRequest<any>(
            `user/get-saved-jobs?user_id=${user?._id}`,
            "GET"
      )

      const [initialJobs, setInitialJobs] = useState<Job[]>([])
      const [jobs, setJobs] = useState(initialJobs)
      useEffect(() => {
            setInitialJobs(data?.data)
            setJobs(data?.data)
      }, [data]);


      const [searchTerm, setSearchTerm] = useState("")
      const [statusFilter, setStatusFilter] = useState<string | undefined>()
      const [savedJobs, setSavedJobs] = useState<number[]>([])

      const filteredJobs = jobs?.filter(
            searchTerm.length === 0
                  ? (job: any) => job
                  : (job: any) => job?.job_post?.job_title?.toLowerCase()?.includes(searchTerm.toLowerCase())
      )


      const getStatusColor = (status: boolean) => {
            switch (status) {
                  case true:
                        return "bg-blue-100 text-blue-800"
                  case false:
                        return "bg-red-100 text-red-800"
            }
      }

      const toggleSaveJob = (jobId: number) => {
            setSavedJobs((prev) =>
                  prev.includes(jobId)
                        ? prev.filter((id) => id !== jobId)
                        : [...prev, jobId]
            )
      }

      return (
            <div className="  ">
                  <h1 className="mb-6 text-3xl font-bold">Saved Jobs</h1>
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                        <div className="relative flex-grow">
                              <Input
                                    type="text"
                                    placeholder="Search jobs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                              />
                              <Search
                                    className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                                    size={20}
                              />
                        </div>
                        <Select onValueChange={setStatusFilter}>
                              <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="Filter by status" />
                              </SelectTrigger>
                              <SelectContent>
                                    <SelectItem value="all">All Statuses</SelectItem>
                                    <SelectItem value="Applied">Applied</SelectItem>
                                    <SelectItem value="In Review">In Review</SelectItem>
                                    <SelectItem value="Interview">Interview</SelectItem>
                                    <SelectItem value="Offer">Offer</SelectItem>
                                    <SelectItem value="Rejected">Rejected</SelectItem>
                              </SelectContent>
                        </Select>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredJobs?.map((job: any) => (
                              <Card key={job?._id} className="flex flex-col">
                                    <CardHeader>
                                          <CardTitle className="flex items-start justify-between">
                                                <span className="text-xl font-semibold">{job?.job_post?.job_title}</span>
                                                <div className="flex items-center space-x-2">
                                                      <Badge className={getStatusColor(job?.job_post?.status)}>
                                                            {job?.job_post?.status ? 'Active' : 'Inactive'}
                                                      </Badge>
                                                      <Link
                                                            href={`/search-details/job-details/${job?.job_post?.url}`}
                                                            className="h-auto p-0"
                                                      >
                                                            <Bookmark className="h-5 w-5 text-blue-500" />
                                                      </Link>
                                                </div>
                                          </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                          <div className="space-y-2 text-sm">
                                                <div className="flex items-center">
                                                      <Building2 size={16} className="mr-2 text-gray-500" />
                                                      <span>{job?.job_post?.company_info?.name}</span>
                                                </div>
                                                <div className="flex items-center">
                                                      <MapPin size={16} className="mr-2 text-gray-500" />
                                                      <span>{job?.job_post?.location?.remote ? "Remote" : job?.job_post?.location?.division}</span>
                                                </div>
                                                <div className="flex items-center">
                                                      <Calendar size={16} className="mr-2 text-gray-500" />
                                                      <span>Saved on {new Date(job?.updated_at).toDateString()}</span>
                                                </div>
                                          </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                          <Link href={`/search-details/job-details/${job?.job_post?.url}`} >
                                                View Details
                                          </Link>
                                    </CardFooter>
                              </Card>
                        ))}
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                        <Button variant="outline" size="sm" className="flex items-center">
                              <ChevronLeft size={16} className="mr-2" />
                              Previous
                        </Button>
                        <span className="text-sm text-gray-600">Page 1 of 1</span>
                        <Button variant="outline" size="sm" className="flex items-center">
                              Next
                              <ChevronRight size={16} className="ml-2" />
                        </Button>
                  </div>
            </div>
      )
}
