import Image from "next/image";
import MainImage from "./_assets/main1.jpg";

export default function Home() {
  return (
    <div className=''>
      {/* <Header /> */}
      <figure className='bg-gray-700 relative w-[100vw] h-[500px] flex flex-col items-center pt-[3%]'>
        <Image
          src={MainImage}
          alt='메인이미지1'
          className='w-screen absolute brightness-40'
          layout='fill'
          objectFit='cover'
          objectPosition='bottom'
        />
        <div className='text-white relative z-1 w-fit h-40 rounded-3xl flex flex-col justify-center items-center gap-7'>
          <h1 className='text-7xl font-extrabold '>미얀마 골프여행</h1>
          <h6 className='text-2xl'>
            천사 투어와 함께 저렴한 가격으로 즐기세요
          </h6>
        </div>
        <div className='bg-[#FFE5CC] w-fit text-black z-1 mt-10 p-4 rounded-2xl '>
          <h3 className='text-5xl font-hans text-[#cc6600]'>
            5박 6일{" "}
            <strong className='text-[#ff8000] animate-flicker'>499,000</strong>{" "}
            원
          </h3>
        </div>
        <figcaption>메인 이미지1</figcaption>
      </figure>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'></main>
    </div>
  );
}
