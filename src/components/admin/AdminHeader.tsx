'use client';
import { toggleSidebar } from '@/store/features/togglesSlice';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Tooltip } from '@mui/material';
import { deleteCookie } from 'cookies-next';
import { signOut } from 'next-auth/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AdminHeader = ({ title }: { title: string }) => {
  const isSidebarOpen = useSelector((state: any) => state.toggles.sidebar);
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut();
    localStorage.clear();
    deleteCookie('token');
  };

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <nav className="flex px-[20px] items-center bg-dark-800  justify-between w-full h-[80px] border-b border-white/10">
      <div className="text-2xl font-light">{title}</div>
      <div>
        <Tooltip title="Menu" className="">
          <IconButton onClick={handleSidebar}>
            <div className="w-[40px] h-[40px] text-xs font-semibold transition-all duration-300 ease-in-out rounded-2xl text-light-300 hover:scale-95 border border-white/30 flex justify-center items-center">
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </IconButton>
        </Tooltip>
        <Tooltip title="Logout" className="">
          <IconButton onClick={handleLogout}>
            <div className="w-[40px] h-[40px] text-xs font-semibold transition-all duration-300 ease-in-out rounded-2xl text-light-300 hover:scale-95 border border-white/30 flex justify-center items-center">
              <LogoutIcon />
            </div>
          </IconButton>
        </Tooltip>
      </div>
    </nav>
  );
};

export default AdminHeader;
