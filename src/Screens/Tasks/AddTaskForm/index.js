import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../components'
import { api } from "../../../utils";


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
        if (!tareas.titulo.trim() || !tareas.fecha.trim() || !tareas.descripcion.trim() || !tareas.asignada.trim()) {
            setError("Revise los campos")
            return
        }
        api.post('/tasks.json', {
            titulo: tareas.titulo,
            fecha: tareas.fecha,
            descripcion: tareas.descripcion,
            asignada: tareas.asignada,
        })
            .then(redirectToList)
            .catch(error => {
                console.log(error)
            })

    }

    return (

        <Layout >
            <Main title="Agregar Tarea" showAddButton>
                <form className='form-agregar-tarea' onSubmit={enviarDatos}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name="titulo" className="form-control" id="titulo" placeholder="Título" onChange={(event) => handleInputChange(event)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" name="fecha" className="form-control" id="fecha" placeholder="" onChange={(event) => handleInputChange(event)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Descripción</label>
                        <textarea className="form-control" type='text' name='descripcion' id="textarea" rows="3" onChange={(event) => handleInputChange(event)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="asignado">Asignada a:</label>
                        <select className="form-control" id="asignado" name='asignada' onChange={(event) => handleInputChange(event)}>
                            <option value='Juan Altamirano' >Juan Altamirano</option>
                            <option value='Natalia Suarez'>Natalia Suarez</option>
                            <option value='Gala Lantier'>Gala Lantier</option>
                            <option value='Nicolas Weber'>Nicolas Weber</option>
                            <option value='Mariana Cadifi'>Mariana Cadifi</option>
                        </select>
                    </div>
                    <button className='btn btn-primary btn-agregar-tarea' type='submit'>Agregar</button>
                </form>
                {
                    error != null ? (
                        <div className="alert alert-danger mt-2" role="alert">{error} </div>
                    ) : (<div></div>)
                }
            </Main>
        </Layout>
    )
}

export { AddTaskForm };
