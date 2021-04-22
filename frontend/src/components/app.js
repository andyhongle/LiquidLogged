import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Redirect } from "react-router-dom";
import HeaderContainer from "./header/header_container";
import Splash from "./splash/Splash";
import Profile from "./profile/profile";
import Liquids from "../components/liquid/liquids.jsx";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/liquids" component={Liquids} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <Redirect to='/'/>
    </Switch>
  </div>
);
export default App;
