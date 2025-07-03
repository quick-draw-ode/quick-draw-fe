import styled, { css } from 'styled-components';
import color from '../styles/color';
import fontsize from '../styles/fontsize';

const { primary, light, dark } = color;
const { normal, medium } = fontsize;

const commonStyle = css`
  min-width: 100px;
  min-height: 45px;
  background: ${({ bg }) => (bg ? (color[bg] ? color[bg] : bg) : primary)};
  color: ${({ color: c }) => (c ? (color[c] ? color[c] : c) : light)};
  font-size: ${normal};
  border: 0;
  cursor: pointer;
  box-shadow: 3px 3px 5px ${dark};
`;

export const Button = styled.button`
  ${commonStyle}
  width: ${({ width }) => width ?? '80px'};
  height: ${({ height }) => height ?? '45px'};
`;

export const MediumButton = styled.button`
  ${commonStyle}
  width: ${({ width }) => width ?? '200px'};
  height: ${({ height }) => height ?? '50px'};
  font-size: ${medium};
`;
