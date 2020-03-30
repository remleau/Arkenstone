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
          <li><NavLink to={'/dashboard'} exact activeClassName='is-active'>Dashboard</NavLink></li>
          <li><NavLink to={'/dashboard/projets'} activeClassName='is-active'>Projets</NavLink></li>
          <li><NavLink to={'/dashboard/employes'} activeClassName='is-active'>Employés</NavLink></li>
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
