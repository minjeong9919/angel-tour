import Link from "next/link";
import ICON from "@/app/_assets/icons/icon-no-background.svg";
import NAVER from "@/app/_assets/icons/naver-band.svg";
import KAKAO from "@/app/_assets/icons/kakao.svg";
import { ImageWrapper } from "./_components/ImageWrapper";

export default function AboutAngel() {
  return (
    <main className='py-5 font-jua w-[90vw] mx-auto'>
      <ICON className='w-[100vw] fixed opacity-10' />
      <section className='flex gap-3'>
        <div className='w-[100%] text-center'>
          <h1 className='text-lg sm:text-3xl lg:text-4xl font-bold mb-[10px]'>
            🌍 미얀마 여행, <strong className='text-primary'>천사 투어</strong>
            와 함께 떠나요!
          </h1>
          <br />
          <div className='w-[95%] mx-auto text-xs sm:text-base md:text-lg lg:text-xl flex flex-col gap-10 text-center'>
            <p>
              안녕하세요, 여행의 설렘을 더하는
              <strong className='text-base sm:xl'> {`"천사 투어"`} </strong>
              입니다.
              <br />
              여러분의 특별한 여행을 위해 천사 투어가 제공하는 미얀마 골프
              여행을 소개합니다.
              <br /> <br />
              국내가 아닌 해외에서 색다르게 골프를 치고싶은 적 있으신가요?
              <br />
              하지만 국내에서 치기도 비싼 골프.. 좋은 코스로 즐기고 싶지만
              해외에서 치려면 더 부담되었을 거예요.
              <br />
              <br />
              <strong className='text-lg sm:text-2xl lg:text-3xl text-balance'>
                천사투어는 이러한 사람들에게 딱 맞는 나라 <br />
                <strong className='text-primary'>{`"미얀마"`}</strong>를 적극
                추천드립니다!
              </strong>
              <br /> <br />
              미얀마의 평균 월급은 한국 돈으로 70,000원 정도일만큼 물가가 싼
              나라에 속해요. <br />
              무려 5성급의 고급 호텔도 1박에 약 10만원 밖에 되지 않는답니다.
              <br />
              천사투어와 함께 한다면 더 저렴하게 갈 수 있다는 점!
              <br />
              이 외에도 천사투어에서 제공하는 차량을 통해 편안하게 이동이
              가능합니다.
              <br /> <br />
              저희와 함께 골프와 함께하는 미얀마에 떠나보시면 반드시 한 번
              방문한 것으로 끝나지 않을 거예요!
            </p>
            <strong className='text-lg'>
              그 중에서도 천사투어의 큰 장점은 네이버 밴드와 카톡 단체방을 통한
              <span className='text-lg sm:text-2xl lg:text-3xl text-primary'>
                {" "}
                활발한 소통!
              </span>
            </strong>
            <ImageWrapper />
            <p>
              <br />
              천사투어에서는 여행 전부터, 여행 후까지, 네이버 밴드와 카톡
              단체방을 통해 여행 참여자들과 관리자까지 활발히 소통하고 있습니다.
            </p>
          </div>
          <div className='w-full flex bg-primary-100 my-10 py-[5%] px-[3%] justify-between w-[90%] h-max'>
            <div className='bg-white rounded-lg p-[2%] bg-white z-1 w-[32%] min-h-[100%] shadow-2xl'>
              <h2 className='text-sm sm:text-xl lg:text-2xl text-primary font-black mb-[4%]'>
                여행 전에는
              </h2>
              <ul className='list-[square] ml-[10px] text-[11px] sm:text-sm lg:text-base text-left'>
                <li>
                  여행 일정을 미리 공유하고, 궁금한 사항들을 미리 해결해요.
                </li>
                <li>
                  여행 참가자들과 간단한 대화로 여행에 대한 기대감을 키울 수
                  있습니다.
                </li>
              </ul>
            </div>
            <div className='bg-white rounded-lg p-[2%] bg-white z-1 w-[32%] min-h-full shadow-2xl'>
              <h2 className='text-sm sm:text-xl lg:text-2xl text-primary font-black mb-[4%]'>
                여행 중에는
              </h2>
              <ul className='list-[square] ml-[10px] text-[11px] sm:text-sm lg:text-base text-left'>
                <li>
                  현지에서 발생하는 상황들을 실시간으로 공유하고, 여행 중 정보를
                  주고 받아요.
                </li>
                <li>
                  각자 다른 코스나 활동에 대한 글이나 사진을 공유하여 풍성한
                  경험을 주고 받아요.
                </li>
              </ul>
            </div>
            <div className='bg-white rounded-lg p-[2%] bg-white z-1 w-[32%] min-h-full shadow-2xl'>
              <h2 className='text-sm sm:text-xl lg:text-2xl text-primary font-black mb-[4%]'>
                여행 후에는
              </h2>
              <ul className='list-[square] ml-[10px] text-[11px] sm:text-sm lg:text-base text-left'>
                <li>
                  여행 후기도 자유롭게 공유해보며, 함께 이해하기하며 다음 여행을
                  위한 피드백을 주고받아요.
                </li>
              </ul>
            </div>
          </div>
          <p className='w-[90%] mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-center'>
            천사투어는 소통과 공유의 가치를 중요시하며, 밴드라는 소통 공간을
            통해 모든 여행자가 함께 즐겁고 의미 있는 여행을 만들 수 있도록
            지원합니다.
            <br /> <br />
            <strong className='text-primary text-lg sm:text-2xl lg:text-3xl'>
              미얀마 골프 여행은 천사투어와 함께!
            </strong>
          </p>
          <h1 className='text-xs sm:text-sm lg:text-xl mt-10'>
            천사투어에 대한 더 자세한 설명과 사진 등은 밴드를 통해 확인
            가능합니다.
          </h1>
          <div className='mx-auto w-[95%] flex-center flex-col md:flex-row gap-4 mt-[3%] justify-between'>
            <div className='w-full flex flex-col justify-between bg-white z-1 shadow-2xl p-[3%] xl:p-[2%] text-sm sm:text-xl rounded-lg text-left sm:h-[200px]'>
              <div>
                <h3 className='font-bold text-base sm:text-2xl mb-3 text-center'>
                  상담 문의
                </h3>
                대표: 박 재 완 <br />
                연락처: 010.9954.3891
              </div>
              <h5 className='text-[10px] sm:text-sm text-primary'>
                * 카카오톡으로 상담을 원하시는 분은 하단의 {"톡상담"} 메뉴를
                이용해주세요.
              </h5>
            </div>
            <div className='flex flex-col gap-4 w-[100%] sm:h-[200px] justify-between'>
              <Link
                target='_blank'
                href='https://open.kakao.com/o/gsqdO6nh'
                className='sm:h-[90px] items-center min-w-full bg-[#F7E600] z-1 shadow-2xl p-[4%] text-sm sm:text-xl rounded-lg hover:scale-[1.05] duration-500 flex align-center gap-[10%] cursor-pointer text-left'
              >
                <KAKAO width={25} />
                카카오톡 단톡방 참여하기 {">"}
              </Link>

              <Link
                target='_blank'
                href='https://www.band.us/band/68913058'
                className='sm:h-[90px] items-center min-w-full bg-[#2FB14A] z-1 shadow-2xl p-[4%] text-sm sm:text-xl rounded-lg hover:scale-[1.05] duration-500 flex align-center gap-[10%] cursor-pointer text-left'
              >
                <NAVER width={25} height={25} className='my-auto' />
                네이버 밴드에 참여하기 {">"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
