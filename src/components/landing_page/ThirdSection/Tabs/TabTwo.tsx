import Image from 'next/image';
import React from 'react';

type Props = { themeMode: boolean };

const TabTwo = ({ themeMode }: Props) => {
  return (
    <div className="flex  justify-center w-[100%] lg:w-[70%] mx-auto gap-10  mt-10">
      <div className="flex flex-col items-center w-1/2 drop-shadow-xl">
        <Image alt="TikTern" src="/imgs/coins-2.png" width={200} height={200} />
        <div className="mt-10 text-center">
          <h3
            className={`text-lg font-black lg:text-xl ${
              themeMode ? 'text-white' : 'text-black'
            }`}
          >
            Foundation NFT
          </h3>
          <p className="text-sm text-gray-400">(Finite supply, 9999)</p>
          <p
            className={`mt-10 text-xs font-light lg:text-lg  ${
              themeMode ? 'text-white/80' : 'text-black/80'
            }`}
          >
            Finite supply will give life long platform privileges
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2 drop-shadow-xl">
        <Image alt="TikTern" src="/imgs/coins-1.png" width={200} height={200} />
        <div className="mt-10 text-center">
          <h3
            className={`text-lg font-black lg:text-xl ${
              themeMode ? 'text-white' : 'text-black'
            }`}
          >
            Bike NFT
          </h3>
          <p className="text-sm text-gray-400">
            (No definite supply, user minted)
          </p>
          <p
            className={`mt-10 text-xs font-light lg:text-lg  ${
              themeMode ? 'text-white/80' : 'text-black/80'
            }`}
          >
            User generated, comes with ride to earn property
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
