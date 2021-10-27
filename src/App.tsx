import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import Page from './Page'


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/page">
                    <Page />
                </Route>
            </Switch>
        </Router>
    );
}