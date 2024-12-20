import React from "react"
import Link from "next/link"
import { Linkedin } from "lucide-react"

const CompanyProfile = () => {
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
              src="https://kalbela-jobs-backend.vercel.app/api/v1/image/675f6be4949742e5a48cd306.png"
              alt="Logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Bright Future Soft
        </h1>

        {/* Buttons */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link
            target="blank"
            href="https://www.linkedin.com/company/brightfuturesoft/posts/?feedView=all"
            className="rounded-sm border border-gray-400 bg-white px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Website
          </Link>
          <Link
            target="blank"
            href="https://www.linkedin.com/company/brightfuturesoft/posts/?feedView=all"
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
