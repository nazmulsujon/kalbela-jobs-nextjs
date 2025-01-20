import { Fragment } from "react"
import { Metadata } from "next"

import FeaturedJobs from "./components/FeaturedJobs"
import HeroSection from "./components/HeroSection"
import InterviewQuestions from "./components/InterviewQuestions"
import JobType from "./components/JobType"
import TopCompanies from "./components/TopCompanies"
import NesLetter from "./components/NesLetter"
import VerticalMarquee from "./components/VerticalMarquee"
import Testimonial from "./components/Testimonial"

export const metadata: Metadata = {
      title: "Kalbela Jobs || Find Your Dream Job Today",
      description:
            "Discover top jobs and career opportunities on Kalbela Jobs. Explore featured jobs, top companies, and expert interview tips to boost your career.",
      keywords: [
            "jobs",
            "job portal",
            "career opportunities",
            "Kalbela",
            "featured jobs",
            "top companies",
            "interview tips",
      ],
      icons: {
            icon: "/favicon.ico",
      },
}

const HomePage = () => {
      return (
            <Fragment>

                  <div className="relative">
                        <div className="z-50">
                              <HeroSection />
                              <JobType />
                        </div>
                        <div className="absolute top-0 right-0 w-full z-0 pointer-events-none">
                              <VerticalMarquee />
                        </div>

                        <FeaturedJobs />
                  </div>

                  <TopCompanies />

                  <InterviewQuestions />
                  <Testimonial />
                  <NesLetter />
            </Fragment>
      )
}

export default HomePage
