"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const HeroSection = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(0);

  const xOffset = useTransform(x, (value) => value);
  const yOffset = useTransform(y, (value) => value);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const moveX = (clientX - innerWidth / 2) * 0.02;
    const moveY = (clientY - innerHeight / 2) * 0.02;

    x.set(0 + moveX);
    y.set(moveY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="bg-hero-bg lg:hero-bg-clip relative w-full h-[70vh] md:h-[70vh] lg:h-[94vh] overflow-hidden z-0">
      <div className="container h-full relative z-20 flex items-center justify-center">
        <div className="w-full lg:w-[60%]">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="">Embrace the future of finance</h1>
            <p className="text-lg font-semibold text-white my-8 font-montserrat">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation.
            </p>
            <div className="w-full lg:w-auto">
              <Button href="#" variant="primary">
                Reach Out to Us
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[40%]"></div>
      </div>

      <div className="hidden lg:block absolute top-0 right-0 w-[65%] h-full hero-img-clip">
        <Image
          src="/assets/backgrounds/banner.jpg"
          alt="Hero Image"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover h-[110%] w-full"
        />
        <div className="bg-hero-gradient-overlay absolute top-0 left-0 h-full w-full"></div>
      </div>

      {/* Hero SVG with Page-Load Animation + Mouse Follow */}
      <motion.div
        className="hidden lg:block absolute inset-0 h-full w-full z-10"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ x: xOffset, y: yOffset }}
      >
        <Image
          src="/assets/backgrounds/heroDesktopWaveLines.svg"
          alt="Angled lines 1"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </motion.div>

      <div className="block lg:hidden absolute top-0 left-0 h-full w-full">
        <Image
          src="/assets/backgrounds/heroMobileWaveLines.svg"
          alt="Angled lines 5"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
