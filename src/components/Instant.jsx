import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import coffeeImg from "/public/coffee-banner.png";

const Instant = () => {
  return (
    <div className="w-4/5 mx-auto  flex-wrap gap-5 flex justify-around py-20 md:h-[650px]">
      <div className="md:w-[48%]  text-left space-y-3  flex justify-center  flex-col mx-auto  ">
        <h2 className="text-2xl md:text-6xl font-bold">Instant Coffee At Your Home</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          asperiores aliquid tempore tenetur? Quibusdam non fugit aliquam
          reprehenderit assumenda illum?Lorem, ipsum dolor.
        </p>

        <div>
          <Button
            variant="outline"
            className="capitalize bg-black text-white text-left"
          >
            download our app
          </Button>
        </div>
      </div>
      <div className="md:w-[48%] items-center flex justify-center relative  mx-auto ">
        <Image
          alt="f"
          src={coffeeImg}
          width={200}
          height={200}
          className="absolute -rotate-[15deg]  -translate-x-8 right-[200px] rounded-2xl"
        ></Image>
        <Image alt="f" src={coffeeImg} width={200} height={200} className="absolute rounded-xl "></Image>
      </div>
    </div>
  );
};

export default Instant;
