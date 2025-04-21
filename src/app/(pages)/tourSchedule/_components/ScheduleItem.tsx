import { Fragment } from "react";
import Image from "next/image";
import { SCHEDULE } from "@/app/constants";

export const ScheduleItem = ({ day }: { day: number }) => {
  const dayString = day === 1 ? "first" : day === 6 ? "last" : "other";
  return (
    <ul className='relative pb-5 mt-10'>
      <div className='w-[3px] h-[calc(100%-70px)] bg-gray-200 absolute top-[20px] left-[2.04px] z-0' />
      {SCHEDULE[dayString].map((schedule) => (
        <Fragment key={schedule.todo}>
          <li className='flex items-center gap-6 h-auto min-h-[50px]'>
            <div className='w-2 h-2 bg-primary rounded-full mb-1 z-1' />
            {schedule.todo}
          </li>
          {schedule?.ref && (
            <div className='flex flex-col gap-2'>
              {schedule.ref.map((ref) => (
                <div
                  className='w-[calc(99%-420px)] ml-8 border border-gray-300 rounded-sm p-7'
                  key={ref.name}
                >
                  <h5 className='text-xl mb-5'>{ref.name}</h5>
                  <div className='flex gap-5'>
                    {ref.images &&
                      ref.images?.length > 0 &&
                      ref.images.map((image, i) => (
                        <div
                          key={i}
                          className='w-[250px] h-[200px] rounded-lg overflow-hidden relative mb-5'
                        >
                          <Image src={image} alt='장소 관련 이미지' fill />
                        </div>
                      ))}
                  </div>
                  <ul className='list-[circle] ml-5'>
                    {ref.explanation.map((explan) => (
                      <li key={explan} className='text-gray-500 text-base'>
                        {explan}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </ul>
  );
};
