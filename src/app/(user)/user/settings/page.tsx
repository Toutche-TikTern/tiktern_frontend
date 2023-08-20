'use client';
import UserNavbar from '@/components/user/UserNavbar';
import React, { useEffect, useState } from 'react';

const UserSettingsPage = () => {
  const [user, setUser] = useState<{} | null>();

  useEffect(() => {
    var localUser;
    if (typeof window !== 'undefined') {
      localUser = localStorage.getItem('user');
    }

    if (localUser) {
      setUser(JSON.parse(localUser));
    } else setUser(null);
  }, []);
  return (
    <main className="flex-1">
      <UserNavbar
        title={`${
          user === null && user === undefined
            ? 'User'
            : // @ts-ignore
            user && user?.fname?.length > 0
            ? // @ts-ignore
              user?.fname
            : 'User'
        } Settings`}
      />
    </main>
  );
};

export default UserSettingsPage;
