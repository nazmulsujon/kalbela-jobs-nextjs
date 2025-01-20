"use client"

import React from "react"
import { useParams } from "next/navigation"

import { formatDate } from "@/lib/utils"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import useApiRequest from "@/app/hooks/useApiRequest"

const SingleResourceContent = () => {
  const { slug } = useParams()
  const { data, loading, error } = useApiRequest<any>(
    `resource/single?id=${slug}`,
    "GET"
  )

  console.log("data", data)

  return (
    <MaxWidthWrapper className="mt-6 lg:mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            {data?.data?.name}
          </h1>
          <div className="mt-8 flex items-center justify-center space-x-2">
            <p className="text-base font-medium text-gray-500">
              {!loading &&
                data?.data?.created_at &&
                formatDate(data?.data?.created_at)}
            </p>
          </div>
        </div>
        <div className="aspect-w-16 aspect-h-9 lg:aspect-h-6 mt-8 sm:mt-12 lg:mt-16">
          <img
            className="mx-auto h-2/3 w-3/4 object-cover"
            src={data?.data?.photo}
            alt={data?.data?.name}
          />
        </div>
        <div className="mb-10 mt-4 grid grid-cols-1 gap-y-4 sm:mt-6 lg:mb-16 lg:mt-8 lg:grid-cols-12 lg:gap-x-12">
          <div className="hidden lg:col-span-2 lg:block" />
          <article className="prose prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-lg prose-blockquote:leading-8 max-w-none lg:col-span-8">
            <p
              className="mt-4 text-gray-600"
              dangerouslySetInnerHTML={{ __html: data?.data?.description }}
            ></p>
          </article>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default SingleResourceContent
