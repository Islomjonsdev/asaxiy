import { categoriesData } from "@/api/data";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <section className="mb-24">
      <div className="max-w-[1336px] w-full mx-auto px-5">
        <h1 className="text-[#5C596D] font-bold text-2xl sm:text-[24px] leading-[28px] mb-6">
          Popular Categories
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoriesData?.map((card) => {
            const { id, categoriesImage, categoriesText } = card;
            return (
              <li
                className="flex flex-col items-center bg-[#F6F6F6] p-4 sm:p-6 rounded-lg"
                key={id}
              >
                <Image
                  src={categoriesImage}
                  width={270}
                  height={160}
                  alt="categoriesImage"
                  className="w-full h-auto object-cover rounded-md"
                />
                <p className="text-[#5C596D] font-bold text-lg sm:text-xl leading-[24px] mt-2">
                  {categoriesText}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
