'use client';
import Image from 'next/image';
import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { BsDiscord } from 'react-icons/bs';

const LandingPageFooter = ({ themeMode }: { themeMode: boolean }) => {
  const date = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <h1
        className={`text-xl   w-[90%] lg:w-[50%] text-justify lg:text-center ${
          themeMode ? 'text-white/80' : 'text-black/80'
        }`}
      >
        TikTern will get more people onto bikes/ebikes, with a goal to build
        Sustainable Living and Healthy Lifestyles
      </h1>
      <div>
        <Image
          alt=""
          src="/imgs/foo.png"
          width={800}
          height={200}
          className={`hidden lg:block ${themeMode ? 'mix-blend-multiply' : ''}`}
        />
      </div>
      <div className="flex items-center gap-5 mt-[100px]">
        <TwitterIcon className="w-[30px] h-[30px] hover:text-appColor3 text-gray-500 cursor-pointer" />
        <TelegramIcon className="w-[30px] h-[30px] hover:text-appColor3 text-gray-500 cursor-pointer" />
        <InstagramIcon className="w-[30px] h-[30px] hover:text-appColor3 text-gray-500 cursor-pointer" />
        <BsDiscord className="w-[30px] h-[30px] hover:text-appColor3 text-gray-500 cursor-pointer" />
      </div>
      <div className="mt-5 mb-5 text-xs text-center text-gray-400">
        COPYRIGHT {date} @TOUTCHE. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default LandingPageFooter;
