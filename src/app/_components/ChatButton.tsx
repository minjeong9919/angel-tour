"use client";

import { useEffect } from "react";

export const ChatButton = () => {
  useEffect(() => {
    const { Kakao } = window;
    console.log(Kakao);

    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_APP_KEY);
    Kakao.Channel.createChatButton({
      container: "#kakao-talk-channel-chat-button",
      channelPublicId: process.env.NEXT_PUBLIC_KAKAO_KEY,
      size: "large",
      shape: "pc",
      supportMultipleDensities: true,
    });
  }, []);
  return <div id='kakao-talk-channel-chat-button' />;
};
