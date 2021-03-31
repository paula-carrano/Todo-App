import React from 'react';
import { Switch, Route } from "react-router-dom";
import { AddTaskForm } from './AddTaskForm'
import { List } from './List'

const Tasks = () => {

    return (

        <Switch>
            <Route path='/tasks/add' component={AddTaskForm} />
            <Route path='/tasks/list' component={List} />
        </Switch>

    );
}

export { Tasks };
