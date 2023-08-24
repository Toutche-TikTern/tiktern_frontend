'use client';
import SidebarLink from '@/components/user/SidebarLink';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { MdArchive, MdSpaceDashboard } from 'react-icons/md';
import { useThemeContext } from '../../contexts/theme.context';

interface USER {
  fname?: string;
  lname?: string;
  username?: string;
  phone?: string;
  email?: string;
}

const UserSidebar = () => {
  const [user, setUser] = useState<USER | null>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // @ts-ignore
  // const { loading, success, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    setIsLoading(true);
    const userCookieValue = getCookie('user');
    const getUser =
      userCookieValue && typeof userCookieValue === 'string'
        ? JSON.parse(userCookieValue)
        : null;

    if (getUser !== undefined && getUser !== null) {
      setUser(getUser);
      setIsLoading(false);
    }
  }, []);

  const { setThemeMode, themeMode } = useThemeContext();
  return (
    <aside className="w-[300px]  h-screen relative drop-shadow-xl bg-dark-800">
      {/* logo */}
      <div className="flex items-center justify-center h-[15vh]">
        <Link href={'/'}>
          <Image
            alt="Tiktern Logo"
            src={'/logos/tik_logo-light.svg'}
            height={100}
            width={200}
          />
        </Link>
      </div>
      {/* ***************profile--section*********** */}
      <div className="h-[20vh] justify-center  flex flex-col items-center gap-2">
        {/* avatar */}
        <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full text-black/90 bg-app-1 font-bold">
          <h1 className="text-3xl text-black/80">
            {user && user.fname
              ? user.fname.replace(/\W*(\w)\w*/g, '$1').toUpperCase()
              : '😀'}
          </h1>
        </div>
        {/* name */}
        <div className="text-xl">
          {`${user && user.fname ? user.fname : 'User'} ${
            user && user.lname !== undefined ? user.lname : ''
          }`}
        </div>
        <Link
          href={'/user/settings'}
          className="border border-white/30 text-white/50 outline-none rounded-full w-[50px] text-xs h-[30px] cursor-pointer hover:bg-app-2 hover:text-white transition-all duration-300 ease-in-out flex justify-center items-center"
        >
          Edit
        </Link>
      </div>
      {/* links */}
      <div className="h-[50vh] px-[30px] pt-5 flex flex-col gap-2">
        {PATHS.map((item, index) => (
          <SidebarLink key={index} link={item.link} name={item.name}>
            {item.icon()}
          </SidebarLink>
        ))}
      </div>
      {/* footer */}
      <div className="h-[15vh] flex flex-col items-center justify-center">
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          checked={themeMode}
          onChange={() => setThemeMode(!themeMode)}
        />
        <label htmlFor="toggle" className="text-xs title opacity-80">
          {themeMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </label>
      </div>
    </aside>
  );
};

const PATHS = [
  {
    name: 'Dashboard',
    link: '/user',
    icon: () => <MdSpaceDashboard />,
  },
  // {
  //   name: 'Live Activities',
  //   link: '/user/activity',
  //   icon: () => <FaRunning />,
  // },
  {
    name: 'Activity Archive',
    link: '/user/activity-archive',
    icon: () => <MdArchive />,
  },
  {
    name: 'Setting',
    link: '/user/settings',
    icon: () => <AiFillSetting />,
  },
];

export default UserSidebar;
