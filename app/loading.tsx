import LoadingSpinner from "@components/ux/LoadingSpinner";

const Loading = () => {
  return (
    <div className="text-5xl lg:text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-full w-max p-5">
      <LoadingSpinner size="100px" textSize="6xl" />
    </div>
  );
};

export default Loading;
