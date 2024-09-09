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
import { ChevronDown, LayoutDashboard } from "lucide-react";
import { Button } from "../ui/button";
import { navLinks } from "~/config/data";
import { Navigation } from "./navigation";

type Props = {};

const HeaderBottom = (props: Props) => {
  return (
    <section className="flex flex-row justify-between gap-10 border border-b px-20 py-4">
      <div className="flex flex-row items-center gap-10">
        <Button className="flex flex-row items-center gap-2 rounded-md bg-theme px-3 py-2 text-white">
          <LayoutDashboard className="h-5 w-5" />
          <span className="text-sm font-semibold">Browse All Categories</span>
          <ChevronDown className="h-4 w-4" />
        </Button>

        <div className="flex h-auto w-auto flex-row items-center gap-2">
          <Image src="/icon-hot.svg" alt="Deals Icon" width={20} height={20} />
          <span className="text-sm font-medium">Deals</span>
        </div>

        <Navigation/>
      </div>

      <div className="flex h-auto w-auto flex-row items-center justify-center gap-2">
        <Image
          src="/icon-headphone.svg"
          alt="Headphone Icon"
          width={38}
          height={38}
        />
        <div className="flex flex-col gap-0">
          <p className="text-xl font-bold text-theme">1900 - 888</p>
          <span className="-mt-1 text-xs tracking-tight">24/7 Support Center</span>
        </div>
      </div>
    </section>
  );
};

export default HeaderBottom;
