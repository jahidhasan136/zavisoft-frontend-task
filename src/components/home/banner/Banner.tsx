import React from "react";
import bannerImage from "@/public/banner/banner.svg";
import imageOne from "@/public/banner/shortimg.svg";
import imageTwo from "@/public/banner/shortimg2.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      {/* banner title */}
      <h1 className="font-rubik xs:text-[60px] md:text-[120px] xl:text-[223.5px] leading-none tracking-normal uppercase font-bold text-dark-gray my-6">
        DO IT <span className="text-blue">RIGHT</span>
      </h1>

      {/* banner image */}
      <div className="relative">
        <Image src={bannerImage} alt="banner" className="w-330 h-187.5" />
        {/* left part */}
        <div className="absolute bottom-12 left-12 grid gap-6 text-white">
          <div className="w-122.5">
            <h2 className="uppercase font-rubik font-semibold text-[74px] leading-none tracking-normal">
              Nike Air Max
            </h2>
            <p className="font-open-sans font-semibold text-2xl tracking-normal">
              Nike introducing the new air max for everyone's comfort
            </p>
          </div>
          <div>
            <button>Shop Now</button>
          </div>
        </div>
        {/* right part add two images */}
        <div className="absolute bottom-8 right-8 grid gap-4">
          <Image src={imageOne} alt="sub image one" />
          <Image src={imageTwo} alt="sub image one" />
        </div>
        {/* top text part */}
        <div className="absolute -rotate-90 top-40 -left-22 text-white">
          <p className="font-rubik font-semibold text-base leading-none tracking-normal py-6 px-6.5 bg-dark-gray rounded-b-2xl">
            Nike product of the year
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
