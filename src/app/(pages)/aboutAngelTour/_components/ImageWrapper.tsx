"use client";

import { useState } from "react";
import Image from "next/image";
import { ANGELTOUR1, ANGELTOUR2, ANGELTOUR3 } from "@/app/_assets/images";
import { useIntersectionObserver } from "../../../../../utils/useIntersectionObserver";

export const ImageWrapper = () => {
  const [observe, setObserve] = useState(false);
  const { target } = useIntersectionObserver({
    observeCallback: () => setObserve(true),
    threshold: 0.5,
  });

  return (
    <div className='flex gap-5 z-1 relative h-[600px]' ref={target}>
      <Image
        src={ANGELTOUR1}
        alt='활발한 소통 사진 1'
        width={400}
        height={400}
        className={`rounded-lg absolute shadow-2xl ${
          observe ? "animate-slide-in-blurred-top" : "hidden"
        } hover:scale-[1.1] duration-500`}
      />
      <Image
        src={ANGELTOUR2}
        alt='활발한 소통 사진 2'
        width={300}
        className={`rounded-lg absolute left-[500px] top-[100px] shadow-2xl ${
          observe ? "animate-slide-in-blurred-top" : "hidden"
        } hover:scale-[1.1] duration-500`}
      />
      <Image
        src={ANGELTOUR3}
        alt='활발한 소통 사진 3'
        height={500}
        className={`rounded-lg absolute right-[20px] top-[10px] shadow-2xl ${
          observe ? "animate-slide-in-blurred-top" : "hidden"
        } hover:scale-[1.1] duration-500`}
      />
    </div>
  );
};
