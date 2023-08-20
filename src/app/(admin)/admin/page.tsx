'use client';

import AdminHeader from '@/components/admin/AdminHeader';
import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const AdminDashboard = () => {
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
      <AdminHeader title="Statistics" />
    </main>
  );
};

export default AdminDashboard;
