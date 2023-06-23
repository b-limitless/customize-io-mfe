import { createBrowserHistory } from "history";
import React, { useEffect, useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Container from "./components/common/Container";
import DashboardApp from "./components/remotes/DashboardApp";
import ProductApp from "./components/remotes/ProductApp";
import UserApp from "./components/remotes/UserApp";
import AuthApp from "./components/remotes/AuthApp";

import { menuEnum, menuIds } from "./config/navMenu";
import { splitTitleToUrl } from "./pure-functions/splitTitleToUrl";
import "./styles/main.scss";


type Props = {}
// Import all microfrontend here and then simply 
// Use them based on the clicked menu we can load the required component
// Need to track the state which will measure 
const history = createBrowserHistory();

export default function App({ }: Props) {
  const [selectedMenu, setSelectedMenu] = useState<menuIds>("Auth_Signin");
  const [auth, setAuth] = useState<null | { token: string }>(null);
  const [showProfileSideModel, setShowProfileSideModel] = useState<boolean>(false);


  useEffect(() => {
    if (selectedMenu === menuEnum.Dashboard) {
      history.push(splitTitleToUrl(menuEnum.Dashboard));
    }

    if (selectedMenu === menuEnum.Product_Febric) {
      history.push(splitTitleToUrl(menuEnum.Product_Febric));
    }
    if (selectedMenu === menuEnum.Product_Thread) {
      history.push(splitTitleToUrl(menuEnum.Product_Thread));
    }
    if (selectedMenu === menuEnum.User) {
      history.push(splitTitleToUrl(menuEnum.User));
    }
  }, [selectedMenu]);

  useEffect(() => {
    if (auth) {
      history.push(splitTitleToUrl(menuEnum.Dashboard));
    }

    // if (!auth) {
    //   history.push(splitTitleToUrl(menuEnum.Auth_Signin));
    // }
  }, [auth]);

  useEffect(() => {
    // history.push(splitTitleToUrl(menuEnum.Auth_Signin));
  }, [])

  // If user is authenticated once 
  // We can redirect user to dashboard
  // Otherwise we can redirect to login page

  // If user is logged in then they go to any auth route
  // they should still logged in because we will have token set already
  // It will resolve in auth is beign true or there will be token
  // We will use redux for the container manage the auth state
  // When menu is changed then oney route will be changed and not other things
  // Build was failing

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard">
            <Container
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              setShowProfileSideModel={setShowProfileSideModel}
            >
              <DashboardApp onSingIn={() => { }} isSignIn={false} setShowProfileSideModel={setShowProfileSideModel} showProfileSideModel={showProfileSideModel} />
              <h1>Hello This is test</h1>
            </Container>
          </Route>

          <Route path="/auth">
            <AuthApp onSingIn={() => { }} isSignIn={false} />
          </Route>

          <Route path="/user">
            <Container selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} >
              <UserApp onSingIn={() => { }} isSignIn={false} />
            </Container>

          </Route>


          <Route path="/product">
            <Container selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} >
              <ProductApp onSingIn={() => { }} isSignIn={false} />
            </Container>
          </Route>
        </Switch>
      </Router>

    </>

  )
}