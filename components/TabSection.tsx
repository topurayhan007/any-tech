import React from "react";
import TabSwiper from "./TabSwiper";
import { tabData } from "@/constants/tabData";

const TabSection = () => {
  const tabs = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
  ];

  return (
    <section className="my-10 md:my-14 lg:my-20">
      <div className="container">
        <h6 className="uppercase text-center">TECHNOLOGY BUILT FOR YOU</h6>
        <h2 className="mt-4 mb-6 leading-tight text-center">
          The future of finance
        </h2>
        <TabSwiper tabs={tabs} tabData={tabData} />
      </div>
      <div className="section-bottom-clip bg-gradient-to-b from-white to-blue-50 h-32"></div>
    </section>
  );
};

export default TabSection;
