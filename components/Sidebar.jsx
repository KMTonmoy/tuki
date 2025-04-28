'use client'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import {useClerk, UserButton} from '@clerk/nextjs';
import { useAppContext } from '@/context/AppContext';

const Sidebar = ({ expand, setExpand }) => {
const { openSignIn } = useClerk();
const {user}= useAppContext()

    return (
      <div
        className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all duration-300 z-50 max-md:absolute max-md:h-screen ${
          expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
        }`}
      >
        <div>
          {/* Logo + Toggle */}
          <div
            className={`flex items-center justify-between ${
              expand ? "gap-3" : "flex-col gap-8"
            } transition-all duration-300`}
          >
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <Image
                src={assets.logo_icon}
                width={40}
                height={40}
                alt="Logo"
                className="shrink-0"
              />
              {expand && (
                <p className="text-white text-2xl font-bold whitespace-nowrap">
                  TukiBot
                </p>
              )}
            </div>

            {/* Close/Open Button */}
            <div
              onClick={() => setExpand(!expand)}
              className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-10 w-10 rounded-full cursor-pointer shrink-0"
            >
              <Image
                src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
                alt="Toggle"
                className="w-6 h-6"
              />

              {/* Tooltip */}
              <div
                className={`absolute w-max px-2 py-1 rounded-md bg-black text-white text-xs transition-all duration-300 ${
                  expand
                    ? "left-1/2 -translate-x-1/2 top-14"
                    : "-top-10 left-1/2 -translate-x-1/2"
                } opacity-0 group-hover:opacity-100 pointer-events-none`}
              >
                {expand ? "Close Sidebar" : "Open Sidebar"}
                <div
                  className={`w-3 h-3 absolute bg-black rotate-45 ${
                    expand
                      ? "-top-1.5 left-1/2 -translate-x-1/2"
                      : "top-full left-1/2 -translate-x-1/2"
                  }`}
                ></div>
              </div>
            </div>
          </div>

          {/* New Chat Button */}
          <button
            className={`mt-8 flex items-center justify-center cursor-pointer ${
              expand
                ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
                : "group relative h-9 mx-auto hover:bg-gray-500/30 rounded-lg"
            }`}
          >
            <Image
              className={expand ? "w-6" : "w-7"}
              src={expand ? assets.chat_icon : assets.chat_icon_dull}
              alt=""
            />
            <div className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
              New Chat
              <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
            </div>
            {expand && <p className="text-white font-medium">New Chat</p>}
          </button>

          {/* Recents */}
          <div
            className={`mt-8 text-white/25 text-sm ${
              expand ? "block" : "hidden"
            }`}
          >
            <p className="my-1">Recents</p>
          </div>
        </div>

        {/* QR Code Get App Section */}
        <div className="relative">
          <div
            className={`flex items-center group cursor-pointer ${
              expand
                ? "gap-2 p-2.5 border border-primary rounded-xl hover:bg-white/10"
                : "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"
            } transition-all duration-300`}
          >
            <Image
              src={expand ? assets.phone_icon : assets.phone_icon_dull}
              alt="Phone"
              className={`${expand ? "w-5" : "w-7 mx-auto"}`}
            />

            {expand && (
              <>
                <span className="text-white/80 text-sm">Get App</span>
                <Image src={assets.new_icon} alt="New" className="w-5 h-5" />
              </>
            )}

            {/* QR Tooltip */}
            <div
              className={`absolute ${
                expand
                  ? "left-1/2 -translate-x-1/2 bottom-14"
                  : "left-1/2 -translate-x-1/2 -top-60"
              } opacity-0 group-hover:opacity-100 transition pointer-events-none`}
            >
              <div className="relative flex flex-col items-center bg-black text-white p-4 rounded-lg shadow-2xl w-52">
                <Image
                  src={assets.qrcode}
                  alt="QR Code"
                  className="w-40 h-40"
                />
                <p className="mt-3 text-center text-xs">Scan To Get Tuki App</p>
                <div className="w-3 h-3 bg-black rotate-45 absolute bottom-[-6px] left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>

          <div
            onClick={user ? null : openSignIn}
            className={`flex items-center ${
              expand ? "hover:bg-white/10 rounded-lg" : "justify-center w-full"
            } gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`}
          >
            {user ? (
              <UserButton />
            ) : (
              <Image src={assets.profile_icon} alt="Profile" className="w-7" />
            )}
            {expand && <span>My Profile</span>}
          </div>
        </div>
      </div>
    );
};

export default Sidebar;
