"use client"

import Head from "next/head"
import { useParams } from "next/navigation"
import { dummyJobs } from "@/public/assets/dummyData"
import { useUserData } from "@/utils/encript_decript"
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyIcon as CurrencyDollarIcon,
  MapPinIcon,
} from "lucide-react"
import { toast } from "react-toastify"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import ApplyModal from "@/components/ApplyModal"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SecondaryBtn from "@/components/SecondaryBtn"
import ShareButton from "@/components/ShareButton"
import useApiForPost from "@/app/hooks/useApiForPost"
import useApiRequest from "@/app/hooks/useApiRequest"

import JobDetailsSkeleton from "./components/JobDetailsSkeleton"

const JobsDetails = () => {
  const { slug } = useParams()
  const [user] = useUserData()

  const { data, loading, error } = useApiRequest<any>(
    `jobs/get-by-url?url=${slug}`,
    "GET"
  )

  const { apiRequest } = useApiForPost()

  const save_jobs = async (job_id: any) => {
    if (!user) {
      toast.warning("You need to login to save jobs")
      return
    }
    const upload_data = {
      user_id: user._id,
      job_id,
    }
    if (!user._id) {
      toast.info("You need to login to save jobs")
      return
    }
    if (!job_id) {
      toast.error("Something went wrong")
      return
    }
    const { data, error } = await apiRequest<any>(
      `api/v1/user/save-jobs`,
      "POST",
      upload_data
    )
    if (error) {
      toast.error(error.message)
    } else {
      toast.success(data.message)
    }
  }

  if (loading) {
    return <JobDetailsSkeleton />
  }

  if (error) {
    return <div>Error loading job details. Please try again later.</div>
  }

  const jobData = data?.data
  const jobUrl = `https://kalbelajobs.com/jobs/${slug}`

  return (
    <MaxWidthWrapper>
      <Head>
        <title>{jobData?.job_title || "Job Details"} | YourJobSite</title>
        <meta
          name="description"
          content={`${jobData?.job_title} - ${jobData?.company_info?.name}. ${jobData?.job_description?.slice(0, 160)}...`}
        />
        <meta
          property="og:title"
          content={`${jobData?.job_title} | YourJobSite`}
        />
        <meta
          property="og:description"
          content={`${jobData?.job_title} - ${jobData?.company_info?.name}. ${jobData?.job_description?.slice(0, 160)}...`}
        />
        <meta property="og:image" content={jobData?.company_info?.logo || ``} />
        <meta property="og:url" content={jobUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={jobData?.company_info?.logo} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            title: jobData?.job_title,
            description: jobData?.job_description,
            datePosted: jobData?.posted_date,
            validThrough: jobData?.expiry_date,
            employmentType: jobData?.job_type,
            hiringOrganization: {
              "@type": "Organization",
              name: jobData?.company_info?.name,
              logo: jobData?.company_info?.logo,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: jobData?.location?.country,
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: jobData?.salary_range?.currency,
              value: {
                "@type": "QuantitativeValue",
                minValue: jobData?.salary_range?.min,
                maxValue: jobData?.salary_range?.max,
                unitText: "YEAR",
              },
            },
          })}
        </script>
      </Head>
      <div className="flex flex-col gap-8 py-4 pb-14 md:gap-4 lg:flex-row">
        {/* Left Section */}
        <div className="flex-1 text-[18px]">
          <Card className="border-none bg-transparent shadow-none md:border md:shadow-lg lg:p-6">
            <div className="mb-4 flex items-start justify-between">
              <h1 className="text-2xl font-bold text-primary md:text-4xl">
                {jobData?.job_title}
              </h1>
              <ShareButton
                url={jobUrl}
                title={`${jobData?.job_title} at ${jobData?.company_info?.name}`}
              />
            </div>
            <div className="mb-4 flex flex-wrap gap-1 md:gap-4">
              <Badge
                variant="secondary"
                className="border border-black border-opacity-30 px-3 py-1 text-sm dark:border-gray-400"
              >
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                {jobData?.job_type}
              </Badge>
              <Badge
                variant="secondary"
                className="border border-black border-opacity-30 px-3 py-1 text-sm dark:border-gray-400"
              >
                <MapPinIcon className="mr-2 h-4 w-4" />
                {jobData?.location?.country}
              </Badge>
              <Badge
                variant="secondary"
                className="border border-black border-opacity-30 px-3 py-1 text-sm dark:border-gray-400"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Deadline: {jobData?.expiry_date}
              </Badge>
              <Badge
                variant="secondary"
                className="border border-black border-opacity-30 px-3 py-1 text-sm dark:border-gray-400"
              >
                <CurrencyDollarIcon className="mr-2 h-4 w-4" />
                {jobData?.salary_negotiable
                  ? "Salary: Negotiable"
                  : `Salary: ${jobData?.salary_range?.min} - ${jobData?.salary_range?.max} ${jobData?.salary_range?.currency}`}
              </Badge>
            </div>
            <div className="space-y-4">
              <JobSection
                title="About the job"
                content={jobData?.job_description}
              />
              <JobSection title="Benefits" content={jobData?.benefit} />
              <JobSection title="Required Skills">
                <ul className="flex flex-wrap gap-2">
                  {jobData?.skills.map((skill: string) => (
                    <Badge variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </ul>
              </JobSection>
              <JobSection
                title="Experience level"
                content={jobData?.experience_level}
              />
              <JobSection
                title="Responsibilities"
                content={jobData?.responsibilities}
              />
            </div>
            <div className="flex items-center gap-4 pt-8 font-semibold">
              <ApplyModal
                slug={jobData?.url}
                company={jobData?.company_info?.company_id}
                user={user}
              />
              <SecondaryBtn onClick={() => save_jobs(jobData?._id)}>
                Save
              </SecondaryBtn>
            </div>
          </Card>
        </div>

        {/* Right Section */}
        <div className="lg:w-96">
          <div className=" ">
            <CardTitle className="mb-5 text-2xl font-bold">
              Similar Jobs
            </CardTitle>
            <div className="space-y-4">
              {dummyJobs?.slice(2, 5).map((jobPost, index) => (
                <Card
                  key={index}
                  className="p-4 transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-0">
                    <h3 className="mb-2 text-lg font-semibold">
                      {jobPost?.title}
                    </h3>
                    <div className="mb-2 flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {jobPost?.workMode}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {jobPost?.jobType}
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Salary: {jobPost?.salary.slice(0, 9)} | Deadline:{" "}
                      {jobPost.deadline}
                    </p>
                    <p className="mb-4 text-sm">
                      {jobPost.description.slice(0, 100)}...
                    </p>
                    <SecondaryBtn
                      onClick={() => save_jobs(jobPost?.id)}
                      className="w-full"
                    >
                      Save Job
                    </SecondaryBtn>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

const JobSection = ({
  title,
  content,
  children,
}: {
  title: string
  content?: string
  children?: React.ReactNode
}) => (
  <div>
    <h2 className="mb-2 text-xl font-semibold">{title}</h2>
    {content ? (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="tajawal-font text-sm capitalize text-muted-foreground md:text-base"
      />
    ) : (
      children
    )}
  </div>
)

export default JobsDetails
