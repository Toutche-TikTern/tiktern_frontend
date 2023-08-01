'use client';

import { WIDTH } from '@/constant/screenResolutions';
import styled from 'styled-components';

// Tiktern is For Section
export const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 10%;
  padding-left: 10%;
  @media (max-width: ${WIDTH.mobileMax}) {
    flex-direction: column;
  }
`;

export const TikternIsForCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  width: 50%;
  padding: 15px 15px 20px 30px;
  border-radius: 12px;
  color: #fff;

  ul {
    list-style: outside circle;
  }
  @media (max-width: ${WIDTH.mobileMax}) {
    width: 100%;
  }
`;
