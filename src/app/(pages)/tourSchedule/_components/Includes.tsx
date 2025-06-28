import Check from "@/app/_assets/icons/check.svg";
import X from "@/app/_assets/icons/x.svg";

export const Includes = () => {
  return (
    <section className='mt-20 gap-5 w-[100%] text-xs'>
      <h2 className='text-lg font-bold mb-2 border-b-2 pb-3'>
        포함 / 불포함 사항
      </h2>
      <div className='min-w-50 flex gap-7 border-b-1 border-gray-300 py-3'>
        <span className='font-bold min-w-13 flex-center gap-2 text-[#009900]'>
          <Check />
          포함
        </span>
        <ul className='list-[square] gap-3'>
          <li>호텔: 멜리아(5성급) 2인 1실 / 1인 3벌 세탁 서비스, 조식 포함</li>
          <li>
            일 18홀 그린피, 전동카드(1인), 캐티피(1인 1캐디)
            <br />
            <h3>
              : 주말 성수기 시 2인 1캐디 및 2인 1캐디가 나올 수 있으며, 캐디 및
              카트 요금은 동일
            </h3>
          </li>
          <li>한국어 가능한 가이드 동행</li>
          <li>마사지 1시간 30분 무료 (마사지 팁 제외 / 1인 약 3$)</li>
        </ul>
      </div>
      <div className='flex gap-7 border-b-1 border-gray-300 py-3'>
        <span className='font-bold min-w-13 flex-center gap-2 text-[red]'>
          <X />
          불포함
        </span>
        <ul className='list-[square] gap-3'>
          <li>왕복 항공료</li>
          <li>캐디팁 18홀 (다곤, 오클라 8$, YCDC 5$)</li>
          <li>클럽하우스 중식 및 식대</li>
          <li>미얀마 관광비자 (1인 60$)</li>
        </ul>
      </div>
    </section>
  );
};
