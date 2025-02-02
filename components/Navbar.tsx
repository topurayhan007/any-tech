"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { FaGlobe } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;

      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionsDropdownList = [
    { label: "AnyCaaS", href: "#" },
    { label: "AnyBaaS", href: "#" },
    { label: "AnyPaaS", href: "#" },
  ];

  const languageDropdownList = [
    { label: "EN (English)", href: "/en" },
    { label: "TH (Thai)", href: "/th" },
    { label: "ID (Bahasa Indonesia)", href: "/id" },
    { label: "TW (Traditional Chinese)", href: "/tw" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-[9999] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white text-blue-main drop-shadow-nav"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={isScrolled ? "/assets/logo-blue.svg" : "/assets/logo.svg"}
              alt="Logo"
              width={171}
              height={28}
              className="w-[134px] h-auto object-contain lg:w-[170px]"
            />
          </Link>
        </div>

        <ul className="flex items-center">
          <li className="">
            <Dropdown
              label="Solutions"
              items={solutionsDropdownList}
              className="w-full whitespace-nowrap group lg:py-3 lg:px-6 cursor-pointer"
            />
          </li>
          <li
            className={`w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer ${
              isScrolled ? "border-blue-main" : "border-white"
            }`}
          >
            Services
          </li>
          <li
            className={`w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer ${
              isScrolled ? "border-blue-main" : "border-white"
            }`}
          >
            About Us
          </li>
          <li className="w-full whitespace-nowrap group lg:px-6 cursor-pointer">
            <Dropdown
              label="EN"
              clickable
              iconRotate
              items={languageDropdownList}
              icon={<FaGlobe className="text-xs" />}
              className={`flex items-center px-4 py-2 border rounded-full ${
                isScrolled ? "border-blue-main" : "border-white"
              }`}
            />
          </li>
        </ul>
        <Button href="#" variant={isScrolled ? "primary-2" : "outline"}>
          Contact Us
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
