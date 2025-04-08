import { StaticImageData } from "next/image";
import {
  YCDC1,
  YCDC2,
  YCDC3,
  DAGON1,
  DAGON2,
  DAGON3,
  YANGON1,
  YANGON2,
  YANGON3,
  OKKAKA1,
  OKKAKA3,
  OKKAKA2,
} from "./_assets/images";

interface ScheduleItemType {
  todo: string;
  ref?: {
    name: string;
    explanation: string[];
    images: StaticImageData[];
  }[];
}

interface ScheduleType {
  [key: string]: ScheduleItemType[];
}

export const SCHEDULE: ScheduleType = {
  first: [
    { todo: "인천 국제공항 출발" },
    { todo: "미얀마 국제공항 도착" },
    { todo: "기사 미팅 후, 호텔 이동" },
    { todo: "호텔 체크인 및 휴식" },
  ],
  last: [
    { todo: "인천 국제공항 출발" },
    { todo: "미얀마 국제공항 도착" },
    { todo: "기사 미팅 후, 호텔 이동" },
    { todo: "호텔 체크인 및 휴식" },
  ],
  other: [
    { todo: "조식 후, 골프장으로 이동 (약 25분 소요)" },
    {
      todo: "골프 18홀 라운딩 \n YCDC / 다곤 / 양곤 / 오클랑 CC 중 1곳",
      ref: [
        {
          name: "YCDC 36홀 CC",
          explanation: [
            "파 144, YARD 14,000",
            "미얀마에서 36홀 코스가 있는 유일한 골프장",
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
            "파 72, YARD 6,805",
            "2018년 가장 최근에 오픈한 미얀마에서 가장 인기있는 골프장",
            "양잔디로 코스가 좁고, 모든 샷이 정확도가 떨어지면 다음샷 또한 힘든 코스로",
            "그린 주변에는 벙커가 포진하여 그린 공략이 어려운 코스",
          ],
          images: [DAGON1, DAGON2, DAGON3],
        },
        {
          name: "양곤 18홀 CC",
          explanation: [
            "파 72, YARD 7,094",
            "100년의 역사를 가진 18홀 코스",
            "양곤 시내에서 가장 동양적인 분위기를 갖추고 있는 골프장",
            "접근성, 코스, 미얀마 역사를 한번에 느낄 수 있는 최고의 골프 코스",
          ],
          images: [YANGON1, YANGON2, YANGON3],
        },
        {
          name: "오클라 27홀 CC",
          explanation: [
            "파 108, YARD 10,087",
            "미얀마에서 36홀 코스가 있는 유일한 골프장",
            "50년 전통을 가지고 있는 골프장으로 2016년 리모델링 완공",
            "레이크 코스가 많고, 경관이 좋으며, 업다운이 심하진 않은 긴 코스",
            "해저드가 각 홀 중요한 샷에 있어 코스 공략이나 그린 공략이 쉽지 않은 코스",
          ],
          images: [OKKAKA1, OKKAKA2, OKKAKA3],
        },
      ],
    },
    { todo: "라운딩 후, 호텔 휴식 및 자유시간" },
  ],
};
