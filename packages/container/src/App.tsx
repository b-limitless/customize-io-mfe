import React, { useEffect, useState } from "react"
import { createBrowserHistory } from "history"
import SideMenu from "./components/common/SideMenu";
import ArrowRight from "./assets/svg/arrow-right.svg";
import { menuIds, menuEnum } from "./config/navMenu";
import Container from "./components/common/Container";
import { splitTitleToUrl } from "./pure-functions/splitTitleToUrl";

import "./styles/main.scss";

// For example I am lazy loading the components
const Dashboard = (<div>This is dashboard</div>);
const ProductFebric = <div>Product Febric</div>;

import DashboardApp from "./components/remotes/DashboardApp";
import { Router, Switch, Route } from "react-router-dom";

type Props = {}
// Import all microfrontend here and then simply 
// Use them based on the clicked menu we can load the required component
// Need to track the state which will measure which component to display
const history = createBrowserHistory();

export default function App({ }: Props) {
  const [selectedMenu, setSelectedMenu] = useState<menuIds>("Dashboard");

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

  console.log("selected menu", selectedMenu)

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/dashboard">
            <Container selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} >
              <DashboardApp onSingIn={() => { }} isSignIn={false} />
            </Container>
          </Route>

          <Route exact path="/product/febric">
            <Container selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} >
              <div>Product/Febric</div>
            </Container>
          </Route>

          <Route exact path="/product/thread">
            <Container selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} >
              <div>Product/thread</div>
            </Container>
          </Route>

        </Switch>
      </Router>
    </>

  )
}