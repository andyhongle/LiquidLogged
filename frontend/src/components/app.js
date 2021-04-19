import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from "react-router-dom";
import Profile from './profile/profile'

const App = () => (
    <div>App
        <Switch>
            <Route exact path="/profile" component={Profile} />
        </Switch>
    </div>
);



export default App;