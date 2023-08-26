'use client';
import UserNavbar from '@/components/user/UserNavbar';
import { useThemeContext } from '@/contexts/theme.context';
import { axiosClient } from '@/utils/axiosInstance';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

interface DATA {
  activity_id: string;
  activity_name: string;
  image_proof: string;
  activity_status: string;
  activity_completed_date: string;
  _id: string;
}
const ActivityArchivePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activityData, setActivityData] = useState<DATA[] | null>([]);
  const { setThemeMode, themeMode } = useThemeContext();

  // fetching current user activity data
  const fetchUserActivity = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');

    try {
      const res = await axiosClient.get('/user/curr-user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        setActivityData(res.data?.user?.activities);
        setIsLoading(false);
        console.log(activityData);
      }
    } catch (error) {
      console.log('Error in fetching user activity', error);
    }
  };

  useEffect(() => {
    fetchUserActivity();
  }, []);

  return (
    <main className="flex-1 h-[calc(100vh-80px)] overflow-y-auto">
      <UserNavbar title="Activities History" />
      <div className="p-[20px]">
        {/* Table Head */}
        <div
          className={`flex border  drop-shadow-lg  h-[60px] font-bold px-[20px] ${
            themeMode ? 'bg-white text-black' : 'bg-dark-800 border-white/10'
          }`}
        >
          <div className="w-[50%] flex items-center px-[20px]">
            Activity Name
          </div>
          <div className="w-[30%] flex items-center px-[20px] text-center">
            Activity Completed Date
          </div>
          <div className="w-[20%] flex items-center justify-center px-[20px] text-center">
            Activity Status
          </div>
        </div>
        {/* Table Container */}
        <div
          className={`border  p-[20px] ${
            themeMode
              ? 'border-black/10 text-black'
              : 'border-white/10 text-white'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center text-2xl font-bold duration-150 animate-pulse">
              Loading...
            </div>
          ) : activityData !== null && activityData.length > 0 ? (
            <div className="flex flex-col justify-center gap-[20px]">
              {activityData.map((item, index) => {
                return (
                  <div key={index} className="flex h-[40px]">
                    {/* activity name */}
                    <div className="w-[50%] flex items-center px-[20px] capitalize">
                      {item.activity_name}
                    </div>
                    {/* activity completed date */}
                    <div className="w-[30%] flex items-center px-[20px]">
                      {moment(item.activity_completed_date).format(
                        'MMMM Do YYYY'
                      )}
                    </div>
                    {/* activity status */}
                    <div
                      className={`w-[20%] flex items-center px-[20px] uppercase ${
                        item.activity_status === 'completed'
                          ? 'text-green-400 bg-green-700 '
                          : ''
                      } bg-gray-700 rounded-[5px] justify-center min-w-max px-[5px] font-bold`}
                    >
                      {/* //['progress', 'completed', 'pending'] */}
                      {item.activity_status}
                    </div>
                    {/* TODO: Tern earned in that activity */}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>No record found!</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ActivityArchivePage;
