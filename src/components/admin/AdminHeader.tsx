import { logoutUser } from '@/store/features/auth/authSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Tooltip } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const AdminHeader = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    // @ts-ignore
    dispatch(logoutUser({ router }));
    // console.log('logout');
  };

  return (
    <nav className="flex px-[20px] items-center bg-dark-800  justify-between w-full h-[80px] border-b border-white/10">
      <div className="text-2xl font-light">{title}</div>
      <Tooltip title="Logout" className="">
        <IconButton onClick={handleLogout}>
          <div className="w-[40px] h-[40px] text-xs font-semibold transition-all duration-300 ease-in-out rounded-2xl text-light-300 hover:scale-95 border border-white/30 flex justify-center items-center">
            <LogoutIcon />
          </div>
        </IconButton>
      </Tooltip>
    </nav>
  );
};

export default AdminHeader;
