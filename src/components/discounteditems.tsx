import React from 'react'
import Image from 'next/image';
import { AiOutlineCheck } from "react-icons/ai";
import { Button } from './ui/button';
import chair from '../../public/asset/chair.png'

const Discounteditems = () => {
  return (
    <div className='justify-center items-center my-6'>
      
      <div>
        <h1 className='text-center text-[42px] leading-[49.22px] font-bold pb-4'>Discount Item</h1>
      </div>

      <div className='flex flex-row justify-center items-center gap-4'>
<h1 className='text-[16px] leading-[21.6px] font-normal hover:text-pink-600 hover:underline'>Wood Chair .</h1>
<h1 className='text-[16px] leading-[21.6px] font-normal hover:text-pink-600 hover:underline'>Plastic Chair</h1>
<h1 className='text-[16px] leading-[21.6px] font-normal hover:text-pink-600 hover:underline'>Sofa Colletion</h1>
      </div>

<section className="text-gray-600 body-font">
<div className="container mx-auto flex px-5 py-18 md:flex-row flex-col items-center gap-2 justify-center text-[17px] leading-[30px] text-[#b7bacb]">

    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-4">

      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      20% Discount Of All Products
        {/* <br className="hidden lg:inline-block" />
        readymade gluten */}
      </h1>

      <h1 className='text-[21px] leading-[27.72px] text-[#fb2eb6]'>
      Eams Sofa Compact
      </h1>

      <p className="mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br/> feugiat habitasse nec, bibendum condimentum.  
      </p>

      <div>

        <div>
            <ul className='flex flex-row gap-12'>
                <li className='flex flex-row gap-2 justify-start'>
                <AiOutlineCheck />
                <p>Material expose like metals</p>
                </li>
                <li className='flex flex-row gap-2 justify-start'>
                <AiOutlineCheck />
                <p>Simple neutral colours.</p>
                </li>
            </ul>
        </div>

        <div>
            <ul className='flex flex-row gap-12'>
                <li className='flex flex-row gap-2 justify-start'>
                <AiOutlineCheck />
                <p>MClear lines and geomatric figures</p>
                </li>
                <li className='flex flex-row gap-2 justify-start'>
                <AiOutlineCheck />
                <p>Material expose like metals</p>
                </li>
            </ul>
        </div>

      </div>

      <div className="flex justify-center">
        <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Shop Now
        </Button>

      </div>
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={chair}
        width={699}
        height={520}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Discounteditems