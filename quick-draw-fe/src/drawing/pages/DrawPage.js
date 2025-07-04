import React from 'react';
import { Helmet } from 'react-helmet-async';
import DrawContainer from '../containers/DrawContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width: 500px;
margin: 0 auto;

`;

const DrawPage = () => {
  return (
    <Wrapper className="layout-width">
      <Helmet>
        <title>낙서하기</title>
      </Helmet>
      <DrawContainer cl />
    </Wrapper>
  );
};

export default React.memo(DrawPage);
