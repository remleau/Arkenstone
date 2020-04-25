import React, { useEffect } from 'react';
// import io from 'socket.io-client';

import Logout from './../Logout';

const Sidebar = () => {

  // useEffect(()=>{
  //   var socket = io('ws://localhost:5000', { transports: ['websocket'] });
  //   socket.on('user_connected', function (data) {
  //     console.log('user_connected')
  //   });
  // }, [])
  
  return (
    <aside className="block__aside">
      <h1>Wink</h1>
      <Logout />
    </aside> 
  );
}

export default Sidebar;
