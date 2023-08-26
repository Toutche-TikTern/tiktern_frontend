'use client';
import { useThemeContext } from '@/contexts/theme.context';
import AdminDashSidebar from '@/layouts/admin/AdminDashSidebar';
import DashboardWrapper from '@/styles/styled_components/layouts/DashboardWrapper.styled';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setThemeMode, themeMode } = useThemeContext();

  return (
    <DashboardWrapper themeMode={themeMode}>
      <AdminDashSidebar />
      {children}
    </DashboardWrapper>
  );
}
