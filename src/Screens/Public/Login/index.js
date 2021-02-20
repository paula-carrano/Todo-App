import React from 'react';
import { Layout, Main, FormLogin } from '../../../components'

const Login = () => {
    return (
        <Layout hideHeader hideAside>
            <Main showAddButton>
                <FormLogin />
            </Main>
        </Layout>
    );
}

export { Login };
