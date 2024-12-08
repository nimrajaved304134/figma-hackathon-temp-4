import React from 'react';
import Image from 'next/image';
import offer1 from '../../public/asset/offer1.png';
import offer2 from '../../public/asset/offer2.png';
import offer3 from '../../public/asset/offer3.png';
import offer4 from '../../public/asset/offer4.png';

const Offer = () => {
  return (
    <div className='justify-center '>
      <section className="text-gray-600 body-font justify-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Offer 1 */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg items-center justify-center h-[320px] w-[270px]">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={offer1}
                  alt="Offer 1"
                  width={65}
                  height={65}
                />
                <h2 className="text-gray-900 font-medium title-font mb-4 text-[22px] leading-[25.78px] text-center">
                  24/7 Support
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
                </p>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg items-center justify-center h-[320px] w-[270px]">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={offer2}
                  alt="Offer 2"
                  width={65}
                  height={65}
                />
                <h2 className="text-gray-900 font-medium title-font mb-4 text-[22px] leading-[25.78px] text-center">
                  24/7 Support
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
                </p>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg items-center justify-center h-[320px] w-[270px]">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={offer3}
                  alt="Offer 3"
                  width={65}
                  height={65}
                />
                <h2 className="text-gray-900 font-medium title-font mb-4 text-[22px] leading-[25.78px] text-center">
                  24/7 Support
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
                </p>
              </div>
            </div>

            {/* Offer 4 */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg items-center justify-center h-[320px] w-[270px]">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={offer4}
                  alt="Offer 4"
                  width={65}
                  height={65}
                />
                <h2 className="text-gray-900 font-medium title-font mb-4 text-[22px] leading-[25.78px] text-center">
                  24/7 Support
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
