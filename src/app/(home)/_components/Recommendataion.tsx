import { Fragment } from "react";
import Money from "@/app/_assets/icons/money.svg";
import Trip from "@/app/_assets/icons/trip.svg";
import Golf from "@/app/_assets/icons/golf.svg";
import Language from "@/app/_assets/icons/language.svg";

export const Recommendataion = () => {
  const DATA = [
    {
      title: `가성비 좋은 골프장에서-골프치고 싶으신 분`,
      content:
        "동남아에서 가장 저렴한-라운딩비와 캐디피로 즐거움이-2배가 됩니다. ",
      image: "money",
    },
    {
      title: "색다른 해외 골프 여행지를-찾고 계신 분",
      content: "5성급 호텔에서 럭셔리하고-편안한 골프를 경험해보세요.",
      image: "trip",
    },
    {
      content: "단독 캐디로 편안하게-골프를 즐기세요.",
      title: "1인 1캐디 골프투어를-희망하고 계신 분",
      image: "golf",
    },
    {
      title: "언어 때문에 해외여행을-망설이고 계신 분",
      content:
        "한국어 가능한 가이드가-일정 내내 불편하지 않도록-여러분과 함께 합니다. ",
      image: "language",
    },
  ];
  return (
    <section className='w-screen p-20 font-jua'>
      <h1 className='text-5xl text-[#ff8000] mb-5'>
        이런 분들에게 추천드려요!
      </h1>
      <h2 className='text-2xl mb-15'>
        천혜의 자연환경과 아름다운 풍경, 그리고 골프 코스까지 한번에 즐길 수
        있는 미얀마 골프 투어입니다.
      </h2>
      <ul className='w-[95%] flex justify-between mx-auto'>
        {DATA.map(({ title, image, content }, index) => (
          <li
            key={title}
            className='w-[23%] max-w-[350px] px-5 py-10 relative shadow-2xl rounded-lg '
          >
            <div className='absolute left-[-20] top-[-20] bg-primary text-white text-2xl w-[50px] h-[50px] flex-center rounded-lg'>
              {index + 1}
            </div>
            <figure className='rounded-full w-[120px] h-[120px] flex-center mx-auto bg-primary-100 mb-10'>
              {image === "money" && <Money fill='#ff8000' />}
              {image === "trip" && <Trip width={50} height={50} />}
              {image === "golf" && <Golf />}
              {image === "language" && <Language />}
            </figure>
            <h3 className='text-2xl text-primary mb-5 text-center'>
              {title.split("-").map((val) => (
                <Fragment key={val}>
                  {val}
                  <br />
                </Fragment>
              ))}
            </h3>
            <p className='text-xl text-gray-500 break-normal text-center'>
              {content.split("-").map((val) => (
                <Fragment key={val}>
                  {val}
                  <br />
                </Fragment>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
