import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { UserProvider, UserContext } from './utils/UserContext.js';
import { ProjectProvider } from './utils/ProjectContext.js';

import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Page404 from './pages/Page404';

const App = () => {

    const { isLoggedIn } = useContext(UserContext);

    return (
        <main className="bg-primaryLight">
            <Switch>
                <Route exact path='/' render={(props) => <Login {...props} agencyName="Wink Strategies" />} />
                <PrivateRoute path={'/'} isLoggedIn={isLoggedIn} component={Homepage} />
                <Route component={Page404} />
            </Switch>
        </main>
    );
}

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (isLoggedIn) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={"/"} />
        }
      }
    } />
  )
}

export default App;

ReactDOM.render(
<BrowserRouter>
    <UserProvider>
    <ProjectProvider>
        <App /> 
    </ProjectProvider>
    </UserProvider>
</BrowserRouter>
, document.getElementById('root'));
