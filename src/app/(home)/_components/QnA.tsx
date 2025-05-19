import { FAQ } from "@/app/constants";
import { AccordianMenu } from "./AccordianMenu";

export const QnA = () => {
  return (
    <section className='p-5 lg:p-10 rounded-lg shadow-2xl bg-primary-50'>
      <h1 className='text-xl lg:text-3xl mb-2 lg:mb-5 font-black'>
        <strong className='text-3xl lg:text-4xl text-primary mb-5 font-black font-mono'>
          FAQ{" "}
        </strong>
        자주 묻는 질문
      </h1>
      <h2 className='text-sm md:text-base lg:text-lg mb-5 text-gray-400'>
        궁금한 사항을 자주 묻는 질문입니다. 더 궁금하신 내용은 밴드나 카톡을
        통해 해주세요.
      </h2>
      <div className='flex flex-col gap-2 md:gap-5'>
        {FAQ.map(({ q, a }) => (
          <AccordianMenu question={q} content={a} key={q} />
        ))}
      </div>
    </section>
  );
};
