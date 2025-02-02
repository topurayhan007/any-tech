"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { FaGlobe } from "react-icons/fa6";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      className={`fixed top-0 left-0 lg:py-5 py-8 w-full transition-all duration-300 font-inter z-[9999] ${
        isVisible ? "translate-y-0" : "-translate-y-[120%]"
      } ${
        isScrolled
          ? "bg-blue-indigo lg:bg-white text-blue-main drop-shadow-nav"
          : "bg-blue-indigo lg:bg-transparent text-white"
      }`}
    >
      <div className="relative">
        <nav className="container flex items-center justify-between lg:px-4 px-7">
          <div className="flex items-center justify-center">
            <Link href="/">
              {/* Desktop Logo */}
              <Image
                src={isScrolled ? "/assets/logo-blue.svg" : "/assets/logo.svg"}
                alt="Logo"
                width={171}
                height={28}
                className="hidden lg:block h-auto object-contain lg:w-[170px]"
              />
              {/* Mobile Logo */}
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={171}
                height={28}
                className="block lg:hidden w-[134px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center">
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
                className={`flex items-center px-3 py-2 border rounded-full ${
                  isScrolled ? "border-blue-main" : "border-white"
                }`}
              />
            </li>
          </ul>
          <div className="hidden lg:flex">
            <Button href="#" variant={isScrolled ? "primary-2" : "outline"}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="lg:hidden text-white">
            {isMobileMenuOpen ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[calc(100%+2rem)] lg:hidden w-full bg-blue-indigo-light text-white transition-transform duration-300 p-8 z-0 ${
            isMobileMenuOpen ? "block translate-x-0" : "-translate-x-[120%]"
          }`}
        >
          <ul className="flex flex-col items-start space-y-6 mb-8 text-lg">
            <Dropdown
              label="Solutions"
              items={solutionsDropdownList}
              className="w-full whitespace-nowrap group lg:py-3 lg:px-6 cursor-pointer"
            />
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">About Us</li>
          </ul>

          <div className="flex items-center justify-center mb-10">
            <Dropdown
              label="English"
              items={languageDropdownList}
              clickable
              icon={<FaGlobe className="text-xl" />}
              className="flex items-center border border-white px-4 py-2 rounded-full"
            />
          </div>

          <div className="">
            <Button href="#" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
