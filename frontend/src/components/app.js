import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import HeaderContainer from "./header/header_container";
import Splash from "./splash/Splash";
import Footer from "./footer/Footer";
import Profile from "./profile/profile";
import Liquids from "../components/liquid/liquids.jsx";
import Modal from "./modal/modal";

const App = () => (
<<<<<<< HEAD
  <div>
    <Modal />
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <Route exact path="/liquids" component={Liquids} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </div>
=======
	<div>
        <Modal />
		<HeaderContainer />
		<Switch>
			<AuthRoute exact path="/" component={Splash} />
			<ProtectedRoute exact path="/liquids" component={Liquids} />
			<Route exact path="/profile" component={Profile} />
		</Switch>
		<Footer />
	</div>
>>>>>>> main
);
export default App;
