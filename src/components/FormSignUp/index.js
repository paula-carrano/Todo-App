import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const FormSignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-5'>
                    <div className='card-signup mt-5 shadow'>
                        <div className='card-header pt-4 pb-4 text-center bg-dark'>
                        </div>
                        <div className='card-body p-4'>
                            <div className='text-center w-75 m-auto'>
                                <h4 className='text-dark-50 text-center mt-0 font-weight-bold'>Registro gratuito</h4>
                                <p className='text-muted mb-4'>No posee una cuenta? Cree su cuenta, le tomará menos de un minuto.</p>
                            </div>
                            <form action="#">
                                <div className='form-group'>
                                    <label htmlFor='fullname'>Nombre completo</label>
                                    <input
                                        onChange={(e) => { setName(e.target.value) }}
                                        className='form-control'
                                        type='text' id='nombre-completo'
                                        required=''
                                        placeholder='Ingrese su nombre completo' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='emailaddress'>Correo electrónico</label>
                                    <input
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className='form-control'
                                        type='email'
                                        id='emailaddress'
                                        required=''
                                        placeholder='Ingrese su correo electrónico' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Contraseña</label>
                                    <input
                                        onChange={(e) => { setPass(e.target.value) }}
                                        type='password'
                                        id='password'
                                        className='form-control'
                                        placeholder='Ingrese su contraseña' />
                                </div>

                                <div className='form-group mb-3'>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input me-3'
                                            id='checkbox-signin' />
                                        <label className='custom-control-label' htmlFor='checkbox-signin'>Acepto términos y condiciones</label>
                                    </div>
                                </div>

                                <div className='form-group mb-0 text-center'>
                                    <button className='btn btn-primary' type='submit'>Registrarme</button>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 text-center">
                                        <p className="text-muted">Ya tiene su cuenta? <Link to='/login' className='text-muted ml-1'><b>Ingresar</b></Link></p>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { FormSignUp };
