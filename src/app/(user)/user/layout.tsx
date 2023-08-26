'use client';
import { useThemeContext } from '@/contexts/theme.context';
import UserSidebar from '@/layouts/user/UserSidebar';
import DashboardWrapper from '@/styles/styled_components/layouts/DashboardWrapper.styled';

export default function UserDashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { setThemeMode, themeMode } = useThemeContext();

  return (
    <DashboardWrapper themeMode={themeMode}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <UserSidebar />
      {children}
    </DashboardWrapper>
  );
}
