import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Thread from "./components/Thread";
import Febric from "./components/Febric/Febric";
import AddFebric from "./components/Febric/Add";


export default ({ history, onSignIn, isSignedIn }) => {

  return (
    <div>
        <Router history={history}>
          <Switch>
          <Route path="/product/febric/add">
              <AddFebric/>
            </Route>
            <Route path="/product/febric">
              <Febric/>
            </Route>
            
            <Route path="/product/thread">
              <Thread/>
            </Route>
          </Switch>
        </Router>
    
    </div>
  );
};
