export const Information = () => {
  return (
    <section className='mt-20 gap-5 w-[100%]'>
      <h2 className='text-xl font-bold mb-3 border-b-2 pb-3'>여행 정보</h2>
      <div className='min-w-50 flex gap-7 border-b-1 border-gray-300 py-2'>
        <span className='font-bold min-w-20'>✈️ 일정</span>
        <span>
          2025년 OO월 OO일 ~ 2025년 OO월 OO일 <strong>(5박 6일)</strong>
        </span>
      </div>
      <div className='flex gap-7 border-b-1 border-gray-300 py-2'>
        <span className='font-bold min-w-20'>💵 요금</span>
        <span>
          인당 <strong>499,000원</strong> ( 최소 출발인원: <strong>2</strong>명
          )
        </span>
      </div>
      <div className='flex gap-7 border-b-1 border-gray-300 py-2'>
        <span className='font-bold min-w-20'>🏨 호텔</span>
        <ul className='list-[circle] ml-5'>
          <li>멜리아 호텔 또는 동급 (5성급, 2인 1실 기준 / 조식 포함)</li>
          <li>싱글 차지 비용 1인 1박 (주중 20$ 추가)</li>
        </ul>
      </div>
      <div className='flex gap-7 border-b-1 border-gray-300 py-2'>
        <span className='font-bold min-w-20'>🚐 차량</span>
        <ul className='list-[circle] ml-5'>
          <li>승합 / 동일 조건 차량</li>
          <li>1일 (08시 ~ 18시, 10시간 기준)</li>
          <li>18시 이후(시간당 추가 운행 시: 10,000원)</li>
        </ul>
      </div>
    </section>
  );
};
