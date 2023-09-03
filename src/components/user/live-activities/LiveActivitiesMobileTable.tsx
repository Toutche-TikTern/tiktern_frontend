// @ts-nocheck
import moment from 'moment';
import React from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';

const LiveActivitiesMobileTable = ({
  activityData,
  currUserActivity,
  handleClick,
  imageFile,
  handleFileChange,
}: {
  activityData: any;
  currUserActivity: any;
  imageFile: any;
  handleClick: any;
  handleFileChange: any;
}) => {
  return (
    <div className="block md:hidden">
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Activity</Th>
            <Th>Tiks to Earn</Th>
            <Th>Terns to Earn</Th>
            <Th>Completion Proof</Th>
          </Tr>
        </Thead>
        <Tbody>
          {activityData !== null &&
          activityData !== undefined &&
          activityData.length > 0
            ? activityData.map((item: any, index: number) => {
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
                  <Tr key={index} className="!py-[20px]">
                    {/* date */}
                    <Td className="!mb-[10px]">{expiry}</Td>
                    {/* Activity */}
                    <Td className="!mb-[10px]">{item.activity_desc}</Td>
                    {/* Tiks to earn */}
                    <Td className="!mb-[10px]">{item.tiks_reward}</Td>
                    {/* Terns to earn */}
                    <Td className="!mb-[10px]">{item.terns_reward}</Td>
                    {/* Proof of completion */}
                    <Td>
                      {isActivitySubmitted ? (
                        <div>Uploaded</div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor={`image-${item._id}`}
                            className="bg-app-2 rounded-xl w-[150px] h-[40px] text-white/80 hover:bg-app-3 transition-all ease-in-out duration-300 flex justify-center items-center !cursor-pointer font-bold"
                          >
                            <input
                              hidden
                              type="file"
                              name={`image-${item._id}`}
                              id={`image-${item._id}`}
                              onChange={(e) => handleFileChange(e, item._id)}
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
                            className={`${
                              imageFile[item._id]
                                ? 'rounded-xl text-black font-bold bg-green-400 h-[40px] w-[150px]'
                                : ''
                            }`}
                          >
                            Upload
                          </button>
                        </div>
                      )}
                    </Td>
                  </Tr>
                );
              })
            : 'No records found!'}
        </Tbody>
      </Table>
    </div>
  );
};

export default LiveActivitiesMobileTable;
