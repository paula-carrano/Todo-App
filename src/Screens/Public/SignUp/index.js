import React from 'react';
import { Layout, Main, FormSignUp } from '../../../components'


const SignUp = () => {
    return (
        <Layout hideHeader hideAside>
            <Main showAddButton>
                <FormSignUp />
            </Main>
        </Layout>
    );
}

export { SignUp };
