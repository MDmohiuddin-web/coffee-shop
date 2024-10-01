import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";


import imgLogo from "/public/cafe.png";
import imgHero from "/public/hero1.png";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="w-4/5 mx-auto text-center my-10 p-5">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex justify-between gap-5">
            {/* for text */}
            <div className="md:w-1/2 text-left  ">
              <div className="relative">
                <h1 className="text-2xl font-bold md:text-8xl">
                  alowishus delicious coffee
                </h1>

                <Image
                  src={imgLogo}
                  alt=""
                  width={80}
                  className="absolute bottom-2 md:left-80   "
                />
              </div>
              <p className="text-sm py-5 ">
                a drink from the my alowishus bottled brews range or one oƒ our
                delicious coffees Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Autem,
              </p>

              <div className="gap-5 flex">
                <Button
                  variant="outline"
                  className="capitalize bg-black  text-white"
                >
                  Download app
                </Button>
                <Button variant="outline" className="hover:bg-black hover:text-white">Shop Coffee</Button>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <Image src={imgHero} alt="" width={400} className="" />
              <Image
                  src={imgLogo}
                  alt=""
                  width={80}
                  className="absolute top-0 md:left-80   "
                />
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-between gap-5">
            {/* for text */}
            <div className="md:w-1/2 text-left  ">
              <div className="relative">
                <h1 className="text-2xl font-bold md:text-8xl">
                  alowishus delicious coffee
                </h1>

                <Image
                  src={imgLogo}
                  alt=""
                  width={80}
                  className="absolute bottom-2 md:left-80   "
                />
              </div>
              <p className="text-sm py-5 ">
                a drink from the my alowishus bottled brews range or one oƒ our
                delicious coffees Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Autem,
              </p>

              <div className="gap-5 flex">
                <Button
                  variant="outline"
                  className="capitalize bg-black  text-white"
                >
                  Download app
                </Button>
                <Button variant="outline" className="hover:bg-black hover:text-white">Shop Coffee</Button>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <Image src={imgHero} alt="" width={400} className="" />
              <Image
                  src={imgLogo}
                  alt=""
                  width={80}
                  className="absolute top-0 md:left-80   "
                />
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-between gap-5">
            {/* for text */}
            <div className="md:w-1/2 text-left  ">
              <div className="relative">
                <h1 className="text-2xl font-bold md:text-8xl">
                  alowishus delicious coffee
                </h1>

                <Image
                  src={imgLogo}
                  alt=""
                  width={80}
                  className="absolute bottom-2 md:left-80   "
                />
              </div>
              <p className="text-sm py-5 ">
                a drink from the my alowishus bottled brews range or one oƒ our
                delicious coffees Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Autem,
              </p>

              <div className="gap-5 flex">
                <Button
                  variant="outline"
                  className="capitalize bg-black  text-white"
                >
                  Download app
                </Button>
                <Button variant="outline" className="hover:bg-black hover:text-white">Shop Coffee</Button>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <Image src={imgHero} alt="" width={400} className="" />
              <Image
                  src={imgLogo}
                  alt=""
                  width={80}
                  className="absolute top-0 md:left-80   "
                />
            </div>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banner;
