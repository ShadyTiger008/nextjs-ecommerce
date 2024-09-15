import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Send } from "lucide-react";

type Props = {};

const NewsLetter = (props: Props) => {
  return (
    <section className="relative flex h-80 flex-col items-center justify-between space-y-8 rounded-xl bg-[#daf2e7] mx-20 px-20 md:flex-row md:space-y-0">
      {/* Left Section */}
      <div className="space-y-6 pr-5 md:w-1/2">
        <h2 className="text-3xl font-semibold text-[#264653] md:text-4xl">
          Stay Home & Get Your Daily Needs from Our Shop
        </h2>
        <p className="text-lg text-[#6c757d]">
          Start your daily shopping with{" "}
          <span className="font-semibold text-theme">Nest Mart</span>
        </p>

        <div className="flex h-12 w-fit items-center rounded-full border border-gray-300 bg-white pl-5">
          <Send className="h-6 w-6" />
          <Input
            type="email"
            placeholder="Your email address"
            className="h-full w-full min-w-60 rounded-l-full border-0"
          />

          <button className="-ml-5 h-full rounded-full bg-[#2a9d8f] px-6 py-2 text-base font-medium text-white transition-all hover:bg-[#238a7f]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="absolute -bottom-16 right-10 h-[400px] w-full md:h-[400px] md:w-[500px]">
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
