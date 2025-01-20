import { cn } from "@/lib/utils";

const ReviewCard = ({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-auto w-fit md:w-24 cursor-pointer overflow-hidden rounded-sm border p-1 md:p-2',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full hidden md:block lg:w-20' alt='logo' src={logo} />
        <div className='flex flex-col'>
          <figcaption className='text-[7px] md:text-xs md:font-medium dark:text-white text-nowrap'>
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default ReviewCard;
