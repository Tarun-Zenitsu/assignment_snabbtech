import starImg from "@/assets/Union.svg"

interface CardProps {
  id: number;
  title: string;
  description: string;
}

const CardComponent: React.FC<CardProps> = ({ id, title, description }) => {
  return (
    <div className="bg-neutral-50 w-[262px] h-[288px] pt-3 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto rounded-t-[40%] overflow-hidden border mb-4 border-t-2 border-red-400">
      <div className="flex justify-center flex-col text-center gap-4 p-4">
        <p className="text-[13px]">{`0${id}`}</p>
        <h1 className="text-[40px]">{title}</h1>
        <p className="text-[13px]">{description}</p>
      </div>
    </div>
  );
};

interface CardTwoProps {
  id: number;
  title: string;
  description: string;
}

const CardTwoComponent: React.FC<CardTwoProps> = ({ title, description }) => {
  return (
    <div className="bg-neutral-50 w-[262px] h-[288px] pt-3 sm:max-w-md md:max-w-lg rounded-t-[40%] lg:max-w-xl xl:max-w-2xl mx-auto rounded overflow-hidden border-t-2 border-t-red-300 border-l border-r border-b border-gray-300 mb-4">
      <div className="flex justify-center flex-col text-center gap-4 p-4">
        <div className="flex justify-center items-center">
          <img src={starImg} alt="starImg" className="size-7 " />
        </div>
        <h1 className="text-[40px]">{title}</h1>
        <p className="text-[13px]">{description}</p>
      </div>
    </div>
  );
};
const RotedCard: React.FC<CardTwoProps> = ({ title, description }) => {
  return (
    <div className="bg-neutral-50 w-[262px] h-[288px] pt-3 sm:max-w-md md:max-w-lg rounded-b-[40%] lg:max-w-xl xl:max-w-2xl mx-auto rounded overflow-hidden border-t-2 border-b-red-300 border-l border-r border-b border-gray-300 mb-4">
      <div className="flex justify-center flex-col text-center gap-4 p-4">
        <div className="flex justify-center items-center">
          <img src={starImg} alt="starImg" className="size-7 "/>
        </div>
        <h1 className="text-[40px]">{title}</h1>
        <p className="text-[13px]">{description}</p>
      </div>
    </div>
  );
};

export { CardComponent, CardTwoComponent, RotedCard };
