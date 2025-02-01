// import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-blue-main">
      <nav className="container mx-auto">
        <div className="">
          {/* <Image src="/logo.svg" alt="Logo" width={50} height={10} /> */}
          <p>AnyTech</p>
        </div>
        <ul className="flex">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Services</li>
          <li className="">Contact</li>
        </ul>
        <button className="">Contact Me</button>
      </nav>
    </header>
  );
};

export default Navbar;
