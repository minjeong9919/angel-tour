"use client";

import { ChatButton } from "./ChatButton";
import NAVER from "@/app/_assets/icons/naver-band.svg";
import KAKAO from "@/app/_assets/icons/kakao.svg";
import Link from "next/link";
import { useState } from "react";

export const FixedFooter = () => {
  const [naverHover, setNaverHover] = useState(false);
  const [naverText, setNaverText] = useState<string | null>();
  const [kakaoHover, setKakaoHover] = useState(false);
  const [kakaoText, setKakaoText] = useState<string | null>();

  const handleNaverHover = () => {
    setNaverHover(true);
    setTimeout(() => {
      setNaverText("네이버 밴드");
    }, 310);
  };

  const handleNaverLeave = () => {
    setNaverHover(false);
    setNaverText(null);
  };

  const handleKakaoHover = () => {
    setKakaoHover(true);
    setTimeout(() => {
      setKakaoText("카카오톡 상담");
    }, 310);
  };

  const handleKakaoLeave = () => {
    setKakaoHover(false);
    setKakaoText(null);
  };

  return (
    <div className='fixed bottom-10 right-10 flex flex-col z-100 font-jua gap-4'>
      <ChatButton />
      <Link
        target='_blank'
        href='https://www.band.us/band/68913058'
        onMouseEnter={handleNaverHover}
        onMouseLeave={handleNaverLeave}
        className={`${
          naverHover ? "w-[180px]" : "w-[50px]"
        } h-[50px] ml-auto bg-black/50 z-1 shadow-2xl text-xl rounded-full duration-300 flex align-center gap-3 cursor-pointer`}
      >
        <div className='rounded-full w-[50px] flex-center py-2'>
          <NAVER width={30} height={30} />
        </div>
        {naverHover && naverText && (
          <span className='flex-center mr-5 text-white'>네이버 밴드</span>
        )}
      </Link>
      <Link
        target='_blank'
        href='https://open.kakao.com/o/gsqdO6nh'
        onMouseEnter={handleKakaoHover}
        onMouseLeave={handleKakaoLeave}
        className={`${
          kakaoHover ? "w-[210px]" : "w-[50px]"
        } h-[50px] ml-auto bg-black/50 z-1 shadow-2xl text-xl rounded-full duration-300 flex align-center gap-3 cursor-pointer`}
      >
        <div className='rounded-full w-[50px] flex-center p-1'>
          <KAKAO width={50} fill='white' />
        </div>
        {kakaoHover && kakaoText && (
          <span className='flex-center mr-5 text-white'>카카오톡 단톡방</span>
        )}
      </Link>
    </div>
  );
};
