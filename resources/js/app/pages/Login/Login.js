import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const connectUser = () => {
    if(username && password){

      //API CALL
      window.axios
        // The API we're requesting data from
        .post("/api/auth/login", {
          'username': username,
          'password': password,
        })
        // Once we get a response, we'll map the API endpoints to our props
        .then(response =>
          console.log(response.data)
        )
        // Let's make sure to change the loading state to display the data
        .then(users => {
          // this.setState({
          //   users,
          //   isLoading: false
          // });
        })
        // We can still use the `.catch()` method since axios is promise-based
        .catch(error => console.log(error));
    }
  }

  const connectGuest = () => {
    setRedirect(true);
  }

  if (redirect){
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
            <button className="mr-2" onClick={connectUser}>Connect</button>
            <button className="ml-2" onClick={connectGuest}>Continu as guest</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
