import React from 'react';
import styled from 'styled-components';
import color from '../styles/color';

const { light } = color;

const StyledFooter = styled.footer`
  height: 100px;
  background: ${light};
`;

const Footer = () => {
  return (
    <>
      <StyledFooter className="layout-width"> </StyledFooter>
    </>
  );
};

export default React.memo(Footer);
