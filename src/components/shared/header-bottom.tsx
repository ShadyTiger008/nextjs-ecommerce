import Image from "next/image";
import React from "react";
import { ChevronDown, LayoutDashboard } from "lucide-react";
import { Button } from "../ui/button";
import { Navigation } from "./navigation";

type Props = {};

const HeaderBottom = (props: Props) => {
  return (
    <section className="hidden lg:flex flex-col max-w-screen items-center justify-between gap-6 border-b px-4 py-4 xl:flex-row md:gap-8 xl:px-20">
      {/* Left Side Section */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <Button className="flex flex-row items-center gap-2 rounded-md bg-theme px-4 py-2 text-white">
          <LayoutDashboard className="h-5 w-5" />
          <span className="text-sm font-semibold">Browse Categories</span>
          <ChevronDown className="h-4 w-4" />
        </Button>

        <div className="flex h-auto w-auto flex-row items-center gap-2">
          <Image src="/icon-hot.svg" alt="Deals Icon" width={20} height={20} />
          <span className="text-sm font-medium">Deals</span>
        </div>

        {/* Navigation Links */}
        <Navigation />
      </div>

      {/* Right Side Section */}
      <div className="flex h-auto w-auto flex-row items-center justify-center gap-2">
        <Image
          src="/icon-headphone.svg"
          alt="Headphone Icon"
          width={38}
          height={38}
        />
        <div className="flex flex-col items-center gap-0 text-center md:items-start md:text-left">
          <p className="text-xl font-bold text-theme">1900 - 888</p>
          <span className="-mt-1 text-xs tracking-tight">
            24/7 Support Center
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeaderBottom;