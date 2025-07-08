import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoginContainer from '../containers/LoginContainer';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <LoginContainer />
    </>
  );
};

export default React.memo(LoginPage);
