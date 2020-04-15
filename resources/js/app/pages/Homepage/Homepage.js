import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './../../utils/UserContext.js';

import Dashboard from './../Dashboard';
import PageProjets from './../Projets';
import PageEmployes from './../Employes';
import Page404 from './../Page404';

import SingleProjet from './../SingleProjet';

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
          <div className="relative h-screen pb-20 p-8 overflow-auto">
            <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/dashboard/projets' render={ props => <PageProjets url="/dashboard/projets" /> } />
              <Route exact path='/dashboard/projets/:slug' render={ props => <SingleProjet /> } />
              <Route exact path='/dashboard/employes' render={ props => <PageEmployes url="/dashboard/employes" /> } />
              <Route component={Page404} />
            </Switch>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
