'use client';
import AdminDashSidebar from '@/layouts/admin/AdminDashSidebar';
import DashboardWrapper from '@/styles/styled_components/layouts/DashboardWrapper.styled';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      <AdminDashSidebar />
      {children}
    </DashboardWrapper>
  );
}
