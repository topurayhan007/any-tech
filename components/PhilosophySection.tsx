import Image from "next/image";
import React from "react";
import Card from "./Card";

const PhilosophySection = () => {
  const cardList = [
    {
      iconHref: "/assets/icons/icon-1.svg",
      heading: "Full-suite solutions",
      info: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    },
    {
      iconHref: "/assets/icons/icon-2.png",
      heading: "Simplify the complex",
      info: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    },
    {
      iconHref: "/assets/icons/icon-3.svg",
      heading: "Cutting-edge tech",
      info: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    },
  ];
  return (
    <section className="container my-10 md:my-14 lg:my-28">
      <h6 className="uppercase text-center">Our Philosophy</h6>
      <h2 className="mt-4 mb-6 leading-tight text-center">
        Human-centred innovation
      </h2>
      <figure className="hidden md:block">
        <Image
          src="/assets/backgrounds/flowchart-desktop.png"
          alt="Our Process FLowchart"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </figure>

      <figure className="md:hidden block">
        <Image
          src="/assets/backgrounds/flowchart-mobile.png"
          alt="Our Process FLowchart"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </figure>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {cardList.map((item, index) => (
          <Card
            key={item.heading + index}
            iconHref={item.iconHref}
            heading={item.heading}
            info={item.info}
            delay={800 + 500 * index}
          />
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
