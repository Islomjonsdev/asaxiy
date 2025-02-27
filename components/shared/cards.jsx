import { bestSellersData } from "@/api/data";
import { ArrowRightLeft, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import comparewIcon from "../../public/svg/comparison.svg"

const Cards = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {bestSellersData?.map((item) => {
      const { id, bestImage, bestText, bestPrice, bestMonth, stars } = item;
      return (
        <li className="bg-white shadow-md p-6 rounded-lg" key={id}>
          <Link href={"/"}>
            <div className="flex items-center justify-center mb-3">
              <Image
                src={bestImage}
                width={226}
                height={170}
                alt="bestImage"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <p className="text-[#5C596D] text-base leading-5 mb-4">
              {bestText}
            </p>
            <span className="text-[#1D1A2F] font-semibold text-lg">
              {bestPrice}
            </span>
            <p className="text-[#5C596D] text-sm mt-2 mb-4">
              {bestMonth}
            </p>
            <Image className="mb-5" src={stars} width={20} height={20} alt="stars" />
          </Link>
          <div className="flex items-center justify-between">
            <Button variant="addToCartBtn" className="text-sm px-3 py-2">
              <ShoppingCart className="w-4 h-4" />
              Add to cart
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost">
              <ArrowRightLeft className="w-5 h-5" />
              </Button>
              <Button variant="ghost">
                <Heart className="w-5 h-5" />
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
