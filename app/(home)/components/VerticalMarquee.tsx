import Marquee from '@/components/Marquee';
import { cn } from '@/lib/utils';

const companies = [
  {
    name: 'Kalbela Jobs',
    logo: '/logo.png',
  },
  {
    name: 'Kalbela Jobs',
    logo: '/logo.png',
  },
  {
    name: 'Kalbela Jobs',
    logo: '/logo.png',
  },
  {
    name: 'Kalbela Jobs',
    logo: '/logo.png',
  },
];

const firstRow = companies.slice(0, companies.length / 2);
const secondRow = companies.slice(companies.length / 2);

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
        'relative h-auto w-36 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full' width='100' height='100' alt='' src={logo} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

const VerticalMarquee = () => {
  return (
    <div className='relative flex h-96 flex-row items-center space-x-24 justify-center overflow-hidden sm:px-20 z-0 opacity-50 [perspective:300px]'>
      <Marquee pauseOnHover vertical className='[--duration:20s]'
        style={{
          transform:
            'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)',
        }}
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className='[--duration:20s]'
        style={{
          transform:
            'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)',
        }}
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className='[--duration:20s] hidden lg:block'
        style={{
          transform:
            'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)',
        }}
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className='[--duration:20s] hidden lg:block'
        style={{
          transform:
            'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)',
        }}
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background'></div>
    </div>
  );
};

export default VerticalMarquee;
