import Marquee from "@/components/Marquee";

const logos = [
  { name: "Microsoft", img: "/logo.png" },
  { name: "Apple", img: "/logo.png" },
  { name: "Google", img: "/logo.png" },
  { name: "Facebook", img: "/logo.png" },
  { name: "LinkedIn", img: "/logo.png" },
  { name: "Twitter", img: "/logo.png" },
];

const Marquee3D = () => {
  return (
    <div className="relative grid grid-cols-6 h-full mx-auto items-center justify-center gap-4 overflow-hidden px-20 opacity-15 z-0">
      {Array(6)
        .fill(null)
        .map((_, columnIdx) => (
          <div
            key={columnIdx}
            className="flex flex-col [perspective:300px]"
          >
            <Marquee
              className="h-96 justify-center overflow-hidden [--duration:20s] [--gap:0rem]"
              vertical
              style={{
                transform:
                  "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
              }}
            >
              {logos.map((data, idx) => (
                <img
                  key={`${columnIdx}-${idx}`}
                  src={data.img}
                  alt={data.name}
                  className="mx-auto h-20 w-20 object-contain transition-all duration-300"
                />
              ))}
            </Marquee>
          </div>
        ))}

      {/* Left and Right Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Marquee3D;
