import Link from "next/link";
import React from "react";
import payMe from "../../../public/svg/payme.svg";
import humo from "../../../public/svg/humo.svg";
import uzCard from "../../../public/svg/uzcard.svg";
import Image from "next/image";
import inIcon from "../../../public/svg/in.svg"
import instaIcon from "../../../public/svg/insta.svg"
import twitterIcon from "../../../public/svg/twitter.svg"
import faceIcon from "../../../public/svg/face.svg"
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pb-[20px]">
      <div className="max-w-[1336px] w-full sm:flex-wrap ml-auto mr-auto pl-[20px] pr-[20px]">
        <ul className="flex gap-[75px] mb-[64px]">
          <li>
            <h3 className="text-[#1D1A2F] text-[20px] leading-[24px] font-semibold mb-4">
              Company
            </h3>
            <ul>
              <li className="mb-[12px]">
                <Link
                  className="text-[#5C596D] d-inline-block font-normal text-[16px] leading-[20px]"
                  href={"/"}
                >
                  About company
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#5C596D] font-normal text-[16px] leading-[20px]"
                  href={"/"}
                >
                  Store addresses
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-[#1D1A2F] text-[20px] leading-[24px] font-normal mb-4">
              Information
            </h3>
            <ul>
              <li className="mb-[12px]">
                <Link
                  className="text-[#5C596D] d-inline-block font-normal text-[16px] leading-[20px]"
                  href={"/"}
                >
                  Installment plan
                </Link>
              </li>
              <li className="mb-[12px]">
                <Link
                  className="text-[#5C596D] font-normal text-[16px] leading-[20px]"
                  href={"/"}
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#5C596D] font-normal text-[16px] leading-[20px]"
                  href={"/"}
                >
                  Bonuses
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-[#1D1A2F] text-[20px] leading-[24px] font-normal mb-4">
              Help for the buyer
            </h3>
            <ul>
              <li className="mb-[12px]">
                <Link
                  className="text-[#5C596D] d-inline-block font-normal text-[16px] leading-[20px]"
                  href={"/"}
                >
                  Questions and answers
                </Link>
              </li>
              <li className="mb-[12px]">
                <Link
                  className="text-[#5C596D] font-normal text-[16px] leading-[20px]"
                  href={"/"}
                >
                  How to place an order on the site
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#5C596D] font-normal text-[16px] leading-[20px]"
                  href={"/"}
                >
                  Exchange and return
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-[#1D1A2F] text-[20px] leading-[24px] font-normal mb-4">
              Payment method
            </h3>
            <ul>
              <li className="mb-[12px] flex items-center gap-4">
                <Link href={"/"}>
                  <Image src={payMe} width={81} height={23} alt="payMe" />
                </Link>
                <Link href={"/"}>
                  <Image src={humo} width={81} height={23} alt="humo" />
                </Link>
                <Link href={"/"}>
                  <Image src={uzCard} width={22} height={20} alt="uzcard" />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-[#1D1A2F] text-[20px] leading-[24px] font-normal mb-4">
              We are in social networks
            </h3>
            <ul>
              <li className="mb-[12px] flex items-center gap-4">
                <Link href={"/"}>
                    <Image src={inIcon} width={20} height={20} alt="in"/>
                </Link>
                <Link href={"/"}>
                  <Image src={instaIcon} width={20} height={20} alt="insta"/>
                </Link>
                <Link href={"/"}>
                  <Image src={twitterIcon} width={20} height={20} alt="twitter"/>
                </Link>
                <Link href={"/"}>
                  <Image src={faceIcon} width={20} height={20} alt="face"/>
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex items-center gap-[104px] mb-[96px]">
            <div>
              <p className="mb-4 text-[#1D1A2F] font-normal text-[24px] leading-[24px]">Single call center</p>
              <Link className="text-[#5C596D] font-normal text-[20px] leading-[20px]" href={"/"}>+99871-200-01-05 </Link>
            </div>
            <div>
              <p className="mb-4 text-[#1D1A2F] font-normal text-[24px] leading-[24px]">Mail for wishes and suggestions</p>
              <Link className="flex items-center gap-[10px] text-[#5C596D] font-normal text-[20px] leading-[20px]" href={"/"}>
                <Mail />info@asaxiy.uz
              </Link>
            </div>
        </div>

        <p className="text-center text-[#646262]"><span className="text-[#000000] font-semibold text-[15px] leading-[20px]">Asaxiy.uz </span>  PAll rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
