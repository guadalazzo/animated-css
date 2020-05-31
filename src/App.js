import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import './styles.scss';

function App (props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}
export default App;
