import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          <Dashboard />
        )} 
      />
    </Switch>
  );
}

export default Routes;