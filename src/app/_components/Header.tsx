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
    title: "천사투어",
    link: "/",
  },
  {
    title: "미얀마",
    link: "/",
  },
  {
    title: "여행일정",
    link: "/tourSchedule",
  },
  {
    title: "견적문의",
    link: "/",
  },
];

export const Header = () => {
  return (
    <header className='w-[100vw] h-20 flex justify-between items-center gap-10 fixed px-10 px-[10vw] z-1000 bg-white'>
      <Link
        className='cursor-pointer flex items-center gap-2 text-3xl'
        href='/'
      >
        <Logo width={70} height={70} />
        <span className={`font-hans mt-1`}>천사투어</span>
      </Link>
      <nav className='flex gap-10 '>
        {NAV_TEXT.map(({ title, link }) => (
          <Link href={link} className='relative' key={title}>
            <span className={NAV_COMMON_CLASSNAME}>{title}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};
