'use client';
import { MaskIcon } from '@/styles/styled_components/components/Global.styled';
import { BigHeading } from '@/styles/styled_components/components/Text.styled';
import Image from 'next/image';
import React from 'react';

const HeroSection = ({ themeMode }: { themeMode: boolean }) => {
  return (
    <section
      className={`relative flex items-center justify-center w-full ${
        themeMode ? 'text-white' : 'text-black '
      }`}
    >
      <div className="flex flex-col w-full mt-5">
        <BigHeading
          selected
          color={themeMode ? '#fff' : '#252525'}
          className="!text-center !text-[32px] md:!text-[44px] lg:!text-[54px] xl:!text-[64px]"
        >
          Rider centric, Social Platform for Cycling
        </BigHeading>
        <div className="flex flex-col items-center justify-center w-full gap-[20px] md:gap-[60px] my-10 lg:mt-5 lg:flex-row">
          <div className="flex items-center gap-3">
            <MaskIcon
              id="cycle"
              url="/icons/cycle-w-man.svg"
              height="32px"
              width="32px"
              margin="0px"
              color="#536eff"
              selected
            />
            <div className="text-[#536eff] text-[18px]">
              Immersive Experience
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MaskIcon
              id="smile-face"
              url="/icons/smile-face.svg"
              height="32px"
              width="32px"
              margin="0px"
              color="#ff7348"
              selected
            />
            <div className="text-[#ff7348] text-[18px]">No Subscriptions</div>
          </div>
          <div className="flex items-center gap-3">
            <MaskIcon
              id="server"
              url="/icons/server.svg"
              height="32px"
              width="32px"
              margin="0px"
              color="#8f00ff"
              selected
            />
            <div className="text-[#8f00ff] text-[18px]">Ride & Earn</div>
          </div>
        </div>
        <div className="mb-5 md:my-[50px] flex justify-center">
          <Image
            src={`/imgs/banner-img.png`}
            alt="My Image"
            width={800}
            height={600}
            className="hidden object-cover object-center mx-auto mix-blend-multiply md:block"
          />
          <Image
            src={`/imgs/banner-img.png`}
            alt="My Image"
            width={400}
            height={200}
            className="object-cover object-center mix-blend-multiply md:hidden"
          />
        </div>
        <BigHeading className="px-5 mt-5 font-light text-center ">
          Get on the Bike, and
          <span className="text-[#04ec1b] font-semibold drop-shadow-sm">
            {' '}
            into a better World
          </span>
        </BigHeading>
        {/* <SectionHeading
          selected
          color="#d830dc"
          className="text-center mx-auto w-[90%] lg:w-[40%] my-[100px]"
        >
          TikTern’s mission is to get more people onto bikes & ebikes and help
          build a better world around us.
        </SectionHeading> */}

        <p
          className={`text-center mx-auto  w-[90%]  lg:w-[60%]   text-sm lg:text-2xl mt-[50px] ${
            themeMode ? ' text-white/80' : 'text-gray-600'
          }`}
        >
          TikTern is a rider-powered (Web3) economy where riders own and
          monetise the content, activities, events they create.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
