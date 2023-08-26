'use client';

import { Tab, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import TabOne from './TabOne';
import TabTwo from './TabTwo';

const TabContainer = ({ themeMode }: { themeMode: boolean }) => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center transition-all ease-in-out duration-300 ">
      <Tab.Group>
        <Tab.List
          className={`flex space-x-1 rounded-full  p-1 w-[90%] lg:w-[20%] ${
            themeMode ? 'bg-white/10' : 'bg-blue-900/10'
          }`}
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`
                w-full rounded-full py-2.5 text-sm  leading-5 text-white-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none uppercase font-black
                ${
                  selected
                    ? themeMode
                      ? 'bg-white shadow'
                      : 'bg-dark-800 text-white'
                    : themeMode
                    ? ''
                    : 'text-black-100 hover:bg-black/[0.12] hover:text-black'
                } transition-all ease-in-out duration-300 
            `}
              >
                Tokens
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */

              <button
                className={`
                w-full rounded-full py-2.5 text-sm  leading-5 text-white-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none uppercase font-black
                ${
                  selected
                    ? themeMode
                      ? 'bg-white shadow'
                      : 'bg-dark-800 text-white'
                    : themeMode
                    ? ''
                    : 'text-black-100 hover:bg-black/[0.12] hover:text-black'
                } transition-all ease-in-out duration-300
              `}
              >
                NFT&apos;s
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={`mt-2 `}>
          <Tab.Panel className={``}>
            <TabOne themeMode={themeMode} />
          </Tab.Panel>
          <Tab.Panel>
            <TabTwo themeMode={themeMode} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabContainer;
