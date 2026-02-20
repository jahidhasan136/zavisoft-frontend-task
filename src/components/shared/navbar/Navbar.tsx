import React from "react";
import navLogo from "@/public/navbar/logo.svg";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-8 rounded-3xl">
      <div className="flex items-center gap-10">
        <p className="font-rubik text-base font-semibold leading-none tracking-normal">
          New Drops 🔥
        </p>
        <p className="font-rubik text-base font-semibold leading-none tracking-normal">
          Men{" "}
          <span>
            <IoMdArrowDropdown className="inline-block" />
          </span>
        </p>
        <p className="font-rubik text-base font-semibold leading-none tracking-normal">
          Women{" "}
          <span>
            <IoMdArrowDropdown className="inline-block" />
          </span>
        </p>
      </div>
      <Image src={navLogo} alt="logo" />
      <div className="flex items-center gap-10">
        <div>
          <IoSearch className="text-2xl" />
        </div>
        <div>
          <FaUser className="text-2xl" />
        </div>
        <div className="font-open-sans bg-(--color-yellow) rounded-full w-8 h-8">
          <p className="text-base font-semibold py-1.25 px-2.75">0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
