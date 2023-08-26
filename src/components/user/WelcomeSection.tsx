import { useThemeContext } from '@/contexts/theme.context';
import React from 'react';

type Props = {};

const WelcomeSection = (props: Props) => {
  const { setThemeMode, themeMode } = useThemeContext();

  return (
    <section>
      <div
        className={`text-6xl text-center h-[120px] flex items-center w-full justify-center ${
          themeMode ? 'text-black' : 'text-white'
        }`}
      >
        Welcome
      </div>
      <div
        className={`flex flex-col px-[10%] items-center justify-center ${
          themeMode ? 'text-black/80' : 'text-white/80'
        } text-center gap-5 text-2xl"`}
      >
        <p>
          We are honoured to have you as a TikTern Champion working towards
          building a sustainable and healthy living for all.
        </p>
        <p>
          Your invaluable contributions inspire us and everyone in the TikTern
          community.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
