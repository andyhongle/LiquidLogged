import React from "react";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./header/Header";
import Splash from "./splash/Splash";
import Footer from "./footer/Footer";

const App = () => (
	<div>
		<Header />
		<Switch>
			<Route exact path="/" component={Splash} />
			{/* <Route exact path="/login" component={LoginFormContainer} />
			<Route exact path="/signup" component={SignupFormContainer} />

			<Route exact path="/liquids" component={LiquidsContainer} />
			<Route exact path="/profile" component={ProfileContainer} /> */}
		</Switch>
		<Footer />
	</div>
);

export default App;
