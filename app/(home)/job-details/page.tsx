"use client"

import Link from "next/link"
import { dummyJobs } from "@/public/assets/dummyData"

import { Badge } from "@/components/ui/badge"
import { Card, CardTitle } from "@/components/ui/card"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import PrimaryBtn from "@/components/PrimaryBtn"
import SecondaryBtn from "@/components/SecondaryBtn"

const JobsDetails = () => {
  const jobDetails = {
    id: "3",
    title: "React Developer",
    company: "Tech Solutions",
    companyLogo: "/company-logo.png",
    experience: "1-3 Years of Experience",
    salary: "৳4,00,000 - ৳6,00,000",
    location: "Bangalore",
    position: "Senior React Developer",
    description:
      "We are looking for a skilled React Developer to join our development team and help build modern web applications.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Redux",
      "Webpack",
      "Node.js",
    ],
    benefits: ["Festival Bonuses", "Retirement Plan", "Flexible Work Hours"],
    postedDate: "15+ Days Ago",
    workMode: "Hybrid",
    jobType: "Full-Time",
    companyType: "IT Services",
    education: "Bachelor's Degree",
    deadline: "2023-02-20",
  }

  return (
    <MaxWidthWrapper>
      <div className="flex md:gap-4 py-6 pb-14 flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="space-y-2.5 content-container text-[18px] flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold mb-5">
            {jobDetails.title}
          </h1>
          <p className="text-base md:text-lg">
            <strong>Job Type:</strong> {jobDetails.jobType}
          </p>
          <p className="pt-1 text-base md:text-lg">
            <strong>Work Type:</strong> {jobDetails.workMode}
          </p>
          <p className="pt-1">
            <strong>Salary:</strong> {jobDetails.salary}
          </p>

          <p className="text-base md:text-lg">
            <strong>About the job:</strong> {jobDetails.description}
          </p>
          <div className="pt-1">
            <h2 className="text-lg font-semibold">Required Skills:</h2>
            <ul className="list-disc ml-5">
              {jobDetails.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          {/* Other details */}
          <div className="pt-8 flex items-center gap-4 font-semibold">
            <Link href="#">
              <PrimaryBtn>Apply Now</PrimaryBtn>
            </Link>
            <Link href="#">
              <SecondaryBtn>Save</SecondaryBtn>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-2 lg:w-96">
          <h1 className="text-2xl font-semibold mb-5"> Find Out More ....</h1>
          <div className="my-5">
            {dummyJobs?.slice(2, 3).map((jobPost, index) => (
              <Card className="p-4" key={index}>
                <div key={jobPost?.id}>
                  <div>
                    <CardTitle className="text-2xl pb-1.5">
                      {jobPost?.title}
                    </CardTitle>
                    <div className="flex justify-start items-center gap-4 pb-2">
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
                      <Link href="#">
                        <PrimaryBtn>Apply Now</PrimaryBtn>
                      </Link>

                      <Link href="#">
                        <SecondaryBtn>Save</SecondaryBtn>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default JobsDetails
