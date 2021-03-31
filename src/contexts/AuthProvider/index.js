import React, { useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, AuthContext }