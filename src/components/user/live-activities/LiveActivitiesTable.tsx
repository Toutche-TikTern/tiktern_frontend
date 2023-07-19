'use client';
import { axiosClient } from '@/utils/axiosInstance';
import axios from 'axios';
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
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File[] | null>([]);
  const [submittedActivities, setSubmittedActivities] = useState<string[]>([]);

  const fetchActivity = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosClient.get('/activity');
      setActivityData(data?.activity || []);
      setIsLoading(false);
    } catch (error) {
      console.log('Error in fetching Activity');
    }
  };

  // calling in useEffect
  useEffect(() => {
    // fetchUser();
    fetchActivity();
    // console.log(activityData);
  }, []);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    activityId: string
  ) => {
    const files = e.target.files;
    if (files) {
      // @ts-ignore
      const updatedFileStates = [...imageFile];
      // @ts-ignore
      updatedFileStates[activityId] = files[0];
      // @ts-ignore
      setImageFile(updatedFileStates);
    }
  };

  const handleClick = async (activityId: string) => {
    console.log(activityId);

    const currUser = localStorage.getItem('user');
    if (imageFile) {
      if (currUser) {
        // @ts-ignore
        const userId = JSON.parse(currUser)._id;

        console.log(userId);
        const formData = new FormData();
        console.log(imageFile);
        // @ts-ignore
        const file = imageFile[activityId];
        if (file) {
          formData.append('image', file as Blob, file.name);
          formData.append('userId', userId);
          formData.append('activityId', activityId);
          const token = localStorage.getItem('token');
          console.log('token', token);
          try {
            const res = await axios.patch(
              'http://localhost:1999/api/v1/activity/image',
              formData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log('Response:', res);
            setSubmittedActivities([...submittedActivities, activityId]);
            setImageFile(null);
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  };

  // todo::: handle activity status if uploaded remove the input form

  return (
    <section className="py-[20px] px-[40px] mt-10">
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
                    const isActivitySubmitted = submittedActivities.includes(
                      item._id
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
    </section>
  );
};

export default LiveActivitiesTable;
