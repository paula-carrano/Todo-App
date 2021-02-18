import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../components'
import { TableUser } from '../TableUser'
import { UserApi } from './api'

const ListUser = () => {

    const history = useHistory();

    const redirectAddUserForm = () => {
        history.push("/users/add");
    }

    const [dataUser, setdataUser] = useState([])

    const setUsers = () => {
        UserApi.get()
            .then((response => {
                setdataUser(response);
                console.log(response)
            }))
    }

    useEffect(() => {
        setUsers()
    }, []);


    return (
        <Layout>
            <Main title="Usuarios" handleClick={redirectAddUserForm}>
                <div className="container">
                    <div className="row">
                        <TableUser dataUser={dataUser} />
                    </div>
                </div>
            </Main>
        </Layout>
    );
}

export { ListUser };
