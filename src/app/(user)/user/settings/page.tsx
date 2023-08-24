'use client';
import UserNavbar from '@/components/user/UserNavbar';
import { axiosClient } from '@/utils/axiosInstance';
import { getCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserSettingsPage = () => {
  const [user, setUser] = useState<{} | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userUpdated, setUserUpdated] = useState<boolean>(false);
  const [userData, setUserData] = useState<{
    fname: string;
    lname: string;
    username: string;
  }>({
    fname: '',
    lname: '',
    username: '',
  });

  // fetching user from cookie
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

  // handle Onchange event
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // handle submit of user update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserUpdated(true);
    const userId = localStorage.getItem('userId');
    const token = getCookie('token');
    try {
      const res = await axiosClient.patch(
        '/user',
        {
          id: userId,
          fname: userData.fname,
          lname: userData.lname,
          username: userData.lname,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
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

  return (
    <main className="flex-1 ">
      <UserNavbar
        title={`${
          user === null && user === undefined
            ? 'User'
            : // @ts-ignore
            user && user?.fname?.length > 0
            ? // @ts-ignore
              user?.fname
            : 'User'
        } Profile Settings`}
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

      <div className="w-[90%] md:w-[50%] p-[5px] md:p-[20px]">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold ">Update my details</h1>
          <div className="flex flex-col gap-5 mt-5">
            <input
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="Enter your first name"
              className="user-profile_input"
              value={userData.fname}
              onChange={handleOnchange}
            />
            <input
              type="text"
              name="lname"
              id="lname"
              required
              placeholder="Enter your last name"
              className="user-profile_input"
              value={userData.lname}
              onChange={handleOnchange}
            />
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Enter your username"
              className="user-profile_input"
              value={userData.username}
              onChange={handleOnchange}
            />
            <button
              className="bg-app-2 rounded-[12px] h-[50px] ring-1 ring-offset-1 ring-offset-dark-700 ring-app-2"
              disabled={userUpdated}
            >
              {userUpdated ? 'Updating User...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UserSettingsPage;
