"use client";

import { useAppSelector } from "@/lib/reduxHooks";
import React, { ReactNode, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function ImageZoomCarousel({ images }: { images: ReactNode[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isImageFocusOn = useAppSelector((store) => store.toggle.isImageFocus);
  const imageLength = images.length;

  if (!isImageFocusOn) {
    return null;
  }

  function handleNextImage() {
    if (currentIndex >= imageLength - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  }

  function handlePreviousImage() {
    if (currentIndex <= 0) {
      setCurrentIndex(imageLength - 1);
    } else {
      setCurrentIndex((currentIndex) => currentIndex - 1);
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-30 m-auto flex h-3/4 w-3/4 items-center justify-center rounded-xl border-2 border-rose-600 bg-gradient-to-br from-sky-500 via-violet-600 to-rose-600 shadow-2xl">
        <div className="relative h-full w-full">{images[currentIndex]}</div>
        {imageLength > 1 && (
          <>
            <button
              className="absolute right-1 top-[45%]"
              onClick={handleNextImage}
            >
              <BsArrowRightCircle className="size-11 rounded-full bg-transparent text-white hover:scale-105 active:scale-95" />
            </button>
            <button
              className="absolute left-1 top-[45%]"
              onClick={handlePreviousImage}
            >
              <BsArrowLeftCircle className="size-11 rounded-full bg-transparent text-white hover:scale-105 active:scale-95" />
            </button>
          </>
        )}
        {imageLength > 1 && (
          <ul className="absolute -bottom-10 flex justify-center gap-5">
            {images.map((_, index) => {
              return (
                <li
                  key={index}
                  className={`h-3 w-3 rounded-full bg-sky-300 ${index === currentIndex && "scale-125 bg-gradient-to-br from-sky-500 to-violet-600"}`}
                ></li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
