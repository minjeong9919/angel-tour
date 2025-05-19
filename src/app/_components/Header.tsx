import Logo from "@/app/_assets/icons/icon-no-background.svg";
import Link from "next/link";

const NAV_COMMON_CLASSNAME =
  "font-semibold hover:text-gray-400 after:bg-gray-400 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 font-sans";

interface NavObject {
  title: string;
  link: string;
}

const NAV_TEXT: NavObject[] = [
  {
    title: "천사투어 소개",
    link: "/aboutAngelTour",
  },
  {
    title: "미얀마 소개",
    link: "/aboutMyanmar",
  },
  {
    title: "여행일정",
    link: "/tourSchedule",
  },
];

export const Header = () => {
  return (
    <header className='w-[100vw] h-20 flex justify-between items-center fixed px-5 sm:px-7 lg:px-10 z-1000 bg-white'>
      <Link
        className='cursor-pointer flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl'
        href='/'
      >
        <Logo width='70px' height='70px' />
        <span className={`font-hans mt-1 hidden sm:block min-w-max`}>
          천사투어
        </span>
      </Link>
      <nav className='flex gap-5 sm:gap-7 lg:px-13'>
        {NAV_TEXT.map(({ title, link }) => (
          <Link
            href={link}
            className='relative text-sm lg:text-base'
            key={title}
          >
            <span className={NAV_COMMON_CLASSNAME}>{title}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};
