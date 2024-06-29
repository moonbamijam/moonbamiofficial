import { AiOutlineLoading3Quarters } from "react-icons/ai";

type LoadingSpinnerProps = {
  size?: string;
  fontSize?: string;
  fontSizes?: string;
  className?: string;
};

export default function LoadingSpinner({
  size,
  fontSize,
  fontSizes,
  className,
}: LoadingSpinnerProps) {
  return (
    <div
      className={`relative w-[${size}] h-[${size}] flex items-center justify-center rounded-full [&>svg>path]:text-[${fontSize}] ${fontSizes} ${className}`}
    >
      <div className="absolute opacity-30">
        <AiOutlineLoading3Quarters className="[&>path]:text-surface" />
      </div>
      <div className="absolute opacity-30 rotate-90">
        <AiOutlineLoading3Quarters className="[&>path]:text-surface" />
      </div>
      <AiOutlineLoading3Quarters className="animate-spin duration-500 [&>path]:text-primary [&>path]:dark:text-primary-light" />
    </div>
  );
}
