"use client"

import useApiRequest from '@/app/hooks/useApiRequest';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { formatDate } from '@/lib/utils';
import { useParams } from 'next/navigation';
import React from 'react';

const SingleResourceContent = () => {
  const { slug } = useParams();
  const { data, loading, error } = useApiRequest<any>(
    `resource/single?id=${slug}`,
    "GET"
  );

  console.log("data", data);

  return (
    <MaxWidthWrapper className="mt-6 lg:mt-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            {data?.data?.name}
          </h1>
          <div className="flex items-center justify-center mt-8 space-x-2">
            <p className="text-base font-medium text-gray-500">
              {
                !loading && data?.data?.created_at && formatDate(data?.data?.created_at)
              }
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
          <img
            className="object-cover w-3/4 h-2/3 mx-auto"
            src={data?.data?.photo}
            alt={data?.data?.name}
          />
        </div>
        <div className="grid grid-cols-1 mt-4 sm:mt-6 lg:mt-8 lg:grid-cols-12 lg:gap-x-12 gap-y-4 mb-10 lg:mb-16">

          <div className="hidden lg:block lg:col-span-2" />
          <article className="prose lg:col-span-8 max-w-none prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-lg prose-blockquote:leading-8">

            <p
              className="mt-4 text-gray-600"
              dangerouslySetInnerHTML={{ __html: data?.data?.description }}
            ></p>

          </article>
        </div>
      </div>
    </MaxWidthWrapper>

  );
};

export default SingleResourceContent;
