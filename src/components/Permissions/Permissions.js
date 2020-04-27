import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './../../utils/UserContext.js';

const Permissions = (props) => {

  const { user } = useContext(UserContext);

  const [isAble, setIsAble] = useState(false);

  useEffect(() => {
    props.role && props.role.map((role) => {
      user && Object.values(user.role).map((userRole) => {
        if (userRole.slug == role) {
          setIsAble(true)
        }
      });
    });
  },[user]);

  if (isAble == false){
    return (null);
  }

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

export default Permissions;
