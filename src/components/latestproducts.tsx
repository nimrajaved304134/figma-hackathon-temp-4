import Image from "next/image";
import React from "react";

const LatestProducts = () => {
    const products = [
        {
            name: "Comfort Handy Craft",
            price: "26.00",
            originalPrice: "42.00",
            image: "/asset/lc1.png",
        },
        {
            name: "Comfort Handy Craft",
            price: "26.00",
            originalPrice: "42.00",
            image: "/asset/lc2.png",
        },
        {
            name: "Comfort Handy Craft",
            price: "26.00",
            originalPrice: "42.00",
            image: "/asset/lc3.png",
        },
        {
            name: "Comfort Handy Craft",
            price: "26.00",
            originalPrice: "42.00",
            image: "/asset/lc4.png",
        },
        {
            name: "Comfort Handy Craft",
            price: "26.00",
            originalPrice: "42.00",
            image: "/asset/chair4.png",
        },
        {
            name: "Comfort Handy Craft",
            price: "26.00",
            originalPrice: "42.00",
            image: "/asset/lc5.png",
        },
    ];

    return (
        <section className="py-12 bg-white">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-6">
                Latest Products
            </h2>

            <div className='flex flex-row justify-center items-center gap-4'>
<h1 className='text-[16px] leading-[21.6px] font-normal hover:text-pink-600 hover:underline'>New Arrival</h1>
<h1 className='text-[16px] leading-[21.6px] font-normal hover:text-pink-600 hover:underline'>Best Seller</h1>
<h1 className='text-[16px] leading-[21.6px] font-normal hover:text-pink-600 hover:underline'>Featured</h1>
<h1 className='text-[16px] leading-[21.6px] font-normal hover:text-pink-600 hover:underline'>Special Offer</h1>
      </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 relative"
                    >
                        {/* Product Image */}
                        <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="object-contain h-full"
                            />
                        </div>

                        {/* Product Info */}
                        <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
                        <div className="text-gray-500">
                            <span className="text-blue-900 line-through mr-2">
                                ${product.originalPrice}
                            </span>
                            <span>${product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestProducts;
