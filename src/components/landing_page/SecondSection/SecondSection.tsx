'use client';

import {
  Para,
  SectionHeading,
} from '@/styles/styled_components/components/Text.styled';
import React from 'react';
import { CardContainer, TikternIsForCard } from '../Landing.styled';

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <section>
      <CardContainer>
        {CARD_DATA.map((item, index) => (
          <TikternIsForCard key={index} color={item.color}>
            <div className="my-5 mb-8 text-2xl font-bold text-center">
              {item.title}
            </div>
            <div>
              <ul className="flex flex-col gap-3 text-[20px] text-center text-white/80">
                {item.desc.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </div>
          </TikternIsForCard>
        ))}
      </CardContainer>
      {/* Section 2 */}
      <p className="mx-auto text-center w-[90%] lg:w-[60%] mt-[100px] text-gray-600 text-2xl">
        TikTern is a rider-powered (Web3) economy where riders own the content,
        activities, events they create and decide on its monetisation.
      </p>
      <p className="mx-auto text-center text-2xl w-[90%] lg:w-[60%]    text-black/80 mt-[50px]">
        Transactions on TikTern are done with regular currency (USD) or platform
        native Tokens - Tik & Tern.
      </p>
      <p className="mx-auto text-center text-2xl w-[90%] lg:w-[60%]  font-bold   text-black/80 mt-[50px]">
        It pays to ride on TikTern. All one needs is a TikTern Bike (virtual
        bike), download the App and start riding to earn Tik tokens!
      </p>
    </section>
  );
};

const CARD_DATA = [
  {
    title: 'Cyclists',
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
    title: 'Cycling Clubs',
    desc: [
      'Club Profile',
      'Riding Events',
      'Challenges',
      'Trails',
      'Promotions',
      // 'Mint TikTern Bikes (NFT) for Self, Rent or Sell',
      'Mint Trail NFT',
    ],
    color: '#bb4b6f',
  },
  {
    title: 'Tour Operators',
    desc: [
      'Operator Profile​',
      'Riding Tours​',
      'Trails',
      'Promotions',
      'Ride-to-Earn',
      'TikTern Bikes NFT',
      'Trail NFT',
    ],
    color: '#ba9d0b',
  },
  {
    title: 'Shared Bikes',
    desc: [
      'Navigation',
      'Trails',
      'Grow Users',
      // 'Riding Events',
      'Gamified Events',
      'Ride-to-Earn',
      'TikTern Bikes NFT',
      'Trail NFT',
    ],
    color: '#ff4d00',
  },
];

export default SecondSection;
