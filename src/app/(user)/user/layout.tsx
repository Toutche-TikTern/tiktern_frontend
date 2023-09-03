'use client';
import { useThemeContext } from '@/contexts/theme.context';
import BottomNavbar from '@/layouts/user/BottomNavbar';
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
      <div className="hidden md:block">
        <UserSidebar />
      </div>
      {children}
      {/* Bottom navbar */}
      <div className="relative md:hidden ">
        <BottomNavbar themeMode={themeMode} />
      </div>
    </DashboardWrapper>
  );
}
