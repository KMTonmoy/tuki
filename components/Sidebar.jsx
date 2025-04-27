 import { assets } from '@/assets/assets';
import React from 'react';

const Sidebar = ({ expand, setExpand }) => {
    return (
        <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${expand ? "p-4 w-64" : 'md:w-20 w-0 max-md:overflow-hidden'}`}>
            <div>
                <div className={`flex ${expand ? 'flex-row gap-10' : 'flex-col items-center gap-8'}`}>
                    <div className='flex items-center gap-2'>
                        <img src={assets.logo_icon} className={expand ? 'w-10' : 'w-8'} alt="Logo" />
                        {expand && <p className="text-white text-lg font-bold">Tuki</p>}
                    </div>
                </div>
                <div
                    onClick={() => setExpand(!expand)}
                    className='group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer'>
                    <img src={expand ? assets.chat_icon : assets.sidebar_icon} alt='' className='w-7 md:hidden' />
                    <div className="text-white ml-2">
                        {expand ? 'Close Sidebar' : 'Open Sidebar'}
                    </div>
                    <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "left-1/2 -top-1.5 -translate-x-1/2 " : "left-4 bottom-1.5"}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
