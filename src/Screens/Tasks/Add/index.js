import React, { useState } from 'react';
import { Layout, Main } from '../../../components'


const Add = () => {
    const [title, setTitle] = useState();

    return (

        <Layout >
            <Main title="Agregar Tarea" showAddButton>
                <form onSubmit="">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label className="fw-bold" for="titulo">Título</label>
                                <input type="text" name="titulo" className="form-control border" id="titulo" placeholder="Título" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="fw-bold" for="fecha">Fecha</label>
                                <input type="date" name="fecha" className="form-control border" id="fecha" placeholder="" value="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="fw-bold" for="asignado">Asignado</label>
                                <select className="form-control border" id="asignado">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="form-group">
                                <label className="fw-bold" for="textarea">Descripción</label>
                                <textarea className="form-control border" id="textarea" rows="3" value=""></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-info mt-2">Agregar</button>

                    </div>
                </form>
            </Main>
        </Layout>

    )
}

export { Add };
