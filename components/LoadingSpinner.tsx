import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSpinner = () => {
  return (
    <div className="text-6xl flex items-center justify-center rounded-full bg-rich-black dark:bg-transparent animate-spin">
      <AiOutlineLoading3Quarters />
    </div>
  );
};

export default LoadingSpinner;
