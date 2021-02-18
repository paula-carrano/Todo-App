import React from 'react';
import { Layout, Main } from '../../components'
import { FormLogin } from './FormLogin'

const Login = () => {
    return (
        <Layout hideHeader hideAside>
            <Main showAddButton>
                <h2 className="text-center">Sign In</h2>
                <p className="text-center">Enter your email address and password to access admin panel.</p>
                <FormLogin />
            </Main>
        </Layout>
    );
}

export { Login };
