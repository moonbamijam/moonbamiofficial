import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="text-5xl lg:text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-full w-max p-5 bg-rich-black dark:bg-transparent">
      <div className="animate-spin">
        <ImSpinner2 />
      </div>
    </div>
  )
}

export default Loading;