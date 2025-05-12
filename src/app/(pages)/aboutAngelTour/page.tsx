import Link from "next/link";
import ICON from "@/app/_assets/icons/icon-no-background.svg";
import NAVER from "@/app/_assets/icons/naver-band.svg";
import KAKAO from "@/app/_assets/icons/kakao.svg";
import { ImageWrapper } from "./_components/ImageWrapper";

export default function AboutAngel() {
  return (
    <main className='py-20 relative font-jua'>
      <ICON className='w-[100vw] fixed opacity-10' />
      <section className='flex gap-10'>
        <div className='w-[100%] flex-center flex-col'>
          <h1 className='text-5xl font-bold mb-10'>
            🌍 미얀마 여행, <strong className='text-primary'>천사 투어</strong>
            와 함께 떠나요!
          </h1>
          <br />
          <div className=' text-2xl flex flex-col gap-10 text-center'>
            <p>
              안녕하세요, 여행의 설렘을 더하는
              <strong className='text-2xl'>{`"천사 투어"`}</strong>입니다.
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
              <strong className='text-3xl'>
                천사투어는 이러한 사람들에게 정말 딱 맞는 나라 {`"미얀마"`}를
                적극 추천드립니다!
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
            <br />
            <strong className='text-2xl'>
              그 중에서도 천사투어의 가장 큰 장점은 네이버 밴드와 카톡 단체방을
              통한
              <span className='text-3xl text-primary'> 활발한 소통!</span>
            </strong>
            <ImageWrapper />
            <p>
              <br />
              천사투어에서는 여행 전부터, 여행 후까지, 네이버 밴드와 카톡
              단체방을 통해 여행 참여자들과 관리자까지 활발히 소통하고 있습니다.
            </p>
          </div>
          <div className='flex-center bg-primary-100 my-10 py-15 px-20 gap-10 w-[90%] rounded-lg h-max'>
            <div className='bg-white rounded-lg p-5 bg-white z-1 w-[25%] h-[100%] shadow-2xl'>
              <h2 className='text-2xl text-primary font-black mb-3'>
                여행 전에는
              </h2>
              <ul className='list-[square] ml-5 text-xl'>
                <li>
                  여행 일정을 미리 공유하고, 궁금한 사항들을 미리 해결해요.
                </li>
                <li>
                  여행 참가자들과 간단한 대화로 여행에 대한 기대감을 키울 수
                  있습니다.
                </li>
              </ul>
            </div>
            <div className='bg-white rounded-lg p-5 bg-white z-1 w-[25%] h-[100%] shadow-2xl'>
              <h2 className='text-2xl text-primary font-black mb-3'>
                여행 중에는
              </h2>
              <ul className='list-[square] ml-5 text-xl'>
                <li>
                  현지에서 발생하는 상황들을 실시간으로 공유하고, 여행 중 팁이나
                  정보를 주고 받아요.
                </li>
                <li>
                  각자 다른 코스나 활동에 대한 후기나 사진을 공유하여 풍성한
                  경험을 주고 받아요.
                </li>
              </ul>
            </div>
            <div className='bg-white rounded-lg p-5 bg-white z-1 w-[25%] h-[100%] shadow-2xl'>
              <h2 className='text-2xl text-primary font-black mb-3'>
                여행 후에는
              </h2>
              <ul className='list-[square] ml-5 text-xl'>
                <li>
                  여행 후기도 자유롭게 공유해보며, 함께 이해하기하며 다음 여행을
                  위한 피드백을 주고받아요.
                </li>
              </ul>
            </div>
          </div>
          <p className='text-2xl text-center'>
            천사투어는 소통과 공유의 가치를 중요시하며, 밴드라는 소통 공간을
            통해 모든 여행자가 함께 즐겁고 의미 있는 여행을 만들 수 있도록
            지원합니다.
            <br /> <br />
            <strong className='text-primary text-4xl'>
              미얀마 골프 여행은 천사투어와 함께!
            </strong>
          </p>
          <h1 className='text-xl mt-30'>
            천사투어에 대한 더 자세한 설명과 사진 등은 밴드를 통해 확인
            가능합니다.
          </h1>
          <div className='flex-center mt-10 gap-20'>
            <div className='flex flex-col justify-between h-[100%] bg-white z-1 shadow-2xl p-10 text-2xl rounded-lg'>
              <div>
                <h3 className='font-bold text-4xl mb-3'>상담 문의</h3>
                대표: 박 재 완 <br />
                연락처: 010.9954.3891
              </div>
              <h5 className='text-xl text-primary'>
                * 카카오톡으로 상담을 원하시는 분은 하단의 {"톡상담"} 메뉴를
                이용해주세요.
              </h5>
            </div>
            <div className='flex flex-col gap-10'>
              <Link
                target='_blank'
                href='https://open.kakao.com/o/gsqdO6nh'
                className='bg-[#F7E600] z-1 shadow-2xl p-10 text-2xl rounded-lg hover:scale-[1.1] duration-500 flex align-center gap-3 cursor-pointer'
              >
                <KAKAO width={30} />
                카카오톡 단톡방 참여 {">"}
              </Link>

              <Link
                target='_blank'
                href='https://www.band.us/band/68913058'
                className='bg-[#2FB14A] z-1 shadow-2xl p-10 text-2xl rounded-lg hover:scale-[1.1] duration-500 flex align-center gap-3 cursor-pointer'
              >
                <NAVER width={30} height={30} />
                네이버 밴드 바로가기 {">"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
