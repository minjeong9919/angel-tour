import { ChatButton } from "./ChatButton";

export const FixedFooter = () => {
  return (
    <div className='fixed bottom-20 right-20 flex flex-col z-100'>
      <ChatButton />
    </div>
  );
};
