import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Tasks } from '../Private/Tasks'
import { Users } from '../Private/Users'
import { Dashboard } from '../Private/Dashboard'
import { Profile } from '../Private/Profile'

const Private = () => {
    return (
        <Router>
            <Switch>
                <Route path="/profile" component={Profile} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/users" component={Users} />
                <Route path="/" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export { Private };
