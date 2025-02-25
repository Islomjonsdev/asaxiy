import { heroData } from "@/api/data";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F8F8F8] mb-[32PX]">
      <div className="max-w-[1336px] w-full sm:flex-wrap ml-auto mr-auto pl-[20px] pr-[20px]">
        <div className="flex items-center">
          {heroData?.map((item, id) => (
            <Link className="py-[10px] px-[16px] text-[#5C596D] text-[15px] font-normal leading-[20px]" key={id} href={"/"}>
              {item?.heroText}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
