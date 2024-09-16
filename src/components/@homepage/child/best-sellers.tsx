import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { Progress } from "~/components/ui/progress";
import { bestSellProducts } from "~/config/data";
import { IoIosStar } from "react-icons/io";

type Props = {};

const BestSellers = (props: Props) => {
  return (
    <div className="px-5 md:px-20 flex flex-col gap-6">
      <h3 className="text-2xl font-semibold">Daily Best Sells</h3>
      <div className="flex flex-col md:flex-row gap-5">
        <Image
          src="/assets/best-seller.png"
          alt="Best Sells"
          width={300}
          height={300}
          className="rounded-md w-full md:w-1/4"
        />
        <Carousel className="w-full">
          <CarouselContent className="w-72">
            {bestSellProducts.map((item) => (
              <CarouselItem key={item.id} className="w-full">
                <div className="p-1">
                  <Card>
                    <CardContent className="relative flex min-h-96 w-full flex-col gap-2 rounded-md p-6">
                      <Image
                        src={item.image}
                        alt="Best Sells"
                        width={200}
                        height={100}
                        className=" rounded-md object-cover"
                      />
                      <span className="text-xs text-mutedTxt/70">
                        {item.seller}
                      </span>
                      <p className="font-semibold">{item.title}</p>

                      <div className="flex flex-row items-center gap-3">
                        <IoIosStar fill="gold" className="h-4 w-4" />
                        <span className="text-xs">({item.rating})</span>
                      </div>

                      <div className="flex flex-row items-end gap-3">
                        <span className="text-base font-semibold text-theme">
                          {item.currentPrice}
                        </span>
                        <span className="text-xs font-semibold text-mutedTxt/80 line-through">
                          {item.actualPrice}
                        </span>
                      </div>
                      <Progress value={60} />

                      <span className="text-xs">
                        Sold: {item.sold}/{item.quantity}
                      </span>

                      <Button className="w-full bg-theme py-2 text-sm font-semibold text-white">
                        Add To Cart
                      </Button>

                      <div
                        className="absolute left-0 top-0 z-10 rounded-br-2xl rounded-tl-xl px-4 py-2 text-xs font-semibold text-white"
                        style={{ backgroundColor: item.tagClr }}
                      >
                        {item.tag}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default BestSellers;
