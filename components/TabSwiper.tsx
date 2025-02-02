"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TabDataEntry } from "@/constants/tabData";
import Image from "next/image";

interface TabSwiperProps {
  tabs: string[];
  tabData: TabDataEntry[];
}

const TabSwiper = ({ tabs, tabData }: TabSwiperProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (swiperRef.current) {
      swiperRef.current?.slideTo(index);
    }
  };

  return (
    <div className="w-full mx-auto">
      {/* Tabs */}
      <div className="hidden lg:flex flex-wrap justify-center gap-4 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-5 py-1 md:px-10 md:py-3 text-lg font-semibold rounded-full transition-all duration-300 text-blue-main hover:bg-blue-medium-light/30 font-inter  
              ${
                activeTab === index ? "bg-blue-medium-light" : "bg-transparent"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
        initialSlide={0}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Autoplay]}
        className="w-full"
      >
        {tabData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="md:p-10 p-6 m-5  bg-white rounded-3xl drop-shadow-[0_4px_8px_rgba(190,219,255,0.4)] shadow-blue-200/40 text-center flex flex-col lg:flex-row items-center lg:gap-10 gap-5">
              <div className="w-full flex flex-col items-start text-left gap-4">
                <h6 className="uppercase">{item.subHeading}</h6>
                <h4 className="">{item.heading}</h4>
                <div className="block md:hidden w-full md:w-[80%] md:h-full">
                  <Image
                    src={item.imageHref}
                    alt={item.heading + " Image"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover aspect-square rounded-2xl h-48 md:h-full w-full"
                  />
                </div>
                <p className="font-semibold mt-4">{item.boldParagraph}</p>
                <p className="mt-2 text-black-secondary">{item.paragraph}</p>
              </div>
              <div className="hidden md:block w-full lg:w-[80%] md:h-full">
                <Image
                  src={item.imageHref}
                  alt={item.heading + " Image"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover aspect-square rounded-2xl h-48 md:h-72 lg:h-full w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TabSwiper;
