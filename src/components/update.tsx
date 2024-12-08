import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image'; // Import Image from next/image
import update from '../../public/asset/update.png'; // Import image correctly

const Update = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={update}
          alt="Update Background"
          layout="fill"  // Fill the container
          objectFit="cover" // Cover the area
          className="-z-10"
        />
      </div>

      {/* Content */}
      <div className="py-12 px-6 text-center">
        {/* Heading */}
        <h1 className="text-[#151875] text-3xl md:text-4xl font-bold mb-4">
          Get Latest Update By Subscribing<br />
          Our Newsletter
        </h1>

        {/* Button */}
        <Button className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-violet rounded-[2px] text-[17px] leading-[19.92px] w-[157px] h-[45px]">
        Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Update;

