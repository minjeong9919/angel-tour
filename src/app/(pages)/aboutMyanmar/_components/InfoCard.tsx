"use client";

import { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useIntersectionObserver } from "../../../../../utils/useIntersectionObserver";

interface InfoCardPropsType {
  id: number;
  image: StaticImageData;
  title: ReactNode;
  content: ReactNode;
}

export const InfoCard = ({ id, image, title, content }: InfoCardPropsType) => {
  const [isObserving, setIsObserving] = useState(false);

  const handleObserver = () => {
    setIsObserving(true);
  };

  const handleUnObserver = () => {
    setIsObserving(false);
  };

  const { target } = useIntersectionObserver({
    observeCallback: handleObserver,
    unobserveCallback: handleUnObserver,
    threshold: 0.1,
  });

  return (
    <div
      ref={target}
      className={`${isObserving ? "animate-scale-in" : "animate-scale-out"}`}
    >
      {id % 2 === 1 ? (
        <div className='w-[100vw] min-h-[100%] pt-60 pb-40 px-10 flex-col bg-white relative'>
          <div
            className={`absolute right-0 top-0 w-[60%] h-[90vh] bg-gradient-to-r from-white from-20% to white to-100% z-1`}
          />
          <Image
            src={image}
            className='absolute right-0 top-0 h-[100%] w-[60%] z-0'
            alt='Pixabay로 부터 입수된 Yves Alarie님의 이미지입니다.'
          />
          <div className='relative z-4 w-[70%]'>
            {title}
            {content}
          </div>
        </div>
      ) : (
        <div className='w-[100vw] h-[100%] pt-60 pb-40 px-10 flex-col  text-right bg-primary-50 relative'>
          <div
            className={`absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-l from-primary-50 from-20% to white to-100% z-1`}
          />
          <Image
            src={image}
            className='absolute left-0 top-0 h-[100%] w-[60%] z-0'
            alt='Pixabay로부터 입수된 Torpong Tankamhaeng님의 이미지 입니다.'
          />
          <div className='relative z-4 ml-auto'>
            {title}
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
