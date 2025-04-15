import { Carousel } from "./_components/Carousel";
import { CheckPoint } from "./_components/CheckPoint";
import { Recommendataion } from "./_components/Recommendataion";
import { QnA } from "./_components/QnA";

export default function Home() {
  return (
    <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
      <Carousel />
      <div className='w-[100vw] p-20 flex flex-col gap-50'>
        <Recommendataion />
        <CheckPoint />
        <QnA />
      </div>
    </main>
  );
}
