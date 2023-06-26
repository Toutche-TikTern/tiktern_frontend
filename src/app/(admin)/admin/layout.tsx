import AdminDashSidebar from '@/layouts/admin/AdminDashSidebar';
import DashboardWrapper from '@/styles/styled_components/layouts/DashboardWrapper.styled';

export default function AdminDashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      {/* Include shared UI here e.g. a header or sidebar */}
      <AdminDashSidebar />
      {children}
    </DashboardWrapper>
  );
}
