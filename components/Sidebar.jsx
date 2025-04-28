'use client'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Sidebar = ({ expand, setExpand }) => {
    return (
        <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all duration-300 z-50 max-md:absolute max-md:h-screen ${expand ? "p-4 w-64" : 'md:w-20 w-0 max-md:overflow-hidden'}`}>
            <div>
                <div className={`flex items-center justify-between ${expand ? 'gap-3' : 'flex-col gap-8'} transition-all duration-300`}>
                    {/* Logo + Name */}
                    <div className="flex items-center gap-3">
                        <Image src={assets.logo_icon} width={40} height={40} alt="Logo" className="shrink-0" />
                        {expand && (
                            <p className="text-white text-2xl font-bold whitespace-nowrap">
                                TukiBot
                            </p>
                        )}
                    </div>

                    {/* Close/Open Button */}
                    <div
                        onClick={() => setExpand(!expand)}
                        className='group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-10 w-10 rounded-full cursor-pointer shrink-0'
                    >
                        <Image
                            src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
                            alt="Toggle"
                            className="w-6 h-6"
                        />

                        {/* Tooltip */}
                        <div className={`absolute w-max px-2 py-1 rounded-md bg-black text-white text-xs transition-all duration-300 ${expand ? 'left-1/2 -translate-x-1/2 top-14' : '-top-10 left-1/2 -translate-x-1/2'} opacity-0 group-hover:opacity-100 pointer-events-none`}>
                            {expand ? "Close Sidebar" : "Open Sidebar"}
                            <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "-top-1.5 left-1/2 -translate-x-1/2" : "top-full left-1/2 -translate-x-1/2"}`}></div>
                        </div>
                    </div>
                </div>


                <button className={`mt-8 flex items-center justify-center cursor-pointer ${expand ? 'bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max' : 'group relative h-9 mx-auto hover:bg-gray-500/30 rounded-lg'}`}>
                    <Image className={expand ? 'w-6' : 'w-7'} src={expand ? assets.chat_icon : assets.chat_icon_dull} alt='' />
                    <div className='absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none'>
                        New Chat
                        <div className='w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5'>

                        </div>
                    </div>
                    {expand && <p className='text-white text font-medium'>New Chat</p>}
                </button>

            </div>
        </div>
    );
};

export default Sidebar;
