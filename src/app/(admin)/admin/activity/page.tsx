'use client';
import ActivityForm from '@/components/admin/ActivityForm';
import AdminNavBar from '@/components/admin/AdminNavbar';
import React from 'react';

const ActivityPage = () => {
  return (
    <main className="flex-1">
      <AdminNavBar title="Create/Update/Delete Activities" />

      <section className="p-[20px]">
        <ActivityForm />
      </section>
    </main>
  );
};

export default ActivityPage;
