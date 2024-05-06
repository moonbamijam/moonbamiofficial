"use client";

import useLoading from "@hooks/useLoading";
import Picture from "./common/Picture";

export default function LandingImage() {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading ? (
        <div className="relative bg-gray-300 dark:bg-dm-surface-light w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] aspect-square rounded-xl shadow-md overflow-hidden animate-pulse"></div>
      ) : (
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] flex justify-center items-center transform [&>img]:hover:scale-125 aspect-square rounded-xl shadow-md hover:shadow-primary-dark overflow-hidden">
          <Picture
            src={"moonbami-raw_cbd4px"}
            alt={"Jam Moonbami"}
            isPriority={true}
          />
        </div>
      )}
    </>
  );
}
