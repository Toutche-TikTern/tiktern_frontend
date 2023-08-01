'use client';
import { loginUser } from '@/store/features/auth/authSlice';
import { fetchCurrentUser } from '@/store/features/userSlice';
import { axiosClient } from '@/utils/axiosInstance';
import { setCookie } from 'cookies-next';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type STATE = {
  email: string;
  password: string;
};
const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const LoginPage: NextPage = () => {
  const { loading, userToken, error, success } = useSelector(
    // @ts-ignore
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const router = useRouter();
  const [state, setState] = useState<STATE>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // run useEffect when user is login
  useEffect(() => {
    if (isLoading) {
      // @ts-ignore
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isLoading]);

  const canSave = [validPassword, state.email].every(Boolean);
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(state.password));
  }, [state.password]);

  // todo: make a hook for onChange events
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('CLIENT STATE:: ', state);
    try {
      if (canSave) {
        // do stuff
        // const data = {
        //   email: state.email,
        //   password: state.password,
        //   router,
        // };
        // @ts-ignore
        // dispatch(loginUser(data));
        const { data: user } = await axiosClient.post(`/auth/login`, {
          email: state.email,
          password: state.password,
        });
        // setCookie('token', user?.access_token);
        setCookie('role', user?.roles[0]);
        setCookie('token', user?.access_token);
        localStorage.setItem('token', user?.access_token);
        setIsLoading(false);
        if (user?.roles.includes('admin')) {
          router.push('/admin');
          console.log('go admin');
        } else {
          router.push('/user');
          console.log('go user');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex flex-col items-center bg-white md:h-screen">
      {/* logo */}
      <div className="md:mt-[140px]">
        <Image
          src={'/main-logo.png'}
          alt="TikTern Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="md:h-[120px] mt-12 flex items-center text-[28px] font-medium">
        Sign In
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full gap-5"
      >
        <input
          placeholder="Enter your email address"
          type="text"
          name="email"
          id="email"
          value={state.email}
          onChange={handleOnChange}
          className="text-black outline-none focus:outline-none bg-slate-50 focus:drop-shadow-lg h-[60px] w-[400px] rounded-lg border border-100 text-[16px] font-bold px-5 transition-all duration-300 ease-in-out"
        />
        <input
          placeholder="Enter your password"
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={state.password}
          onChange={handleOnChange}
          className="text-black outline-none focus:outline-none bg-slate-50 focus:drop-shadow-lg h-[60px] w-[400px] rounded-lg border border-100 text-[16px] font-bold px-5 transition-all duration-300 ease-in-out"
        />
        <button
          type="submit"
          className="text-white bg-blue-600 hover:drop-shadow-lg h-[60px] w-[400px] rounded-lg  text-[16px]  px-5"
          disabled={loading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      <div className="mt-10 text-sm text-gray-400">
        <Link href={'/auth/forgot-password'}>Forgot your password?</Link>
      </div>
      <div className="mt-16 text-lg">Don&apos;t have an account?</div>
      <Link href={'/auth/signup'}>
        <div className="bg-gray-50 h-[60px] w-[400px] rounded-lg text-[16px] flex justify-center items-center border border-gray-100 drop-shadow mt-4">
          Create a new account
        </div>
      </Link>
    </main>
  );
};

export default LoginPage;
