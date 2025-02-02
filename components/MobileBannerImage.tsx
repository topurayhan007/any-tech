import Image from "next/image";
import React from "react";

const MobileBannerImage = () => {
  return (
    <section>
      <div className="block lg:hidden absolute top-[81%] h-[45%] md:h-[55%] w-full hero-img-clip-top-bottom">
        <Image
          src="/assets/backgrounds/banner.jpg"
          alt="Hero Image"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
};

export default MobileBannerImage;
