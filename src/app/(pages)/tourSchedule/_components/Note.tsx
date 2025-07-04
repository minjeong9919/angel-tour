export const Note = () => {
  return (
    <section className='mt-20 gap-5 w-[100%] text-xs'>
      <h2 className='text-base md:text-xl font-bold mb-3 border-b-2 pb-1 md:pb-3'>
        참고 사항
      </h2>
      <ul className='list-[square] ml-3 md:ml-5'>
        <li>여권 만료일 6개월 이상 필수</li>
        <li>
          상기 일정은 현지 사정에 의해 변경될 수 있으며, 천재 지변 또는 개인
          사정으로 라운딩을 못하셔도 환불이 불가합니다.
        </li>
        <li>
          국외 여행 표준약관 제 5조(특약)에 근거한 특별 약관이 적용됩니다.
        </li>
        <li>예약 확정 시, 예약금 입금 후 30일 전 취소 시 계약금 환불 불가</li>
        <li>예약 개시 21일 전(21~30일) 까지 통보 시 여행 상품가의 60% 배상</li>
        <li>예약 개시 14일 전(14~21일) 까지 통보 시 여행 상품가의 40% 배상</li>
        <li>예약 개시 4일 전(4~14일) 까지 통보 시 여행 상품가의 20% 배상</li>
        <li>
          예약 개시 3일 전(딩일~3일) 까지 통보 시 여행 상품가의 100% 환불 불가
        </li>
      </ul>
    </section>
  );
};
