import React from "react";
import SingleList from "./child/single-list";
import { recentlyAdded, topRated, topSellingProducts, trendingProducts } from "~/config/data";

type Props = {}

const FeaturedProducts = (props: Props) => {
  return <div className="flex flex-row justify-between items-center mx-20 my-10">
    <SingleList title="Top Selling" products={topSellingProducts}/>
    <SingleList title="Trending Products" products={trendingProducts}/>
    <SingleList title="Recently Added" products={recentlyAdded}/>
    <SingleList title="Top Rated" products={topRated}/>
  </div>;
};

export default FeaturedProducts;
