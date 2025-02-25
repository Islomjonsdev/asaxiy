import { categoriesData } from "@/api/data";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <section className="mb-[96px]">
      <div className="max-w-[1336px] w-full sm:flex-wrap ml-auto mr-auto pl-[20px] pr-[20px]">
          <h1 className="text-[#5C596D] font-bold text-[24px] leading-[28px] mb-6">Popular categories</h1>
        <ul className="flex items-center justify-between">
          {categoriesData?.map((card) => {
            const { id, categoriesImage, categoriesText } = card;
            return (
              <li className="flex flex-col items-center max-w-[300px] bg-[#F6F6F6] py-[16px]" key={id}>
                <Image
                  src={categoriesImage}
                  width={270}
                  height={160}
                  alt="categoriesImage"
                />
                <p className="text-[#5C596D] font-bold text-[20px] leading-[24px]">{categoriesText}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
