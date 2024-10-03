import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// import imgLogo from "/public/cafe.png";
import imgHero from "/public/hero--.png";

import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-4/5 mx-auto text-center py-10 p-5">
        <div className="md:hidden block  pb-10">
          <Image src={imgHero} alt="" width={400}  />
        </div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex justify-between gap-5">
              {/* for text */}
              <div className="md:w-1/2 text-left  ">
                <div className="">
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold duration-500 transition-all">
                    alowishus delicious coffee
                  </h1>
                </div>
                <p className="text-sm py-5 ">
                  a drink from the my alowishus bottled brews range or one oƒ
                  our delicious coffees Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Autem,
                </p>

                <div className="gap-5 flex">
                  <Button
                    variant="outline"
                    className="capitalize bg-black  text-white"
                  >
                    Download app
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-black hover:text-white"
                  >
                    Shop Coffee
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2 ">
                <Image src={imgHero} alt="" width={400} />
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-between gap-5">
              {/* for text */}
              <div className="md:w-1/2 text-left  ">
                <div className="">
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold duration-500 transition-all">
                    alowishus delicious coffee
                  </h1>
                </div>
                <p className="text-sm py-5 ">
                  a drink from the my alowishus bottled brews range or one oƒ
                  our delicious coffees Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Autem,
                </p>

                <div className="gap-5 flex">
                  <Button
                    variant="outline"
                    className="capitalize bg-black  text-white"
                  >
                    Download app
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-black hover:text-white"
                  >
                    Shop Coffee
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2 ">
                <Image src={imgHero} alt="" width={400} />
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-between gap-5">
              {/* for text */}
              <div className="md:w-1/2 text-left  ">
                <div className="">
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold duration-500 transition-all">
                    alowishus delicious coffee
                  </h1>
                </div>
                <p className="text-sm py-5 ">
                  a drink from the my alowishus bottled brews range or one oƒ
                  our delicious coffees Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Autem,
                </p>

                <div className="gap-5 flex">
                  <Button
                    variant="outline"
                    className="capitalize bg-black  text-white"
                  >
                    Download app
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-black hover:text-white"
                  >
                    Shop Coffee
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2 ">
                <Image src={imgHero} alt="" width={400} />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
