import Airplane from "@/app/_assets/icons/airplane-ver2.svg";

interface FlightCardPropsType {
  arrive: string;
  departure: string;
  time: string;
}

export const FlightCard = ({
  arrive,
  departure,
  time,
}: FlightCardPropsType) => {
  return (
    <div className='text-xs flex-center mt-3 md:mt-10 pt-30 pb-5 bg-blue rounded-md shadow-custom-sm w-full md:w-[calc(100%-415px)]'>
      <div>{departure} 출발</div>
      <div className='flex-center w-[60%]'>
        <div className='w-3 h-3 bg-primary rounded-full' />
        <div className='w-[80%] h-1 bg-gray-200 rounded-full relative'>
          <Airplane
            fill='white'
            width={50}
            className='absolute left-[calc(50%-18px)] top-[-100px]'
          />
          <span className='text-gray-400 absolute left-[calc(50%-30px)] top-[-40px]'>
            {time}
          </span>
        </div>
        <div className='w-3 h-3 bg-primary rounded-full' />
      </div>
      <div>{arrive} 도착</div>
    </div>
  );
};
