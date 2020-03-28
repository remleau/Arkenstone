import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss'; 

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
          <li><NavLink to={'/'} exact activeClassName='is-active'>Personnes</NavLink></li>
          <li><NavLink to={'/projets'} activeClassName='is-active'>Projets</NavLink></li>
          <li><NavLink to={'/a-propos'} activeClassName='is-active'>Calendrier</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
