import React from 'react';
import styled, { css } from 'styled-components';
import color from '../styles/color';
import fontsize from '../styles/fontsize';

const { primary } = color;
const { normal } = fontsize;

const StyledItem = styled.div`
  color: ${primary};
  padding: 5px 10px;
  text-align: center;
  border-radius: 3px;
  background: #fff;
  font-size: ${normal};

  & + & {
    margin-top: 5px;
  }

  ${({ theme }) =>
    theme &&
    color[theme] &&
    css`
      color: ${color[theme]};
    `}
`;

const MessageBox = ({ items, theme, children }) => {
  if (children) items = children;
  items = Array.isArray(items) ? items : items ? [items] : [];

  if (items.length === 0) {
    return <></>;
  }

  return (
    <>
      {items.map((item, i) => (
        <StyledItem key={item + '-' + i} theme={theme ?? 'primary'}>
          {item}
        </StyledItem>
      ))}
    </>
  );
};

export default React.memo(MessageBox);
