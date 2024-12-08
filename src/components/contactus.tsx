import React from 'react'

const Contactus = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <h1>Information About us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br/>
                         mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae  <br/>
                         eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                         <div>

                         </div>
                </div>

                <div>
                    <h1>Contact Way</h1>
                    <div>
                    <ul>
                        <li>
                            <h1>Tel: 877-67-88-99</h1>
                            <h1>E-Mail: shop@store.com</h1>
                        </li>
                        <li>
                            <h1>T20 Margaret st, London</h1>
                            <h1>Great britain, 3NM98-LK</h1>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Support Forum</h1>
                            <h1>For over 24hr</h1>
                        </li>
                        <li>
                            <h1>Free standard shipping</h1>
                            <h1>on all orders.</h1>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div>
                <div>
                <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea 
              id="message" 
              name="message" 
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>

                </div>
                {/* image */}
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Contactus