import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch , Route} from "react-router-dom";
import Header from "./header/Header";
import Splash from "./splash/Splash";
import Footer from "./footer/Footer";
import Profile from "./profile/profile";
import Liquids from '../components/liquid/liquids.jsx';


const App = () => (
  <div>
    <Header />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <Route exact path="/liquids" component={Liquids} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
    <Footer />
  </div>
);
export default App;
