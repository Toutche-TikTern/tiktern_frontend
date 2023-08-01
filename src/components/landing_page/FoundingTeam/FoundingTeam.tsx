'use client';
import Image from 'next/image';
import React from 'react';

type Props = {};

const FoundingTeam = (props: Props) => {
  return (
    <div className="">
      <div className="text-2xl font-bold text-center text-appColor3">
        Founding Team
      </div>
      {/* Image cards */}
      <div className="flex flex-col items-center justify-center w-full gap-5 mt-20 md:flex-row">
        <div className="p-5 border rounded-3xl">
          <div className="relative w-[250px] h-[300px] rounded-2xl">
            <Image
              alt="tiktern"
              src="/imgs/raghu.jpeg"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <h1 className="mt-5 text-xl text-black/90">Raghu Kerakatty</h1>
          <p>Founder</p>
        </div>
        <div className="p-5 border rounded-3xl">
          <div className="relative w-[250px] h-[300px] rounded-2xl">
            <Image
              alt="tiktern"
              src="/imgs/satya.jpeg"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <h1 className="mt-5 text-xl text-black/90">Satayakam Chakraverty</h1>
          <p>Founder</p>
        </div>
        <div className="p-5 border rounded-3xl">
          <div className="relative w-[250px] h-[300px] rounded-2xl">
            <Image
              alt="tiktern"
              src="/imgs/abhishek.jpeg"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <h1 className="mt-5 text-xl text-black/90">Abishek Singh Sony</h1>
          <p>Founding Member & Blockchain Developer</p>
        </div>

        <div className="p-5 border rounded-3xl">
          <div className="relative w-[250px] h-[300px] rounded-2xl">
            <Image
              alt="tiktern"
              src="/imgs/aa.jpeg"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <h1 className="mt-5 text-xl text-black/90">Mohd Ayan Ansari</h1>
          <p>Founding Member & FullStack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default FoundingTeam;
