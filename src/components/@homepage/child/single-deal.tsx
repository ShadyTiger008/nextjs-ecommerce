import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { Button } from "~/components/ui/button";

type DealsProduct = {
  id: number;
  title: string;
  description: string;
  currentPrice: string;
  actualPrice: string;
  image: string;
  link: string;
  rating: number;
};

type Props = {
  product: DealsProduct;
};

const SingleDeal = ({ product }: Props) => {
  return (
    <div className="relative flex w-full max-w-sm flex-col items-center justify-center sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Image should be responsive */}
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="w-full object-cover"
      />
      {/* Absolute container for product details */}
      <div className="absolute bottom-4 flex w-11/12 flex-col gap-1 rounded-md bg-white p-4 drop-shadow-md sm:bottom-5 sm:p-5 md:bottom-8 lg:-bottom-1/4">
        <h4 className="text- font-semibold">{product.title}</h4>

        {/* Rating section */}
        <div className="flex flex-row items-center gap-2 sm:gap-3">
          <IoIosStar fill="gold" className="h-4 w-4" />
          <span className="text-xs text-mutedTxt">({product.rating})</span>
        </div>

        {/* Description */}
        <p className="text-xs text-mutedTxt">
          By <span className="text-theme">{product.description}</span>
        </p>

        {/* Pricing and Button section */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <span className="text-sm font-bold text-theme">
              {product.currentPrice}
            </span>
            <span className="text-xs font-bold text-mutedTxt/80 line-through">
              {product.actualPrice}
            </span>
          </div>
          {/* Add to Cart Button */}
          <Button className="group flex flex-row items-center justify-center gap-1 bg-theme/20">
            <ShoppingCart className="h-5 w-5 text-theme group-hover:text-white" />
            <span className="text-xs text-theme group-hover:text-white">
              Add
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleDeal;
