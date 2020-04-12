import React from 'react';
import { NavLink } from 'react-router-dom';

import Logout from './../Logout';

const Sidebar = () => {

  return (
    <aside className="block__aside">
      <h1>Wink</h1>
      <Logout />
    </aside> 
  );
}

export default Sidebar;