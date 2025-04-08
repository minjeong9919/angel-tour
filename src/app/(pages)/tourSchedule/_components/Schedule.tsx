import { Fragment } from "react";
import { FlightCard } from "./FlightCard";
import { AdditionalInfo } from "./AdditionalInfo";
import YCDC1 from "@/app/_assets/images/ycdc1.jpeg";
import YCDC2 from "@/app/_assets/images/ycdc2.jpeg";
import YCDC3 from "@/app/_assets/images/ycdc3.jpeg";
import DAGON1 from "@/app/_assets/images/dagon1.jpeg";
import DAGON2 from "@/app/_assets/images/dagon2.jpeg";
import DAGON3 from "@/app/_assets/images/dagon3.jpeg";
import Image from "next/image";

const SCHEDULE = {
  "1일차": [
    { todo: "인천 국제공항 출발" },
    { todo: "미얀마 국제공항 도착" },
    { todo: "기사 미팅 후, 호텔 이동" },
    { todo: "호텔 체크인 및 휴식" },
  ],
  "2일차": [
    { todo: "조식 후, 골프장으로 이동 (약 25분 소요)" },
    {
      todo: "골프 18홀 라운딩 \n YCDC / 다곤 / 양곤 / 오클랑 CC 중 1곳",
      ref: [
        {
          name: "YCDC 36홀 CC",
          explanation: [
            "미얀마에서 36홀 코스가 있는 유일한 골프장",
            "파 144, YARD 14,000",
            "실버리 18홀 코스: 파72 / 7,000 yard",
            ": 평지가 많고, 업다운이 심하지 않은 코스라 비교적 편안한 라운딩을 할 수 있는 코스",
            "폰디 18홀 코스: 파72 / 7,000 yard",
            ": 페어웨이가 좁고, 레이아웃 변화가 심해 다이나믹한 재미를 느낄 수 있는 코스",
          ],
          images: [YCDC1, YCDC2, YCDC3],
        },
        {
          name: "다곤 18홀 CC",
          explanation: [
            "2018년 가장 최근에 오픈한 미얀마에서 가장 인기있는 골프장",
            "파 72, YARD 6,805",
            "양잔디로 코스가 좁고, 모든 샷이 정확도가 떨어지면 다음샷 또한 힘든 코스로",
            "그린 주변에는 벙커가 포진하여 그린 공략이 어려운 코스",
          ],
          images: [DAGON1, DAGON2, DAGON3],
        },
        {
          name: "양곤",
          explanation: ["미얀마에서 36홀 코스가 있는 유일한 골프장"],
        },
        {
          name: "오클라",
          explanation: ["미얀마에서 36홀 코스가 있는 유일한 골프장"],
        },
      ],
    },
    { todo: "라운딩 후, 호텔 휴식 및 자유시간" },
  ],
};

export const Schedule = () => {
  return (
    <section className='mt-20 gap-5 w-[100%]'>
      <h2 className='text-xl font-bold border-b-2 pb-3'>여행 일정</h2>
      <div className='font-jua text-lg mb-20'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>1일차</h3>
        <FlightCard departure='인천(ICN)' arrive='미얀마' time='04시간 30분' />
        <ul className='relative pb-5 mt-10'>
          <div className='w-[3px] h-[calc(50px*3)] bg-gray-200 absolute top-[20px] left-[2.04px] z-0' />
          {SCHEDULE["1일차"].map((schedule) => (
            <li
              className='flex items-center gap-6 h-[50px]'
              key={schedule.todo}
            >
              <div className='w-2 h-2 bg-primary rounded-full mb-1 z-1' />{" "}
              {schedule.todo}
            </li>
          ))}
        </ul>
        <AdditionalInfo hotel='멜리아 / 세도나 호텔 (2인 1실)' />
      </div>
      <div className='font-jua text-lg'>
        <h3 className='bg-gray-200 p-2 rounded-[2px]'>2일차</h3>
        <ul className='relative pb-5 mt-10'>
          <div className='w-[3px] h-[calc(1280px)] bg-gray-200 absolute top-[20px] left-[2.04px] z-0' />
          {SCHEDULE["2일차"].map((schedule) => (
            <Fragment key={schedule.todo}>
              <li className='flex items-center gap-6 h-auto min-h-[50px]'>
                <div className='w-2 h-2 bg-primary rounded-full mb-1 z-1' />
                {schedule.todo}
              </li>
              {schedule?.ref && (
                <div className='flex flex-col gap-2'>
                  {schedule.ref.map((ref) => (
                    <div
                      className='w-max ml-8 border border-gray-300 rounded-sm p-7'
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
        <AdditionalInfo
          hotel='멜리아 / 세도나 호텔 (2인 1실)'
          breakfast='호텔식'
        />
      </div>
    </section>
  );
};
