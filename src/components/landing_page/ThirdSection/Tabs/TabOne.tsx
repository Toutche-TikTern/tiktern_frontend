import Image from 'next/image';
import React from 'react';

type Props = {};

const TabOne = (props: Props) => {
  return (
    <div className="flex  justify-center w-[100%] lg:w-[70%] mx-auto gap-10  mt-10">
      <div className="flex flex-col items-center w-1/2 drop-shadow-xl">
        <Image alt="TikTern" src="/imgs/coins-1.png" width={200} height={200} />
        <div className="mt-10 text-center">
          <h3 className="text-lg font-black lg:text-xl">UTILITY TOKEN</h3>
          <p className="text-sm text-gray-400 ">
            (No definite supply, regulated release)
          </p>
          <p className="mt-10 text-xs font-light lg:text-lg text-black/80">
            Earned when users’ ride, perform network activities and paid by
            other users
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2 drop-shadow-xl">
        <Image alt="TikTern" src="/imgs/coins-2.png" width={200} height={200} />
        <div className="mt-10 text-center">
          <h3 className="text-lg font-black lg:text-xl">GOVERNANCE TOKEN</h3>
          <p className="text-sm text-gray-400">
            (Finite supply, 8 bill tokens)
          </p>
          <p className="mt-10 text-xs font-light lg:text-lg text-black/80">
            Finite supply distributed across stakeholders and for various member
            and governance activities
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabOne;
