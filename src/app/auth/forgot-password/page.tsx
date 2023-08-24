import Link from 'next/link';
import React from 'react';

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className="text-2xl font-bold">
        This feature is under development!!
      </h1>
      <Link
        className="mt-10 underline cursor-pointer text-app-2 "
        href={'/auth/login'}
      >
        Go to Login
      </Link>
      <Link className="underline cursor-pointer text-app-2" href={'/'}>
        Go to Home
      </Link>
    </div>
  );
};

export default ForgotPassword;
