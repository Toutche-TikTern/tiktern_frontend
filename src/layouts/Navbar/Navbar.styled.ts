'use client';
import styled from 'styled-components';

interface NavbarType {
  height: number;
}
export const NavbarContainer = styled.section<NavbarType>`
  display: flex;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => `${props.height}px`};
  padding: 0px 200px 0px 200px;
  background-color: #fff;
  box-shadow: ${(props) =>
    props.height !== 80 &&
    `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`};
  transition: height 0.2s ease;
`;

export const NavCol1 = styled.div``;

export const NavCol2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
`;

export const SigninButton = styled.button`
  background-color: #d830dc;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  transition: all 300ms ease-in-out;
  color: #fff;
  &:hover {
    background-color: #bc21be;
    scale: 1.01;
  }
`;
