import React from 'react';
import "./style.css"

const Header = ({ title, showAddButton }) => {
    return (
        <header className='main-header'>
            <h1>{title}</h1>
            {!showAddButton && <button className='btn btn1'>Agregar</button>}
        </header>
    )
}

Header.defaultProps = {
    showAddButton: false
}
export { Header }
