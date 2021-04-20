import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';


const App = () => (
    <div>
        <Modal />
        <Header />
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/liquids" component={LiquidsContainer} />
        <ProtectedRoute exact path="/user/:userId" component={ProfileContainer} />
        <Footer />
    </div>
);




export default App;