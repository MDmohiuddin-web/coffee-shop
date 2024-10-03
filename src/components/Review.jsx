import Image from "next/image";
import React from "react";

import girl from "/public/girl1.png";
import gir2 from "/public/girl2.png";
import man from "/public/man.png";

const Review = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-wrap gap-5 justify-center items-center py-10">
      {/* card */}
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden w-[305px]">
        <div className="">
          <div className="md:flex-shrink-0">
            <div className="h-60 w-full   bg-gray-300">
              <Image
                alt="Reviewer"
                loading="lazy"
                src={girl}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="p-5 ">
            <div className=" flex gap-1 items-center">
              <div className="flex  justify-between  items-center mt-2">
                <div className="text-left ">
                  <h2 className="font-bold  flex  items-center justify-between">
                    About Macbook
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </h2>
                </div>
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
            </p>
          </div>
        </div>
      </div>
      {/* card 2*/}
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden w-[305px]">
        <div className="">
          <div className="md:flex-shrink-0">
            <div className="h-60 w-full   bg-gray-300">
              <Image
                alt="Reviewer"
                loading="lazy"
                src={gir2}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="p-5 ">
            <div className=" flex gap-1 items-center">
              <div className="flex  justify-between  items-center mt-2">
                <div className="text-left ">
                  <h2 className="font-bold  flex  items-center justify-between">
                    About Macbook
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </h2>
                </div>
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
            </p>
          </div>
        </div>
      </div>
      {/* card 3*/}
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden w-[305px]">
        <div className="">
          <div className="md:flex-shrink-0">
            <div className="h-60 w-full   bg-gray-300">
              <Image
                alt="Reviewer"
                loading="lazy"
                src={man}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="p-5 ">
            <div className=" flex gap-1 items-center">
              <div className="flex  justify-between  items-center mt-2">
                <div className="text-left ">
                  <h2 className="font-bold  flex  items-center justify-between">
                    About Macbook
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </h2>
                </div>
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
