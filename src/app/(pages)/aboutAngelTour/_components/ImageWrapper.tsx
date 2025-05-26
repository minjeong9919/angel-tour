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
      className='w-full flex flex-col px-[5%] z-1 relative gap-2'
      ref={target}
    >
      <div className='max-w-[80%] mx-auto relative'>
        <Image
          src={ANGELTOUR1}
          alt='활발한 소통 사진 1'
          className={`rounded-lg shadow-2xl top-[5%] ${
            observe ? "animate-slide-in-blurred-top" : "hidden"
          } hover:scale-[1.1] duration-500`}
        />
      </div>
      <div className='min-w-full relative'>
        <Image
          src={ANGELTOUR2}
          alt='활발한 소통 사진 2'
          className={`max-w-[80%] mx-auto rounded-lg top-[10%] shadow-2xl ${
            observe ? "animate-slide-in-blurred-top" : "hidden"
          } hover:scale-[1.1] duration-500`}
        />
      </div>
      <div className='min-w-full max-w-[25%]'>
        <Image
          src={ANGELTOUR3}
          alt='활발한 소통 사진 3'
          className={` max-w-[80%] mx-auto rounded-lg right-[20px] top-[10px] shadow-2xl ${
            observe ? "animate-slide-in-blurred-top" : "hidden"
          } hover:scale-[1.1] duration-500`}
        />
      </div>
    </div>
  );
};
