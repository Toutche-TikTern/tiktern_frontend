'use client';
import { fontSize } from '@/constant/globalStyledConstants';
import styled from 'styled-components';

interface Text {
  color?: string;
  selected?: boolean;
}
export const BigHeading = styled.h1<Text>`
  font-size: ${fontSize.bigHeading}rem;
  font-weight: 200;
  color: ${(props) => props.selected && props.color};
`;
export const SectionHeading = styled.h1<Text>`
  font-size: ${fontSize.sectionHeading}rem;
  font-weight: 500;
  color: ${(props) => props.selected && props.color};
`;
export const Para = styled.h1<Text>`
  font-size: ${fontSize.para}rem;
  font-weight: 400;
  color: ${(props) => props.selected && props.color};
`;
export const SmallText = styled.h1<Text>`
  font-size: ${fontSize.small}rem;
  font-weight: 400;
  color: ${(props) => props.selected && props.color};
`;
