import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, Building2, MapPin } from 'lucide-react'

type Job = {
      id: number
      title: string
      company: string
      location: string
      salary: string
      postedDate: string
      logo: string
      status: string
}

type JobCardProps = {
      job: Job
      statusColor: string
}

export function JobCard({ job, statusColor }: JobCardProps) {
      return (
            <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                        <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 rounded-full" />
                        <div className="flex-1">
                              <CardTitle className="text-xl">{job.title}</CardTitle>
                              <p className="text-sm text-gray-500">{job.company}</p>
                        </div>
                        <Badge className={statusColor}>{job.status}</Badge>
                  </CardHeader>
                  <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                              <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-gray-400" />
                                    <span className="text-sm">{job.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <Briefcase size={16} className="text-gray-400" />
                                    <span className="text-sm">{job.salary}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <Building2 size={16} className="text-gray-400" />
                                    <span className="text-sm">{job.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-gray-400" />
                                    <span className="text-sm">Applied on {job.postedDate}</span>
                              </div>
                        </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                        <a href="#" className="text-sm text-blue-600 hover:underline">View Application</a>
                  </CardFooter>
            </Card>
      )
}
