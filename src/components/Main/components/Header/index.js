import React from 'react';
import "./style.css"

const Header = ({ title, showAddButton, handleClick }) => {


    return (
        <header className='main-header bg bg-light'>
            <h1>{title}</h1>
            {!showAddButton && <button className='btn btn-primary btn1' onClick={handleClick}>Agregar</button>}
        </header>
    )
}

Header.defaultProps = {
    showAddButton: false
}
export { Header }
