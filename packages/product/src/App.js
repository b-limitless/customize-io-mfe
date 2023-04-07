import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Thread from "./components/Thread";
import Febric from "./components/Febric";

const gereateClassName = createGenerateClassName({
  productionPrefix: "ci-product",
});

export default ({ history, onSignIn, isSignedIn }) => {

  return (
    <div>
      <StylesProvider generateClassName={gereateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/product/febric">
              <Febric/>
            </Route>
            <Route path="/product/thread">
              <Thread/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
