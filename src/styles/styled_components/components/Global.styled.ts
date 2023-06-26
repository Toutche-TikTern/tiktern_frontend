'use client';
import styled from 'styled-components';

interface MaskIconProps {
  url?: string;
  height?: string;
  width?: string;
  type?: 'black' | 'white';
  color?: string;
  margin?: string;
  selected?: boolean;
}

/**
 * DON'T CHANGE
 */
export const MaskIcon = styled.span<MaskIconProps>`
  height: ${(props) => props.height || '25px'};
  width: ${(props) => props.width || '25px'};
  vertical-align: middle;

  margin: ${(props) => props.margin || '0 4px 0 0'};
  position: relative;
  display: inline-block;
  mask-image: url(${(props) => (!props.url ? '' : props.url)});
  /* mask-image: url(${(props) => props.url || '/icons/instagram.svg'}); */
  -webkit-mask-box-image: url(${(props) => (!props.url ? '' : props.url)});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background: ${(props) =>
    props.selected === true ? props.color || '#fff' : '#252525'};
`;

//->************* Mix blend Mode Image ***************
type MixBlendProps = {
  mainUrl?: string;
  splashUrl?: string;
  height?: string;
  width?: string;
  type?: 'black' | 'white';
  color?: string;
  margin?: string;
  selected?: boolean;
};
export const MixBlendImage = styled.div<MixBlendProps>`
  background: url(${(props) => (!props.mainUrl ? '' : props.mainUrl)})
    center/cover no-repeat;
  height: ${(props) => props.height || '100px'};
  width: ${(props) => props.width || '100px'};
  vertical-align: middle;

  &::before {
    content: '';
    position: absolute;
    background: url(${(props) => (!props.splashUrl ? '' : props.splashUrl)})
      center/cover no-repeat;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
  }
`;
