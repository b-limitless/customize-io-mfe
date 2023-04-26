import React from "react";
import {Route, Router, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "./styles";

interface AppInterface {
  history: any;
  onSignin: Function,
  isSignedIn: boolean
}

export default function App({ history }: AppInterface) {
  return (
    <div className="app">

      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" component={Signin} />
          <Route path="/auth/signup" component={Signup} />
        </Switch>

      </Router>
    </div>
  );
}
