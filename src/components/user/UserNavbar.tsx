import NavTikTern from '@/layouts/Navbar/NavTikTern';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Tooltip } from '@mui/material';
import { deleteCookie } from 'cookies-next';
import { signOut } from 'next-auth/react';

const UserNavbar = ({ title }: { title: string }) => {
  const handleLogout = () => {
    signOut();
    deleteCookie('token');
    localStorage.removeItem('token');
  };

  return (
    <nav className="flex px-[20px] items-center bg-dark-800  justify-between w-full h-[80px] border-b border-white/10">
      <div className="text-2xl font-light">{title}</div>
      <div className="flex items-center gap-5">
        <NavTikTern />
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

export default UserNavbar;
