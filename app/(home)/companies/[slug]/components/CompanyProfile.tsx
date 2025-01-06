"use client"

import React from "react"
import Link from "next/link"
import { Globe, Linkedin } from "lucide-react"

const CompanyProfile = ({ company_info }: { company_info: any }) => {
  return (
    <div className="relative mb-20 w-full">
      <section className="relative z-10">
        <img
          className="z-20 h-56 w-full object-cover"
          src="https://i.ibb.co.com/5WkHsQ3/company-cover-image.jpg"
          alt=""
        />
      </section>

      <div className="relative z-30 mx-auto -mt-12 max-w-2xl px-4 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
          <div className="relative h-16 w-16">
            <img
              src={company_info?.logo}
              alt="Logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {company_info?.company_name}
        </h1>

        {/* Buttons */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link
            target="blank"
            href={
              company_info?.company_website
                ? company_info?.company_website
                : "#"
            }
            className="rounded-sm border border-gray-400 bg-white p-2 px-3 text-gray-700 transition-colors hover:bg-gray-50"
          >
            <Globe className="h-5 w-5" />
          </Link>

          <Link
            target="blank"
            href={
              company_info?.company_website
                ? company_info?.company_website
                : "#"
            }
            className="rounded-sm border border-gray-400 bg-white p-2 px-3 text-gray-700 transition-colors hover:bg-gray-50"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
