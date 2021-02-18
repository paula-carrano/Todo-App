import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddUserForm } from './AddUserForm'
import { ListUser } from './ListUser'

const Users = ({ match }) => {
    const { path } = match
    return (
        <Router>
            <Switch>
                <Route path={`${path}/add`} component={AddUserForm} />
                <Route path={`${path}/list`} component={ListUser} />
            </Switch>
        </Router>
    );
}

export { Users };