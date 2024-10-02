import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import coffeeImg from "/public/coffee-banner.png";

const Instant = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-wrap justify-around gap-5 py-20 md:h-[650px]">
      <div className="md:w-[48%] text-left space-y-3 flex justify-center flex-col mx-auto">
        <h2 className="text-2xl md:text-6xl font-bold">
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
      <div className="md:w-[48%] flex items-center justify-center relative mx-auto">
        <Image
          alt="Coffee image 1"
          src={coffeeImg}
          width={200}
          height={200}
          className="absolute -rotate-[15deg] -translate-x-8 right-[200px] rounded-2xl"
        />
        <Image
          alt="Coffee image 2"
          src={coffeeImg}
          width={200}
          height={200}
          className="absolute rounded-xl"
        />
      </div>
    </div>
  );
};

export default Instant;
