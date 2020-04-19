import React from 'react';
import { Switch, Route  } from 'react-router-dom';

import Dashboard from './../Dashboard';
import PageProjets from './../Projets';
import PageEmployes from './../Employes';
import Page404 from './../Page404';

import SingleProjet from './../SingleProjet';

import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';

const Homepage = () => {

  return (
    <React.Fragment>
      <Sidebar />
      <div className="wrapper">
          <Header />
          <div className="relative h-screen pb-20 p-8 overflow-auto">
            <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/projets' render={ props => <PageProjets url="/projets" /> } />
              <Route exact path='/projets/:id' render={ props => <SingleProjet /> } />
              <Route exact path='/employes' render={ props => <PageEmployes url="/employes" /> } />
              <Route component={Page404} />
            </Switch>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
