import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './../../utils/UserContext.js';
import { postData } from './../../utils';
import { useCookies } from 'react-cookie';

const Login = (props) => {

  const [cookies, setCookie] = useCookies();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const connectUser = () => {
    if(username && password){

      // API CALL
      postData("http://localhost:5000/api/user/login", {
        'username': username,
        'password': password,
      }).then(response => {
        if (response.status == 200) {
          setCookie('user', response.data, { path: '/' });
          setIsLoggedIn(true);
        } else {
          console.log(response);
        }
      });

    }
  }

  if (isLoggedIn){
    return (
      <Redirect to={"/dashboard"} />
    )
  }

  return (
    <div className="page__login">
      <div className="w-1/5 text-center">
        <h1 className="pb-8">{props.agencyName}</h1>
        <div className="flex flex-col">
          <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <div className="flex">
            <button onClick={connectUser}>Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
