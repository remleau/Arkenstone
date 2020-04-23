import React, { useEffect, useContext } from 'react';
// import io from 'socket.io-client';

import { UserContext } from './../../utils/UserContext.js';

import Logout from './../Logout';

const Sidebar = () => {

  const { users, setUsers } = useContext(UserContext);

  // useEffect(()=>{
  //   var socket = io('ws://localhost:5000', { transports: ['websocket'] });
  //   socket.on('user_connected', function (data) {
  //     console.log('user_connected')
  //     setUsers(prevUsers => [...prevUsers, data])
  //   });
  // }, [])
  
  return (
    <aside className="block__aside">
      <h1>Wink</h1>
      {users && users.map((user, key)=>(
        <p>{ user.firstName }</p>
      ))}
      <Logout />
    </aside> 
  );
}

export default Sidebar;
