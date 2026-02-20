import React from "react";
import navLogo from "@/public/navbar/logo.svg";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="xs:mt-8 xs:mx-4 xl:mt-8 xl:mx-15">
      <div className="flex items-center justify-between bg-white xs:p-4 xl:p-8 xs:rounded-xl xl:rounded-3xl">
        <div className="xs:hidden xl:flex items-center gap-10">
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
        {/* responsive bar */}
        <div className="xl:hidden">
          <FaBars className="text-[20px]" />
        </div>
        <Image
          className="xs:w-20 xs:h-5 xl:w-32 xl:h-8"
          src={navLogo}
          alt="logo"
        />
        <div className="flex items-center xs:gap-2.5 lg:gap-10">
          <div className="xs:hidden xl:flex">
            <IoSearch className="text-2xl" />
          </div>
          <div>
            <FaUser className="text-2xl" />
          </div>
          <div className="font-open-sans bg-yellow rounded-full w-8 h-8">
            <p className="text-base font-semibold py-1.25 px-2.75">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
