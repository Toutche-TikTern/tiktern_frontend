'use client';
import UserNavbar from '@/components/user/UserNavbar';
import WelcomeSection from '@/components/user/WelcomeSection';
import LiveActivitiesTable from '@/components/user/live-activities/LiveActivitiesTable';
import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

type Props = {};

const UserDashboard = (props: Props) => {
  const { data: session } = useSession();

  useEffect(() => {
    const token = session?.user.access_token;
    if (token !== undefined) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }
      setCookie('token', token);
    }
  }, [session]);

  return (
    <main className="flex-1">
      <UserNavbar title="My Dashboard" />
      <WelcomeSection />
      <LiveActivitiesTable />
    </main>
  );
};

export default UserDashboard;
