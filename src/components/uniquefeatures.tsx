import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import uniquesofa from '../../public/asset/uniquesofa.png'
import { FaRegCircle } from "react-icons/fa";

const Uniquefeatures = () => {
  return (
    <div className='items-center justify-center bg-purple h-auto 2xl:h-[579px] my-8'>
        <section className="text-gray-600 body-font items-center justify-center">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 items-center">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={uniquesofa}
        width={720}
        height={600}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-6">
      <h1 className="text-[35px] leading-[46.2px] mb-4 font-medium text-gray-900">
      Unique Features Of leatest &
      <br className="hidden lg:inline-block" />
        Trending Poducts
      </h1>
      <ul className='flex flex-col gap-4'>
        <li className='flex flex-row gap-4 items-center'>
        <FaRegCircle  className='w-[11px] h-[11px] fill-rose-600 text-rose-600'/>
            <div>
                <p className='text-[16px] leading-[21.12px] text-[#ACABC3]'>All frames constructed with hardwood solids and laminates</p>
            </div>
        </li>
        <li className='flex flex-row gap-4 items-center'>
        <FaRegCircle className='w-[11px] h-[11px] fill-blue-700 text-blue-700' />
            <div>
                <p className='text-[16px] leading-[21.12px] text-[#ACABC3]'>Reinforced with double wood dowels, glue, screw - nails corner <br/>
                blocks and machine nails</p>
            </div>
        </li>
        <li className='flex flex-row gap-4 items-center'>
        <FaRegCircle className='w-[11px] h-[11px] fill-emerald-500 text-emerald-500' />
            <div>
                <p className='text-[16px] leading-[21.12px] text-[#ACABC3]'>Arms, backs and seats are structurally reinforced</p>
            </div>
        </li>
      </ul>
      <div className="flex justify-center">
        <Button className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-violet rounded-[2px] text-[17px] leading-[19.92px] w-[157px] h-[45px]">
        Add To Cart
        </Button>
        <div className="ml-4 inline-flex flex-col  border-0 py-2 px-6 focus:outline-none  rounded text-lg">
          <h1 className='text-[14px] leading-[16.41px] font-bold'>
          B&B Italian Sofa 
          </h1>
          <h1 className='text-[14px] leading-[16.41px]'>
          $32.00
          </h1>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Uniquefeatures