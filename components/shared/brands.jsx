"use client";

import { useState } from "react";
import Text from "./text";
import nokiaIcon from "../../public/svg/nokia.svg";
import appleIcon from "../../public/svg/apple.svg";
import samsungIcon from "../../public/svg/samsung.svg";
import huaweIcon from "../../public/svg/huawe.svg";
import lgIcon from "../../public/svg/lg.svg";
import miIcon from "../../public/svg/mi.svg";

import Image from "next/image";

const Brands = () => {
  const [tab, setTab] = useState("Phones");
  const categories = [
    "Phones",
    "Accessories",
    "Premium",
    "Sport",
    "Toys",
    "Beauty",
    "Books",
    "Shoes",
  ];
  const brands = {
    Phones: [
      { logo: nokiaIcon },
      { logo: appleIcon },
      { logo: samsungIcon },
      { logo: samsungIcon },
      { logo: samsungIcon },
      { logo: samsungIcon },
      { logo: huaweIcon },
      { logo: lgIcon },
      { logo: miIcon },
      { logo: miIcon },
      { logo: miIcon },
      { logo: miIcon },
    ],
    Accessories: [],
    Premium: [],
    Sport: [],
    Toys: [],
    Beauty: [],
    Books: [],
    Shoes: [],
  };
  return (
    <section className="mb-[64px]">
      <div className="max-w-[1336px] w-full sm:flex-wrap ml-auto mr-auto pl-[20px] pr-[20px]">
        <Text title="Популярные бренды" />
        <div className="flex items-center flex-wrap justify-between mb-6 lg: gap-4">
          {categories?.map((tabs) => (
            <button
              key={tabs}
              onClick={() => setTab(tabs)}
              className={`px-[50px] py-[8px] border border-transparent bg-[#F6F6F6] text-[#5C596D] font-normal text-[15px] leading-[20px] rounded-[4px] ${ tab === tabs ? "text-[#1B5BF7] border border-[#B3C8FD]" : ""}`}
            >
              {tabs}
            </button>
          ))}
        </div>
        {tab === "Phones" ? (
          <div className="flex flex-wrap gap-[12px]">
            {brands?.Phones.map((item, id) => (
              <div
                className="border border-[#EAE9EF] max-w-[206px] w-full flex items-center justify-center py-[12px]"
                key={id}
              >
                <Image src={item?.logo} width={92} height={52} alt="logo" />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {tab === "Accessories" ? <div>Accessories</div> : ""}
        {tab === "Premium" ? <div>Premium</div> : ""}
        {tab === "Sport" ? <div>Sport</div> : ""}
        {tab === "Toys" ? <div>Toys</div> : ""}
        {tab === "Beauty" ? <div>Beauty</div> : ""}
        {tab === "Books" ? <div>Books</div> : ""}
        {tab === "Shoes" ? <div>Shoes</div> : ""}
      </div>
    </section>
  );
};

export default Brands;
