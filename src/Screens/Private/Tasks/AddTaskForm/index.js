import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from 'components'
import './add.css'
import { api } from 'utils'


const AddTaskForm = () => {
    let history = useHistory();

    const [tareas, setTareas] = useState({
        titulo: '',
        fecha: '',
        descripcion: '',
        asignada: '',
    })

    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setTareas({
            ...tareas,
            [event.target.name]: event.target.value
        })
    }

    const redirectToList = () => {
        history.push("/tasks/list")
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        //console.log('enviando datos...' + tareas.titulo + ' ' + tareas.fecha)
        //console.log(tareas.descripcion);
        if (!tareas.titulo.trim() || !tareas.fecha.trim() || !tareas.descripcion.trim() || !tareas.asignada.trim()) {
            setError("Revise los campos")
            return
        }

        api.post('/tasks.json', {
            titulo: tareas.titulo,
            fecha: tareas.fecha,
            descripcion: tareas.descripcion,
            asignada: tareas.asignada,
            estado: 'pendiente',
        })
            .then(redirectToList)
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Layout >
            <Main title="Agregar Tarea" showAddButton>
                <div className='container d-flex flex-column'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <form className='form-agregar-tarea px-2 mt-4 bg bg-light shadow-sm' onSubmit={enviarDatos}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="titulo"><b>Título</b></label>
                                            <input type="text" name="titulo" className="form-control" id="titulo" placeholder="Título" onChange={(event) => handleInputChange(event)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="fecha"><b>Fecha</b></label>
                                            <input type="date" name="fecha" className="form-control" id="fecha" placeholder="Seleccione una fecha" onChange={(event) => handleInputChange(event)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="textarea"><b>Descripción</b></label>
                                            <textarea className="form-control" type='text' name='descripcion' id="textarea" rows="3" onChange={(event) => handleInputChange(event)}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="asignada"><b>Asignada a:</b></label>
                                            <select className="form-control" id="asignada" name='asignada' onChange={(event) => handleInputChange(event)}>
                                                <option value='Juan Altamirano' >Juan Altamirano</option>
                                                <option value='Natalia Suarez'>Natalia Suarez</option>
                                                <option value='Gala Lantier'>Gala Lantier</option>
                                                <option value='Nicolas Weber'>Nicolas Weber</option>
                                                <option value='Mariana Cadifi'>Mariana Cadifi</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    {
                                        error && (
                                            <div className="alert alert-danger" role="alert">{error} </div>
                                        )
                                    }
                                    <button className='btn btn-primary mb-3' type='submit'>Agregar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </Main>
        </Layout>

    )
}

export { AddTaskForm }