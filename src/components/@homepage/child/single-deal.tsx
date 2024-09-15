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
    <div className="relative flex flex-col justify-center items-center">
      <Image src={product.image} alt={product.title} width={400} height={400} />
      <div className="absolute -bottom-20 drop-shadow-md rounded-md flex flex-col gap-1 bg-white w-11/12 p-5">
        <h4 className="text-sm font-semibold">{product.title}</h4>
        <div className="flex flex-row items-center gap-3">
          <IoIosStar fill="gold" />
          <span className="text-xs text-mutedTxt">({product.rating})</span>
        </div>
        <p className="text-xs text-mutedTxt">
          By <span className="text-theme">{product.description}</span>
        </p>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-3 items-center">
          <span className="text-sm font-bold text-theme">
            {product.currentPrice}
          </span>
          <span className="text-xs font-bold text-mutedTxt/80 line-through">
            {product.actualPrice}
          </span>
        </div>
        <Button className="flex flex-row items-center justify-center gap-1 bg-theme/20 group">
          <ShoppingCart className="w-5 h-5 text-theme group-hover:text-white"/>
          <span className="text-theme group-hover:text-white text-xs">Add</span>
        </Button>
      </div>
      </div>
    </div>
  );
};

export default SingleDeal;
