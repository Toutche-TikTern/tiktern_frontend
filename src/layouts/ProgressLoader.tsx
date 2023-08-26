'use client';
import { Next13ProgressBar } from 'next13-progressbar';
import React from 'react';
const ProgressLoader = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      return (
      <>
        {children}
        <Next13ProgressBar
          height="3px"
          color="#d22dd6"
          options={{ showSpinner: false }}
          showOnShallow
        />
      </>
      );
    </>
  );
};

export default ProgressLoader;
