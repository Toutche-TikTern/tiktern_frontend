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
            <div className="text-center text-xl mb-5">{item.title}</div>
            <div>
              <ul className="text-sm">
                {item.desc.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </div>
          </TikternIsForCard>
        ))}
      </CardContainer>
      {/* Section 2 */}
      <Para className="mx-auto text-center w-[60%] mt-16 text-gray-600">
        Unlike other Apps that monetise user-generated content, TikTern is a
        rider-powered (Web3) economy where riders own the content, activities,
        events they create and decide on its monetisation. Monetary transactions
        on TikTern are done with regular currency (USD) or platform native
        Tokens - Tik & Tern.
      </Para>

      <SectionHeading className="mx-auto text-center w-[60%] mt-16 text-gray-800 font-light">
        It pays to ride on TikTern. All one needs is a TikTern Bike (virtual
        bicycle), to download the App and start riding to earn Tik tokens!
      </SectionHeading>
    </section>
  );
};

const CARD_DATA = [
  {
    title: 'Cyclists',
    desc: [
      'Navigation, with bike-friendly routing',
      'Create Trails, share with others for free/fees​',
      'Find popular Trails, ride with Navigation',
      'Create, manage and enjoy Live events and challenges',
      'Ride-to-Earn with a TikTern Bike (NFT)',
      'Mint TikTern Bikes (NFT) for Self, Rent or Sell',
      'Mint Trail (NFT)',
    ],
    color: '#4d69ff',
  },
  {
    title: 'Cycling Clubs',
    desc: [
      'Club/Group Profile with members, history of activities',
      'Create & manage riding events and challenges incl registration, tracking, results​​',
      'Create Trails, share with others to ride for free/fees​',
      'Promote your Club​',
      'Ride-to-Earn with a TikTern Bike (NFT)',
      'Mint TikTern Bikes (NFT) for Self, Rent or Sell',
      'Mint Trail (NFT)',
    ],
    color: '#883a53',
  },
  {
    title: 'Tour Operators',
    desc: [
      'Tour Operator Profile with members, history of activities ​',
      'Create & manage riding events incl registration, kick-off, tracking, results​',
      'Create Trails, share with others to ride for free/fees​',
      'Promote your Company​',
      'Ride-to-Earn with a TikTern Bike (NFT)',
      'Mint TikTern Bikes (NFT) for Self, Rent or Sell',
      'Mint Trail (NFT)',
    ],
    color: '#ba9d0b',
  },
  {
    title: 'Shared Bike Operators',
    desc: [
      'Shared User and Activity information between both Apps​',
      'Custom Web3 offers to retain and grow users/usage​',
      'Find popular Trails, ride with Navigation',
      'Create & manage riding events and challenges incl registration, tracking, results​',
      'Ride-to-Earn with a TikTern Bike (NFT)',
      'Mint TikTern Bikes (NFT) for Self, Rent or Sell',
      'Mint Trail (NFT)',
    ],
    color: '#ff4d00',
  },
];

export default SecondSection;
