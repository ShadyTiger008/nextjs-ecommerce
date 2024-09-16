import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Send } from "lucide-react";

type Props = {};

const NewsLetter = (props: Props) => {
  return (
    <section className="relative flex h-80 flex-col items-center justify-between space-y-8 rounded-xl bg-[#daf2e7] mx-5 md:mx-20 px-5 md:px-20 md:flex-row md:space-y-0">
      {/* Left Section */}
      <div className="space-y-6 pr-0 md:pr-5 w-full md:w-1/2 z-10 flex flex-col justify-center my-auto md:my-0">
        <h2 className="text-lg md:text-2xl font-semibold text-[#264653] lg:text-4xl">
          Stay Home & Get Your Daily Needs from Our Shop
        </h2>
        <p className="text-sm md:text-lg text-[#6c757d]">
          Start your daily shopping with{" "}
          <span className="font-semibold text-theme">Nest Mart</span>
        </p>

        <div className="flex h-12 w-fit items-center rounded-full border border-gray-300 bg-white pl-5">
          <Send className="h-6 w-6" />
          <Input
            type="email"
            placeholder="Your email address"
            className="h-full w-full md:min-w-60 rounded-l-full border-0"
          />

          <button className="-ml-5 h-full rounded-full bg-[#2a9d8f] px-6 py-2 text-sm md:text-base font-medium text-white transition-all hover:bg-[#238a7f]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block absolute -bottom-16 right-10 h-[400px] w-full md:h-[400px] md:w-[500px]">
        <Image
          src="/assets/footer-banner.png"
          alt="Footer Banner"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default NewsLetter;
