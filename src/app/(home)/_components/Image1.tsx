import Image from "next/image";
import { MAIN1 } from "@/app/_assets/images";
import Airplane from "@/app/_assets/icons/airplane.svg";

export const Image1 = ({ imageNum }: { imageNum: number }) => {
  return (
    <figure className='relative min-w-screen h-[100%] flex flex-col justify-center items-center'>
      <Image
        src={MAIN1}
        alt='메인이미지1'
        className='w-screen absolute brightness-40'
        fill
      />
      <Airplane
        className={`absolute ${
          imageNum === -1 ? "animate-airplane-moving" : "hidden"
        } rotate-330 w-[40px] sm:w-[50px] md:w-[80px] lg:w-[120px]`}
        fill='white'
      />
      <div className='text-white z-1 w-fit h-40 rounded-3xl flex flex-col justify-center items-center gap-7'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold '>
          미얀마 골프여행
        </h1>
        <h6 className='text-sm md:text-xl'>
          순수한 미소와 황금의 나라, <br />
          미얀마 양곤에서 천사 투어와 함께 골프투어를 즐기세요.
        </h6>
      </div>
      <div className=' w-fit text-black z-1 p-4 rounded-2xl '>
        <h3 className='text-2xl font-light font-hans text-[#ff8000] '>
          <strong className='text-2xl md:text-5xl'>4</strong>박
          <strong className='text-2xl md:text-5xl'> 5</strong>일<br />
          <strong className='text-6xl md:text-9xl'>540,000</strong> 원
        </h3>
      </div>
    </figure>
  );
};
