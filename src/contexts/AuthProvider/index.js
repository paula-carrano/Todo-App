import React, { useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})


    return (
        //provee datos - comparte el estado con la app
        // value siempre recibe un objeto como dato, generalmente es un useState
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, AuthContext }