import React from "react";
import LoginPage from "./Login/LoginPage";
import Signup from "./Signup/Signup";
import { HashRouter, Switch, Route } from "../../node_modules/react-router-dom";

export const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};
