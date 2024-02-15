import { ImSpinner2 } from "react-icons/im";

const LoadingSpinner = () => {
  return (
    <div className="text-6xl flex items-center justify-center rounded-full bg-rich-black dark:bg-transparent animate-spin">
      <ImSpinner2 />
    </div>
  )
}

export default LoadingSpinner