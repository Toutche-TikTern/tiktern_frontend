'use client';
import { axiosClient } from '@/utils/axiosInstance';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
type Props = {};

type Activity = {
  _id: string;
  user: string;
  activity_desc: string;
  terns_reward: number;
  activity_expiry: string;
  activity_status: string;
};
type FileState = {
  activityId: string;
  userId: string;
  file: File | null;
};

const LiveActivitiesTable = (props: Props) => {
  const [activityData, setActivityData] = useState<Activity[]>([]);
  const [currUserActivity, setCurrUserActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [imageFile, setImageFile] = useState<File | null>({});
  const [imageFile, setImageFile] = useState<Record<string, File | null>>({});
  const [submittedActivities, setSubmittedActivities] = useState<string[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  // fetch activity data from db
  const fetchActivity = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const { data } = await axiosClient.get('/activity', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await axiosClient.get('/user/curr-user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        localStorage.setItem('userId', res.data.user._id);
      }
      setActivityData(data?.activity || []);
      setIsLoading(false);
    } catch (error) {
      console.log('Error in fetching Activity');
    }
  };

  const fetchCurrUserActivity = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');

    try {
      const res = await axiosClient.get('/user/curr-user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        setCurrUserActivity(res.data?.user?.activities);
        localStorage.setItem('user_terns', res.data?.user?.terns_earned);
        localStorage.setItem('user_tiks', res.data?.user?.tiks_earned);
        setIsLoading(false);
        // console.log(currUserActivity);
      }
    } catch (error) {
      console.log('Error in fetching current user activity', error);
    }
  };

  // calling in useEffect
  useEffect(() => {
    // fetchUser();
    const token = getCookie('token');
    if (token !== undefined && typeof token === 'string') {
      fetchActivity();
    }
    // console.log(activityData);
  }, []);

  useEffect(() => {
    fetchCurrUserActivity();
    // const token = getCookie('token');
    // if (token !== undefined && typeof token === 'string') {
    // }
  }, [uploading]);

  // handle photo upload on client side
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    activityId: string
  ) => {
    const files = e.target.files;
    if (files) {
      const updatedFileStates = { ...imageFile };
      updatedFileStates[activityId] = files[0];
      setImageFile(updatedFileStates);
    }
    // if (files) {
    //   // @ts-ignore
    //   const updatedFileStates = [...imageFile];
    //   // @ts-ignore
    //   updatedFileStates[activityId] = files[0];
    //   // @ts-ignore
    //   setImageFile(updatedFileStates);
    // }
  };

  const handleClick = async (activityId: string) => {
    // console.log(activityId);
    setUploading(true);
    const currUserId = localStorage.getItem('userId');
    if (imageFile) {
      if (currUserId) {
        // @ts-ignore
        // const userId = JSON.parse(currUser)._id;

        // console.log(currUserId);
        const formData = new FormData();
        // @ts-ignore
        const file = imageFile[activityId];
        // console.log('Image Files::', imageFile);
        // console.log('Selected File:', file);
        if (file !== undefined && file !== null) {
          formData.append('image', file as Blob, file?.name);
          // console.log(file);
          formData.append('userId', currUserId);
          formData.append('activityId', activityId);
          const token = localStorage.getItem('token');
          // console.log('token', token);
          try {
            const res = await axios.patch(
              'https://tiktern-backend.azurewebsites.net/api/v1/activity/image',
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            // console.log('Response:', res);
            setSubmittedActivities([...submittedActivities, activityId]);
            setUploading(false);

            setImageFile((prevImageFile) => ({
              ...prevImageFile,
              [activityId]: null, // Clear the uploaded file for this activity
            }));
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  };

  return (
    <div className="py-[20px] px-[40px] mt-10">
      <div className="text-2xl font-bold text-app-1">Live Activities</div>
      <hr className="mb-5 border-white/10" />

      <div>
        {isLoading ? (
          <div>
            <h1 className="text-2xl font-bold animate-pulse text-app-2">
              Loading
            </h1>
          </div>
        ) : (
          <div>
            {/* live activity goes here --> */}
            {/* activity header */}
            <div className="flex w-full font-bold h-[40px]">
              <div className="w-[15%] flex ">Date</div>
              <div className="w-[40%] flex ">Activity</div>
              <div className="w-[15%] flex items-center justify-center">
                Terns to Earn
              </div>
              <div className="w-[30%] flex items-center justify-center">
                Proof of Completion
              </div>
            </div>

            <div className="flex flex-col w-full gap-5 mt-5">
              {activityData !== null &&
              activityData !== undefined &&
              activityData.length > 0
                ? activityData.map((item, index) => {
                    // @ts-ignore
                    const expiry = moment(item?.activity_expiry).format(
                      'MMMM Do YYYY'
                    );
                    // const isActivitySubmitted = submittedActivities.includes(
                    //   item._id
                    // );
                    const isActivitySubmitted = currUserActivity.some(
                      (completedActivity) =>
                        // @ts-ignore
                        completedActivity.activity_id === item._id
                    );
                    return (
                      <div key={index} className="flex ">
                        {/* date */}
                        <div className="w-[15%] flex items-center">
                          {expiry}
                        </div>
                        {/* activity name or desc */}
                        <div className="w-[40%] flex  items-center">
                          {/* @ts-ignore */}
                          {item.activity_desc}
                        </div>
                        {/* tern earned */}
                        <div className="w-[15%] flex text-center items-center justify-center">
                          {/* @ts-ignore */}
                          {item.terns_reward}
                        </div>
                        {/* proof of completion */}
                        <div className="w-[30%] flex justify-center items-center">
                          {isActivitySubmitted ? (
                            <div>Uploaded</div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <label
                                htmlFor={`image-${item._id}`}
                                className="bg-app-2 rounded-xl w-[150px] h-[40px] text-white/80 hover:bg-app-3 transition-all ease-in-out duration-300 flex justify-center items-center !cursor-pointer"
                              >
                                <input
                                  hidden
                                  type="file"
                                  name={`image-${item._id}`}
                                  id={`image-${item._id}`}
                                  onChange={(e) =>
                                    handleFileChange(e, item._id)
                                  }
                                />
                                {imageFile !== null &&
                                // @ts-ignore
                                imageFile[item._id] &&
                                // @ts-ignore
                                imageFile[item._id]?.name
                                  ? // @ts-ignore
                                    imageFile[item._id]?.name
                                  : 'Choose Image'}
                              </label>
                              <button
                                // @ts-ignore
                                onClick={() => handleClick(item._id)}
                                disabled={isActivitySubmitted}
                              >
                                Upload
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                : 'No Data Found!'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveActivitiesTable;
