import React from 'react';
import styled from 'styled-components';
import mainImage from '../../global/images/main.png';
import { Link } from 'react-router-dom';
import { MediumButton } from '../../global/components/Buttons';

const Wrapper = styled.div`
  position: absolute;
  height: calc(100% - 190px);
  width: 100%;
  top: 90px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main-image {
    display: block;
    margin-bottom: 30px;
    max-width: 580px;
    min-width: 320px;
    width: 100%;
  }
`;

const MainPage = () => {
  return (
    <Wrapper className="layout-width">
      <img className="main-image" src={mainImage} alt="메인이미지" />
      <Link to="/draw">
        <MediumButton>시작하기</MediumButton>
      </Link>
    </Wrapper>
  );
};

export default React.memo(MainPage);
