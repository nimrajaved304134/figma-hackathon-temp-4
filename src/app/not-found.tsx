import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link';
import React from 'react';

const Notfound = () => {
  return (
    <div>
      <div>
        <div>
          <h1>404 Not Found</h1>
          <div>
            <Link href="/">Home</Link>
            <Link href="/">.Pages</Link>
            <Link href="/">.404 Not Found</Link>
          </div>
        </div>

        <div>
          {/* Use next/image for the image */}
          <Image 
            src="/asset/404.png" // Use a relative path starting from the public folder
            alt="404 Not Found"
            height={526}
            width={913}
          />
          <h1 className='text-[24px] leading-[28.13px]'>oops! The page you requested was not found!</h1>
          <Button>Back To Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
