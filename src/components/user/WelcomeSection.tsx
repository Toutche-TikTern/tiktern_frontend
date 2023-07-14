import React from 'react';

type Props = {};

const WelcomeSection = (props: Props) => {
  return (
    <section>
      <div className="text-6xl text-center h-[120px] flex items-center w-full justify-center">
        Welcome
      </div>
      <div className="flex flex-col px-[10%] items-center justify-center text-white/80 text-center gap-5 text-2xl">
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
