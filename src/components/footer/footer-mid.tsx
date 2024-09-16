import Image from "next/image";
import Link from "next/link";
import React from "react";
import { companyLinks, footerDescriptions, footerLinks } from "~/config/data";

type Props = {};

const FooterMid = (props: Props) => {
  return (
    <section className="bg-yellow-30 flex flex-wrap flex-col lg:flex-row justify-between px-5 py-5">
      {/* Left Section: Logo and Descriptions */}
      <div className="flex flex-col lg:flex-row gap-10 lg:space-y-0 space-y-5 w-full lg:w-auto">
        <div className="flex flex-col w-full lg:w-72">
          <div className="flex flex-col gap-3">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={150}
              className=""
            />
            <span className="text-sm text-gray-600">
              Awesome grocery store website template
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            {footerDescriptions.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <span className="text-[#2a9d8f]">{item.icon}</span>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">{item.title}: </span>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section: Company Links */}
        <div className="flex flex-col w-full lg:w-40">
          <h4 className="text-gray-500 text-sm mb-2">Company</h4>
          <div className="flex flex-col space-y-2">
            {companyLinks.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="text-sm transition-all hover:text-[#2a9d8f]"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Footer Links */}
      <div className="flex flex-wrap justify-between w-full lg:w-auto gap-10 mt-10 lg:mt-0">
        {footerLinks.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 lg:w-auto">
            <h4 className="mb-2 text-xl font-semibold text-gray-800">
              {item.title}
            </h4>
            {item.subLinks.length > 0 && (
              <ul className="flex flex-col space-y-2">
                {item.subLinks.map((elem) => (
                  <li key={elem.id}>
                    <Link
                      href={elem.link}
                      className="text-sm text-gray-600 transition-all hover:text-[#2a9d8f]"
                    >
                      {elem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="flex flex-col space-y-5 w-full sm:w-1/2 lg:w-auto">
          <h2 className="font-semibold text-xl">Install App</h2>
          <span className="text-sm">From App Store or Google Play</span>
          <div className="flex flex-row gap-2">
            <Image
              src="/assets/download-appstore.png"
              alt="app store"
              width={100}
              height={50}
              className=""
            />
            <Image
              src="/assets/download-googleplay.png"
              alt="google play"
              width={100}
              height={50}
              className=""
            />
          </div>

          <span>Secured Payment Gateway</span>

          <Image
            src="/assets/payment-methods.png"
            alt="payment methods"
            width={200}
            height={100}
            className="mr-5"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterMid;