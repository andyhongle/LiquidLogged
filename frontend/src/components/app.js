import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route, Switch} from "react-router-dom";
import Liquids from '../components/liquid/liquids.jsx';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/liquids" component={Liquids} />
        </Switch>
    </div>
);



export default App;