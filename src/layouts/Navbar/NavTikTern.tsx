'use client';
import { axiosClient } from '@/utils/axiosInstance';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const NavTikTern = () => {
  const [terns, setTerns] = useState({
    tik: 0,
    tern: 0,
  });
  const token = getCookie('token');

  const fetchDetails = async () => {
    if (token !== undefined && typeof token === 'string') {
      try {
        const res = await axiosClient.get('/user/curr-user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.success) {
          setTerns((prevTerns) => ({
            ...prevTerns,
            tik: res.data.user?.tiks_earned,
            tern: res.data.user?.terns_earned,
          }));
        }
      } catch (error) {
        console.log('error in fetching current user api');
      }
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="flex items-center gap-5 text-black/80">
      <div className="flex items-center gap-2 text-xs font-bold">
        <Image alt="Tern" src={'/imgs/coins-2.png'} width={40} height={40} />
        TERN
        <span className="font-bold text-app-2">{terns.tern}</span>
      </div>
      <div className="flex items-center gap-2 text-xs font-bold">
        <Image alt="Tik" src={'/imgs/coins-1.png'} width={40} height={40} />
        TIK
        <span className="font-bold text-app-2">{terns.tik}</span>
      </div>
    </div>
  );
};

export default NavTikTern;
