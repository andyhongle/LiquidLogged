import React from 'react';
import App from './app';
// add hashrouter otherwise there will be error -- Lin 
import { HashRouter } from 'react-router-dom';

const Root = () => (
    <HashRouter>
        <App />
    </HashRouter>
);

export default Root;