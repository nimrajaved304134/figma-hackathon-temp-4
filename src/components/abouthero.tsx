import React from 'react'
import Image from "next/image";
import { Button } from './ui/button';

const Abouthero = () => {
  return (
    <div>
 <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image 
        className="object-cover object-center rounded" 
        alt="hero" 
        src="https://dummyimage.com/720x600" 
        width={720} 
        height={600} 
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Know About Our Ecomerce
        <br className="hidden lg:inline-block" />      Business, History
      </h1>
      <p className="mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br/> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br/> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
      </p>
      <div className="flex justify-center">
        <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </Button>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Abouthero