import { FlightCard } from "./FlightCard";
import { AdditionalInfo } from "./AdditionalInfo";
import { ScheduleItem } from "./ScheduleItem";

export const Schedule = () => {
  return (
    <section className='mt-20 gap-5 w-[100%]'>
      <h2 className='text-xl font-bold border-b-2 pb-3'>여행 일정</h2>
      <div className='font-jua text-lg mb-20'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>1일차</h3>
        <FlightCard departure='인천(ICN)' arrive='미얀마' time='04시간 30분' />
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
        <ScheduleItem day={3} />
        <AdditionalInfo
          hotel='멜리아 / 세도나 호텔 (2인 1실)'
          breakfast='호텔식'
        />
      </div>
    </section>
  );
};
