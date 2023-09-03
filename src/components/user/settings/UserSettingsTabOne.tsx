import { CurrUserData } from '@/app/(user)/user/settings/page';
import Image from 'next/image';
import React from 'react';

type Props = {
  themeMode: boolean;
  currUser: CurrUserData | null;
  isLoading: boolean;
};

const UserSettingsTabOne = ({ themeMode, currUser, isLoading }: Props) => {
  return (
    <div className="p-[50px]">
      {isLoading ? (
        <div className="flex items-center justify-center text-2xl font-bold text-center animate-pulse text-app-2">
          Loading....
        </div>
      ) : (
        <div>
          {currUser !== null && currUser !== undefined ? (
            <div>
              <div className="flex justify-center">
                <div
                  className={`relative w-[200px] h-[200px] rounded-full drop-shadow-lg ring-4 ring-app-2 ring-offset-4 ${
                    themeMode ? 'ring-offset-white' : 'ring-offset-dark-800'
                  }`}
                >
                  <Image
                    src={`https://tiktern-backend.azurewebsites.net/uploads/${currUser.user_image}`}
                    alt={`Tiktern User: ${currUser.fname + currUser.lname}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col gap-5 text-sm md:text-xl ${
                  themeMode ? 'text-black' : 'text-white'
                } items-center mt-[50px]`}
              >
                <div>
                  <span className="font-black">Name: </span>
                  {currUser.fname ? currUser.fname : 'Not found!'}{' '}
                  {currUser.lname ? currUser.lname : 'Not found!'}
                </div>
                <div>
                  <span className="font-black">Username: </span>

                  {currUser.username ? currUser.username : 'Not found!'}
                </div>
                <div>
                  <span className="font-black">Email: </span>

                  {currUser.email ? currUser.email : 'Not found!'}
                </div>
                <div>
                  <span className="font-black">Phone Number: </span>

                  {currUser.phone ? currUser.phone : 'Not found!'}
                </div>
                <div>
                  <span className="font-black">Tik Earned: </span>

                  {currUser.tiks_earned ? currUser.tiks_earned : 'Not found!'}
                </div>
                <div>
                  <span className="font-black">Tern Earned: </span>
                  {currUser.terns_earned ? currUser.terns_earned : 'Not found!'}
                </div>
              </div>
            </div>
          ) : (
            <div>User Not Found!</div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserSettingsTabOne;
