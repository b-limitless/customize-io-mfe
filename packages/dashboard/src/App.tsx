import React from "react";

import {
    StylesProvider,
    createGenerateClassName,
} from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router-dom";

const gererateClassName = createGenerateClassName({
    productionPrefix: "pa",
});
import Dashboard from './components/Dashboard'

interface AppInterface {
    history: any;
    onSignin: Function,
    isSignedIn: boolean
}

export default function App({ history, onSignin, isSignedIn }: AppInterface) {
    return (
        <>
            <StylesProvider generateClassName={gererateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </>
    )
}