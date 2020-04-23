import React, { useContext } from 'react';
import { UserContext } from './../../utils/UserContext.js';
import { useCookies } from 'react-cookie';

const Logout = () => {

  const [cookies, setCookie, removeCookie] = useCookies();
  const { setIsLoggedIn, setUser, setUsers } = useContext(UserContext);

  const logout = () => {
    removeCookie('user', {path: '/'});
    setUser(false)
    setUsers([])
    setIsLoggedIn(false)
  }

  return (
    <button className="btn-logout" onClick={logout}>
      Déconnexion
    </button>
  );
}

export default Logout;
