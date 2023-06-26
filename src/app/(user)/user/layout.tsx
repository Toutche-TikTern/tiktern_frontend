import UserSidebar from '@/layouts/user/UserSidebar';
import DashboardWrapper from '@/styles/styled_components/layouts/DashboardWrapper.styled';

export default function UserDashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      {/* Include shared UI here e.g. a header or sidebar */}
      <UserSidebar />
      {children}
    </DashboardWrapper>
  );
}
