import React, { useEffect, useState } from "react"
import { createBrowserHistory } from "history"
import SideMenu from "./components/common/SideMenu";
import ArrowRight from "./assets/svg/arrow-right.svg";
import { menuIds, menuEnum } from "./config/navMenu";
import Container from "./components/common/Container";
import { splitTitleToUrl } from "./pure-functions/splitTitleToUrl";

import "./styles/main.scss";

import DashboardApp from "./components/remotes/DashboardApp";
import ProductApp from "./components/remotes/ProductApp";
import AuthApp from "./components/remotes/AuthApp";
import { Router, Switch, Route, Link } from "react-router-dom";

type Props = {}
// Import all microfrontend here and then simply 
// Use them based on the clicked menu we can load the required component
// Need to track the state which will measure which component to display
const history = createBrowserHistory();

export default function App({ }: Props) {
  const [selectedMenu, setSelectedMenu] = useState<menuIds>("Auth_Signin");
  const [auth, setAuth] = useState<null | {token: string}>(null);
  

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
  }, [selectedMenu]);

  useEffect(() => {
    if(auth) {
      history.push(splitTitleToUrl(menuEnum.Dashboard));
    }

    if(!auth) {
      // history.push(splitTitleToUrl(menuEnum.Auth_Signin));
    }
  }, [auth]);

  // If user is authenticated once 
  // We can redirect user to dashboard
  // Otherwise we can redirect to login page

  // If user is logged in then they go to any auth route
  // they should still logged in because we will have token set already
  // It will resolve in auth is beign true or there will be token
  // We will use redux for the container manage the auth state


  // When menu is changed then oney route will be changed and not other things

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard">
            <Container selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} >
              <DashboardApp onSingIn={() => { }} isSignIn={false} />
            </Container>
          </Route>

          <Route path="/auth">
            <AuthApp onSingIn={() => { }} isSignIn={false} />
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