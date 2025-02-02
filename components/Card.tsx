import React from "react";
import Image from "next/image";

interface CardProps {
  iconHref: string;
  heading: string;
  info: string;
}

const Card: React.FC<CardProps> = ({ iconHref, heading, info }) => {
  return (
    <div className="bg-blue-light lg:p-8 md:p-6 p-7 rounded-2xl flex flex-col gap-5">
      <Image
        src={iconHref}
        alt="Icon"
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover h-12 w-12"
      />
      <h4 className="">{heading}</h4>
      <p className="text-black-secondary">{info}</p>
    </div>
  );
};

export default Card;
