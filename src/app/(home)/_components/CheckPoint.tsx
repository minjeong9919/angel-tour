import {
  ANGELPOINT1,
  ANGELPOINT2,
  ANGELPOINT3,
  ANGELPOINT4,
  ANGELPOINT5,
  ANGELPOINT6,
} from "@/app/_assets/images";
import Image from "next/image";

export const CheckPoint = () => {
  return (
    <main>
      <h1 className='text-4xl text-[#ff8000] mb-8 font-bold'>
        천사투어만의 2가지 포인트 !!
      </h1>
      <div>
        <h2 className='text-2xl text-[#ff8000] font-bold mb-1'>
          ANGEL POINT 1
        </h2>
        <h4 className='text-xl font-semibold mb-2'>
          양곤 시내 중심에 위치한 고급 5성급 멜리아 호텔에서 편안한 숙박과
          풍성한 조식을 제공하여, 완벽한 힐링 !
        </h4>
        <div className='w-[100%] flex justify-between gap-3 mb-20'>
          <figure className='w-[33%] h-auto relative overflow-hidden'>
            <Image
              src={ANGELPOINT1}
              alt='엔젤 포인트 1'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
          <figure className='w-[33%] h-[400px] relative overflow-hidden'>
            <Image
              src={ANGELPOINT2}
              alt='엔젤 포인트 2'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
          <figure className='w-[33%] h-[400px] relative overflow-hidden'>
            <Image
              src={ANGELPOINT3}
              alt='엔젤 포인트 3'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
        </div>
      </div>
      <div>
        <h2 className='text-2xl text-[#ff8000] font-bold mb-1'>
          ANGEL POINT 2
        </h2>
        <h4 className='text-xl font-semibold mb-2'>
          쉐다곤 파고다, 미얀마 전쟁 묘지, 양곤 시청사 등 자유로운 관광코스
          선택도 가능 !
        </h4>
        <div className='flex gap-3'>
          <figure className='w-[600px] h-[400px] relative overflow-hidden'>
            <Image
              src={ANGELPOINT4}
              alt='엔젤 포인트 4'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
          <figure className='w-[600px] h-[400px] relative overflow-hidden'>
            <Image
              src={ANGELPOINT5}
              alt='엔젤 포인트 5 (TonyWu 님의 사진: https://www.pexels.com/ko-kr/photo/16735991/'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
          <figure className='w-[600px] h-[400px] relative overflow-hidden'>
            <Image
              src={ANGELPOINT6}
              alt='엔젤 포인트 6'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
        </div>
      </div>
    </main>
  );
};
