'use client';
import styled from 'styled-components';
import { COLORS } from '../../constant/colors';

interface LinkType {
  active: boolean;
}

// profile section

// Side bar link components
export const StyledLink = styled.a<LinkType>`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  gap: 5px;
  position: relative;
  background-color: ${(props) =>
    props.active ? COLORS.dark[600] : COLORS.dark[800]};
  height: 60px;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s;
  color: ${(props) => (props.active ? COLORS.light[400] : '#88837E')};
  &:hover {
    background-color: ${COLORS.dark[600]};
  }
`;
export const SidebarIconWrapper = styled.div``;
export const LinkName = styled.div``;
