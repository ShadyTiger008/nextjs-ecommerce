import React from "react";
import Image from "next/image";
import { featureDetails } from "~/config/data";

type Props = {};

const FooterTop = (props: Props) => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
        {featureDetails.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center gap-4 rounded-lg bg-[#F4F6FA] px-4 py-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="flex-shrink-0">
              <Image
                src={feature.image}
                alt={feature.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterTop;
