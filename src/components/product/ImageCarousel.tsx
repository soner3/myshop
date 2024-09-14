"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function ImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageLength = images.length;

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

  useEffect(() => {
    if (!(imageLength > 1)) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex(currentIndex >= imageLength - 1 ? 0 : currentIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, imageLength]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-96 w-96 rounded-xl border-2 bg-gradient-to-br from-sky-500 via-violet-600 to-rose-600 shadow-2xl duration-300 hover:cursor-pointer hover:border-rose-600">
        <Image
          src={images[currentIndex]}
          alt={title}
          fill
          className="object-contain"
          priority
        />
        {imageLength > 1 && (
          <>
            <button
              className="absolute right-1 top-1/2"
              onClick={handleNextImage}
            >
              <BsArrowRightCircle className="size-10 rounded-full bg-transparent text-white hover:scale-105 active:scale-95" />
            </button>
            <button
              className="absolute left-1 top-1/2"
              onClick={handlePreviousImage}
            >
              <BsArrowLeftCircle className="size-10 rounded-full bg-transparent text-white hover:scale-105 active:scale-95" />
            </button>
          </>
        )}
      </div>
      {imageLength > 1 && (
        <ul className="mt-5 flex justify-center gap-5">
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
  );
}
