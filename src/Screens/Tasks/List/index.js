import React, { useState, useEffect } from 'react';
import { Layout, Main } from '../../../components'
import { tasksApi } from './api'

const List = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        tasksApi.get().then((response => setLista(response)))
    }, []);



    return (
        <Layout>
            <Main title="Tareas">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='board'>
                                <div className="tasks">
                                    <a className="fs-5 text-decoration-none text-dark" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">TO DO ({lista.length})</a>
                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                        <div id="task-list-one" className="task-list-items">
                                            {lista.map((lista, i) => {
                                                return (
                                                    <div key={i} className="card mb-2">
                                                        <div className="card-header">
                                                            Tasks
                                                </div>
                                                        <div className="card-body p-3">
                                                            <h5 className="card-title mt-2 mb-2">Titulo: {lista.titulo}</h5>
                                                            <h6 className="float-right text-muted">Fecha: {lista.fecha}</h6>
                                                            <p className=" card-text mb-0 pr-2 text-nowrap mb-2 d-inline-block">Descripción: {lista.descripcion}</p>
                                                            <p className=" card-text align-middle"><b>Asignado: {lista.asignada}</b></p>
                                                        </div>
                                                    </div>)
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export { List };