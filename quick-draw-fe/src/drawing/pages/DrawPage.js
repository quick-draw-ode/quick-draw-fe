import React from 'react';
import { Helmet } from 'react-helmet-async';

const DrawPage = () => {
  return (
    <>
      <Helmet>
        <title>낙서하기</title>
      </Helmet>
      <h1>Draw</h1>
    </>
  );
};

export default React.memo(DrawPage);
