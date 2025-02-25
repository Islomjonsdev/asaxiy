import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mainHeaderLogo from "../../../../public/svg/logo.svg";
import cartIcon from "../../../../public/svg/cart.svg";
import likeIcon from "../../../../public/svg/heart.svg";
import compareIcon from "../../../../public/svg/comparison.svg";
import logoutIcon from "../../../../public/svg/logout.svg";

const MainHeader = () => {
  return (
    <div className="flex items-center gap-[56px] mb-[12px]">
      <Link href={"/"}>
        <Image
          src={mainHeaderLogo}
          width={170}
          height={40}
          alt="mainHeaderLogo"
        />
      </Link>
      <Input variant="formInput" placeholder="Product search"/>
      <div className=" flex item-center gap-[20px]">
        <Link
          className="flex flex-col items-center font-normal text-[15px] leading-[20px] text-[#5C596D]"
          href={"/"}
        >
          <Image src={cartIcon} width={20} height={20} alt="cartIcon" />
          Basket
        </Link>
        <Link
          className="flex flex-col items-center font-normal text-[15px] leading-[20px] text-[#5C596D]"
          href={"/"}
        >
          <Image src={likeIcon} width={20} height={20} alt="cartIcon" />
          Favorites
        </Link>
        <Link
          className="flex flex-col items-center font-normal text-[15px] leading-[20px] text-[#5C596D]"
          href={"/"}
        >
          <Image src={compareIcon} width={20} height={20} alt="cartIcon" />
          Comparison
        </Link>
        <Link
          className="flex flex-col items-center font-normal text-[15px] leading-[20px] text-[#5C596D]"
          href={"/"}
        >
          <Image src={logoutIcon} width={20} height={20} alt="cartIcon" />
          To come in
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
