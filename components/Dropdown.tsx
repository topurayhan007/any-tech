"use client";

import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import { useState, useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DropdownProps {
  label: string;
  iconRotate?: boolean;
  items: { label: string; href: string }[];
  clickable?: boolean;
  className?: string;
  icon?: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  iconRotate,
  items,
  clickable = false,
  className,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!clickable) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [clickable]);

  return (
    <div
      ref={dropdownRef}
      className={cn("relative", { group: !clickable })}
      onMouseEnter={() => !clickable && setIsOpen(true)}
      onMouseLeave={() => !clickable && setIsOpen(false)}
    >
      {/* Dropdown Button */}
      <button
        className={cn("flex items-center focus:outline-none", className)}
        onClick={() => clickable && setIsOpen((prev) => !prev)}
      >
        {icon && <span className="mr-2">{icon}</span>} {/* Optional Icon */}
        {label}
        <HiChevronDown
          className={cn("ms-1 transition-transform", {
            "rotate-180": clickable && isOpen && iconRotate,
            "group-hover:rotate-180": !clickable && iconRotate,
          })}
        />
      </button>

      {/* Dropdown Menu */}
      <ul
        className={cn(
          "absolute left-0 top-full w-64 space-y-2 bg-white text-black shadow-lg rounded-sm transition-all duration-300",
          {
            "opacity-100 visible translate-y-0": isOpen,
            "opacity-0 invisible translate-y-2": !isOpen,
            "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0":
              !clickable,
          }
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="lg:border-t border-blue-100 first:border-none hover:text-blue-main"
          >
            <Link
              href={item.href}
              className="block py-3 px-4 whitespace-nowrap transition-all"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
