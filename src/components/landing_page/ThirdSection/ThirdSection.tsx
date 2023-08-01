'use client';

import { SectionHeading } from '@/styles/styled_components/components/Text.styled';
import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import TabContainer from './Tabs/TabContainer';

const ThirdSection = () => {
  return (
    <section className="py-10 px-[10px]">
      <SectionHeading selected color="#4d69ff" className="mt-10 text-center">
        Tokenomics
      </SectionHeading>
      <div className="flex justify-center mt-10 w-ful">
        <div className="flex justify-center w-full">
          <TabContainer />
        </div>
      </div>
      <div className="mt-10 text-lg font-light text-center text-gray-800">
        <span className="underline decoration-appColor3">Tokens</span> and{' '}
        <span className="underline decoration-appColor4">NFT&apos;s</span> can
        be exchanged for other crypto tokens or traded
      </div>
      <SectionHeading className="mt-16 mb-5 text-center text-appColor3">
        TERN Token <br /> Distribution & Vesting
      </SectionHeading>
      <div className="flex flex-col items-center w-full">
        <Image
          alt="TikTern-Pic Chart"
          src="/imgs/pie-chart.png"
          width={800}
          height={800}
        />
        <p className="mt-10 text-lg font-light text-center text-gray-800">
          Founding team and advisor tokens will be locked for the first 12
          months and vest in the following fashion
        </p>
        {/* <-------   Section   ----------> */}
        <div className="flex divide-x w-[100%] lg:w-[50%] mt-10">
          <div className="flex flex-col items-center w-1/2 gap-2 text-center">
            <h1 className="text-3xl font-bold">25%</h1>
            <p className="text-gray-500">at the end of 12 months</p>
          </div>

          <div className="flex flex-col items-center w-1/2 gap-2 text-center">
            <h1 className="text-3xl font-bold">6.25%</h1>
            <p className="w-[90%] lg:w-[40%] text-gray-500">
              Thereafter at the end of every quarter for 12 quarters
            </p>
          </div>
        </div>
        {/* <-------   Section   ----------> */}
        <section className="flex flex-col items-center w-full mt-16">
          <div className="w-[70%] border-2 border-appColor2 rounded-xl h-[220px] flex flex-col gap-3 justify-center items-center">
            <h1 className="text-2xl text-center">
              The{' '}
              <span className="font-bold text-appColor2">Token Minting</span>{' '}
              and <span className="font-bold text-appColor2">NFT Minting</span>{' '}
              days will be announced soon.
            </h1>
            <p className="text-center text-gray-600">
              Earning tokens is easiest in the initial phase so join now and
              start earning early!
            </p>
          </div>
          <Image
            alt=""
            src="/imgs/cycle-img-1.png"
            width={800}
            height={800}
            className="mt-[-30px]"
          />
        </section>
      </div>

      {/* Foundation member fm club */}
      <div className="flex flex-col items-center justify-center mt-16 ">
        <div className="text-3xl text-center text-appColor3">
          Foundation Members (FM) Club
        </div>
        <p className="lg:px-[20%] mt-5 text-gray-600 text-center">
          TikTern Foundation Members (FM) club will play a hands-on role, in
          laying the foundational blocks of the network and inherit an exclusive
          set of privileges in return.
        </p>
        <Button
          variant="contained"
          className="text-white rounded-full bg-appColor2 hover:bg-appColor3  w-[80%] lg:w-max  lg:h-[40px] px-10 mt-10 !bg-app-2"
        >
          Become the Foundation Member! Join the Whitelist Now
        </Button>
      </div>

      {/* -------------------------------------------- */}
      <div className="flex flex-col items-center justify-center mt-16 ">
        <div className="text-3xl text-black/80">
          FM club has 9999 seats only
        </div>
        <p className="px-[20%] mt-5 text-gray-600 text-center">
          Join the Whitelist to be invited to the FM Club launch event and mint
          your Foundation Member NFT. The FM Club launch date will be announced
          soon.
        </p>
      </div>

      {/* -------------------------------------------- */}
      <div className="flex flex-col lg:flex-row px-[20%] gap-5 mt-10 items-center">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            alt="tiktern"
            src={'/imgs/club-icon-1.png'}
            width={150}
            height={150}
          />
          <h5 className="mt-5 text-xl font-bold">EARLY CONTRIBUTORS</h5>
          <p className="mt-5 text-gray-500">
            FM NFT proceeds will go towards critical pre-launch activities
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            alt="tiktern"
            src={'/imgs/club-icon-2.png'}
            width={150}
            height={150}
          />
          <h5 className="mt-5 text-xl font-bold">NETWORK DEVELOPMENT</h5>
          <p className="mt-5 text-gray-500">
            Hands-on engagement in various network development activities
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            alt="tiktern"
            src={'/imgs/club-icon-3.png'}
            width={150}
            height={150}
          />
          <h5 className="mt-5 text-xl font-bold">EXCLUSIVE PRIVILEGES</h5>
          <p className="mt-5 text-gray-500">
            Earn special privileges in return for making an early impact
          </p>
        </div>
      </div>

      {/* -------------------------------------------- */}
      <div className="flex flex-col items-center text-center p-10 mt-20 justify-center border border-black rounded-2xl mx-auto md:w-[55%] ">
        <h1 className="text-2xl ">
          Exclusive Privileges of a <br />
          <span className="text-appColor2">Foundation Member</span>
        </h1>
        <p className="mt-5 text-lg">
          Founding Member NFTs are transferable. FM Club will see new privileges
          being added and some existing privileges being modified, from time to
          time
        </p>
        <div className="grid grid-cols-3 gap-10 mt-20">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <Image
              alt=""
              src="/imgs/exclusive-icon-1.png"
              width={50}
              height={50}
              className=""
            />
            <p className="text-gray-500">Special prices to buy Network NFTs</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <Image
              alt=""
              src="/imgs/exclusive-icon-2.png"
              width={50}
              height={50}
              className=""
            />
            <p className="text-gray-500">Reduced resources to mint NFTs</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <Image
              alt=""
              src="/imgs/exclusive-icon-3.png"
              width={50}
              height={50}
              className=""
            />
            <p className="text-gray-500">Token airdrops at a higher rate</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <Image
              alt=""
              src="/imgs/exclusive-icon-4.png"
              width={50}
              height={50}
              className=""
            />
            <p className="text-gray-500">
              Reserved privileges at key network events
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <Image
              alt=""
              src="/imgs/exclusive-icon-5.png"
              width={50}
              height={50}
              className=""
            />
            <p className="text-gray-500">
              Early access to TikTern App versions
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <Image
              alt=""
              src="/imgs/exclusive-icon-6.png"
              width={50}
              height={50}
              className=""
            />
            <p className="text-gray-500">Special benefits on assorted brands</p>
          </div>
        </div>
        <Button
          variant="contained"
          className="text-white rounded-full bg-appColor2 hover:bg-appColor3 max-w-max h-[40px] px-10 mt-10 mx-auto !bg-app-2"
        >
          Join the Whitelist Now
        </Button>
        {/* -------------------------------------------------------------------- */}
        <h1 className="mt-20 text-xl font-bold">
          Becoming a Foundation Member{' '}
          <span className="text-appColor2">is Easy</span>
        </h1>
        <div className="flex items-center justify-center gap-4 divide-y">
          <div className="flex flex-col items-center justify-center text-center ">
            <Image
              alt=""
              src="/imgs/aa.png"
              width={800}
              height={200}
              className=""
            />
            <Button
              variant="contained"
              className="text-white rounded-full bg-appColor2 hover:bg-appColor3  h-[60px] px-10 mt-10 mx-auto !bg-app-2"
            >
              Become the Foundation Member! Join the Whitelist Now
            </Button>
          </div>
        </div>

        {/* ------------------------------- */}
      </div>
      <div className="mt-20 text-2xl text-center text-appColor3">Roadmap</div>
      <div className="flex justify-center w-full mt-10">
        <Image
          alt=""
          src="/imgs/roadd.png"
          width={1200}
          height={200}
          className=""
        />
      </div>
    </section>
  );
};

export default ThirdSection;
