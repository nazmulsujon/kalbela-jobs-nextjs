import { Fragment } from "react"
import { Metadata } from "next"
import dynamic from "next/dynamic"

// metadata for the HomePage
export const metadata: Metadata = {
  title: "Kalbela Jobs Portal - Find Your Dream Job",
  description:
    "Discover top jobs and career opportunities on Kalbela Jobs Portal. Explore featured jobs, top companies, and expert interview tips to boost your career.",
  keywords: [
    "jobs",
    "job portal",
    "career opportunities",
    "Kalbela",
    "featured jobs",
    "top companies",
    "interview tips",
  ],
  openGraph: {
    title: "Kalbela Jobs Portal - Find Your Dream Job",
    description:
      "Explore career opportunities with Kalbela Jobs Portal. Access featured jobs, top companies, and expert interview tips.",
    url: "https://kalbela.com/jobs", //todo
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const HeroSection = dynamic(() => import("./components/HeroSection"), {
  ssr: false,
})
const JobType = dynamic(() => import("./components/JobType"), {
  ssr: false,
})
const FeaturedJobs = dynamic(() => import("./components/FeaturedJobs"), {
  ssr: false,
})
const TopCompanies = dynamic(() => import("./components/TopCompanies"), {
  ssr: false,
})
const InterviewQuestions = dynamic(
  () => import("./components/InterviewQuestions"),
  {
    ssr: false,
  }
)

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <JobType />
      <FeaturedJobs />
      <TopCompanies />
      <InterviewQuestions />
    </Fragment>
  )
}

export default HomePage
