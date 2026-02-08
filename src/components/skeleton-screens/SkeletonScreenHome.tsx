import SkeletonScreen from "@/components/skeleton-screens/SkeletonScreen";

export default function SkeletonScreenHome() {
  return (
    <div className="container pt-32">
      <div className="w-full flex flex-col justify-evenly items-center xl:flex-row gap-5">
        <div className="w-full flex flex-col items-center xl:items-start gap-5 max-w-150">
          <div className="w-full flex flex-col items-center xl:items-start gap-5">
            <SkeletonScreen className="max-w-125 min-h-16" />
            <SkeletonScreen className="max-w-150 min-h-10" />
          </div>
          <div className="w-full flex gap-6">
            <SkeletonScreen className="max-w-36 min-h-14" />
            <SkeletonScreen className="max-w-36 min-h-14" />
          </div>
        </div>
        <div className="relative w-full max-w-100 lg:max-w-112.5 xl:max-w-137.5 aspect-square flex flex-col items-end rounded-lg overflow-hidden">
          <SkeletonScreen />
        </div>
      </div>
    </div>
  );
}
