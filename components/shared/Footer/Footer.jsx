import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1336px] w-full sm:flex-wrap ml-auto mr-auto pl-[20px] pr-[20px]">
        <ul className="flex gap-[75px]">
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
            <h3 className="text-[#1D1A2F] text-[20px] leading-[24px] font-semibold mb-4">
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
            <h3 className="text-[#1D1A2F] text-[20px] leading-[24px] font-semibold mb-4">
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
            <h3 className="text-[#1D1A2F] text-[20px] leading-[24px] font-semibold mb-4">
              Payment method
            </h3>
            <ul>
              <li className="mb-[12px]">
                <Link href={"/"}>
                
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
