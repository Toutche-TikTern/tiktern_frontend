'use client';
import { registerUser } from '@/store/features/auth/authSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

type STATE = {
  email: string;
  password: string;
};

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const router = useRouter();
  const [state, setState] = useState<STATE>({
    email: '',
    password: '',
  });

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
    console.log('CLIENT STATE:: ', state);
    try {
      if (canSave) {
        // do stuff
        const data = {
          email: state.email,
          password: state.password,
          router,
        };
        // @ts-ignore
        dispatch(registerUser(data));
        // show toast for successfully registered user
        toast.success('Successfully created user', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex flex-col items-center h-screen bg-white p-[20px]">
      {/* logo */}
      <div className="md:mt-[140px]">
        <Image
          src={'/logos/tik_logo-black.svg'}
          alt="TikTern Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="md:h-[120px] mt-12 flex items-center text-[28px] font-medium">
        Create an account
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full gap-5 mt-10 md:mt-0"
      >
        <input
          placeholder="Enter your email address"
          type="text"
          name="email"
          id="email"
          value={state.email}
          onChange={handleOnChange}
          className="text-black outline-none focus:outline-none bg-slate-50 focus:drop-shadow-lg h-[60px] w-full md:w-[400px] rounded-lg border border-100 text-[16px] font-bold px-5 transition-all duration-300 ease-in-out"
        />
        <input
          placeholder="Enter your password"
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={state.password}
          onChange={handleOnChange}
          className="text-black outline-none focus:outline-none bg-slate-50 focus:drop-shadow-lg h-[60px] w-full md:w-[400px] rounded-lg border border-100 text-[16px] font-bold px-5 transition-all duration-300 ease-in-out"
        />
        <button
          type="submit"
          className="text-white bg-blue-600 hover:drop-shadow-lg h-[60px] w-full md:w-[400px] rounded-lg  text-[16px]  px-5"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-16 text-lg">Already have an account</div>
      <Link href={'/auth/login'} className="w-full">
        <div className="bg-gray-50 h-[60px] w-full md:w-[400px] rounded-lg text-[16px] flex justify-center items-center border border-gray-100 drop-shadow mt-4">
          Login
        </div>
      </Link>
    </main>
  );
};

export default SignUpPage;
