import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdHome, MdDraw } from 'react-icons/md';
import { TbLogin, TbLogout } from 'react-icons/tb';
import color from '../styles/color';
import fontsize from '../styles/fontsize';
import useUserInfo from '../hooks/useUserInfo';
import useLogout from '../hooks/useLogout';

const { primary, light, dark } = color;
const { big, extraBig } = fontsize;

const StyledHeader = styled.header`
  height: 90px;
  display: flex;
  background: ${primary};
  color: ${light};
  align-items: center;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;

  .left,
  .right {
    display: flex;
  }

  a,
  .welcome {
    font-size: ${big};
    color: ${light};
    display: flex;
    align-items: center;

    &.on {
      text-shadow: 2px 2px 5px ${dark};
    }

    svg {
      font-size: ${extraBig};
    }
  }

  a + a {
    margin-left: 25px;
  }
`;

const Header = () => {
  const [isLogin, loggedMember] = useUserInfo();
  const onLogout = useLogout();

  return (
    <StyledHeader className="layout-width">
      <div className="left">
        <NavLink to="/">
          <MdHome />
          <span>메인으로</span>
        </NavLink>
        <NavLink
          to="/draw"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          <MdDraw />
          <span>낙서하기</span>
        </NavLink>
      </div>
      <div className="right">
        {isLogin ? (
          <>
            <div className="welcome">{loggedMember.name}님, 환영합니다!</div>
            <a onClick={onLogout}>
              <TbLogout />
              <span>로그아웃</span>
            </a>
          </>
        ) : (
          <NavLink
            to="/member/login"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            <TbLogin />
            <span>로그인</span>
          </NavLink>
        )}
      </div>
    </StyledHeader>
  );
};

export default React.memo(Header);
