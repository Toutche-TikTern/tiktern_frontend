'use client';
import Image from 'next/image';
import React from 'react';

const FoundingTeam = ({ themeMode }: { themeMode: boolean }) => {
  return (
    <div className={`${themeMode ? 'text-white' : 'text-black'}`}>
      <div
        className={`text-2xl font-bold text-center lg:text-3xl   ${
          themeMode ? 'text-white' : 'text-black'
        }`}
      >
        Founding Team
      </div>
      {/* Image cards */}
      <div className="flex flex-col items-center justify-center w-full gap-5 mt-20 md:flex-row">
        <div
          className={`p-5 border rounded-3xl w-[300px] h-[450px] ${
            themeMode ? 'text-white' : 'text-black'
          }`}
        >
          <div className="relative w-[250px] h-[300px] rounded-2xl">
            <Image
              alt="tiktern"
              src="/imgs/raghuu.png"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <h1 className="mt-5 text-xl text-center">Raghu Kerakatty</h1>
          <p className="text-center">Founder</p>
        </div>
        <div className="p-5 border rounded-3xl w-[300p h-[450px]">
          <div className="relative w-[250px] h-[300px] rounded-2xl">
            <Image
              alt="tiktern"
              src="/imgs/satyaa.png"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <h1 className="mt-5 text-xl text-center">Satayakam Chakraverty</h1>
          <p className="text-center">Founder</p>
        </div>
        <div className="p-5 border rounded-3xl w-[300px h-[450px]">
          <div className="relative w-[250px] h-[300px] rounded-2xl">
            <Image
              alt="tiktern"
              src="/imgs/abhishekk.png"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <h1 className="mt-5 text-xl text-center">Abishek Singh Sony</h1>
          <p className="text-center">
            Founding Member <br /> Blockchain Developer
          </p>
        </div>

        <div className="p-5 border rounded-3xl w-[300px h-[450px]">
          <div className="relative w-[250px] h-[300px] rounded-2xl">
            <Image
              alt="tiktern"
              src="/imgs/ayann.png"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <h1 className="mt-5 text-xl text-center">Mohd Ayan Ansari</h1>
          <p className="text-center">
            Founding Member <br /> FullStack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundingTeam;
