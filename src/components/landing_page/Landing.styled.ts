'use client';

import { WIDTH } from '@/constant/screenResolutions';
import styled from 'styled-components';

// Tiktern is For Section
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 20px;
  @media (max-width: ${WIDTH.mobileMax}) {
    padding-bottom: 20px;
    padding-right: 15%;
    padding-left: 15%;
    flex-direction: column;
    /* padding-right: 2%;
    padding-left: 2%; */
  }
`;

export const TikternIsForCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.color};
  width: 30%;
  height: 380px;
  padding: 15px 15px 20px 30px;
  border-radius: 12px;
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  /* opacity: 0.9; */

  ul {
    /* list-style: outside circle; */
    list-style: none;
  }
  @media (max-width: ${WIDTH.mobileMax}) {
    width: 100%;
    padding: 15px 15px 20px 15px;
  }
`;
