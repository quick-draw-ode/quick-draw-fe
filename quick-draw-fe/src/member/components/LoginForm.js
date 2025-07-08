import React from 'react';
import styled from 'styled-components';
import { MediumButton } from '../../global/components/Buttons';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';

const { primary, dark } = color;
const { medium } = fontsize;

const StyledForm = styled.form`
  min-width: 280px;
  max-width: 450px;
  width: 100%;
  margin: 200px auto 0;

  input {
    border: 1px solid ${dark};
    width: 100%;
    height: 55px;
    display: block;
    font-size: ${medium};
    text-align: center;
    border-radius: 7px;
  }

  input + input {
    margin-top: 20px;
  }

  button {
    margin-top: 20px;
    border-radius: 7px;
  }
`;

const LoginForm = ({ form, onChange, onSubmit, errors }) => {
  console.log('errors', errors);
  return (
    <StyledForm onSubmit={onSubmit} autoComplete="off">
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={form.email ?? ''}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={form.password ?? ''}
        onChange={onChange}
      />
      <MediumButton type="submit" width="100%">
        로그인
      </MediumButton>
    </StyledForm>
  );
};

export default React.memo(LoginForm);
