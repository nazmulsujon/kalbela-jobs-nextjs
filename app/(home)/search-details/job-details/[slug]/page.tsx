"use client"

import { useParams } from "next/navigation"
import { dummyJobs } from "@/public/assets/dummyData"

import { Badge } from "@/components/ui/badge"
import { Card, CardTitle } from "@/components/ui/card"
import ApplyModal from "@/components/ApplyModal"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SecondaryBtn from "@/components/SecondaryBtn"
import useApiRequest from "@/app/hooks/useApiRequest"
import { useUserData } from "@/utils/encript_decript"
import useApiForPost from "@/app/hooks/useApiForPost"
import { ToastAction } from "@/components/ui/toast"


const JobsDetails = () => {
      const { slug } = useParams()
      const [user] = useUserData()

      const { data, loading, error } = useApiRequest<any>(
            `jobs/get-by-url?url=${slug}`,
            "GET"
      )

      const { apiRequest } = useApiForPost()

      const save_jobs = async (job_id: any) => {
            const upload_data = {
                  user_id: user._id,
                  job_id
            }
            if (!user._id) {
                  alert('need to login')
            }
            if (!job_id) {
                  alert('Something went wrong')
            }
            const { data, error } = await apiRequest<any>(
                  `api/v1/user/save-jobs`,
                  "POST",
                  upload_data
            )
            if (error) {
                  alert(error.message)
            }
            else {
                  alert(data.message)
            }
      }

      return (
            <MaxWidthWrapper>
                  <div className="flex flex-col gap-8 py-6 pb-14 md:gap-4 lg:flex-row px-2">
                        {/* Left Section */}
                        <div className="content-container flex-1 space-y-2.5 text-[18px]">
                              <h1 className="mb-5 text-xl font-semibold md:text-3xl">
                                    {data?.data?.job_title}
                              </h1>
                              <p className="flex space-x-2 text-base md:text-lg">
                                    <strong>Job Type:</strong> <span>{data?.data?.job_type}</span>
                              </p>
                              {/* <p className="pt-1 text-base md:text-lg">
            <strong>Work Type:</strong> {data?.data?.work_mode}
          </p> */}
                              <p className="flex space-x-2 pt-1">
                                    <strong>Salary:</strong>
                                    <span>
                                          {data?.data?.salary_negotiable
                                                ? "Negotiable"
                                                : `${data?.data?.salary_range?.min} -
                  ${data?.data?.salary_range?.max} ${data?.data?.salary_range?.currency}`}
                                    </span>
                              </p>

                              <p className="flex space-x-2 text-base md:text-lg">
                                    <strong className="text-nowrap">About the job:</strong>
                                    <span
                                          dangerouslySetInnerHTML={{
                                                __html: data?.data?.job_description,
                                          }}
                                    />
                              </p>

                              <p className="flex space-x-2 text-base md:text-lg">
                                    <strong>Benifits:</strong>
                                    <span
                                          dangerouslySetInnerHTML={{
                                                __html: data?.data?.benefit,
                                          }}
                                    />
                              </p>

                              <div className="pt-1">
                                    <h2 className="text-lg font-semibold">Required Skills:</h2>
                                    <ul className="ml-5 list-disc">
                                          {data?.data?.skills.map((skill: string) => (
                                                <li key={skill}>{skill}</li>
                                          ))}
                                    </ul>
                              </div>

                              <p className="flex space-x-2 text-base md:text-lg">
                                    <strong>Experience level:</strong>{" "}
                                    <span>{data?.data?.experience_level}</span>
                              </p>

                              <p className="flex space-x-2 text-base md:text-lg">
                                    <strong>Responsibilities:</strong>
                                    <span
                                          dangerouslySetInnerHTML={{
                                                __html: data?.data?.responsibilities,
                                          }}
                                    />
                              </p>

                              <p className="flex space-x-2 text-base md:text-lg">
                                    <strong>Deadline:</strong> <span>{data?.data?.expiry_date}</span>
                              </p>

                              <p className="flex space-x-2 text-base md:text-lg">
                                    <strong>Location:</strong>{" "}
                                    <span>{data?.data?.location?.country}</span>
                              </p>

                              {/* Other details */}
                              <div className="flex items-center gap-4 pt-8 font-semibold">
                                    <ApplyModal />
                                    <SecondaryBtn onClick={() => save_jobs(data?.data._id)}> Save </SecondaryBtn>
                              </div>
                        </div>

                        {/* Right Section */}
                        <div className="p-2 lg:w-96">
                              <h1 className="mb-5 text-2xl font-semibold"> Find Out More ....</h1>
                              <div className="my-5">
                                    {dummyJobs?.slice(2, 3).map((jobPost, index) => (
                                          <Card className="p-4" key={index}>
                                                <div key={jobPost?.id}>
                                                      <div>
                                                            <CardTitle className="pb-1.5 text-2xl">
                                                                  {jobPost?.title}
                                                            </CardTitle>
                                                            <div className="flex items-center justify-start gap-4 pb-2">
                                                                  <Badge variant="secondary" className="py-0.5">
                                                                        {jobPost?.workMode}
                                                                  </Badge>
                                                                  <Badge variant="secondary" className="py-0.5">
                                                                        {jobPost?.jobType}
                                                                  </Badge>
                                                            </div>
                                                            <div className="flex items-center gap-5">
                                                                  <p>
                                                                        <span>Salary :</span> {jobPost?.salary.slice(0, 9)}
                                                                  </p>
                                                                  |<p className="my-1">{jobPost.deadline}</p>
                                                            </div>
                                                            <p className="mt-1">{jobPost.description.slice(0, 100)}</p>

                                                            {/* user Action Area */}
                                                            <div
                                                                  className={`flex items-center gap-4 pt-4 font-semibold`}
                                                            >
                                                                  <ApplyModal />

                                                                  <SecondaryBtn onClick={() => save_jobs(jobPost?.id)}>Save</SecondaryBtn>
                                                            </div>
                                                      </div>
                                                </div>
                                          </Card>
                                    ))}
                              </div>
                        </div>
                  </div>
            </MaxWidthWrapper >
      )
}

export default JobsDetails
