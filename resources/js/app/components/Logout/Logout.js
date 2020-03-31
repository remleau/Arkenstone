import React, { useContext } from 'react';
import { UserContext } from './../../utils/UserContext.js';

const Logout = () => {

  const { setIsLoggedIn } = useContext(UserContext);

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <button className="btn-logout" onClick={logout}>
      Déconnexion
    </button>
  );
}

export default Logout;
