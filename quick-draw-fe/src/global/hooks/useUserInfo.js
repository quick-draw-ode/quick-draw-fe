import { useContext } from 'react';
import CommonContext from '../contexts/CommonContext';

export default function useUserInfo() {
  const {
    state: { isLogin, loggedMember },
  } = useContext(CommonContext);

  return [isLogin, loggedMember];
}
