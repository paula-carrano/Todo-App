import React from 'react';
import "./style.css"

const Header = ({ handleClick, title }) => {
    return (
        <header className="main-header">
            <h1>{title} </h1>
            <button type="button" className="btn btn-info" onClick={handleClick}>Agregar</button>
        </header>
    );
}

export { Header };
