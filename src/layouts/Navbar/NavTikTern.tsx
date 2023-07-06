import Image from 'next/image';
import React from 'react';

type Props = {};

const NavTikTern = (props: Props) => {
  return (
    <div className='flex items-center gap-5 text-white/80'>
      <div className="flex gap-2 items-center text-xs font-bold">
        <Image alt="Tern" src={'/imgs/coins-2.png'} width={40} height={40} />
        TERN 0
      </div>
      <div className="flex gap-2 items-center text-xs font-bold">
        <Image alt="Tik" src={'/imgs/coins-1.png'} width={40} height={40} />
        TIK 0
      </div>
    </div>
  );
};

export default NavTikTern;
