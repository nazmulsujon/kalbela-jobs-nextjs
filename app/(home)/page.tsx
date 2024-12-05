import React from "react"

// import FeaturedJobs from "./components/FeaturedJobs"
import HeroSection from "./components/HeroSection"
import JobType from "./components/JobType"

// import InterviewQuestions from "./components/InterviewQuestions"
// import TopCompanies from "./components/TopCompanies"

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <JobType />
      {/* <FeaturedJobs /> */}
      {/* <TopCompanies /> */}
      {/* <InterviewQuestions /> */}
    </React.Fragment>
  )
}

export default HomePage
