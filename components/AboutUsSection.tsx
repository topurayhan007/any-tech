import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <section className="">
      <div className="container mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <h6 className="uppercase">Powering the future of finance</h6>
            <h2 className="my-5 leading-tight">
              Uncovering new ways to delight customers
            </h2>
            <p className="hidden md:block font-bold mb-5 leading-relaxed">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="hidden md:block font-normal leading-relaxed">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>

          <div className="w-full relative my-12 md:my-0">
            <figure className="w-[75%] md:w-[80%] lg:w-[75%] mt-0 md:mt-8 lg:mt-0 mx-auto [box-shadow:0px_23px_30px_0px_#16437763]">
              <Image
                src="/assets/backgrounds/section-2.png"
                alt="Woman doing financing"
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover h-full w-full"
              />
            </figure>

            <div className="">
              <figure className="absolute w-[20%] top-[15%] right-0">
                <Image
                  src="/assets/icons/element-1.svg"
                  alt="Graphics icon 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover h-full w-full"
                />
              </figure>
              <figure className="absolute w-[13%] top-[24%] left-[6%]">
                <Image
                  src="/assets/icons/element-2.svg"
                  alt="Graphics icon 2"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover h-full w-full"
                />
              </figure>
              <figure className="absolute w-[15%] top-[40%] left-[25%]">
                <Image
                  src="/assets/icons/element-3.svg"
                  alt="Graphics icon 3"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover h-full w-full"
                />
              </figure>
            </div>

            <figure className="absolute inset-0 w-full h-full -z-10">
              <Image
                src="/assets/backgrounds/financingLine1.svg"
                alt="Line Graphics 1"
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover h-full w-full overflow-visible"
              />
            </figure>

            <figure className="absolute -bottom-[15%] md:-bottom-[0%] lg:-bottom-[10%] right-[30%] w-1/2 h-1/2 md:w-[40%] md:h-[40%] lg:w-1/2 lg:h-1/2 z-10">
              <Image
                src="/assets/backgrounds/financingLine2.png"
                alt="Line Graphics 2"
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover h-full w-full overflow-visible"
              />
            </figure>
          </div>

          <div className="block md:hidden">
            <p className="font-bold mb-5 leading-relaxed">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="font-normal leading-relaxed">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
        </div>
      </div>
      <div className="section-bottom-clip bg-gradient-to-b from-white to-blue-50 h-32"></div>
    </section>
  );
};

export default AboutUsSection;
