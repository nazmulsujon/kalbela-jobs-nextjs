"use client"

import { useState } from "react"
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

type Job = {
      id: number
      title: string
      company: string
      location: string
      appliedDate: string
      status: "Applied" | "In Review" | "Interview" | "Offer" | "Rejected"
}

const initialJobs: Job[] = [
      {
            id: 1,
            title: "Frontend Developer",
            company: "TechCorp",
            location: "New York, NY",
            appliedDate: "2023-06-01",
            status: "In Review",
      },
      {
            id: 2,
            title: "UX Designer",
            company: "DesignHub",
            location: "San Francisco, CA",
            appliedDate: "2023-05-28",
            status: "Interview",
      },
      {
            id: 3,
            title: "Data Scientist",
            company: "DataWorks",
            location: "Boston, MA",
            appliedDate: "2023-05-25",
            status: "Applied",
      },
      {
            id: 4,
            title: "Product Manager",
            company: "InnovateCo",
            location: "Austin, TX",
            appliedDate: "2023-05-20",
            status: "Offer",
      },
      {
            id: 5,
            title: "DevOps Engineer",
            company: "CloudSys",
            location: "Seattle, WA",
            appliedDate: "2023-05-15",
            status: "Rejected",
      },
]

export default function AppliedJobs() {
      const [jobs, setJobs] = useState(initialJobs)
      const [searchTerm, setSearchTerm] = useState("")
      const [statusFilter, setStatusFilter] = useState<string | undefined>()
      const [savedJobs, setSavedJobs] = useState<number[]>([])

      const filteredJobs = jobs.filter(
            (job) =>
                  job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                  (!statusFilter || statusFilter === "all" || job.status === statusFilter)
      )

      const getStatusColor = (status: Job["status"]) => {
            switch (status) {
                  case "Applied":
                        return "bg-blue-100 text-blue-800"
                  case "In Review":
                        return "bg-yellow-100 text-yellow-800"
                  case "Interview":
                        return "bg-purple-100 text-purple-800"
                  case "Offer":
                        return "bg-green-100 text-green-800"
                  case "Rejected":
                        return "bg-red-100 text-red-800"
                  default:
                        return "bg-gray-100 text-gray-800"
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
                        {filteredJobs.map((job) => (
                              <Card key={job.id} className="flex flex-col">
                                    <CardHeader>
                                          <CardTitle className="flex items-start justify-between">
                                                <span className="text-xl font-semibold">{job.title}</span>
                                                <div className="flex items-center space-x-2">
                                                      <Badge className={getStatusColor(job.status)}>
                                                            {job.status}
                                                      </Badge>
                                                      <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => toggleSaveJob(job.id)}
                                                            className="h-auto p-0"
                                                      >
                                                            {savedJobs.includes(job.id) ? (
                                                                  <Bookmark className="h-5 w-5 text-blue-500" />
                                                            ) : (
                                                                  <Bookmark className="h-5 w-5" />
                                                            )}
                                                      </Button>
                                                </div>
                                          </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                          <div className="space-y-2 text-sm">
                                                <div className="flex items-center">
                                                      <Building2 size={16} className="mr-2 text-gray-500" />
                                                      <span>{job.company}</span>
                                                </div>
                                                <div className="flex items-center">
                                                      <MapPin size={16} className="mr-2 text-gray-500" />
                                                      <span>{job.location}</span>
                                                </div>
                                                <div className="flex items-center">
                                                      <Calendar size={16} className="mr-2 text-gray-500" />
                                                      <span>Applied on {job.appliedDate}</span>
                                                </div>
                                          </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                          <Button variant="outline" size="sm">
                                                View Details
                                          </Button>
                                          {/* <Button variant="secondary" size="sm">Update Status</Button> */}
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
