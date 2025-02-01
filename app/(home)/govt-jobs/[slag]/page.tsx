"use client"

import React from "react"
import Link from "next/link"
import { Calendar, Eye, Globe, Users } from "lucide-react"
import { format } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import useApiRequest from "@/app/hooks/useApiRequest"
import { Badge } from "@/components/ui/badge"
import ShareButton from "@/components/ShareButton"

const Page = ({ params }: { params: { slag: string } }) => {
      const { data: singleJobData, loading: singleJobLoading } = useApiRequest<Record<string, any>>(
            `jobs/get-single-govt-job?job_id=${params.slag}`,
            "GET"
      );

      const [relatedJobs, setRelatedJobs] = React.useState<any>(null);
      const [relatedJobsLoading, setRelatedJobsLoading] = React.useState(false);

      React.useEffect(() => {
            const fetchRelatedJobs = async () => {
                  if (singleJobData?.data?.organization?.id) {
                        setRelatedJobsLoading(true);
                        try {
                              const response = await fetch(
                                    `${process.env.NEXT_APP_BASE_URL}/api/v1/jobs/get-govt-suggestions-by-org?org_id=${singleJobData.data.organization.id}`
                              );
                              const data = await response.json();
                              setRelatedJobs(data);
                        } catch (error) {
                              console.error("Error fetching related jobs:", error);
                        } finally {
                              setRelatedJobsLoading(false);
                        }
                  }
            };

            fetchRelatedJobs();
      }, [singleJobData?.data?.organization?.id, params.slag]);







      return (
            <section className="">
                  <MaxWidthWrapper className="grid gap-6 py-6 md:grid-cols-[350px,1fr] md:py-10">
                        {/* Left Sidebar - Job Listings */}
                        <div className="space-y-4">
                              {relatedJobsLoading
                                    ? Array.from({ length: 4 }).map((_, index) => (
                                          <Card key={index} className="p-4">
                                                <div className="flex gap-4">
                                                      <Skeleton className="h-16 w-16 rounded-full" />
                                                      <div className="flex-1 space-y-2">
                                                            <Skeleton className="h-4 w-3/4" />
                                                            <Skeleton className="h-4 w-1/2" />
                                                            <Skeleton className="h-4 w-1/4" />
                                                      </div>
                                                </div>
                                          </Card>
                                    ))
                                    : relatedJobs?.data?.map((job: any) => (
                                          <Link href={`/govt-jobs/${job._id}`} key={job._id}>
                                                <Card
                                                      className={`transition-all hover:shadow-md mb-2 ${job._id === params.slag ? "border-2 bg-blue-100" : ""}`}
                                                >
                                                      <div className="space-y-4 p-4">
                                                            <div className="flex items-start gap-4">
                                                                  <Avatar className="h-16 w-16">
                                                                        <AvatarImage src={job?.organization?.logo} alt={job?.organization?.name} className=" w-full h-full" />
                                                                        <AvatarFallback>{job?.organization?.name?.[0]}</AvatarFallback>
                                                                  </Avatar>
                                                                  <div className="flex-1">
                                                                        <h3 className="font-semibold">{job.title}</h3>
                                                                        <p className="text-sm text-muted-foreground">{job?.organization?.name}</p>
                                                                        <p className="text-xs text-muted-foreground">Job ID: {job._id}</p>
                                                                  </div>
                                                            </div>

                                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                                  <div className="flex items-center gap-1">
                                                                        <Globe className="h-4 w-4" />
                                                                        <a href={job._id} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                                              Apply Online
                                                                        </a>
                                                                  </div>
                                                                  <div className="flex items-center gap-1">
                                                                        <Users className="h-4 w-4" />
                                                                        <span>{job.vacancy} vacancy</span>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </Card>
                                          </Link>
                                    ))}
                        </div>

                        {/* Right Content - Job Details */}
                        <div className="space-y-6">
                              {singleJobLoading ? (
                                    <Card className="p-6">
                                          <div className="flex gap-6">
                                                <Skeleton className="h-24 w-24 rounded-xl" />
                                                <div className="flex-1 space-y-4">
                                                      <Skeleton className="h-8 w-3/4" />
                                                      <Skeleton className="h-4 w-1/2" />
                                                      <Skeleton className="h-4 w-1/4" />
                                                </div>
                                          </div>
                                    </Card>
                              ) : (
                                    singleJobData?.data && (
                                          <Card className="overflow-hidden">
                                                <div className="border-b p-6">
                                                      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                                            <div className="flex gap-6">
                                                                  <Avatar className="h-24 w-24 rounded-xl">
                                                                        <AvatarImage
                                                                              src={singleJobData.data.organization.logo}
                                                                              alt={singleJobData.data.organization.name}
                                                                        />
                                                                        <AvatarFallback>
                                                                              {singleJobData.data.organization.name[0]}
                                                                        </AvatarFallback>
                                                                  </Avatar>
                                                                  <div>
                                                                        <h1 className="text-2xl font-bold">
                                                                              {singleJobData.data.organization.name}

                                                                        </h1>
                                                                        <p className="text-lg text-muted-foreground">
                                                                              {singleJobData.data.title}
                                                                        </p>
                                                                        <div className="mt-2 flex items-center gap-2">
                                                                              <Badge variant="outline" className="bg-green-500">
                                                                                    Status: {singleJobData.data.status ? "Live" : "Closed"}
                                                                              </Badge>
                                                                              <p className="text-sm text-muted-foreground">
                                                                                    ADV NO: {singleJobData.data.advertisementNo}
                                                                              </p>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                  <ShareButton
                                                                        url={String(`${window.location.origin}${window.location.pathname}`)}
                                                                        title={String(`${singleJobData?.data?.title || 'Job'} on ${singleJobData?.data?.organization?.name || 'Company'}`)}
                                                                  />


                                                                  <a href={singleJobData.data.hyperlink} target="_blank" rel="noopener noreferrer">
                                                                        <Button className="bg-primary hover:bg-primary-dark">
                                                                              Apply Online
                                                                        </Button>
                                                                  </a>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="grid gap-6 p-6 md:grid-cols-3">
                                                      <Card className="p-4">
                                                            <div className="flex items-center gap-2">
                                                                  <Calendar className="h-5 w-5 text-muted-foreground" />
                                                                  <div>
                                                                        <p className="text-sm font-medium">Start Date</p>
                                                                        <p className="text-sm text-muted-foreground">
                                                                              {format(new Date(singleJobData.data.applicationStartDate), "dd MMM yyyy hh:mm a")}
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </Card>
                                                      <Card className="p-4">
                                                            <div className="flex items-center gap-2">
                                                                  <Calendar className="h-5 w-5 text-muted-foreground" />
                                                                  <div>
                                                                        <p className="text-sm font-medium">Deadline</p>
                                                                        <p className="text-sm text-muted-foreground">
                                                                              {format(new Date(singleJobData.data.applicationDeadline), "dd MMM yyyy hh:mm a")}
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </Card>
                                                      <Card className="p-4">
                                                            <div className="flex items-center gap-2">
                                                                  <Eye className="h-5 w-5 text-muted-foreground" />
                                                                  <div>
                                                                        <p className="text-sm font-medium">Viewed By</p>
                                                                        <p className="text-sm text-muted-foreground">{singleJobData.data.views ?? 1}</p>
                                                                  </div>
                                                            </div>
                                                      </Card>
                                                </div>
                                                <div className="px-6 pb-6">
                                                      <div className="aspect-[16/9] w-full rounded-lg bg-zinc-700 flex  items-center justify-center">
                                                            {singleJobData.data.uploadDocument ? (
                                                                  singleJobData.data.uploadDocument.endsWith(".pdf") ? (
                                                                        <iframe src={singleJobData.data.uploadDocument} className="w-full  rounded h-full" />
                                                                  ) : (
                                                                        <img
                                                                              src={singleJobData.data.uploadDocument}
                                                                              alt="Advertisement Document"
                                                                              className="w-full h-full object-cover"
                                                                        />
                                                                  )
                                                            ) : (
                                                                  <p className="text-center text-white">No document available</p>
                                                            )}
                                                      </div>
                                                </div>
                                          </Card>
                                    )
                              )}
                        </div>
                  </MaxWidthWrapper>
            </section>
      )
}

export default Page
