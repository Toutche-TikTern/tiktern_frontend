'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import React from 'react';
import {
  LinkName,
  SidebarIconWrapper,
  StyledLink,
} from './UserComponents.Styled';

const SidebarLink = ({
  link,
  name,
  themeMode,
  children,
}: {
  link: string;
  name: string;
  themeMode: boolean;
  children: React.ReactNode;
}) => {
  const path = usePathname();
  return (
    <Link prefetch href={link} passHref legacyBehavior>
      <StyledLink active={path === link} themeMode={themeMode}>
        <SidebarIconWrapper>{children}</SidebarIconWrapper>
        <LinkName>{name}</LinkName>
      </StyledLink>
    </Link>
  );
};

export default SidebarLink;
