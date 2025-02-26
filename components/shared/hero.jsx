import { heroData } from "@/api/data";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F8F8F8] mb-8">
      <div className="max-w-[1336px] w-full mx-auto px-5">
        <div className="flex flex-wrap items-center sm:justify-start gap-2 sm:gap-4">
          {heroData?.map((item, id) => (
            <Link
              className="py-2 px-4 text-[#5C596D] text-base sm:text-[15px] font-normal leading-[20px] whitespace-nowrap"
              key={id}
              href={"/"}
            >
              {item?.heroText}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
