import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import StorePage from "./pages/StorePage";
import ClientChat from "./pages/ClientChat";
import StoreChat from "./pages/StoreChat";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Dashboard />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/store/:storeId" render={() => <StorePage />} />
      <Route exact path="/chat/client" render={() => <ClientChat />} />
      <Route exact path="/chat/store" render={() => <StoreChat />} />
    </Switch>
  );
};

export default Routes;
