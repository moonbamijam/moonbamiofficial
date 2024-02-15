import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="text-5xl lg:text-6xl flex items-center justify-center rounded-full mt-[400px] bg-rich-black dark:bg-transparent animate-spin">
      <ImSpinner2 />
    </div>
  )
}

export default Loading;