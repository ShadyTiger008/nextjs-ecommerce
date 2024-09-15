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
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import Image from "next/image";

type Props = {};

const FooterBottom = (props: Props) => {
  const router = useRouter();
  return (
    <section className="flex flex-col">
      <Separator className="mt-5" />

      <div className="flex flex-row items-center justify-between py-5">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">
            &copy; 2024, <span className="text-theme">Nest</span> - Nest Multi
            Ecommerce
          </p>
          <p className="text-sm text-gray-500">All rights reserved</p>
        </div>

        <div className="flex flex-row gap-10">
          {contactDetails.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex flex-row items-center justify-center gap-2"
            >
              <Image
                src="/assets/phone-call.png"
                alt="logo"
                width={30}
                height={30}
                className=""
              />
              <div className="gap- flex flex-col">
                <span className="text-xl font-semibold text-theme">
                  {item.title}
                </span>
                <span className="text-xs">{item.description}</span>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <div className="flex flex-row  items-center gap-3">
            <span className="font-semibold">Follow Us</span>
            <div className="flex flex-row gap-1">
              {socialMediaLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="rounded-full bg-theme p-2 text-white"
                >
                  <TooltipProvider key={item.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>{item.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div>{item.title}</div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              ))}
            </div>
          </div>
          <span className="text-sm text-gray-500">
            Up to 15% discount on your first subscribe
          </span>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
