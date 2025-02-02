"use client";
import { bankData } from "@/constants/bankData";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PartnerSection = () => {
  return (
    <section className="mb-10">
      <div className="container">
        <h6 className="uppercase text-center">TRUSTED BY THE BEST</h6>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-28 mt-8 w-full h-full">
          <div className="flex flex-row lg:flex-col lg:items-center lg:justify-center justify-between items-center gap-4 w-full border-b lg:border-0 border-blue-medium-light py-5 lg:py-0">
            <CountUp
              start={0}
              end={20}
              duration={2}
              separator=""
              prefix=">"
              className="text-5xl md:text-7xl lg:text-8xl font-semibold font-monserrat bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text"
            />
            <p className="font-inter text-lg tracking-wide">
              Years of Experience
            </p>
          </div>
          <div className="flex flex-row lg:flex-col lg:items-center lg:justify-center justify-between items-center gap-4 w-full border-b lg:border-0 border-blue-medium-light py-5 lg:py-0">
            <CountUp
              start={0}
              end={40}
              duration={2}
              separator=""
              suffix="+"
              className="text-5xl md:text-7xl lg:text-8xl font-semibold font-monserrat bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text"
            />
            <p className="font-inter text-lg tracking-wide">
              Financial Institutions
            </p>
          </div>
          <div className="flex flex-row lg:flex-col lg:items-center lg:justify-center justify-between items-center gap-4 w-full border-b lg:border-0 border-blue-medium-light py-5 lg:py-0">
            <CountUp
              start={0}
              end={200}
              duration={2}
              separator=""
              prefix=">"
              suffix="m"
              className="text-5xl md:text-7xl lg:text-8xl font-semibold font-monserrat bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text"
            />
            <p className="font-inter text-lg tracking-wide">Customers Each</p>
          </div>
        </div>

        <div className="hidden md:block mt-14 lg:mt-20">
          <div className="md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-10 lg:gap-14 h-full w-full">
            {bankData.map((item, index) => (
              <figure key={item.name + index} className="">
                <Image
                  src={item.iconHref}
                  alt={item.name + " Image"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-contain h-full w-full"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Bank Icons Swiper */}
      <div className="mt-8 block md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full mx-auto"
        >
          {bankData.map((item, index) => (
            <SwiperSlide
              key={item.name + index}
              className="flex justify-center"
            >
              <figure className="w-full h-14 flex items-center justify-center">
                <Image
                  src={item.iconHref}
                  alt={`${item.name} Image`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSection;
