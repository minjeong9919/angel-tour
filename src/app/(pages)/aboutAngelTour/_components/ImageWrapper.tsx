"use client";

import Image from "next/image";
import { useState } from "react";
import { ANGELTOUR1, ANGELTOUR2, ANGELTOUR3 } from "@/app/_assets/images";
import { useIntersectionObserver } from "../../../../../utils/useIntersectionObserver";

export const ImageWrapper = () => {
  const [observe, setObserve] = useState(false);
  const { target } = useIntersectionObserver({
    observeCallback: () => setObserve(true),
    threshold: 0.5,
  });

  return (
    <div
      className='w-full flex flex-col sm:flex-row sm:justify-center px-[5%] z-1 gap-5'
      ref={target}
    >
      <div className='max-w-[70%] sm:max-w-[33%] mx-auto sm:mx-0'>
        <Image
          src={ANGELTOUR1}
          alt='활발한 소통 사진 1'
          className={`rounded-lg shadow-2xl ${
            observe ? "animate-slide-in-blurred-top" : "hidden"
          } hover:scale-[1.05] duration-500`}
        />
      </div>
      <div className='max-w-[70%] sm:max-w-[33%] mx-auto sm:mx-0'>
        <Image
          src={ANGELTOUR2}
          alt='활발한 소통 사진 2'
          className={` rounded-lg shadow-2xl ${
            observe ? "animate-slide-in-blurred-top" : "hidden"
          } hover:scale-[1.05] duration-500`}
        />
      </div>
      <div className='max-w-[70%] sm:max-w-[33%] mx-auto sm:mx-0'>
        <Image
          src={ANGELTOUR3}
          alt='활발한 소통 사진 3'
          className={`rounded-lg shadow-2xl ${
            observe ? "animate-slide-in-blurred-top" : "hidden"
          } hover:scale-[1.05] duration-500`}
        />
      </div>
    </div>
  );
};
