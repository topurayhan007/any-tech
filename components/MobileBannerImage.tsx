import Image from "next/image";
import React from "react";

const MobileBannerImage = () => {
  return (
    <section className="block lg:hidden -translate-y-[25%] md:-translate-y-[10%] -mb-[10%] md:-mb-[5%] h-[45%] md:h-[35%] w-full hero-img-clip-top-bottom">
      <Image
        src="/assets/backgrounds/banner.jpg"
        alt="Hero Image"
        width={0}
        height={0}
        sizes="100vw"
        priority
        className="object-cover h-full w-full"
      />
    </section>
  );
};

export default MobileBannerImage;
