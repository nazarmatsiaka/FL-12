import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import AllEmployees from "./components/AllEmployees/AllEmployees";
import AllUnits from "./components/AllUnits/AllUnits";
import Warning from "./components/Warning/Warning";

const Routes = () => (
    <Switch>
        <Route exact path="/allEmp" component={ AllEmployees } />
        <Route exact path="/allUnits" component={ AllUnits } />
        <Route exact path="/warning" component={ Warning } />

        <Redirect to="/allEmp" />
    </Switch>
);

export default Routes;
