import React from "react";
import SingleDeal from "./child/single-deal";
import { dealsOfTheDayProducts } from "~/config/data";

type Props = {};

const DealsOfTheDay = (props: Props) => {
  return (
    <div className="mx-4 mb-16 mt-8 flex flex-col gap-6 lg:mx-20 lg:mb-32 lg:mt-10">
      {/* Responsive heading */}
      <h2 className="text-center text-xl font-semibold lg:text-2xl">
        Deals Of The Day
      </h2>

      {/* Responsive product list container */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dealsOfTheDayProducts.map((item) => (
          <SingleDeal key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
