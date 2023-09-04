'use client';

import AdminHeader from '@/components/admin/AdminHeader';
import { useThemeContext } from '@/contexts/theme.context';
import { axiosClient } from '@/utils/axiosInstance';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ManageUsersPage = () => {
  const { setThemeMode, themeMode } = useThemeContext();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPhotos = async () => {
    const token = localStorage.getItem('token');
    try {
      setIsLoading(true);
      const res = await axiosClient.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('iMages:', res);
      setData(res.data.users);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <main className={`flex-1 ${themeMode ? 'text-black' : 'text-white'}`}>
      <AdminHeader title="Create/Delete/Update Roles of Users" />

      {isLoading ? (
        <section className="flex items-center justify-center h-[80px]">
          <div className="animate-pulse">Loading </div>
          <span className="animate-bounce">&nbsp;.</span>
          <span className="duration-700 animate-bounce">.</span>
          <span className="animate-bounce">.</span>
        </section>
      ) : (
        <section className="p-5 h-[calc(100vh-80px)] overflow-y-auto">
          {/* create users form */}
          <div className="flex w-full">
            <div className="w-[20%]">User</div>
            <div className="w-[50%]">Activity Name</div>
            <div className="w-[30%] mb-5">Activity Proof </div>
          </div>
          <div className="flex flex-col gap-5 ">
            {data !== undefined &&
              // @ts-ignore
              data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex w-full  p-[10px] rounded-[12px] ${
                      themeMode ? 'odd:bg-slate-100' : 'odd:bg-dark-600'
                    }`}
                  >
                    <div className="w-[20%]">
                      {/* @ts-ignore */}
                      {index + 1}: {item.fname || item.username || item.email}
                    </div>
                    {/* activity data map */}
                    <div className="flex flex-col flex-1 gap-2">
                      {
                        // @ts-ignore
                        item.activities.length > 0
                          ? // @ts-ignore
                            item.activities.map((i, ind) => {
                              const photo = `https://tiktern-backend.azurewebsites.net/uploads/${i?.image_proof}`;
                              return (
                                <div key={ind} className="flex ">
                                  {/* @ts-ignore */}
                                  <div className="w-[65%]">
                                    {i.activity_name}
                                  </div>
                                  <div className="w-[35%]">
                                    {/* @ts-ignore */}
                                    <Image
                                      loader={() => photo}
                                      alt="TikTern User Image"
                                      src={photo}
                                      width={100}
                                      height={100}
                                    />
                                  </div>
                                </div>
                              );
                            })
                          : 'No Activities Performed!'
                      }
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </main>
  );
};

export default ManageUsersPage;
