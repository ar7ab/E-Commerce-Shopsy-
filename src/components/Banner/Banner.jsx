import React from "react";
import BannerImg from "../../assets/women2.jpg";

import { GrSecure } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdPayments } from "react-icons/md";

const Banner = () => {
  return (
    <div
      className="min-h-[550px] flex justify-center
    items-center py-12 sm:py-0"
    >
      <div className="container">
        <div
          className="grid
        grid-cols-1 sm:grid-cols-2 
        gap-6 items-center"
        >
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full
              mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
              object-cover"
            />
          </div>
          {/* text details section */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center
          gap-6 sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% off
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              deserunt optio totam exercitationem velit adipisci deleniti,
              praesentium quam. Repudiandae quia dolore quo animi.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-14 w-14  shadow-sm
                            p-4 rounded-full bg-violet-100
                            dark:bg-violet-400"
                />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <LiaShippingFastSolid
                  className="text-4xl h-14 w-14  shadow-sm
                            p-4 rounded-full bg-orange-100
                            dark:bg-orange-400"
                />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdPayments
                  className="text-4xl h-14 w-14  shadow-sm
                            p-4 rounded-full bg-green-100
                            dark:bg-green-400"
                />
                <p>Easy Payment method</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;