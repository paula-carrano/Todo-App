import React from 'react';
import { Switch, Route } from "react-router-dom";
import { AddUserForm } from './AddUserForm'
import { ListUser } from './ListUser'
import { UpdateUserForm } from './UpdateUserForm'

const Users = () => {

    return (

        <Switch>
            <Route path='/users/add' component={AddUserForm} />
            <Route path='/users/list' component={ListUser} />
            <Route path='/users/update/:id' component={UpdateUserForm} />
        </Switch>

    );
}

export { Users };