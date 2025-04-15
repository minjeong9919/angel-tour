import Image from "next/image";
import main1 from "@/app/_assets/images/main1.jpg";
import { Information } from "./_components/Information";
import { Includes } from "./_components/Includes";
import { Note } from "./_components/Note";
import { Schedule } from "./_components/Schedule";
import { Sidebar } from "./_components/Sidebar";

export default function TourSchedule() {
  return (
    <main className='w-[70vw] mx-auto my-10'>
      <section className='flex gap-10'>
        <figure className='w-[40%] rounded-xl overflow-hidden'>
          <Image src={main1} alt='양곤 대표 이미지' />
        </figure>
        <div className='w-[50%] flex flex-col gap-3'>
          <h1 className='text-2xl font-bold'>
            [ MYANMAR ] 미얀마 골프 투어 5박6일 [5성호텔]
          </h1>
          <h4>일정: 5박 6일</h4>
          <h4>골프: YCDC, 다곤, 양곤, 오클라 CC</h4>
          <div className='flex justify-between mt-auto'>
            <button className='border p-3 rounded-lg cursor-pointer w-fit h-fit'>
              여행 핵심 정보
            </button>
            <h4 className='text-right mt-5'>
              1인당 <strong className='text-4xl'>499,900</strong>원 (왕복 항공료
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
