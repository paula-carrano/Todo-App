import { AuthContext } from 'contexts/AuthProvider';
import React, { useContext } from 'react';
import { Layout, Main } from 'components';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <Layout>
            <Main showAddButton title={`Bienvenido ${user.displayName}`}>
                <div className="bg bg-light ">
                    <p className="fs-5">En esta app  podrás realizar <span className="fw-bolder">altas, modificaciones y eliminación </span> de tareas o usuarios </p>
                    <h6>Se utilizó para el proyecto:</h6>
                    <ul>
                        <li> React</li>
                        <li> React Router Dom</li>
                        <li> Boostrap v5.0</li>
                        <li> Boostrap Icon</li>
                    </ul>
                </div>
            </Main>
        </Layout>
    );
}

export { Dashboard };
