import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CiSearch } from "react-icons/ci";
import {
  AccountIcon,
  CartIcon,
  CompareIcon,
  HeartIcon,
  LocationPinIcon,
} from "../icons";
import { SlArrowDown } from "react-icons/sl";
import { Input } from "../ui/input";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <section className="flex flex-row justify-between gap-10 border border-b px-20 py-8">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={150}
        height={100}
        className="mr-5"
      />

      <div className="flex w-full flex-row space-x-2 rounded-md border border-theme px-3 text-xs justify-center items-center">
        <Select>
          <SelectTrigger className="w-[150px] border-0 text-xs outline-none focus:shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="h-5 w-px bg-slate-300" />
        <div className="flex w-full flex-row items-center justify-center text-xs">
          <input
            type="search"
            className="w-full border-0 px-5 text-xs outline-none focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Search for products"
          />
          <button>
            <CiSearch className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Right side icons section */}
      <div className="flex flex-row items-center justify-center gap-5 text-xs">
        <div className="flex h-10 w-36 cursor-pointer flex-row flex-nowrap items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white drop-shadow-md transition-all duration-300 hover:bg-gray-50">
          <LocationPinIcon />
          <span className="text-xs font-medium text-theme">Your Location</span>
          <SlArrowDown className="h-2 w-2" />
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <CompareIcon />
          <span>Compare</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <HeartIcon />
          <span>Wishlist</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <CartIcon />
          <span>Cart</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <AccountIcon />
          <span>Account</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
