'use client';

import {
  Para,
  SectionHeading,
} from '@/styles/styled_components/components/Text.styled';
import { Button } from '@mui/material';
import React from 'react';
import { CardContainer, TikternIsForCard } from '../Landing.styled';

const SecondSection = ({ themeMode }: { themeMode: boolean }) => {
  return (
    <section className="mt-[100px]">
      <CardContainer className="">
        {CARD_DATA.map((item, index) => (
          <TikternIsForCard
            key={index}
            color={item.color}
            // className="!w-[60%] lg:!w-[50]"
          >
            <div className="my-5 mb-8 text-2xl font-bold text-center">
              {item.title}
            </div>
            <div>
              <ul className="flex flex-col gap-[5px] text-[20px] text-center text-white/80">
                {item.desc.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </div>
          </TikternIsForCard>
        ))}
      </CardContainer>
      {/* Section 2 */}
      <p
        className={`mx-auto text-center w-[90%] lg:w-[60%] mt-[100px]  text-lg md:text-2xl ${
          themeMode ? ' text-white/80' : 'text-gray-600'
        }`}
      >
        Tiktern&apos;s features are shaped after extensive, ground-up research
        with cyclists, cycling communities and industry professionals. It is
        purpose-built to serve individuals, groups, and cycling clubs, making
        cycling immersive, safer and collaborative like never before.
      </p>
      {/* <p
        className={`mx-auto text-center text-2xl w-[90%] lg:w-[60%]     mt-[50px] ${
          themeMode ? 'text-white/80' : 'text-black/80'
        }`}
      >
        Transactions on TikTern are done with regular currency (USD) or platform
        native Tokens - Tik & Tern.
      </p> */}
      <p
        className={`mx-auto text-center text-lg md:text-2xl w-[90%] lg:w-[60%]  font-bold    mt-[50px] ${
          themeMode ? 'text-white/80' : 'text-black/80'
        }`}
      >
        It pays to ride on TikTern. Download the app, get a TikTern Bike
        (virtual bike), and start riding to earn Tik tokens!
      </p>
      <p
        className={`mx-auto text-center text-lg md:text-2xl w-[90%] lg:w-[60%]      mt-[50px] ${
          themeMode ? 'text-white/80' : 'text-black/80'
        }`}
      >
        Join the whitelist and be the first to be informed of the launch.
      </p>{' '}
      <div className="flex justify-center w-full">
        <Button variant="contained" className="custom-btn !mt-10">
          Join the Whitelist Now
        </Button>
      </div>
    </section>
  );
};

const CARD_DATA = [
  {
    title: 'TikTern for Cyclists',
    desc: [
      'Navigation',
      'Trails',
      // 'Find popular Trails, ride with Navigation',
      'Rides',
      'Challenges',
      'TikTern Bike NFT',
      'Trail NFT',
      'Ride-to-Earn',
    ],
    color: '#4d69ff',
  },
  {
    title: 'TikTern for Cycling Clubs',
    desc: [
      'Club Profile',
      'Riding Events',
      'Challenges',
      'Trails',
      'Promotions',
      // 'Mint TikTern Bikes (NFT) for Self, Rent or Sell',
      'Trail NFT',
    ],
    color: '#bb4b6f',
  },
];

export default SecondSection;
