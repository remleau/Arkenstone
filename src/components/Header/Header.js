import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProjectContext } from './../../utils/ProjectContext.js';
import { UserContext } from './../../utils/UserContext.js';

import ico_bell from './../../assets/images/icon-notification.svg';
import ico_search from './../../assets/images/icon-search.svg';
import ico_user from './../../assets/images/icon-user.svg';

const Header = () => {

  const { user } = useContext(UserContext);
  const [projects] = useContext(ProjectContext);

  return (
    <header>
      <nav className="primary">
        <ul>
          <li><NavLink to={'/dashboard'} exact activeClassName='is-active'>Dashboard</NavLink></li>
          <li><NavLink to={'/projets'} activeClassName='is-active'>Projets ({projects.length})</NavLink></li>
          <li><NavLink to={'/employes'} activeClassName='is-active'>Employés</NavLink></li>
        </ul>
      </nav>
      <nav className="secondary">
        <ul>
          <li><img src={ico_bell} alt="notification" /></li>
          <li><img src={ico_search} alt="notification" /></li>
          <li>
            <NavLink to={'/profile'} activeClassName='is-active' className="flex">
              <img src={ico_user} alt="user" />
              <div>
                <p className="text-sm1">{user && user.firstName + ' ' + user.lastName}</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
