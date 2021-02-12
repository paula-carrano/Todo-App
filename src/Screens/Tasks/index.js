import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddTaskForm } from './AddTaskForm'
import { List } from './List'

const Tasks = ({ match }) => {
    const { path } = match
    return (
        <Router>
            <Switch>
                <Route path={`${path}/add`} component={AddTaskForm} />
                <Route path={`${path}/list`} component={List} />
            </Switch>
        </Router>
    );
}

export { Tasks };
