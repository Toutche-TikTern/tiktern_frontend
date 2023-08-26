'use client';
import styled from 'styled-components';
interface PropsType {
  themeMode: boolean;
}
const DashboardWrapper = styled.main<PropsType>`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.themeMode ? '#fff' : '#242529')};
  color: #fff;
  position: relative;
`;

export const SidebarContainer = styled.div<{ open: boolean }>`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-300px')};
  transition: left 0.3s ease;
  /* background-color: #f0f0f0; */
  z-index: 10000;
`;

export default DashboardWrapper;
