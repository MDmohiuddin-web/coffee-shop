import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import coffeeImg from "/public/coffee-banner-3.png";

const Instant = () => {
  return (<div className="bg-gray-100">
    <div className="w-4/5 mx-auto flex flex-wrap justify-around gap-5 py-10 md:py-20 md:h-[650px] ">
      <div className="md:w-[48%] text-left space-y-3 flex justify-center flex-col mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold duration-500 transition-all">
          Instant Coffee At Your Home
        </h2>
        <p>
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
      <div className="md:w-[48%] items-center">
        <Image alt="f" loading="lazy" src={coffeeImg} width={500} height={500} className="text-center"></Image>
      </div>
    </div></div>
  );
};

export default Instant;
