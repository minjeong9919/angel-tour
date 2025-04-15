"use client";

import { DAY1MAP, CCMAP, DAY6MAP } from "@/app/_assets/images";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className='min-w-[400px] max-w-[400px] mt-30 absolute bg-white z-1 right-[0px] top-[50px]'>
      <div className='w-full h-[700px] relative'>
        <div className='bg-white p-4 rounded-lg sticky top-22 my-2 flex flex-col gap-2 text-sm'>
          <h3 className='text-base text-primary font-black'>DAY 1</h3>
          <div className='rounded-lg overflow-hidden w-full h-[250px] mx-auto relative'>
            <Image
              src={DAY1MAP}
              alt='day1 지도'
              layout='fill'
              objectFit='fill'
            />
          </div>
          <h3 className='text-xl font-bold mt-2'>호텔</h3>
          <ul className='list-[circle] ml-5 mb-4 text-sm'>
            <li>호텔은 멜리아 호텔 또는 동급(5성급) 입니다.</li>
            <li>
              2인 1실을 기준으로 하며, 1인 3벌 세탁 서비스와 조식이
              포함되어있습니다.
            </li>
            <li>싱글 차지 비용은 1인 1박 (주중 / 주말 20$ 추가)</li>
          </ul>
          <h3 className='text-xl font-bold'>차량</h3>
          <ul className='list-[circle] ml-5 '>
            <li>차량은 승합 도는 동일 조건 차량입니다.</li>
            <li>1일(08시 ~ 18시) 기준입니다.</li>
            <li>
              18시 이후 운행 시 시간당 10,000원의 추가요금이 발생할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>

      <div className='relative w-full min-h-[calc(2250px*4)]'>
        <div className='bg-white p-4 rounded-lg sticky top-22 mb-2 flex flex-col gap-1 text-sm'>
          <h3 className='text-base text-primary font-black'>DAY 2,3,4,5</h3>
          <div className='rounded-lg overflow-hidden w-full h-[170px] mx-auto relative mb-3'>
            <Image
              src={CCMAP}
              alt='day1 지도'
              fill
              objectFit='cover'
              objectPosition='top'
            />
          </div>
          <h3 className='text-lg font-bold'>
            YCDC 36홀 골프장 <span className='text-sm'>난이도: ★★★★☆</span>
          </h3>
          <p className='bg-gray-200 p-3 rounded-md mb-2'>
            미얀마에서 유일하게 36홀을 보유한 골프장으로, <br />
            평지와 업다운이 적당해 편안한 라운딩을 제공합니다.
          </p>
          <h3 className='text-lg font-bold'>
            다곤 18홀 골프장 <span className='text-sm'>난이도: ★★★☆☆</span>
          </h3>
          <p className='bg-gray-200 p-3 rounded-md mb-2'>
            최근에 오픈한 미얀마에서 가장 인기 있는 골프장으로, 좁은 코스와
            벙커가 많아 도전적인 골프를 제공합니다.
          </p>
          <h3 className='text-lg font-bold'>
            양곤 18홀 골프장 <span className='text-sm'>난이도: ★★★☆☆</span>
          </h3>
          <p className='bg-gray-200 p-3 rounded-md mb-2'>
            100년의 역사를 자랑하는 골프장으로, 동양적인 분위기와 접근성이
            뛰어나며 미얀마의 전통적인 골프 코스를 즐길 수 있습니다.
          </p>
          <h3 className='text-lg font-bold'>
            오클랑 27홀 골프장 <span className='text-sm'>난이도: ★★★★☆</span>
          </h3>
          <p className='bg-gray-200 p-3 rounded-md mb-2'>
            50년의 역사를 지닌 골프장으로, 긴 코스와 해저드가 많아 전략적인
            플레이를 요구하는 골프장입니다.
          </p>
        </div>
      </div>

      <div className='relative w-full min-h-[calc(735px)]'>
        <div className='bg-white p-4 rounded-lg sticky top-22 mb-2 flex flex-col gap-1 text-sm'>
          <h3 className='text-base text-primary font-bold'>DAY 6</h3>
          <div className='rounded-lg overflow-hidden w-full h-[250px] mx-auto relative mb-3'>
            <Image
              src={DAY6MAP}
              alt='day6 지도'
              layout='fill'
              objectFit='fill'
            />
          </div>
          <h3 className='text-xl font-bold mt-1'>호텔</h3>
          <ul className='list-[circle] ml-5 mb-4 text-sm'>
            <li>호텔은 멜리아 호텔 또는 동급(5성급) 입니다.</li>
            <li>
              2인 1실을 기준으로 하며, 1인 3벌 세탁 서비스와 조식이
              포함되어있습니다.
            </li>
            <li>싱글 차지 비용은 1인 1박 (주중 / 주말 20$ 추가)</li>
          </ul>
          <h3 className='text-xl font-bold'>차량</h3>
          <ul className='list-[circle] ml-5 '>
            <li>차량은 승합 도는 동일 조건 차량입니다.</li>
            <li>1일(08시 ~ 18시) 기준입니다.</li>
            <li>
              18시 이후 운행 시 시간당 10,000원의 추가요금이 발생할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
