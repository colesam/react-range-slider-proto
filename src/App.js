import React from "react";
import FullDemo from "./FullDemo";
import BasicDemo from "./BasicDemo";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/basic">
                    <BasicDemo />
                </Route>
                <Route path="/">
                    <FullDemo />
                </Route>
            </Switch>
        </Router>
    );
}