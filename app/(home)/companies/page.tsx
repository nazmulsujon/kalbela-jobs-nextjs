import React from "react"
import { Metadata } from "next"

import CompanyJobs from "./components/CompanyJobs"
import CompanyProfile from "./components/CompanyProfile"

export const metadata: Metadata = {
  title: "Top Companies Hiring - Kalbela Jobs Portal",
  description:
    "Explore top companies actively hiring on Kalbela Jobs Portal. Discover company profiles, job openings, and career opportunities.",
  keywords: [
    "top companies",
    "company jobs",
    "Kalbela Jobs",
    "company profiles",
    "career opportunities",
  ],

  icons: {
    icon: "/favicon.ico",
  },
}

const Companies = () => {
  return (
    <div>
      <CompanyProfile />
      <CompanyJobs />
    </div>
  )
}

export default Companies
