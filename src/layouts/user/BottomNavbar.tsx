import Link from 'next/link';
import React from 'react';

const BottomNavbar = ({ themeMode }: { themeMode: boolean }) => {
  return (
    <div className="absolute bottom-0 right-0 bg-transparent h-[100px] w-screen p-[20px]">
      <div
        className={` bg-white/10 w-full h-full   z-[1000] backdrop-filter backdrop-blur-md bg-opacity-100 rounded-[18px]`}
      >
        <div className=" flex w-full h-full items-center justify-between px-[20px]">
          {/* dashboard */}
          <div>
            <Link href={'/user'}>Dashboard</Link>
          </div>
          {/* activity archive */}
          <div>
            <Link href={'/user/activity-archive'}>Activity Archive</Link>
          </div>
          {/* settings */}
          <div>
            <Link href={'/user/settings'}>Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
