import React from 'react';
import { Header } from '../../../components/Main/components'

const List = () => {
    const onclick = () => {
        return console.log("pepe");
    }
    return (
        <>
            <Header handleClick={onclick} title="Agregar tarea" />
        </>
    );
}

export { List };