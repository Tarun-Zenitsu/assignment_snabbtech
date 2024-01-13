// CardComponent.tsx

import React from 'react';

interface CardProps {
  id: number;
  title: string;
  description: string;
}

const CardComponent: React.FC<CardProps> = ({ id, title, description }) => {
  return (
    <div className="bg-neutral-50 w-60 h-[15rem] pt-3 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto rounded-t-[50%] overflow-hidden border-2 mb-4 border-t-2 border-red-500">
      <div className="flex justify-center flex-col text-center gap-4 p-4">
        <p className="text-sm">{id}</p>
        <h1 className="text-lg">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
