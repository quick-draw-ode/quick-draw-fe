import { useContext } from 'react';
import CommonContext from '../contexts/CommonContext';

export default function useLogout() {
  const {
    actions: { setIsLogin, setLoggedMember },
  } = useContext(CommonContext);
  return () => {
    setIsLogin(false);
    setLoggedMember(null);
  };
}
