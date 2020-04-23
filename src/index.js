import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { UserProvider, UserContext } from './utils/UserContext.js';
import { ProjectProvider } from './utils/ProjectContext.js';

import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Page404 from './pages/Page404';

const App = () => {

  return (
    <main className="bg-primaryLight">
      <Switch>
        <Route exact path='/' render={(props) => <Login {...props} agencyName="Wink Strategies" />} />
        <PrivateRoute path={'/'} component={Homepage} />
        <Route component={Page404} />
      </Switch>
    </main>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {

  const { isLoggedIn } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn
          ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
      }
    />
  );

}

export default App;

ReactDOM.render(
<BrowserRouter>
  <CookiesProvider>
  <UserProvider>
  <ProjectProvider>
    <App /> 
  </ProjectProvider>
  </UserProvider>
  </CookiesProvider>
</BrowserRouter>
, document.getElementById('root'));
