import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Header from "./header/Header";
import Splash from "./splash/Splash";
import Footer from "./footer/Footer";
import Profile from "./profile";
const App = () => (
  <div>
    <Modal />
    <Header />
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute exact path="/liquids" component={LiquidsContainer} />
    <ProtectedRoute exact path="/user/:userId" component={Profile} />
    <Footer />
  </div>
);
export default App;