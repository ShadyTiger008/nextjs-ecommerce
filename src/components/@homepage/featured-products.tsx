import React from "react";
import SingleList from "./child/single-list";
import {
  recentlyAdded,
  topRated,
  topSellingProducts,
  trendingProducts,
} from "~/config/data";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <div className="my-10 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:mx-20 lg:grid-cols-4 lg:gap-10">
      {/* Each section for products */}
      <SingleList title="Top Selling" products={topSellingProducts} />
      <SingleList title="Trending Products" products={trendingProducts} />
      <SingleList title="Recently Added" products={recentlyAdded} />
      <SingleList title="Top Rated" products={topRated} />
    </div>
  );
};

export default FeaturedProducts;