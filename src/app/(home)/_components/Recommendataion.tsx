import { Fragment } from "react";
import Money from "@/app/_assets/icons/money.svg";
import Trip from "@/app/_assets/icons/trip.svg";
import Golf from "@/app/_assets/icons/golf.svg";
import Language from "@/app/_assets/icons/language.svg";
import { DATA } from "@/app/constants";

export const Recommendataion = () => {
  return (
    <section>
      <h1 className='text-[#ff8000] mb-2 font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-nowrap'>
        이런 분들에게 추천드려요!
      </h1>
      <h2 className='mb-15 font-semibold text-sm md:text-lg xl:text-xl 2xl:text-2xl text-pretty'>
        천혜의 자연환경과 아름다운 풍경, 그리고 골프 코스까지 한번에 즐길 수
        있는 미얀마 골프 투어입니다.
      </h2>
      <ul className='w-[95%] gap-[20px] gap-y-[40px] lg:gap-y-[20px] grid sm:grid-cols-2 lg:grid-cols-4 mx-auto'>
        {DATA.map(({ title, image, content }, index) => (
          <li
            key={title}
            className={`p-3 xl:py-10 relative shadow-2xl rounded-lg 2xl:w-[310px]`}
          >
            <div className='absolute left-[-10] top-[-20] xl:top-[0] bg-primary text-white text-2xl xl:w-[40px] xl:h-[40px] w-[30px] h-[30px] flex-center rounded-lg'>
              {index + 1}
            </div>
            <figure className='rounded-full w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] flex-center mx-auto bg-primary-100 mb-5 xl:mb-10'>
              {image === "money" && <Money fill='#ff8000' />}
              {image === "trip" && <Trip width={50} height={50} />}
              {image === "golf" && <Golf />}
              {image === "language" && <Language />}
            </figure>
            <h3 className='text-primary mb-5 text-center font-bold text-md sm:text-lg xl:text-xl 2xl:text-2xl '>
              {title.split("-").map((val) => (
                <Fragment key={val}>
                  {val}
                  <br />
                </Fragment>
              ))}
            </h3>
            <p className='text-gray-500 break-normal text-center font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl '>
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
