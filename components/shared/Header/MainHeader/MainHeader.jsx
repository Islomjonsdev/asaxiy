import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mainHeaderLogo from "../../../../public/svg/logo.svg";
import cartIcon from "../../../../public/svg/cart.svg";
import likeIcon from "../../../../public/svg/heart.svg";
import compareIcon from "../../../../public/svg/comparison.svg";
import logoutIcon from "../../../../public/svg/logout.svg";
import searchIcon from "../../../../public/svg/search.svg";
import photoIcon from "../../../../public/svg/photo.svg";

const MainHeader = () => {
  return (
    <div className="flex items-center gap-[40px] mb-[12px] relative">
      <Link href={"/"}>
        <Image
          src={mainHeaderLogo}
          width={170}
          height={40}
          alt="mainHeaderLogo"
        />
      </Link>
      <Input
        className="relative"
        variant="formInput"
        placeholder="Product search"
      />
      <Image
        className="absolute top-[12px] left-[18%]"
        src={searchIcon}
        width={24}
        height={24}
        alt="searchIcon"
      />
      <Image
        className="absolute top-[12px] right-[33%]"
        src={photoIcon}
        width={24}
        height={24}
        alt="photoIcon"
      />
      <div className=" flex item-center gap-[24px]">
        <Link
          className="flex flex-col items-center font-normal text-[15px] leading-[20px] text-[#5C596D]"
          href={"/basket"}
        >
          <Image src={cartIcon} width={20} height={20} alt="cartIcon" />
          Basket
        </Link>
        <Link
          className="flex flex-col items-center font-normal text-[15px] leading-[20px] text-[#5C596D]"
          href={"/favorites"}
        >
          <Image src={likeIcon} width={20} height={20} alt="cartIcon" />
          Favorites
        </Link>
        <Link
          className="flex flex-col items-center font-normal text-[15px] leading-[20px] text-[#5C596D]"
          href={"/comparison"}
        >
          <Image src={compareIcon} width={20} height={20} alt="cartIcon" />
          Comparison
        </Link>
        <Link
          className="flex flex-col items-center font-normal text-[15px] leading-[20px] text-[#5C596D]"
          href={"/logout"}
        >
          <Image src={logoutIcon} width={20} height={20} alt="cartIcon" />
          To come in
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
