import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

interface JobcardLargeProps {
  job: any
}

const JobcardLarge: React.FC<JobcardLargeProps> = ({ job }) => {
  return (
    <Link
      href={`/search-details/job-details/${job._id}`}
      className="block rounded border p-4 shadow-sm focus:outline-none focus:ring focus:ring-offset-2"
      key={job._id}
    >
      <article>
        <div className="relative border-b border-gray-400 pb-2">
          <header>
            <div className="max-w-64 md:max-w-xl">
              <h2 className="text-lg font-bold">{job.title}</h2>
            </div>
            <p className="my-0.5">{job.company_info?.name}</p>
            <div className="flex items-center space-x-4 text-sm">
              <span>{job.experience_level}</span>
              <span>
                {job.salary_negotiable
                  ? "Negotiable"
                  : `${job.salary_range?.min} - ${job.salary_range?.max} ${job.salary_range?.currency}`}
              </span>
            </div>
            <p className="mt-0.5 max-w-2xl truncate text-sm">
              {job.description}
            </p>
          </header>
          <div className="mt-2 flex flex-wrap gap-2">
            {job.skills?.map((skill: string, idx: number) => (
              <span
                key={idx}
                className="rounded border border-gray-400 px-2 py-1 text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs">{job.postedDate}</p>
          <div className="absolute right-0 top-0 w-16 md:w-28">
            <img
              className="rounded"
              src={job.company_info?.logo}
              alt={`${job.company_info?.name} logo`}
            />
          </div>
        </div>
        <footer className="flex items-center justify-between pt-1">
          <p className="text-sm">{job.expiry_date}</p>
          <Button
            className="text-sm hover:no-underline"
            size="sm"
            variant="link"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="me-1 size-4" /> Save for later
          </Button>
        </footer>
      </article>
    </Link>
  )
}

export default JobcardLarge
