import Hotel from "@/app/_assets/icons/hotel.svg";
import Meal from "@/app/_assets/icons/meal.svg";

interface AdditionalInfoPropsType {
  hotel: string;
  breakfast?: string;
  lunch?: string;
  dinner?: string;
}

export const AdditionalInfo = ({
  hotel,
  breakfast,
  lunch,
  dinner,
}: AdditionalInfoPropsType) => {
  return (
    <div>
      <div className='border-y-1 border-gray-300 py-3 flex items-center gap-5'>
        <Hotel width={40} />
        <span>{hotel}</span>
      </div>
      <div className='border-b-1 border-gray-300 py-3 flex items-center gap-5'>
        <Meal width={40} />
        <span>조식 - {breakfast || "불포함"}</span>
        <span>중식 - {lunch || "불포함"}</span>
        <span>석식 - {dinner || "불포함"}</span>
      </div>
    </div>
  );
};
