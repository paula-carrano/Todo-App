import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'
import { TableUser } from '../../../../components/TableUser'
import { api } from '../../../../utils'
import { UserApi } from './api'

const ListUser = () => {

    //REDIRECCIONO EL BTN
    const history = useHistory();

    const redirectAddUserForm = () => {
        history.push("/users/add");
    }

    const [dataUser, setdataUser] = useState([])

    // OBTENGO DATOS
    const setUsers = () => {
        UserApi.get()
            .then((response => {
                setdataUser(response);
            }))
    }

    useEffect(() => {
        setUsers()
    }, []);

    //BTN DELETE
    const deleteUser = async (id) => {
        try {
            await api.delete(`/users/${id}.json`)
            setUsers()
        } catch (e) {
            console.log(e);
        }
    }

    //BTN EDIT 
    const editUser = (id) => {
        console.log(id)
    }

    return (
        <Layout>
            <Main title="Usuarios" handleClick={redirectAddUserForm}>
                <div className="container">
                    <div className="row">
                        <TableUser dataUser={dataUser} handleClickDelete={deleteUser} handleClickEdit={editUser} />
                    </div>
                </div>
            </Main>
        </Layout>
    );
}

export { ListUser };
