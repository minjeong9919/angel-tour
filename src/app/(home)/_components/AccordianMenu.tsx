"use client";

import { useRef, MouseEvent } from "react";

interface AccordianMenuPropsType {
  question: string;
  content: string;
}
export const AccordianMenu = ({
  question,
  content,
}: AccordianMenuPropsType) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (parentRef.current!.clientHeight > 0) {
      parentRef.current!.style.height = "0";
    } else {
      parentRef.current!.style.height = `${childRef.current!.clientHeight}px`;
    }
  };

  return (
    <div
      className='md:p-2 lg:p-5 bg-white rounded-lg'
      key={question}
      onClick={handleClick}
    >
      <h3 className='text-sm md:text-lg lg:text-xl p-2 font-bold'>
        <strong className='text-primary'>Q. </strong>
        {question}
      </h3>
      <div
        className='overflow-hidden h-0 transition-[height] duration-300 ease'
        ref={parentRef}
      >
        <div ref={childRef}>
          <h5
            className={`text-sm md:text-base lg:text-xl text-pretty border-t-1 border-gray-200 p-2 text-gray-500 ml-[2px]
          lg:m-2`}
          >
            <strong className='text-primary'>A.</strong> {content}
          </h5>
        </div>
      </div>
    </div>
  );
};
