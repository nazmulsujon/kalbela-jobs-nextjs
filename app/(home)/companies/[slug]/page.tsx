"use client"

import React from "react"
import { useParams } from "next/navigation"

import useApiRequest from "@/app/hooks/useApiRequest"

import CompanyJobs from "./components/CompanyJobs"
import CompanyProfile from "./components/CompanyProfile"

const Companies = () => {
  const { slug } = useParams()
  const { data, loading, error } = useApiRequest<any>(
    `jobs/organization-jobs?slug=${slug}`,
    "GET"
  )

  console.log("data from companies", data?.data?.company_info)
  return (
    <div>
      <CompanyProfile company_info={data?.data?.company_info} />
      <CompanyJobs jobs={data?.data?.jobs} loading={loading} />
    </div>
  )
}

export default Companies
