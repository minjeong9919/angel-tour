import { Carousel } from "./_components/Carousel";
import Arrow from "@/app/_assets/icons/arrow.svg";

export default function Home() {
  return (
    <div className=''>
      <Carousel />
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <Arrow width={30} fill='white' />
      </main>
    </div>
  );
}
