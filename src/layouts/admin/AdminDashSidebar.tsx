'use client';
import SidebarLink from '@/components/user/SidebarLink';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { FaRunning } from 'react-icons/fa';
import { MdArchive, MdSpaceDashboard } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useThemeContext } from '../../contexts/theme.context';

interface USER {
  fname?: string;
  lname?: string;
}

const AdminDashSidebar = () => {
  const { setThemeMode, themeMode } = useThemeContext();
  const [user, setUser] = useState<USER | null>({});
  // @ts-ignore
  const { loading, success, userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    var localUser = localStorage.getItem('user');
    if (localUser !== null) {
      setUser(JSON.parse(localUser));
    }
  }, [success]);
  return (
    <aside className="w-[300px]  h-screen relative drop-shadow-xl bg-dark-800">
      {/* logo */}
      <div className="flex items-center justify-center h-[15vh]">
        <Image
          alt="Tiktern Logo"
          src={'/logos/tik_logo-light.svg'}
          height={100}
          width={200}
        />
      </div>
      {/* ***************profile--section*********** */}
      <div className="h-[20vh] justify-center  flex flex-col items-center gap-2">
        {/* avatar */}
        <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full text-black/90 bg-app-1 font-bold relative">
          <h1 className="text-3xl text-black/80">
            {user && user.fname
              ? user.fname.replace(/\W*(\w)\w*/g, '$1').toUpperCase()
              : '😀'}
          </h1>
          <div className="absolute text-[10px] top-[0px] right-[-10px] bg-rose-500 text-white/90 p-[3px] rounded-full drop-shadow">
            Admin
          </div>
        </div>
        {/* name */}
        <div className="text-xl">
          {`${user && user.fname ? user.fname : 'User'} ${
            user && user.lname !== undefined ? user.lname : ''
          }`}
        </div>
        <button className="border border-white/30 text-white/50 outline-none rounded-full w-[50px] text-xs h-[30px]">
          Edit
        </button>
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
    link: '/admin',
    icon: () => <MdSpaceDashboard />,
  },
  {
    name: 'Manage Activities',
    link: '/admin/activity',
    icon: () => <FaRunning />,
  },
  {
    name: 'Manage Users',
    link: '/admin/users',
    icon: () => <FaRunning />,
  },
  {
    name: 'Activity History',
    link: '/admin/activity-history',
    icon: () => <FaRunning />,
  },
  {
    name: 'Analytics',
    link: '/admin/analytics',
    icon: () => <MdArchive />,
  },
  {
    name: 'Settings',
    link: '/admin/settings',
    icon: () => <AiFillSetting />,
  },
];

export default AdminDashSidebar;
