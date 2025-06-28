import Image from "next/image";
import main1 from "@/app/_assets/images/main1.jpg";
import { Information } from "./_components/Information";
import { Includes } from "./_components/Includes";
import { Note } from "./_components/Note";
import { Schedule } from "./_components/Schedule";
import { Sidebar } from "./_components/Sidebar";

export default function TourSchedule() {
  return (
    <main className='w-[90vw] mx-auto my-10'>
      <section className='flex flex-col justify-between'>
        <figure className='w-full h-auto rounded-xl overflow-hidden mb-3'>
          <Image src={main1} alt='양곤 대표 이미지' />
        </figure>
        <div className='w-full flex flex-col text-sm'>
          <h1 className='text-base font-bold mb-2'>
            [ MYANMAR ] 미얀마 골프 투어 4박5일 [5성호텔]
          </h1>
          <h4>일정: 4박 5일</h4>
          <h4>골프: YCDC, 다곤, 양곤, 오클라 CC</h4>
          <div className='flex justify-between mt-4'>
            <button className='text-sm border p-1 rounded-lg cursor-pointer w-max h-fit'>
              여행 핵심 정보
            </button>
            <h4 className='text-right'>
              1인당 <strong className='text-xl'>540,000</strong>원 (왕복 항공료
              불포함)
            </h4>
          </div>
        </div>
      </section>
      <section className='pt-20'>
        <Information />
        <Includes />
        <div className='flex gap-10 relative'>
          <div className='flex-2'>
            <Schedule />
            <Note />
          </div>
          <Sidebar />
        </div>
      </section>
    </main>
  );
}
