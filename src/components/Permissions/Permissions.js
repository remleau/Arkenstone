import React, { useContext } from 'react';
import { UserContext } from './../../utils/UserContext.js';

const Permissions = ({ perm, children }) => {

  const { user } = useContext(UserContext);

  if(user.role != 'admin') {
    return (null);
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default Permissions;
