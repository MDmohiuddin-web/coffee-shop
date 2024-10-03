import React from "react";
import {
  Card,

  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

import coup from "/public/mid1.png";

const BestSelling = () => {
  return (
    <div className="py-10 ">
      <div className="md:w-1/2  mx-auto my-5 text-center ">
        <h2 className="text-2xl md:text-6xl font-bold">Best Selling Coffee</h2>
        <p className="py-2 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          facere adipisci voluptatibus ab rem deleniti quidem natus illo modi
          doloribus?
        </p>
      </div>
      {/* for cards */}

      <div className="w-4/5 lg:w-4/5 mx-auto flex flex-wrap gap-5 justify-center items-center ">
      
        <Card className="text-left relative w-[305px]  mx-auto mt-28  ">
          <CardHeader>
            <Image
              alt=""
              loading="lazy"
              src={coup}
              className="absolute -right-12 -top-24 "
              width={200}
            ></Image>
            <p className="text-sm">#1 selling </p>
            <CardTitle className="text-2xl"> Double <br /> Espresso</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nisi
              vitae numquam tenetur, animi optio assumenda rem voluptates ex
              temporibus.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-center gap-5">
            <Button
              variant="outline"
              className="hover:bg-black border-none shadow-none hover:text-white"
            >
              $ 59.99
            </Button>
            <Button
              variant="outline"
              className="capitalize bg-black text-white"
            >
              order new
            </Button>
          </CardFooter>
        </Card>
        {/* card 2 */}
        <Card className="text-left relative w-[305px]  mx-auto mt-28  ">
          <CardHeader>
            <Image
              alt=""
              loading="lazy"
              src={coup}
              className="absolute -right-12 -top-24 "
              width={200}
            ></Image>
            <p className="text-sm">#1 selling </p>
            <CardTitle className="text-2xl"> Double <br /> Espresso</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nisi
              vitae numquam tenetur, animi optio assumenda rem voluptates ex
              temporibus.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-center gap-5">
            <Button
              variant="outline"
              className="hover:bg-black border-none shadow-none hover:text-white"
            >
              $ 59.99
            </Button>
            <Button
              variant="outline"
              className="capitalize bg-black text-white"
            >
              order new
            </Button>
          </CardFooter>
        </Card>
        {/* card 3 */}
        <Card className="text-left relative w-[305px]  mx-auto mt-28  ">
          <CardHeader>
            <Image
            loading="lazy"
              alt=""
              src={coup}
              className="absolute -right-12 -top-24 "
              width={200}
            ></Image>
            <p className="text-sm">#1 selling </p>
            <CardTitle className="text-2xl"> Double <br /> Espresso</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nisi
              vitae numquam tenetur, animi optio assumenda rem voluptates ex
              temporibus.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-center gap-5">
            <Button
              variant="outline"
              className="hover:bg-black border-none shadow-none hover:text-white"
            >
              $ 59.99
            </Button>
            <Button
              variant="outline"
              className="capitalize bg-black text-white"
            >
              order new
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BestSelling;
