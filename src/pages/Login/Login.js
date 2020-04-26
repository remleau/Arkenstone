import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './../../utils/UserContext.js';
import { postData } from './../../utils';
import { useCookies } from 'react-cookie';

import { Form, Input } from './../../components/Form';

const Login = (props) => {

  const [cookies, setCookie] = useCookies();
  const { isLoggedIn, setIsLoggedIn, setUser } = useContext(UserContext);

  const validated = (data) => {
    // API CALL
    postData("http://localhost:5000/api/user/login", {
      'username': data.username,
      'password': data.password,
    }).then(response => {
      if (response.status == 200) {
        setCookie('user', response.data.token, { path: '/' });
        setUser(response.data);
        setIsLoggedIn(true);
      } else {
        console.log(response.data)
      }
    });
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
          <Form validated={validated} reset="false">
            <Input type="text" name="username" placeholder="Username" required="required" />
            <Input type="password" name="password" placeholder="Password" required="required" />
            <div className="flex">
              <button>Se connecter</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
