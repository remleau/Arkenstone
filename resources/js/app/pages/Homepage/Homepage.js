import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './../../utils/UserContext.js';

import Dashboard from './../Dashboard';
import Projets from './../Projets';
import Employes from './../Employes';
import Page404 from './../Page404';

import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';

const Homepage = () => {

  const { isLoggedIn } = useContext(UserContext);

  if(!isLoggedIn){
    return (
      <Redirect to={"/"} />
    )
  }

  return (
    <React.Fragment>
      <Sidebar />
      <div className="wrapper">
          <Header />
          <div className="h-screen pt-8 px-4 overflow-auto">
            <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/dashboard/projets' component={Projets} />
              <Route exact path='/dashboard/employes' component={Employes} />
              <Route component={Page404} />
            </Switch>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
