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
  children,
}: {
  link: string;
  name: string;
  children: React.ReactNode;
}) => {
  const path = usePathname();
  return (
    <Link prefetch href={link} passHref legacyBehavior>
      <StyledLink active={path === link}>
        <SidebarIconWrapper>{children}</SidebarIconWrapper>
        <LinkName>{name}</LinkName>
      </StyledLink>
    </Link>
  );
};

export default SidebarLink;
