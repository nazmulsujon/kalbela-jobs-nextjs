import { cn } from "@/lib/utils"

const ReviewCard = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <figure
      className={cn(
        "relative h-auto w-24 cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          className="rounded-full"
          width="80"
          height="80"
          alt=""
          src={logo}
        />
        <div className="flex flex-col">
          <figcaption className="text-xs font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export default ReviewCard
