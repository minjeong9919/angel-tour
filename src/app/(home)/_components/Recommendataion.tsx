"use client";

import { Fragment } from "react";
import Money from "@/app/_assets/icons/money.svg";
import Trip from "@/app/_assets/icons/trip.svg";
import Golf from "@/app/_assets/icons/golf.svg";
import Language from "@/app/_assets/icons/language.svg";
import { DATA } from "@/app/constants";

export const Recommendataion = () => {
  return (
    <section className='font-jua'>
      <h1 className='text-4xl text-[#ff8000] mb-5'>
        이런 분들에게 추천드려요!
      </h1>
      <h2 className='text-xl mb-15'>
        천혜의 자연환경과 아름다운 풍경, 그리고 골프 코스까지 한번에 즐길 수
        있는 미얀마 골프 투어입니다.
      </h2>
      <ul className='w-[95%] flex justify-between mx-auto'>
        {DATA.map(({ title, image, content }, index) => (
          <li
            key={title}
            className={`w-[23%] max-w-[350px] px-5 py-10 relative shadow-2xl rounded-lg`}
          >
            <div className='absolute left-[-10] top-[-20] bg-primary text-white text-2xl w-[40px] h-[40px] flex-center rounded-lg'>
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
