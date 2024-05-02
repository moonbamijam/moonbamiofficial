import { AiOutlineLoading3Quarters } from "react-icons/ai";

type LoadingSpinnerProps = {
  size?: string;
  textSize?: string;
  textSizes?: string;
};

export default function LoadingSpinner({
  size,
  textSize,
  textSizes,
}: LoadingSpinnerProps) {
  return (
    <div
      className={`relative w-[${size}] h-[${size}] ${
        "text-" + [textSize]
      } ${textSizes} flex items-center justify-center rounded-full`}
    >
      <div className="absolute opacity-30">
        <AiOutlineLoading3Quarters className="[&>path]:text-white" />
      </div>
      <div className="absolute opacity-30 rotate-90">
        <AiOutlineLoading3Quarters className="[&>path]:text-white" />
      </div>
      <AiOutlineLoading3Quarters className="animate-spin duration-500 [&>path]:text-highlight" />
    </div>
  );
}
