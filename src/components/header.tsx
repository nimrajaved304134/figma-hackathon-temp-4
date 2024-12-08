import Link from 'next/link';
import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { CiMail } from "react-icons/ci";
  import { LuPhoneCall , LuUser } from "react-icons/lu";
  import { FaRegHeart } from "react-icons/fa";
  
  

const Header = () => {
  return (
    <header className='w-screen hidden h-[48px] lg:flex lg:flex-row bg-violet'>
        <div className='flex flex-row items-center justify-between 2xl:gap-[231px] 2xl:pl-[377px] md:gap-4 md:pl-8 lg:gap-12 lg::pl-[180px] xl:pl-[200px]'>
            <div className='max-w-7xlflex flex flex-row text-white items-center gap-10 justify-between'>
                <div className='flex flex-row justify-center items-center gap-2'>
                <CiMail className='h-[16px] w-[16px]' />
                    <h1 className='text-[16px] leading-[16px] font-normal text-white'>
                    mhhasanul@gmail.com
                    </h1>
                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                <LuPhoneCall className='h-[16px] w-[16px]' />
                <h1 className='text-[16px] leading-[16px] font-normal text-white '>
                (12345)67890
                    </h1>
                </div>
            </div>
            <div className='flex items-center text-[16px] leading-[16px] font-normal text-white lg:gap-4 xl:gap-6  '>
                <Select>
                    <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">English</SelectItem>
                        <SelectItem value="dark">Urdu</SelectItem>
                        <SelectItem value="system">Sindhi</SelectItem>
                    </SelectContent>
                </Select>

                <Select >
                    <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="USD" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">USD</SelectItem>
                        <SelectItem value="dark">DIRHAM</SelectItem>
                        <SelectItem value="system">PKR</SelectItem>
                    </SelectContent>
                </Select>
                
                <div className='flex flex-row justify-center items-center gap-2'>
                <Link href={'/'} >Login</Link>
                    <LuUser  className='w-[16px] h-[16px]'/>
                </div>

                <div className='flex flex-row justify-center items-center gap-2'>
                <Link href={'/'} >Login</Link>
                <FaRegHeart className='w-[16px] h-[16px]' />
                </div>

                <div><LuShoppingCart  className='w-[16px] h-[16px]'/></div>

            </div>
        </div>
    </header>
  )
}

export default Header