import { FlightCard } from "./FlightCard";
import { AdditionalInfo } from "./AdditionalInfo";
import { ScheduleItem } from "./ScheduleItem";

export const Schedule = () => {
  return (
    <section className='mt-20 gap-5 w-[90vw]'>
      <h2 className='text-lg font-bold border-b-2 pb-3'>여행 일정</h2>
      <div className='font-jua text-base mb-20'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>1일차</h3>
        <FlightCard departure='인천(ICN)' arrive='미얀마' time='05시간 55분' />
        <ScheduleItem day={1} />
        <AdditionalInfo hotel='멜리아 / 세도나 호텔 (2인 1실)' />
      </div>
      <div className='font-jua text-lg mb-20'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>2일차</h3>
        <ScheduleItem day={2} />
        <AdditionalInfo
          hotel='멜리아 / 세도나 호텔 (2인 1실)'
          breakfast='호텔식'
        />
      </div>
      <div className='font-jua text-lg mb-20'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>3일차</h3>
        <ScheduleItem day={3} />
        <AdditionalInfo
          hotel='멜리아 / 세도나 호텔 (2인 1실)'
          breakfast='호텔식'
        />
      </div>
      <div className='font-jua text-lg mb-20'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>4일차</h3>
        <ScheduleItem day={4} />
        <AdditionalInfo
          hotel='멜리아 / 세도나 호텔 (2인 1실)'
          breakfast='호텔식'
        />
      </div>
      <div className='font-jua text-lg mb-10'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>5일차</h3>
        <ScheduleItem day={5} />
        <AdditionalInfo
          hotel='멜리아 / 세도나 호텔 (2인 1실)'
          breakfast='호텔식'
        />
      </div>
      <div className='font-jua text-lg mb-2 md:mb-10'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>6일차</h3>
        <FlightCard departure='미얀마' arrive='인천(ICN)' time='05시간 55분' />
        <ScheduleItem day={6} />
        <AdditionalInfo hotel='멜리아 / 세도나 호텔 (2인 1실)' />
      </div>
      <span className='text-xs'>
        * 상기 일정은 항공 및 현지 사정에 의해 다소 변경될 수 있습니다.
      </span>
    </section>
  );
};
