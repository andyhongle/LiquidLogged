import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import HeaderContainer from "./header/header_container";
import Splash from "./splash/Splash";
import Footer from "./footer/Footer";
import Profile from "./profile/profile";
import Liquids from "../components/liquid/liquids.jsx";
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
	<div>
		<HeaderContainer />
		<Switch>
			<AuthRoute exact path="/" component={Splash} />
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
			<ProtectedRoute exact path="/liquids" component={Liquids} />
			<Route exact path="/profile" component={Profile} />
		</Switch>
		<Footer />
	</div>
);
export default App;
