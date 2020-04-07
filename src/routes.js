import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import NewUser from "./pages/NewUser";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/dashboard/users/new" component={NewUser} exact />
      <Route path="/dashboard/users/:id" component={User} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
