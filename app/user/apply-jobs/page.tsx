'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Search, Briefcase, Calendar, Building2, MapPin, Filter } from 'lucide-react'
import { JobCard } from './job-card'

type Job = {
      id: number
      title: string
      company: string
      location: string
      salary: string
      postedDate: string
      logo: string
      status: 'Applied' | 'In Review' | 'Interview' | 'Offer' | 'Rejected'
}

const savedJobs: Job[] = [
      {
            id: 1,
            title: "Senior Frontend Developer",
            company: "TechCorp",
            location: "San Francisco, CA",
            salary: "$120,000 - $150,000",
            postedDate: "2023-12-20",
            logo: "/placeholder.svg?height=40&width=40",
            status: "Applied"
      },
      {
            id: 2,
            title: "UX Designer",
            company: "DesignHub",
            location: "New York, NY",
            salary: "$90,000 - $120,000",
            postedDate: "2023-12-18",
            logo: "/placeholder.svg?height=40&width=40",
            status: "In Review"
      },
      {
            id: 3,
            title: "Full Stack Developer",
            company: "WebSolutions",
            location: "Remote",
            salary: "$100,000 - $130,000",
            postedDate: "2023-12-15",
            logo: "/placeholder.svg?height=40&width=40",
            status: "Interview"
      },
]

export default function AppliedJobs() {
      const [searchTerm, setSearchTerm] = useState('')
      const [statusFilter, setStatusFilter] = useState<string | undefined>()
      const [sortBy, setSortBy] = useState<'date' | 'company'>('date')

      const getStatusColor = (status: Job['status']) => {
            switch (status) {
                  case 'Applied': return 'bg-blue-100 text-blue-800'
                  case 'In Review': return 'bg-yellow-100 text-yellow-800'
                  case 'Interview': return 'bg-purple-100 text-purple-800'
                  case 'Offer': return 'bg-green-100 text-green-800'
                  case 'Rejected': return 'bg-red-100 text-red-800'
                  default: return 'bg-gray-100 text-gray-800'
            }
      }

      const filteredJobs = savedJobs.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (!statusFilter || statusFilter === 'all' || job.status === statusFilter)
      ).sort((a, b) =>
            sortBy === 'date'
                  ? new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
                  : a.company.localeCompare(b.company)
      )

      return (
            <div className="container mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold mb-6">Applied Jobs</h1>
                  <Card className="mb-6">
                        <CardContent className="p-4">
                              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                    <div className="relative flex-grow">
                                          <Input
                                                type="text"
                                                placeholder="Search jobs..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="pl-10"
                                          />
                                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                              <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                          <Filter size={20} className="text-gray-500" />
                                          <span className="text-sm font-medium">Sort by:</span>
                                          <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'date' | 'company')}>
                                                <SelectTrigger className="w-[120px]">
                                                      <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                      <SelectItem value="date">Date</SelectItem>
                                                      <SelectItem value="company">Company</SelectItem>
                                                </SelectContent>
                                          </Select>
                                    </div>
                                    <span className="text-sm text-gray-600">{filteredJobs.length} jobs found</span>
                              </div>
                        </CardContent>
                  </Card>
                  <div className="space-y-4">
                        {filteredJobs.map((job) => (
                              <JobCard key={job.id} job={job} statusColor={getStatusColor(job.status)} />
                        ))}
                  </div>
                  <div className="flex justify-between items-center mt-8">
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
