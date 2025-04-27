'use client'
import { assets } from '@/assets/assets';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import React, { useState } from 'react';

const Home = () => {
  const [expand, setExpand] = useState(false)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div>
      <div className='flex h-screen'>
<Sidebar expand={expand} setExpand={setExpand}/>
        <div className='flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d]  '>
          <div className='md:hidden absolute px-4 top-6 flex items-center justify-between w-full'>
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              className='roate-18 ' src={assets.menu_icon} alt='' />

            <Image className='opacity-70 ' src={assets.chat_icon} alt='' />
          </div>


          {messages.length === 0 ? (
            <div>
              <div className='flex items-center gap-3'>
                <Image src={assets.logo_icon} height={26} alt=''></Image>
                <p className='text-2xl font-medium'>
                  Hi I'm Tuki.
                </p>
              </div>
                <p className='text-sm mt-2 capitalize'>
                  How Can I Help You toady? 
                </p>
            </div>
          ) : (
            <div>

            </div>
          )}

          {/* Promt Box */}
          <p className='text-xs absolute bottom-1 text-gray-500'>
            Ai-genrated, for refrence only
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;