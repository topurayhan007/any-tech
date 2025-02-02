import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import React from "react";

interface ButtonProps {
  variant: "outline" | "primary" | "primary-2";
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  href,
  className,
  children,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "md:py-[14px] py-[13px] px-[42px] space-x-[8px] flex items-center justify-center transition-all duration-300 rounded-[3px] group",
        {
          "border border-white hover:bg-white hover:shadow-button-primary":
            variant === "outline",
          "bg-orange-main shadow-button-primary": variant === "primary",
          "md:py-[13px] py-3 bg-orange-main drop-shadow-button-primary hover:bg-orange-500 hover:shadow-button-primary":
            variant === "primary-2",
        },
        className
      )}
    >
      <span
        className={cn("text-white text-lg font-semibold font-inter", {
          "group-hover:text-blue-main": variant === "outline",
          "transition-transform duration-500 group-hover:-translate-x-[3px]":
            variant === "primary",
          "": variant === "primary-2",
        })}
      >
        {children}
      </span>
      <FaAngleRight
        className={cn("ml-2 transition-transform", {
          "text-white group-hover:text-blue-main duration-200 group-hover:translate-x-[4.5px] text-sm":
            variant === "outline",
          "text-white duration-500 group-hover:translate-x-[3px] text-xs":
            variant === "primary",
          "text-white duration-200 group-hover:translate-x-[4.5px] text-sm":
            variant === "primary-2",
        })}
      />
    </Link>
  );
};

export default Button;
