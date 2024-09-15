import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosStar } from "react-icons/io";

type Product = {
  id: number;
  title: string;
  currentPrice: string;
  actualPrice: string;
  image: string;
  link: string;
  rating: number;
};

type Props = {
  title: string;
  products: Product[];
};

const SingleList = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{props.title}</h2>
      <div>
        <hr />
        <div className="w-16 h-px bg-theme"/>
      </div>
      <div className="flex flex-col gap-3 mt-2">
        {props.products.map((product) => (
          <Link
            href={product.link}
            key={product.id}
            className="flex flex-row gap-2"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={80}
              height={25}
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <div className="flex flex-row items-center gap-5">
                <IoIosStar fill="gold" />
                <span className="text-xs text-mutedTxt/70">({product.rating})</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="text-sm font-semibold text-theme">{product.currentPrice}</p>
                <p className="text-xs text-mutedTxt/80 font-medium line-through">
                  {product.actualPrice}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleList;
