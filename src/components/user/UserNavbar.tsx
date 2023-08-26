import { useThemeContext } from '@/contexts/theme.context';
import NavTikTern from '@/layouts/Navbar/NavTikTern';
import { logoutUser } from '@/store/features/auth/authSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Tooltip } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const UserNavbar = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { setThemeMode, themeMode } = useThemeContext();

  const router = useRouter();
  const handleLogout = () => {
    // @ts-ignore
    dispatch(logoutUser({ router }));
    // console.log('logout');
  };

  return (
    <nav
      className={`flex px-[20px] items-center ${
        themeMode ? 'bg-white text-black' : 'bg-dark-800'
      }  justify-between w-full h-[80px] border-b border-white/10 drop-shadow`}
    >
      <div className="text-2xl font-light">{title}</div>
      <div className="flex items-center gap-5">
        <NavTikTern />
        <Tooltip title="Logout" className="">
          <IconButton onClick={handleLogout}>
            <div
              className={`w-[40px] h-[40px] text-xs font-semibold transition-all duration-300 ease-in-out rounded-2xl ${
                themeMode
                  ? 'text-black border-black/10'
                  : 'text-light-300 border-white/30'
              } hover:scale-95 border  flex justify-center items-center`}
            >
              <LogoutIcon />
            </div>
          </IconButton>
        </Tooltip>
      </div>
    </nav>
  );
};

export default UserNavbar;
