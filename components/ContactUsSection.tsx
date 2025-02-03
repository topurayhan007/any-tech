"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactUsSection = () => {
  return (
    <section className="relative bg-footer-bg footer-top-clip-mobile lg:footer-top-clip lg:h-[530px] h-[60vh] bg-cover bg-no-repeat overflow-hidden z-0">
      <div className="container flex flex-col items-start justify-center w-full h-full gap-6 z-10">
        <h2 className="text-white">Legacy no longer</h2>
        <p className="text-white">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <div className="w-full lg:w-auto">
          <Button href="#" variant="primary">
            Contact Us
          </Button>
        </div>
      </div>

      <motion.figure
        initial={{ x: "10%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
        className="absolute h-[120%] w-[120%] left-[-10%] top-[-10%] -z-10"
      >
        <Image
          src="/assets/backgrounds/footerWaveLines.svg"
          alt="Line Graphics"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </motion.figure>
    </section>
  );
};

export default ContactUsSection;
