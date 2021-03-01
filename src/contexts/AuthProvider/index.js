import React, { useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        //provee datos - comparte el estado con la app
        // value siempre recibe un objeto como dato, generalmente es un useState
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, AuthContext }