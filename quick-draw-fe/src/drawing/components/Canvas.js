import React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import color from '../../global/styles/color';

const { dark } = color;

const StyledCanvas = styled.canvas`
  border: 1px solid ${dark};
  margin-bottom: 15px;
  border-radius: 3px;
`;

const Canvas = ({ callback }) => {
  const ref = useRef();

  useEffect(() => {
    if (typeof callback === 'function') {
      callback(ref.current);
    }
  }, [ref, callback]);

  return (
    <StyledCanvas ref={ref} width="498" height="498">
      그리는 곳
    </StyledCanvas>
  );
};

export default React.memo(Canvas);
