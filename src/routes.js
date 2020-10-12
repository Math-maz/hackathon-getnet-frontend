import React from "react";
import { Route, Switch } from "react-router-dom";

import Wallet from "./pages/Wallet";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Dashboard/Courses";
import Business from "./pages/Dashboard/Business";

import Home from "./pages/Home";
import StorePage from "./pages/StorePage";
import ClientChat from "./pages/ClientChat";
import StoreChat from "./pages/StoreChat";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Dashboard />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/carteira" render={() => <Wallet />} />
      <Route exact path="/dashboard" render={() => <Dashboard />} />
      <Route exact path="/dashboard/cursos" render={() => <Courses />} />
      <Route exact path="/dashboard/seunegocio" render={() => <Business />} />
      <Route exact path="/store/:storeId" render={() => <StorePage />} />
      <Route
        exact
        path="/chat/client/:discount"
        render={() => <ClientChat />}
      />
      <Route exact path="/chat/store" render={() => <StoreChat />} />
    </Switch>
  );
};

export default Routes;
