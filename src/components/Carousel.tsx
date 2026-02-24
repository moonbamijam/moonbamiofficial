"use client";

import { HTMLAttributes, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { Button } from "./ui/Button";

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  autoSlide?: boolean;
  autoSlideTimer?: number;
}

export default function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const previous = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (children as []).length - 1 : prevIndex - 1,
    );

  const next = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === (children as []).length - 1 ? 0 : prevIndex + 1,
    );

  return (
    <div className="overflow-hidden h-max relative rounded-lg group">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute w-full h-max top-[47%] -translate-y-[47%] flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
        <Button
          onClick={previous}
          variant="icon"
          size="icon"
          className="bg-black/50  m-4 p-2 hover:bg-primary active:scale-125"
        >
          <FaChevronLeft className="text-white" />
        </Button>
        <Button
          onClick={next}
          variant="icon"
          size="icon"
          className="bg-black/50  m-4 p-2 hover:bg-primary active:scale-125"
        >
          <FaChevronRight className="text-white" />
        </Button>
      </div>
      <div className="w-full absolute bottom-14 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="w-max mx-auto flex items-center gap-3">
          {(children as []).map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-[background-color_opacity_scale] duration-500 w-4 h-4 bg-black hover:bg-primary rounded-full cursor-pointer ${currentIndex === i ? "bg-primary! opacity-100 scale-150" : "opacity-50"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
