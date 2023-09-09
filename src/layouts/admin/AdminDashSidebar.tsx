'use client';
import SidebarLink from '@/components/user/SidebarLink';
import { SidebarContainer } from '@/styles/styled_components/layouts/DashboardWrapper.styled';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { FaRunning } from 'react-icons/fa';

import { toggleSidebar } from '@/store/features/togglesSlice';
import { IconButton, Tooltip } from '@mui/material';
import { MdArchive, MdSpaceDashboard } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeContext } from '../../contexts/theme.context';

interface USER {
  fname?: string;
  lname?: string;
  username?: string;
  phone?: string;
  email?: string;
}

const AdminDashSidebar = () => {
  const dispatch = useDispatch();
  const { setThemeMode, themeMode } = useThemeContext();
  const isSidebarOpen = useSelector((state: any) => state.toggles.sidebar);
  const [user, setUser] = useState<USER | null>({});
  const [userImg, setUserImg] = useState<string>('');
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
      const userLocalImage = localStorage.getItem('userImage');
      if (userLocalImage !== undefined && userLocalImage !== null) {
        setUserImg(userLocalImage);
      }
    }
  }, []);

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <SidebarContainer
      open={isSidebarOpen}
      className="drop-shadow-xl !bg-dark-800"
    >
      {/* logo */}
      <div className="flex items-center justify-between h-[15vh] px-[10px]">
        <Link href={'/'}>
          <Image
            alt="Tiktern Logo"
            src={'/logos/tik_logo-light.svg'}
            height={100}
            width={200}
          />
        </Link>
        <Tooltip title="Open/Close Menu" className="">
          <IconButton onClick={handleSidebar}>
            <div className="mt-[10px] w-[40px] h-[40px] text-xs font-semibold transition-all duration-300 ease-in-out rounded-2xl text-light-300 hover:scale-95 border border-white/30 flex justify-center items-center">
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </IconButton>
        </Tooltip>
      </div>
      {/* ***************profile--section*********** */}
      <div className="h-[20vh] justify-center  flex flex-col items-center gap-2">
        {/* avatar */}
        <div
          className={`relative w-[80px] h-[80px] flex items-center justify-center rounded-full ${
            themeMode ? 'text-black/90' : 'text-black'
          } bg-app-1 font-bold`}
        >
          {userImg ? (
            <Image
              src={`https://tiktern-backend.azurewebsites.net/uploads/${userImg}`}
              alt="tiktern user image"
              fill
              className="object-cover rounded-full"
            />
          ) : (
            <h1 className={`text-3xl text-black/80`}>
              {user && user.fname
                ? user.fname.replace(/\W*(\w)\w*/g, '$1').toUpperCase()
                : '😀'}
            </h1>
          )}
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
          <SidebarLink
            key={index}
            link={item.link}
            name={item.name}
            themeMode={themeMode}
          >
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
    </SidebarContainer>
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
  // {
  //   name: 'Activity History',
  //   link: '/admin/activity-history',
  //   icon: () => <FaRunning />,
  // },
  // {
  //   name: 'Analytics',
  //   link: '/admin/analytics',
  //   icon: () => <MdArchive />,
  // },
  {
    name: 'Settings',
    link: '/admin/settings',
    icon: () => <AiFillSetting />,
  },
];

export default AdminDashSidebar;
