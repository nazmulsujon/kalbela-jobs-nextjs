import Marquee from "@/components/Marquee"

import ReviewCard from "./ReviewCard"

const companies = [
  {
    name: "Kalbela Jobs",
    logo: "/logo.png",
  },
  {
    name: "Kalbela Jobs",
    logo: "/logo.png",
  },
  {
    name: "Kalbela Jobs",
    logo: "/logo.png",
  },
  {
    name: "Kalbela Jobs",
    logo: "/logo.png",
  },
]

const firstRow = companies.slice(0, companies.length / 2)
const secondRow = companies.slice(companies.length / 2)

const VerticalMarquee = () => {
  return (
    <div className="relative z-0 flex h-96 flex-row items-center justify-center space-x-12 space-y-[0.5rem] overflow-hidden opacity-20 [perspective:300px]">
      <Marquee
        pauseOnHover
        vertical
        className="[--duration:20s]"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:20s]"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical
        className="[--duration:20s]"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:20s]"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical
        className="hidden [--duration:20s] sm:block"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="hidden [--duration:20s] md:block"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical
        className="hidden [--duration:20s] md:block"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="hidden [--duration:20s] md:block"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical
        className="hidden [--duration:20s] lg:block"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="hidden [--duration:20s] lg:block"
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) scale(1.5)",
        }}
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 -top-2 h-1/3 bg-gradient-to-b from-[#e1ecff] dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 -left-14 -top-2 w-1/4 bg-gradient-to-r from-gray-100 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 -right-0 w-1/4 bg-gradient-to-l from-gray-100 dark:from-background"></div>
    </div>
  )
}

export default VerticalMarquee
