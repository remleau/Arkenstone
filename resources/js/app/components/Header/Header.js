import React from 'react';
import { NavLink } from 'react-router-dom';

import bell from './../../../../../public/images/svg/icon-notification.svg';
import search from './../../../../../public/images/svg/icon-search.svg';
import user from './../../../../../public/images/svg/icon-user.svg';

const Header = () => {

  return (
    <header>
      <nav className="primary">
        <ul>
          <li><NavLink to={'/'} exact activeClassName='is-active'>Notifs</NavLink></li>
          <li><NavLink to={'/projets'} activeClassName='is-active'>Recherche</NavLink></li>
          <li><NavLink to={'/a-propos'} activeClassName='is-active'>Compte</NavLink></li>
        </ul>
      </nav>
      <nav className="secondary">
        <ul>
          <li><img src={bell} alt="notification" /></li>
          <li><img src={search} alt="notification" /></li>
          <li><img src={user} alt="user" /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
