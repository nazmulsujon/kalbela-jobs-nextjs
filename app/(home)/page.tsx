import { Fragment } from "react"
import dynamic from "next/dynamic"

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
