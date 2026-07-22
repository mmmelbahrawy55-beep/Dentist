export default function SectionDivider({ variant = "wave" }: { variant?: "wave" | "angle" | "gradient" }) {
  if (variant === "gradient") {
    return (
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-16 md:h-24 overflow-hidden -mt-1 bg-[#FDFBF7] dark:bg-[#0A0A0F]">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
          className="fill-[#F5F0EA] dark:fill-[#0A0A0F]"
        />
      </svg>
    </div>
  );
}
