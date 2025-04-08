"use client";

import { DAY1MAP } from "@/app/_assets/images";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className='w-full mt-30 font-jua'>
      <div className='w-full h-[748px] relative'>
        <div className='bg-white p-4 rounded-lg shadow-custom-md sticky top-22 my-2 flex flex-col gap-2 text-sm'>
          <h3 className='text-base text-primary'>1일차</h3>
          <div className='rounded-lg overflow-hidden w-full h-[250px] mx-auto relative'>
            <Image
              src={DAY1MAP}
              alt='day1 지도'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <h3 className='text-xl'>호텔</h3>
          <ul className='list-[circle] ml-5 mb-4'>
            <li>호텔은 멜리아 호텔 또는 동급(5성급) 입니다.</li>
            <li>
              2인 1실을 기준으로 하며, 1인 3벌 세탁 서비스와 조식이
              포함되어있습니다.
            </li>
            <li>싱글 차지 비용은 1인 1박 (주중 / 주말 20$ 추가)</li>
          </ul>
          <h3 className='text-xl'>차량</h3>
          <ul className='list-[circle] ml-5'>
            <li>차량은 승합 도는 동일 조건 차량입니다.</li>
            <li>1일(08시 ~ 18시) 기준입니다.</li>
            <li>
              18시 이후 운행 시 시간당 10,000원의 추가요금이 발생할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>

      <div className='relative w-full min-h-[1000px]'>
        <div className='bg-white p-4 rounded-lg shadow-md sticky top-20'>
          <h3>2일차 일정</h3>
        </div>
      </div>
    </div>
  );
};
