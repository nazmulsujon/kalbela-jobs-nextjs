import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

interface JobcardLargeProps {
  job: any
}

const JobcardLarge: React.FC<JobcardLargeProps> = ({ job }) => {
  return (
    <div className="p-4 rounded shadow-sm border" key={job.id}>
      <div className="border-b border-gray-400 pb-2 relative">
        <div>
          <div className="max-w-64 md:max-w-xl">
            <Link href={`/jobs/${job.id}`} className="font-bold text-lg">
              {job.title}
            </Link>
          </div>
          <p className="my-0.5">{job.company}</p>
          <p className="my-0.5">{job.location}</p>
          <div className="flex items-center text-sm space-x-4">
            <span>{job.experience}</span>
            <span>{job.salary}</span>
          </div>
          <p className="max-w-2xl truncate mt-0.5 text-sm">{job.description}</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {job.skills.map((skill: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded border border-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs">{job.postedDate}</p>
        </div>
        <div className="w-16 md:w-28 absolute top-0 right-0">
          <img className="rounded" src={job.companyLogo} alt="company logo" />
        </div>
      </div>

      <div className="pt-1 flex justify-between items-center">
        <p className="text-sm">{job.deadline}</p>
        <Button className="hover:no-underline text-sm" size="sm" variant="link">
          <Heart className="size-4 me-1" /> Save for later
        </Button>
      </div>
    </div>
  )
}

export default JobcardLarge
