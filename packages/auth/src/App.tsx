import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import CreateANewPassword from "./components/CreateANewPassword";

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
          <Route path="/auth/forgot-password" component={ForgotPassword} />
          <Route path="/auth/create-a-new-password" component={CreateANewPassword} />
        </Switch>

      </Router>
    </div>
  );
}
