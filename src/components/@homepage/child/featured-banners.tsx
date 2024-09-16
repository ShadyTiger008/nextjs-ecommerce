import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { featureDetails, shopNowBanners } from "~/config/data";

type Props = {};

const FeaturedBanners = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-5 md:px-20">
      {shopNowBanners.map((item) => (
        <div
          key={item.id}
          className="relative flex h-60 w-full items-center rounded-lg bg-cover bg-center px-10"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <div className="relative z-10 flex w-2/3 flex-col gap-6">
            <span className="text-lg font-semibold md:text-lg lg:text-xl">
              {item.title}
            </span>
            <Button className="py- group flex w-fit flex-row items-center gap-2 bg-theme px-4 text-white">
              <span className="text-xs font-semibold">Shop Now</span>
              <MoveRight className="h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedBanners;
