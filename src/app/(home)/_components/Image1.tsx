import Image from "next/image";
import MainImage from "@/app/_assets/images/main1.jpg";
import Airplane from "@/app/_assets/icons/airplane.svg";

export const Image1 = ({ imageNum }: { imageNum: number }) => {
  return (
    <figure className='relative min-w-screen h-[100%] flex flex-col justify-center items-center'>
      <Image
        src={MainImage}
        alt='메인이미지1'
        className='w-screen absolute brightness-40'
        layout='fill'
        objectFit='cover'
        objectPosition='bottom'
      />
      <Airplane
        className={`absolute ${
          imageNum === -1 ? "animate-airplane-moving" : "hidden"
        } rotate-330`}
        width={120}
        fill='white'
      />
      <div className='text-white z-1 w-fit h-40 rounded-3xl flex flex-col justify-center items-center gap-7'>
        <h1 className='text-7xl font-extrabold '>미얀마 골프여행</h1>
        <h6 className='text-2xl'>천사 투어와 함께 저렴한 가격으로 즐기세요.</h6>
      </div>
      <div className=' w-fit text-black z-1 p-4 rounded-2xl '>
        <h3 className='text-3xl font-light font-hans text-[#ff8000] '>
          <strong className='text-5xl'>5</strong>박
          <strong className='text-5xl'> 6</strong>일<br />
          <strong className='text-8xl'>499,000</strong> 원
        </h3>
      </div>
      {/* </div> */}
    </figure>
  );
};
