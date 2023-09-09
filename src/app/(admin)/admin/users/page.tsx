// @ts-nocheck
'use client';

import AdminHeader from '@/components/admin/AdminHeader';
import { useThemeContext } from '@/contexts/theme.context';
import { axiosClient } from '@/utils/axiosInstance';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';

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
        <section className={`h-[calc(100vh-80px)] overflow-y-auto p-[10px]`}>
          <div className="text-center drop-shadow-lg bg-dark-800 rounded-[12px] py-[10px] mt-[20px] mb-[30px]">
            Total Users: {data !== undefined && data.length}
          </div>
          <Table className={``}>
            <Thead className={`text-sm h-[80px]`}>
              <Tr>
                <Th>S. No.</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Account Creation</Th>
                <Th>Tern&apos;s Earned</Th>
                <Th>Tik&apos;s Earned</Th>
                <Th>Activity</Th>
              </Tr>
            </Thead>
            <Tbody className={`text-xs`}>
              {data !== undefined &&
                // @ts-ignore
                data.map((item, index) => {
                  const userImage = item.user_image
                    ? `https://tiktern-backend.azurewebsites.net/uploads/${item.user_image}`
                    : null;

                  return (
                    <Tr
                      key={index}
                      className={`${
                        themeMode ? 'odd:bg-slate-100 ' : 'odd:bg-dark-600 '
                      } `}
                    >
                      {/* -------------- Serial Number -------------- */}
                      <Td className={`text-center`}>
                        {/* @ts-ignore */}
                        {index + 1}
                      </Td>
                      {/* ---------------- User Image --------------- */}
                      <Td className={``}>
                        <div className="flex relative justify-center items-center w-[40px] h-[40px] rounded-full bg-app-3 text-white font-bold">
                          {/* @ts-ignore */}
                          {userImage ? (
                            <Image
                              src={userImage}
                              alt={`${
                                item.fname || item.email || ''
                              }-Tiktern's User`}
                              fill
                              className="!object-cover !rounded-full"
                            />
                          ) : (
                            <div>
                              {item && item.fname
                                ? item?.fname
                                    .replace(/\W*(\w)\w*/g, '$1')
                                    .toUpperCase()
                                : 'U'}
                            </div>
                          )}
                        </div>
                      </Td>
                      {/* -------------- User Full Name ------------ */}
                      <Td className={`text-center`}>
                        {/* @ts-ignore */}
                        {item?.fname || '-'} {item?.lname || ''}
                      </Td>
                      {/*----------- Username ----------------*/}
                      <Td className={`text-center`}>
                        {/* @ts-ignore */}
                        {item?.username || '-'}
                      </Td>
                      {/* ------------- Email  -------------- */}
                      <Td className={`text-center`}>
                        {/* @ts-ignore */}
                        {item?.email || '-'}
                      </Td>
                      {/* ------------- Phone  -------------- */}
                      <Td className={`text-center`}>
                        {/* @ts-ignore */}
                        {item?.phone || '-'}
                      </Td>
                      {/* ------------- Account Creation  -------------- */}
                      <Td className={`text-center `}>
                        {/* @ts-ignore */}
                        <p className={`text-xs`}>
                          {moment(item.createdAt).format('MMMM Do YYYY')}
                        </p>
                        <p className={`text-xs`}>
                          {moment(item.createdAt).fromNow()}
                        </p>
                      </Td>
                      {/* ------------- Terns Earned -------------- */}
                      <Td className={`text-center`}>
                        {/* @ts-ignore */}
                        {item?.terns_earned || '-'}
                      </Td>
                      {/* ------------- Tikes Earned -------------- */}
                      <Td className={`text-center`}>
                        {/* @ts-ignore */}
                        {item?.tiks_earned || '-'}
                      </Td>

                      {/* activity data map */}

                      {
                        // @ts-ignore
                        item.activities.length > 0 ? (
                          <Td
                            className={`flex flex-col gap-[10px] relative my-[10px]`}
                          >
                            {
                              // @ts-ignore
                              item.activities.map((i, ind) => {
                                const photo = `https://tiktern-backend.azurewebsites.net/uploads/${i?.image_proof}`;
                                return (
                                  <div
                                    key={ind}
                                    className={`flex gap-[10px] items-center  p-[10px] rounded-[12px] ${
                                      themeMode ? 'bg-dark-800' : 'bg-dark-600'
                                    } drop-shadow-lg`}
                                  >
                                    {/* @ts-ignore */}
                                    <div className="flex-1 ">
                                      {ind + 1}: {i.activity_name}
                                    </div>
                                    <div className="relative w-[100px] h-[100px] rounded-[8px]">
                                      {/* @ts-ignore */}
                                      <Image
                                        alt="TikTern User Activity Proof Image"
                                        src={photo}
                                        fill
                                        className="object-cover rounded-[8px]"
                                      />
                                    </div>
                                  </div>
                                );
                              })
                            }
                          </Td>
                        ) : (
                          <>
                            <Td>No Activities Performed!</Td>
                          </>
                        )
                      }
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </section>
      )}
    </main>
  );
};

export default ManageUsersPage;
