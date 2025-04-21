import CHAT from "@/app/_assets/icons/chat.svg";
import { useState } from "react";

export const ChatButton = () => {
  const [hover, setHover] = useState(false);
  const [buttonText, setButtonText] = useState<string | null>(null);
  const handleClickChatButton = () => {
    const { Kakao } = window;

    Kakao.Channel.chat({
      channelPublicId: process.env.NEXT_PUBLIC_KAKAO_KEY,
    });
  };

  const handleHover = () => {
    setHover(true);
    setTimeout(() => {
      setButtonText("1:1 톡상담");
    }, 310);
  };

  const handleLeave = () => {
    setHover(false);
    setButtonText("");
  };
  return (
    <button
      onClick={handleClickChatButton}
      className={`h-[50px] ml-auto bg-black/50 z-1 shadow-2xl text-xl rounded-full duration-300 flex align-center gap-1 cursor-pointer`}
      style={{ width: hover ? "160px" : "50px" }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className='rounded-full w-[50px] flex-center p-1'>
        <CHAT width={50} fill='white' />
      </div>
      {hover && buttonText && (
        <span className='flex flex-center text-white'>{buttonText}</span>
      )}
    </button>
  );
};
