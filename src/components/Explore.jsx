import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import icon1 from "/public/icon1.png";
import icon2 from "/public/icon2.png";
import icon3 from "/public/icon3.png";

const Explore = () => {
  return (
    <div className="py-10 ">
      <div className="md:w-1/2 mx-auto my-5 text-center ">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold duration-500 transition-all">
          explore our alowishus
        </h2>
        <p className="py-2 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          facere adipisci voluptatibus ab rem deleniti quidem natus illo modi
          doloribus?
        </p>
      </div>

      <div className="w-4/5 mx-auto flex flex-wrap gap-5 justify-center items-center">
        <Card className="text-center  w-[300px]  md:  ">
          <CardHeader>
            <CardTitle className="text-2xl">Our Catering</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image alt="photo" loading="lazy" src={icon1} width={150} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              variant="outline"
              className="capitalize bg-black text-white"
            >
              order catering
            </Button>
          </CardFooter>
        </Card>
        {/* card 2 */}
        <Card className="text-center  w-[300px] md:  ">
          <CardHeader>
            <CardTitle className="text-2xl">the food</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image alt="photo" loading="lazy" src={icon2} width={150} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              variant="outline"
              className="capitalize bg-black text-white"
            >
              food menu
            </Button>
          </CardFooter>
        </Card>
        {/* card 3 */}
        <Card className="text-center  w-[300px] md:  ">
          <CardHeader>
            <CardTitle className="text-2xl">teh gelato</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image alt="photo" loading="lazy" src={icon3} width={150} className="" />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              variant="outline"
              className="capitalize bg-black text-white"
            >
              discover more
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Explore;
