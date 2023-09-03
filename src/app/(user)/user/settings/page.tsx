'use client';
import UserNavbar from '@/components/user/UserNavbar';
import UserSettingsTabContainer from '@/components/user/settings/UserSettingsTabContainer';
import { useThemeContext } from '@/contexts/theme.context';
import { axiosClient } from '@/utils/axiosInstance';
import { getCookie } from 'cookies-next';
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type UserData = {
  fname: string;
  lname: string;
  username: string;
  email: string;
  phone: string;
};
export type CurrUserData = {
  fname: string;
  lname: string;
  username: string;
  phone: string;
  email: string;
  terns_earned: number;
  tiks_earned: number;
  user_image: string;
};
const UserSettingsPage = () => {
  const { setThemeMode, themeMode } = useThemeContext();
  const userImageRef = useRef<HTMLInputElement | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [user, setUser] = useState<{} | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userUpdated, setUserUpdated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    fname: '',
    lname: '',
    username: '',
    email: '',
    phone: '',
  });
  const [currUser, setCurrUser] = useState<CurrUserData | null>(null);

  const fetchUser = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');

    try {
      const res = await axiosClient.get('/user/curr-user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        setCurrUser(res.data?.user);
        localStorage.setItem('userImage', res.data.user?.user_image);
        setIsLoading(false);
        console.log(currUser);
      }
    } catch (error) {
      console.log('Error in fetching current user ', error);
    }
  };

  // fetching user from cookie
  useEffect(() => {
    const userCookieValue = getCookie('user');
    const getUser =
      userCookieValue && typeof userCookieValue === 'string'
        ? JSON.parse(userCookieValue)
        : null;

    if (getUser !== undefined && getUser !== null) {
      setUser(getUser);
    }
  }, []);

  // handle User Image Change
  const handleUserImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      setImageFile(file);
    }
  };

  // handle Onchange event
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // handle submit of user update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserUpdated(true);
    console.log('Updating User...');
    const userId = localStorage.getItem('userId');
    const token = getCookie('token');
    try {
      if (
        typeof userId === 'string' &&
        userId !== undefined &&
        userId !== null &&
        imageFile !== null
      ) {
        const formData = new FormData();
        formData.append('id', userId);
        formData.append('fname', userData.fname);
        formData.append('lname', userData.lname);
        formData.append('username', userData.username);
        formData.append('email', userData.email);
        formData.append('phone', userData.phone);
        formData.append('user_image', imageFile as Blob, imageFile.name);
        const res = await axiosClient.patch('/user', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        if (res.data?.success) {
          toast.success('User Updated Successfully...', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        } else {
          toast.error(`Error: ${res.data?.message}`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
        setUserUpdated(false);
      } else if (
        typeof userId === 'string' &&
        userId !== undefined &&
        userId !== null
      ) {
        const formData = new FormData();
        formData.append('id', userId);
        formData.append('fname', userData.fname);
        formData.append('lname', userData.lname);
        formData.append('username', userData.username);
        formData.append('email', userData.email);
        formData.append('phone', userData.phone);
        const res = await axiosClient.patch('/user', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        if (res.data?.success) {
          toast.success('User Updated Successfully...', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          setUserUpdated(false);
        }
      }
    } catch (error) {
      console.log('Error in updating the user:', error);
      setUserUpdated(false);
      toast.error(`Error: ${error}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userUpdated]);
  return (
    <main className={`flex-1 ${themeMode ? 'text-black' : 'text-white'}`}>
      <UserNavbar
        title={`${
          user === null && user === undefined
            ? 'User'
            : // @ts-ignore
            user && user?.fname?.length > 0
            ? // @ts-ignore
              user?.fname
            : 'User'
        } Settings`}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <UserSettingsTabContainer
        themeMode={themeMode}
        userUpdated={userUpdated}
        userData={userData}
        handleSubmit={handleSubmit}
        handleOnchange={handleOnchange}
        userImageRef={userImageRef}
        handleUserImageChange={handleUserImageChange}
        imageFile={imageFile}
        currUser={currUser}
        isLoading={isLoading}
      />
    </main>
  );
};

export default UserSettingsPage;
