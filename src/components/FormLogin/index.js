import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-5'>
                    <div className='card-login mt-5 shadow'>
                        <div className='card-header pt-4 pb-4 text-center bg-dark'>
                        </div>
                        <div className='card-body p-4'>
                            <div className='text-center w-75 m-auto'>
                                <h4 className='text-dark-50 text-center mt-0 font-weight-bold'>Ingresar</h4>
                                <p className='text-muted mb-4'>Ingrese su correo electrónico y contraseña para acceder al panel de administración.</p>
                            </div>

                            <form action="#">

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
                                        <input type='checkbox' className='custom-control-input me-3' id='checkbox-signin' />
                                        <label className='custom-control-label' htmlFor='checkbox-signin'>Recordarme</label>
                                    </div>
                                </div>

                                <div className='form-group mb-0 text-center'>
                                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-12 text-center'>
                                        <p className='text-muted'>No tiene una cuenta? <Link to='/signup' className='text-muted ml-1'><b>Registrarse</b></Link ></p>
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

export { FormLogin };
