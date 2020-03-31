import React, { useEffect, useState } from 'react';

const Banner = (props) => {

  const [invite, setInvite] = useState(false);

  window.Echo.channel('message')
    .listen('.message.created', (e) => {
      setInvite(e.invite);
      console.log(e)
    });

    console.log('run')

  return (
    <div>
      <h2>{props.pageTitle}</h2> 
      <div>{invite}</div>
    </div>
  );
}

export default Banner;
