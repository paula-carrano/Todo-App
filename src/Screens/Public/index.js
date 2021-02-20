import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from './Login'
import { SignUp } from './SignUp'

const Public = () => {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
            </Switch>
        </Router>
    );
}

export { Public };