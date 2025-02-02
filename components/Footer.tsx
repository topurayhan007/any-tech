import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-blue-secondary py-12">
        <div className="container w-full h-full flex flex-row items-center justify-between font-inter text-sm">
          <Link href="/" className="w-52">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover h-full w-full"
            />
          </Link>

          <div className="hidden lg:flex flex-row items-center justify-center text-teal-main font-inter text-base">
            <p className="border-r border-teal-400/20 py-4 px-8 font-bold text-teal-main">
              Our Solutions
            </p>
            <ul className="flex flex-row items-center justify-between gap-2 ps-5">
              <li className="hover:text-blue-main cursor-pointer py-4 px-3">
                AnyCaaS
              </li>
              <li className="hover:text-blue-main cursor-pointer py-4 px-3">
                AnyBaaS
              </li>
              <li className="hover:text-blue-main cursor-pointer py-4 px-3">
                AnyPaaS
              </li>
            </ul>
          </div>

          <div className="flex text-2xl items-center justify-between gap-3">
            <Link href="#" className="text-blue-main hover:text-white">
              <FaLinkedin />
            </Link>

            <Link href="#" className="text-blue-main hover:text-white">
              <FaPhoneAlt />
            </Link>

            <Link href="#" className="text-blue-main hover:text-white">
              <TbMailFilled />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-tertiary py-5">
        <div className="container w-full h-full flex flex-col md:flex-row items-center justify-between font-inter text-sm gap-2">
          <p className="text-blue-main font-medium">
            <span className="font-bold">©2023 All rights reserved. </span>
            Any Technology Pte Ltd.
          </p>
          <Link
            href="#"
            className="text-blue-main hover:text-white font-semibold"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
