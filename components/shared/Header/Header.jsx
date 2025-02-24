import React from "react";
import { headerData } from "@/api/data";
import Image from "next/image";
import Link from "next/link";
import flagIcon from "../../../public/svg/flag.svg"
import arrowIcon from "../../../public/svg/arrow.svg"

const Header = () => {
  return (
    <header>
      <div className="max-w-[1336px] w-full pl-[20px] pr-[20px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[32px]">
            <p className="font-normal text-[14px] leading-[18px] text-[#5C596D]">About shop</p>
            <p className="font-normal text-[14px] leading-[18px] text-[#5C596D]">
              Leave feedback
            </p>
            <p className="font-normal text-[14px] leading-[18px] text-[#5C596D]">Delivery</p>
          </div>

          <div className="flex gap-[32px]">
            {headerData?.map((item) => {
              const { headerImage, headerText } = item;
              return (
                <Link className="flex items-center gap-[4px] text-[#5C596D] font-normal text-[14px] leading-[18px]" href="/">
                  <Image
                    src={headerImage}
                    width={20}
                    height={20}
                    alt={"headerImage"}
                  />
                  {headerText}
                </Link>
              );
            })}
            <div className="flex items-center gap-[8px] cursor-pointer">
                <Image src={flagIcon} width={20} height={20} alt="flagIcon"/>
                <p>Eng</p>
                <Image src={arrowIcon} height={20} alt="arrowIcon"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
