import { useEffect, useState } from "react"
import { firebaseAuth } from '../utils/firebase-config'

const useAuth = () => {

    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = (email, password) => {
        firebaseAuth.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user)
                setIsAuthenticated(true)
            })
    }

    const register = (email, password, nombreCompleto) => {
        firebaseAuth.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user)
                console.log(user)
                user.updateProfile({ displayName: nombreCompleto })
            })
    }

    const logout = () => {

    }

    useEffect(() => {
        console.log(user);
    }, [])
    return { login, register, logout, user, isAuthenticated }
}

export { useAuth }