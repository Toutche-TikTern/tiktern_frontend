'use client';
import UserNavbar from '@/components/user/UserNavbar';
import WelcomeSection from '@/components/user/WelcomeSection';
import LiveActivitiesTable from '@/components/user/live-activities/LiveActivitiesTable';
import { logoutUser } from '@/store/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

type Props = {};

const UserDashboard = (props: Props) => {
  return (
    <main className="flex-1">
      <UserNavbar title="My Dashboard" />
      <WelcomeSection />
      <LiveActivitiesTable />
    </main>
  );
};

export default UserDashboard;
