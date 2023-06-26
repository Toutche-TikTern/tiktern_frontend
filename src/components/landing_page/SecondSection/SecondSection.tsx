'use client';

import {
  Para,
  SectionHeading,
} from '@/styles/styled_components/components/Text.styled';
import React from 'react';

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <section>
      <div className="flex items-center justify-center w-full gap-10 mt-5">
        <div className="border border-black/10 rounded-2xl w-[600px] h-[500px] p-[40px] drop-shadow-lg bg-white">
          <h1 className="text-[1.5rem] text-appColor4 text-center mb-6">
            TikTern for Cyclists, Web3 Followers
          </h1>
          <ul className="flex flex-col gap-5 font-light list-disc">
            <li>Navigation, with cycling friendly routing</li>
            <li>
              Create Trails (and own them), share with others to ride for free
              or get paid
            </li>
            <li>Find popular Trails, ride with Navigation</li>
            <li>Create and fully manage Live (private, open) events</li>
            <li>Ride-to-Earn with a TikTern Bike (NFT)</li>
            <li>Mint TikTern Bikes for Self, Rent or Sell</li>
            <li>
              Mint Discount vouchers on partnering brands and sell for a price
            </li>
          </ul>
        </div>
        <div className="border border-black/10 rounded-2xl w-[600px] h-[500px] p-[40px] drop-shadow-lg bg-white">
          <h1 className="text-[1.5rem] text-appColor1 text-center mb-6">
            TikTern for Cycling Clubs & Groups
          </h1>
          <ul className="flex flex-col gap-5 font-light list-disc">
            <li>
              Create Trails (and own them), share with others to ride for free
              or get paid
            </li>
            <li>
              Create and fully manage Live (private, open) events incl
              registration, fees, scheduling, kick-off, tracking riders
              throughout, results
            </li>
            <li>
              Create and fully manage Offline (private, open) events incl
              registration, fees, scheduling, kick-off, tracking rides, results
            </li>
          </ul>
        </div>
      </div>
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

export default SecondSection;
