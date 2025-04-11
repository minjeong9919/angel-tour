import { MYANMAR1, MYANMAR2, MYANMAR3, MYANMAR4 } from "@/app/_assets/images";
import { InfoCard } from "./_components/InfoCard";

export default function Myanmar() {
  return (
    <div>
      <div className='w-[100vw] py-50 flex-center text-6xl bg-primary-50'>
        <h1 className='font-normal font-jua font-thin'>
          {'"'}천사투어가 <strong className='text-primary'> 미얀마</strong>를
          선택한 이유{'"'}
        </h1>
      </div>
      {CARD_DATA.map((cardData) => (
        <InfoCard
          key={cardData.id}
          id={cardData.id}
          title={cardData.title}
          content={cardData.content}
          image={cardData.image}
        />
      ))}
    </div>
  );
}

const CARD_DATA = [
  {
    id: 1,
    title: (
      <h4 className='text-5xl font-extrabold mb-5'>
        🇲🇲 <strong className='text-primary'>미얀마</strong>가 어떤 곳인가요?
      </h4>
    ),
    content: (
      <h6 className='text-lg'>
        동남아시아에 위치한 나라로, 과거에는 버마(Burma)라는 이름으로
        알려져있습니다. <br />
        미얀마는 동남아시아 중에서 가장 넓은 면적을 가지고 있는 나라이며,
        <br />
        태국, 라오스, 중국, 인도와 국경을 접하고 있으며, 베트남과도 굉장히
        가까운 나라입니다. <br /> <br />
        한국에게 미얀마는 익숙하지 않겠지만, 미얀마의 젋은 세대에게 K-POP은
        폭발적인 인기를 모으고 있어요! <br />
        그렇기 때문에 미얀마에서 한국인을 늘 반겨준답니다 :)
      </h6>
    ),
    image: MYANMAR1,
  },
  {
    id: 2,
    title: (
      <h4 className='text-5xl font-extrabold mb-5 w-[100%]'>
        미얀마의 과거 수도, <br />
        <strong className='text-primary'>양곤(YANGON)</strong>
      </h4>
    ),
    content: (
      <h6 className='text-lg w-[70%] ml-auto'>
        미얀마 중에서도 천사투어는{" "}
        <strong className='text-primary underline'>양곤(Yangon)</strong>을
        택했는데요. <br />
        양곤은 옛 수도로 미얀마에서 가장 큰 도시이자 경제, 상업, 문화의
        중심이었으며, 현재도 미얀마의 상업 중심지로 여겨집니다. <br />
        그렇기 때문에 치안과 관광에 좋은 나라입니다. <br /> 또한 양곤은 젋은의
        나라인만큼 발전 가능성이 굉장히 높아요.
      </h6>
    ),
    image: MYANMAR2,
  },
  {
    id: 3,
    title: (
      <h4 className='text-5xl font-extrabold mb-5'>
        <strong className='text-primary '>⛳️ 최고 가성비 </strong>
        골프 여행지
      </h4>
    ),
    content: (
      <h6 className='text-lg '>
        골프 여행과 더불어 다양한 매력을 지닌 여행지이지만, <br /> 한국에 많이
        알려지지 않아 한국사람이 별로 없으며, 골프장의 컨디션도 좋습니다.
        <br />
        그렇기 때문에 무엇보다도 합리적인 가격에 호텔의 숙박과, 그린피, 카트피,
        캐디비, 세탁 등 다양한 서비스를 받을 수 있습니다.
      </h6>
    ),
    image: MYANMAR3,
  },
  {
    id: 4,
    title: (
      <h4 className='text-5xl text-primary font-extrabold mb-5'>
        🕌 역사적 매력
      </h4>
    ),
    content: (
      <h6 className='text-lg w-[70%] ml-auto'>
        미얀마는 깊은 역사와 문화를 지닌 나라입니다. <br />
        미얀마의 전통적인 건축물과 유적지를 탐방해보세요!
        <br /> 바사르 신전, 양곤의 쉐다곤 파고다, 바간의 고대 사원들 등
        세계적으로 유명한 역사적 장소들로, 이곳에서 미얀마의 역사와 문화를 깊이
        이해하고 느낄 수 있습니다.
        <br /> 또한, 미얀마는 아직 개발이 덜 된 지역이 많아, 독특하고 전통적인
        분위기를 경험할 수 있는 기회를 제공합니다.
      </h6>
    ),
    image: MYANMAR4,
  },
];
