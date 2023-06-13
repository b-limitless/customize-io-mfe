import React from "react";
import { Switch, Route, Router } from "react-router-dom";

const Users = () => {
  return <div> Users </div>;
};

export default ({ history, onSignIn, isSignedIn }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/user">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
