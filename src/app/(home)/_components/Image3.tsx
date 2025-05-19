import Image from "next/image";
import { MAIN3 } from "@/app/_assets/images";

export const Image3 = ({ imageNum }: { imageNum: number }) => {
  return (
    <figure className='bg-gray-700 relative min-w-screen h-[100%] flex flex-col justify-center items-center'>
      <div
        className={`${
          imageNum === 1 ? "animate-slide-to-left" : ""
        } z-1 absolute right-0 w-[100%] h-[100%]`}
      >
        <div className='w-[100%] h-[100%] absolute bg-black/50 clip-custom-polygon-right right-0 ' />
      </div>
      <Image
        src={MAIN3}
        alt='메인이미지1'
        className='w-screen absolute '
        fill
      />
      <figcaption>메인 이미지1</figcaption>
      <div
        className={`${
          imageNum === 1 ? "animate-slide-to-left" : ""
        } text-white z-1 w-fit flex flex-col gap-7 h-[200px] text-left ml-[35%] sm:ml-[30%]`}
      >
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold mt-5'>
          초가성비 골프투어
        </h1>
        <h6 className='text-sm md:text-lg lg:text-xl'>
          YCDC, 양곤, 다곤 오클라 CC 포함된 <br /> 코스 앤젤 투어와 합리적인
          가격으로 <br /> 여유롭게 골프를 즐기세요.
        </h6>
      </div>
    </figure>
  );
};
