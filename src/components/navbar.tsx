import Link from 'next/link';
import React from 'react';
import { Search } from 'lucide-react';
// import { FaRegHeart, FaRegUser } from "react-icons/fa";
import {  IoMenu } from "react-icons/io5";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';

const Navbar = () => {
  return (
    <nav className="w-screen">
      <div className="justify-between h-[40px] mt-7 md:mt-[63px] flex flex-row md:justify-center items-center gap-6 px-6 xl:gap-[80px] xl:px-[371px] lg:px-8 lg:gap-8 border-b-2 border-[#f5f5f5] pb-6">
        <div>
          <Link href="/" className="lg:text-[24px] lg:leading-[24px] font-bold text-[18px] leading-[18px]">
          Hekto
          </Link>
        </div>

        <div className="hidden md:flex gap-4 flex-1 font-normal lg:text-[16px] lg:leading-[20px] text-[12px] leading-[20px]">
          <Link href="/" className="mr-5 hover:text-pink-600 hover:text-[20px] ">Home</Link>
          <Link href="#about" className="mr-5 hover:text-pink-600 hover:text-[20px] ">About</Link>
          <Link href="/contact" className="mr-5 hover:text-pink-600 hover:text-[20px] ">Contact</Link>
          <Link href="/signup" className="mr-5 hover:text-pink-600 hover:text-[20px] ">SignUp</Link>
        </div>

        <div className="hidden md:flex md:flex-row items-center justify-center gap-2">
          <div className="hidden md:flex md:w-[243px] lg:w-[317px] h-[40px] relative items-center gap-[30px] bg-[#f5f5f5]">
            <input
              type="text"
              placeholder=""
              className="text-[12px] lg:leading-[18px] leading-[12px] bg-[#f5f5f5] md:w-[200px] lg:w-[266px] h-[40px]"
            />
          <div className='absolute top-1/2 right-1 transform -translate-y-1/2  md:w-[43px] lg:w-[51px] h-[40px] bg-pink-600 text-white text-center items-center justify-center'>  <Search className="w-[20.01px] h-[20px] text-center items-center justify-center ml-3 mt-2" /></div>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <div className="cursor-pointer">
                <IoMenu className="w-[24px] h-[24px] m-4" />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="text-center">Hekto</SheetTitle>
              <div className="flex flex-col justify-center items-center text-center gap-6 mt-8">
                <Link href="/" className="mr-5 hover:text-pink-600 hover:text-[20px]">Home</Link>
                <Link href="#about" className="mr-5 hover:text-pink-600 hover:text-[20px]">About</Link>
                <Link href="/contact" className="mr-5 hover:text-pink-600 hover:text-[20px]">Contact</Link>
                <Link href="/signup" className="mr-5 hover:text-pink-600 hover:text-[20px]">SignUp</Link>
                <div className="flex w-[317px] h-[40px] relative items-center gap-[30px] bg-[#f5f5f5] ">
                  <input
                    type="text"
                    placeholder=""
                    className="text-[16px] leading-[18px] bg-[#f5f5f5] w-[266px] h-[40px]"
                  />
                  <Search className="absolute top-1/2 right-4 transform -translate-y-1/2  w-[34px] h-[40px] bg-pink-600 text-white" />
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
