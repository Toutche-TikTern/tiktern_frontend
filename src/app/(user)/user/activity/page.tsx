'use client';
import UserNavbar from '@/components/user/UserNavbar';
import LiveActivitiesTable from '@/components/user/live-activities/LiveActivitiesTable';

const ActivityPage = () => {
  return (
    <main className="flex-1">
      <UserNavbar title="Manage Activities" />
      {/* Dummy  ---USER ACTIVITIES---*/}
      <div className='bg-white'>
        <LiveActivitiesTable />
      </div>
    </main>
  );
};

export default ActivityPage;
