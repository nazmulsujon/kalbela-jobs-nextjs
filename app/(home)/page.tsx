import { Fragment } from "react"
import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("./components/HeroSection"))
const JobType = dynamic(() => import("./components/JobType"))
const FeaturedJobs = dynamic(() => import("./components/FeaturedJobs"))
const TopCompanies = dynamic(() => import("./components/TopCompanies"))
const InterviewQuestions = dynamic(
  () => import("./components/InterviewQuestions")
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
