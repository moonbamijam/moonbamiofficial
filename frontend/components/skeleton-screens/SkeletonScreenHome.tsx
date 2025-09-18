import SkeletonScreen from "@frontend/components/skeleton-screens/SkeletonScreen";

export default function SkeletonScreenHome() {
  return (
    <div className="container pt-32">
      <div className="w-full flex flex-col justify-evenly items-center xl:flex-row gap-5">
        <div className="w-full flex flex-col items-center xl:items-start gap-5 max-w-[600px]">
          <div className="w-full flex flex-col items-center xl:items-start gap-5">
            <SkeletonScreen className="max-w-[500px] min-h-16" />
            <SkeletonScreen className="max-w-[600px] min-h-10" />
          </div>
          <div className="w-full flex gap-6">
            <SkeletonScreen className="max-w-36 min-h-14" />
            <SkeletonScreen className="max-w-36 min-h-14" />
          </div>
        </div>
        <div className="relative w-full max-w-[400px] lg:max-w-[450px] xl:max-w-[550px] aspect-square flex flex-col items-end rounded-lg overflow-hidden">
          <SkeletonScreen />
        </div>
      </div>
    </div>
  );
}
