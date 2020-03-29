import React from 'react';

const Login = (props) => {

  console.log(props)

  return (
    <div className="page__login">
      <div className="w-1/5 text-center">
        <h1 className="pb-8">{props.agencyName}</h1>
        <div className="flex flex-col">
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button>Connect</button>
          <button>Continu as guest</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
