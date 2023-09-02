'use client';
import Image from 'next/image';
import React from 'react';

import AirIcon from '@mui/icons-material/Air';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { BsDiscord } from 'react-icons/bs';

const LandingPageFooter = ({ themeMode }: { themeMode: boolean }) => {
  const date = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <h1
        className={`text-2xl   w-[90%] lg:w-[50%] text-center lg:text-center ${
          themeMode ? 'text-white/80' : 'text-black/80'
        }`}
      >
        TikTern will get more people onto bikes/ebikes, with a goal to build
        Sustainable Living and Healthy Lifestyles
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%] md:w-[35%] mx-auto gap-[120px] mt-[100px] font-bold">
        <div className="flex flex-col items-center justify-center text-[#4d69ff] text-2xl text-center w-1/2">
          <SportsGymnasticsIcon className="w-[40px] h-[40px] mb-[10px]" />
          Healthy <br /> Lifestyles
        </div>
        <div className="flex flex-col items-center justify-center text-[#04ec1b] text-2xl text-center w-1/2">
          <AirIcon className="w-[40px] h-[40px] mb-[10px]" />
          Cleaner <br /> Air
        </div>
        <div className="flex flex-col items-center justify-center text-[#d830dc] text-2xl text-center w-1/2">
          <DirectionsCarIcon className="w-[40px] h-[40px] mb-[10px]" />
          Reduced <br /> Congestion
        </div>
        <div className="flex flex-col items-center justify-center text-[#ff4d00] text-2xl text-center w-1/2">
          <EmojiEmotionsIcon className="w-[40px] h-[40px] mb-[10px]" />
          Happier <br /> People
        </div>
      </div>
      {/* <div>
        <Image
          alt=""
          src="/imgs/foo.png"
          width={800}
          height={200}
          className={`hidden lg:block ${themeMode ? 'mix-blend-multiply' : ''}`}
        />
      </div> */}
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
