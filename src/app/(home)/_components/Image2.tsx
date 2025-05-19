import Image from "next/image";
import { MAIN2 } from "@/app/_assets/images";

export const Image2 = ({ imageNum }: { imageNum: number }) => {
  return (
    <figure className='relative min-w-screen h-[100%] flex flex-col justify-center items-center'>
      <div
        className={`${
          imageNum === 0 ? "animate-slide-to-left" : ""
        } z-1 absolute right-0 w-[100%] h-[100%]`}
      >
        <div className='w-[100%] h-[100%] absolute bg-black/50 clip-custom-polygon-right right-0 ' />
      </div>
      <Image
        src={MAIN2}
        alt='메인이미지1'
        className='w-screen absolute '
        fill
      />
      <figcaption>메인 이미지1</figcaption>
      <div
        className={`${
          imageNum === 0 ? "animate-slide-to-left" : ""
        } max-w-[240px] sm:max-w-[300px] md:max-w-[430px] lg:max-w-[550px] xl:max-w-[720px] text-white z-1 flex flex-col gap-7 h-[200px] text-left ml-[35%] sm:ml-[30%]`}
      >
        <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-5'>
          5성급 고급호텔
        </h1>
        <h6 className='text-xs sm:text-sm md:text-lg lg:text-xl'>
          고급스러움의 끝을 경험하세요. <br /> 미얀마에서 제공하는 5성급
          호텔에서 <br /> 편안하고 럭셔리한 숙박을 즐기세요.
        </h6>
      </div>
    </figure>
  );
};
