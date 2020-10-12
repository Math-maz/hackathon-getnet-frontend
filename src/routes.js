import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Dashboard/Courses';
import Business from './pages/Dashboard/Business';

const Routes = () => {
  return (
    <Switch>
      <Route 
        exact 
        path="/" 
        render={() => (
          <Home/>
        )}
      />
      <Route
        exact
        path='/dashboard'
        render={() => (
          <Dashboard />
        )} 
      />
      <Route
        exact
        path='/dashboard/cursos'
        render={() => (
          <Courses />
        )} 
      />
            <Route
        exact
        path='/dashboard/seunegocio'
        render={() => (
          <Business />
        )} 
      />
    </Switch>
  );
}

export default Routes;