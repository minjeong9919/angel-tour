"use client";

import { useEffect, useState } from "react";

import Arrow from "@/app/_assets/icons/arrow.svg";
import { Image1 } from "./Image1";
import { Image2 } from "./Image2";
import { Image3 } from "./Image3";
import { Image4 } from "./Image4";

export const Carousel = () => {
  const [imageNum, setImageNum] = useState<number>(-1);
  const [transition, setTransition] = useState(true);
  const [animating, setAnimating] = useState(false);

  const moveStyle = [
    "translate-x-[-100vw]",
    "translate-x-[-200vw]",
    "translate-x-[-300vw]",
    "translate-x-[-400vw]",
    "translate-x-[-500vw]",
  ];

  const startAnimating = () => {
    setAnimating(true);
    const timeout = setTimeout(() => {
      setAnimating(false);
    }, 500);
    return () => {
      clearInterval(timeout);
    };
  };

  useEffect(() => {
    if (imageNum === 3) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setImageNum(-1);
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }

    if (imageNum === -2) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setImageNum(2);
      }, 100);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [imageNum, transition]);

  const clickArrow = (type: "next" | "prev") => {
    if (!animating) {
      startAnimating();
      setTransition(true);
      setImageNum((prev) => (type === "next" ? prev + 1 : prev - 1));
    }
  };

  return (
    <div
      className={`w-[100vw] h-[400px] md:h-[600px] relative overflow-hidden mx-auto flex`}
    >
      <Arrow
        fill='white'
        className='absolute z-10 top-[80%] sm:top-[50%] right-[20px] cursor-pointer w-[40px] md:w-[60px]'
        onClick={() => clickArrow("next")}
      />
      <Arrow
        fill='white'
        className='absolute z-10 top-[80%] sm:top-[50%] left-[20px] rotate-180 cursor-pointer w-[40px] md:w-[60px]'
        onClick={() => clickArrow("prev")}
      />
      <div
        className={`min-w-fit flex ${moveStyle[imageNum]} ${
          transition ? "transition ease-in-out duration-500" : "none"
        }`}
      >
        <Image1 imageNum={imageNum} />
        <Image2 imageNum={imageNum} />
        <Image3 imageNum={imageNum} />
        <Image4 imageNum={imageNum} />
        <Image1 imageNum={imageNum} />
      </div>
    </div>
  );
};
