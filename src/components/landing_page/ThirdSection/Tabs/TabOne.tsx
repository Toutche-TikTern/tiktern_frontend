import Image from 'next/image';
import React from 'react';

type Props = {
  themeMode: boolean;
};

const TabOne = ({ themeMode }: Props) => {
  return (
    <div className="flex  justify-center w-[100%] lg:w-[70%] mx-auto gap-10  mt-10">
      <div
        className={`flex flex-col items-center w-1/2 drop-shadow-xl ${
          themeMode ? 'text-bleck' : 'text-white'
        }`}
      >
        <div
          className={`relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] `}
        >
          <Image
            alt="TikTern"
            src="/imgs/coins-1.png"
            fill
            className={`object-cover`}
          />
        </div>
        <div className="mt-10 text-center">
          <h3
            className={`text-lg font-black lg:text-xl ${
              themeMode ? 'text-white' : 'text-black'
            }`}
          >
            UTILITY TOKEN
          </h3>
          <p className="text-sm text-gray-400 ">
            (No definite supply, regulated release)
          </p>
          <p
            className={`mt-10 text-xs font-light lg:text-lg  ${
              themeMode ? 'text-white/80' : 'text-black/80'
            }`}
          >
            Earned when users’ ride, perform network activities and paid by
            other users
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2 drop-shadow-xl">
        <div
          className={`relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] `}
        >
          <Image
            alt="TikTern"
            src="/imgs/coins-2.png"
            fill
            className={`object-cover`}
          />
        </div>
        <div className="mt-10 text-center">
          <h3
            className={`text-lg font-black lg:text-xl ${
              themeMode ? 'text-white' : 'text-black'
            }`}
          >
            GOVERNANCE TOKEN
          </h3>
          <p className="text-sm text-gray-400">
            (Finite supply, 8 bill tokens)
          </p>
          <p
            className={`mt-10 text-xs font-light lg:text-lg  ${
              themeMode ? 'text-white/80' : 'text-black/80'
            }`}
          >
            Finite supply distributed across stakeholders and for various member
            and governance activities
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabOne;
