'use client';
import { fontSize } from '@/constant/globalStyledConstants';
import { MaskIcon } from '@/styles/styled_components/components/Global.styled';
import {
  BigHeading,
  Para,
  SectionHeading,
} from '@/styles/styled_components/components/Text.styled';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center w-full ">
      <div className="mt-5 ">
        <BigHeading
          selected
          color="#252525"
          className="text-center !text-[64px]"
        >
          Rider centric, Social Platform for Cycling
        </BigHeading>
        <div className="flex flex-col items-center justify-center w-full gap-[60px] my-10 lg:mt-5 lg:flex-row">
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
        <div className="my-[80px]">
          <Image
            src="/imgs/banner-img.png"
            alt="My Image"
            width={800}
            height={600}
            className="object-cover object-center mx-auto"
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

        <p className="text-center mx-auto  w-[90%]  lg:w-[60%]  text-gray-600 text-sm lg:text-2xl my-[50px]">
          Tiktern&apos;s features are shaped after extensive, ground-up research
          with cyclists, cycling communities and industry professionals. It is
          purpose-built to serve individuals, groups, and cycling clubs, making
          cycling immersive, safer and collaborative like never before.
        </p>

        <div className="flex items-center justify-center w-[35%] mx-auto gap-[120px] my-[100px] font-bold">
          <div className="text-[#4d69ff] text-[1.1rem] lg:text-[1.5rem] text-center w-1/2">
            Healthy <br /> Lifestyles
          </div>
          <div className="text-[#04ec1b] text-[1.1rem] lg:text-[1.5rem] text-center w-1/2">
            Cleaner <br /> Air
          </div>
          <div className="text-[#d830dc] text-[1.1rem] lg:text-[1.5rem] text-center w-1/2">
            Reduced <br /> Congestion
          </div>
          <div className="text-[#ff4d00] text-[1.1rem] lg:text-[1.5rem] text-center w-1/2">
            Happier <br /> People
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
