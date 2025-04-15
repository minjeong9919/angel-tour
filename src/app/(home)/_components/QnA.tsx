import { FAQ } from "@/app/constants";

export const QnA = () => {
  return (
    <section className='p-10 rounded-lg shadow-2xl bg-primary-50'>
      <h1 className='text-3xl mb-5 font-black'>
        <strong className='text-6xl text-[#ff8000] mb-5 font-black font-mono'>
          FAQ{" "}
        </strong>
        자주 묻는 질문
      </h1>
      <h2 className='text-xl mb-10 font-bold text-gray-400'>
        궁금한 사항을 자주 묻는 질문입니다. 더 궁금하신 내용은 밴드나 카톡을
        통해 해주세요.
      </h2>
      <div className='flex flex-col gap-5'>
        {FAQ.map(({ q, a }) => (
          <div className='p-5 bg-white rounded-lg' key={q}>
            <h3 className='text-xl mb-3 border-b-1 border-gray-200 p-3 font-bold'>
              <strong className='text-primary'>Q. </strong>
              {q}
            </h3>
            <h5 className=' text-xl p-3'>A. {a}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};
