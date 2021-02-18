import React from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons'

const TableUser = ({ dataUser }) => {

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo electónico</th>
                        <th scope="col">Contraseña</th>
                        <th colspan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataUser.map(({ nombre, apellido, email, password }) => {
                        return (
                            <tr className="text-center">
                                <td>{nombre}</td>
                                <td>{apellido} </td>
                                <td>{email} </td>
                                <td>{password} </td>
                                <td><button className="btn btn-info"><PencilFill /></button></td>
                                <td><button className="btn btn-danger"><TrashFill /></button></td>
                            </tr>
                        )
                    }
                    )}

                </tbody>
            </table>
        </div>
    );
}

export { TableUser };
