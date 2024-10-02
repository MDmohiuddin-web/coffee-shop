import Image from "next/image";
import React from "react";
import coffeeImg from "/public/coffee-mid.png";
import { Button } from "./ui/button";

const Order = () => {
  return (<div className="bg-gray-100">
    <div className="w-4/5 mx-auto  flex-wrap gap-5 flex justify-around py-10">
      <div className="md:w-[48%] items-center">
        <Image alt="f" src={coffeeImg} width={500} height={500}></Image>
      </div>
      <div className="md:w-[48%]  text-left space-y-3  flex justify-center  flex-col  ">
        <h2 className="text-2xl md:text-7xl">Order Your Favorite Coffee</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          asperiores aliquid tempore tenetur? Quibusdam non fugit aliquam
          reprehenderit assumenda illum?
        </p>

        <div>
          <Button
            variant="outline"
            className="capitalize bg-black text-white text-left"
          >
            order now
          </Button>
        </div>
      </div>
    </div></div>
  );
};

export default Order;
