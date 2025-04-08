"use client";

import { DAY1MAP } from "@/app/_assets/images";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className='w-full mt-30 font-jua'>
      <div className='w-full h-[748px] relative'>
        <div className='bg-white p-4 rounded-lg shadow-custom-md sticky top-22 my-2'>
          <h3 className='text-xl mb-2'>1일차</h3>
          <div className='rounded-lg overflow-hidden h-[300px] relative'>
            <Image
              src={DAY1MAP}
              alt='day1 지도'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>

      <div className='relative w-full min-h-[1000px]'>
        <div className='bg-white p-4 rounded-lg shadow-md sticky top-20'>
          <h3>2일차 일정</h3>
          ddd
        </div>
      </div>
    </div>
  );
};
