import React, { useState } from 'react';

const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div>
            <div className="container">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-md-4">
                        <form className="form-group">
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="form-control"
                                placeholder="Introduce su email"
                                type="email"
                            />
                            <input
                                onChange={(e) => { setPass(e.target.value) }}
                                className="form-control mt-4"
                                placeholder="Introduce su contraseña"
                                type="password"
                            />
                            <input
                                className="btn btn-dark col-12 mt-4"
                                type="submit"
                                value="Registrar usuario"
                            />
                            <button className="btn btn-success col-12 mt-3">Inciar sesión</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { FormLogin };
