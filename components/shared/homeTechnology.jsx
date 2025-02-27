import { homeData } from "@/api/data";
import Image from "next/image";
import React from "react";
import Text from "./text";

const HomeTechnology = () => {
  return (
    <section className="mb-[96px]">
      <div className="max-w-[1336px] w-full mx-auto px-[20px]">
        <Text title="Home Appliances" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-6">
          {homeData?.map((card, id) => {
            const { homeImage, homeText } = card;
            return (
              <div
                className="max-w-[235px] w-full bg-[#F6F6F6] py-6 px-[32px] lg: max-w-[529px] w-full flex flex-col items-center"
                key={id}
              >
                <Image
                  src={homeImage}
                  className="mb-[32px]"
                  width={171}
                  height={167}
                  alt="homeImage"
                />
                <p className="text-[#5C596D] text-center font-bold text-[20px] leading-[24px]">
                  {homeText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeTechnology;
