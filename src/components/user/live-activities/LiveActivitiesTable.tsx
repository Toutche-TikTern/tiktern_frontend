import { axiosClient } from '@/utils/axiosInstance';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

type Props = {};

const LiveActivitiesTable = (props: Props) => {
  const [activityData, setActivityData] = useState<null | []>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchActivity = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosClient.get('/activity');
      setActivityData(data?.activity);
      setIsLoading(false);
    } catch (error) {
      console.log('Error in fetching Activity');
    }
  };

  // calling in useEffect
  useEffect(() => {
    fetchActivity();
    console.log(activityData);
  }, []);

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
                          <button className="bg-app-2 rounded-xl w-[200px] h-[40px] text-white/80 hover:bg-app-3 transition-all ease-in-out duration-300">
                            Upload Proof
                          </button>
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
