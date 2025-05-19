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
      <h1 className='text-[#ff8000] mb-2 md:mb-5 xl:mb-8 font-bold text-[24px] xl:text-3xl 2xl:text-4xl text-nowrap'>
        천사투어만의 2가지 포인트 !!
      </h1>
      <div>
        <h2 className='text-lg sm:text-xl md:text-2xl text-[#ff8000] font-bold mb-1'>
          ANGEL POINT 1
        </h2>
        <h4 className='font-semibold mb-2 text-sm md:text-lg xl:text-xl'>
          양곤 시내 중심에 위치한 고급 5성급 멜리아 호텔에서 편안한 숙박과
          풍성한 조식을 제공하여, 완벽한 힐링 !
        </h4>
        <div className='w-[100%] h-[90px] sm:h-[140px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px] flex justify-between gap-3 mb-10'>
          <figure className='w-[33%] h-[100%] relative overflow-hidden'>
            <Image
              src={ANGELPOINT1}
              alt='엔젤 포인트 1'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
          <figure className='w-[33%] h-[100%] relative overflow-hidden'>
            <Image
              src={ANGELPOINT2}
              alt='엔젤 포인트 2'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
          <figure className='w-[33%] h-[100%] relative overflow-hidden'>
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
        <h2 className='text-lg sm:text-xl md:text-2xl text-[#ff8000] font-bold mb-1'>
          ANGEL POINT 2
        </h2>
        <h4 className='font-semibold mb-2 text-sm md:text-lg xl:text-xl'>
          쉐다곤 파고다, 미얀마 전쟁 묘지, 양곤 시청사 등 자유로운 관광코스
          선택도 가능 !
        </h4>
        <div className='flex gap-3 h-[90px] sm:h-[140px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px] md:h-[120px]'>
          <figure className='w-[600px] h-[100%] relative overflow-hidden'>
            <Image
              src={ANGELPOINT4}
              alt='엔젤 포인트 4'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
          <figure className='w-[600px] h-[100%] relative overflow-hidden'>
            <Image
              src={ANGELPOINT5}
              alt='엔젤 포인트 5 (TonyWu 님의 사진: https://www.pexels.com/ko-kr/photo/16735991/'
              className='rounded-lg hover:scale-[1.1] duration-500'
              fill
            />
          </figure>
          <figure className='w-[600px] h-[100%] relative overflow-hidden'>
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
