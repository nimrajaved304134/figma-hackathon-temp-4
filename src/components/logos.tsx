import Image from 'next/image'
import React from 'react'
import logo1 from '../../public/asset/logo1.png'
import logo2 from '../../public/asset/logo2.png'
import logo3 from '../../public/asset/logo3.png'
import logo4 from '../../public/asset/logo4.png'
import logo5 from '../../public/asset/logo5.png'


const Logos = () => {
  return (
    <div>
        <section className='items-center justify-center  px-[50px] sm:px-[100px] md:px-[150px] lg:[200px] 2xl:px-[502px] pt-[96px] flex flex-row '>
  
        <div>
        <Image src={logo1} alt='' height={100} width={100}/>
        </div>

        <div>
        <Image src={logo2} alt='' height={150} width={150}/>
          </div>


          <div>
          <Image src={logo3} alt='' height={150} width={150}/>
          </div>

          <div>
          <Image src={logo4} alt='' height={150} width={150}/>
          </div>

          <div>
          <Image src={logo5} alt='' height={150} width={150}/>
          </div>
            
        </section>
    </div>
  )
}

export default Logos