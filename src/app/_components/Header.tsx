import Logo from "@/app/_assets/icons/icon-no-background.svg";
import Link from "next/link";

const NAV_COMMON_CLASSNAME =
  "font-semibold hover:text-gray-400 after:bg-gray-400 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 font-sans";
const NAV_TEXT: string[] = ["천사투어", "미얀마", "프로그램", "견적문의"];

export const Header = () => {
  return (
    <header className='w-[80vw] h-20 flex justify-between items-center gap-10 fixed px-10 mx-[10vw]'>
      <Link
        className='cursor-pointer flex items-center gap-2 text-3xl'
        href='/'
      >
        <Logo width={70} height={70} />
        <span className={`font-hans mt-1`}>천사투어</span>
      </Link>
      <nav className='flex gap-10 '>
        {NAV_TEXT.map((menu) => (
          <Link href={"/"} className='relative' key={menu}>
            <span className={NAV_COMMON_CLASSNAME}>{menu}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};
