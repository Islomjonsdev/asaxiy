import { bestSellersData } from "@/api/data";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Cards = () => {
  return (
    <ul className="flex justify-between">
      {bestSellersData?.map((item) => {
        const { id, bestImage, bestText, bestPrice, bestMonth, stars } = item;
        return (
          <li
            className="max-w-[300px] w-full bg-white shadow p-6 rounded-[8px]"
            key={id}
          >
            <Link href={"/"}>
              <div className="flex items-center justify-center mb-3">
                <Image
                  src={bestImage}
                  width={226}
                  height={170}
                  alt="bestImage"
                />
              </div>
              <p className="text-[#5C596D] font-normal text-[16px] leading-[20px] mb-4">
                {bestText}
              </p>
              <span className="text[#1D1A2F] font-semibold text-[20px] leading-[24px]">
                {bestPrice}
              </span>
              <p className="text-[#5C596D] font-normal text-[16px] leading-[20px] mt-2 mb-4">
                {bestMonth}
              </p>
              <Image
                className="mb-5"
                src={stars}
                width={20}
                height={20}
                alt="stars"
              />
            </Link>
              <div className="flex items-center justify-between">
                <Button variant="addToCartBtn">
                  <ShoppingCart />
                  Add to cart
                </Button>

                <div className="flex items-center">
                  <Button variant="ghost">like</Button>
                  <Button variant="ghost">
                    <Heart />
                  </Button>
                </div>
              </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;
