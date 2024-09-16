"use client";

import { PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";
import { contactDetails, socialMediaLinks } from "~/config/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import Image from "next/image";

type Props = {};

const FooterBottom = (props: Props) => {
  const router = useRouter();
  return (
    <section className="flex w-full flex-col">
      {/* Separator */}
      <Separator className="mt-5" />

      {/* Main Footer Content */}
      <div className="flex w-full flex-col items-center justify-between gap-4 py-5 sm:flex-row sm:gap-10 sm:py-6">
        {/* Left Section: Copyright */}
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            &copy; 2024, <span className="text-theme">Nest</span> - Nest Multi
            Ecommerce
          </p>
          <p className="text-sm text-gray-500">All rights reserved</p>
        </div>

        {/* Middle Section: Contact Details */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {contactDetails.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex flex-row items-center justify-center gap-2"
            >
              <Image
                src="/assets/phone-call.png"
                alt="contact"
                width={30}
                height={30}
                className=""
              />
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-xl font-semibold text-theme">
                  {item.title}
                </span>
                <span className="text-xs text-gray-500">
                  {item.description}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <div className="flex flex-row items-center gap-3">
            <span className="font-semibold">Follow Us</span>
            <div className="flex flex-row gap-1">
              {socialMediaLinks.map((item) => (
                <TooltipProvider key={item.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.link}
                        className="rounded-full bg-theme p-2 text-white"
                      >
                        <div>{item.icon}</div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div>{item.title}</div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
          <span className="text-center text-sm text-gray-500 sm:text-left">
            Up to 15% discount on your first subscribe
          </span>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;