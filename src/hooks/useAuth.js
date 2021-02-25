import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { firebaseAuth } from '../utils/firebase-config'


const useAuth = () => {

    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authMsgError, setAuthMsgError] = useState(null)


    const history = useHistory()


    const login = (email, password) => {
        firebaseAuth.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user)
                setIsAuthenticated(true)
                localStorage.setItem('userToken', user.refreshToken)
                history.go(0)
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                    case "auth/wrong-password": setAuthMsgError('La contraseña es incorrecta o el usuario no está registrado')
                        break
                }
            })
    }

    const register = (email, password, nombreCompleto) => {

        firebaseAuth.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setUser(user)
                user.updateProfile({ displayName: nombreCompleto })
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                }
            })
    }

    const logout = () => {
        firebaseAuth.auth().signOut()
            .then(() => {
                alert('te has deslogueado exitosamente')
            }).catch((error) => {
                console.error(error)
            });

    }

    useEffect(() => {
        const token = localStorage.getItem('userToken');

        console.log(token)
        if (token && token !== '') {
            setIsAuthenticated(true)
        }
    }, []);

    return { login, register, logout, user, isAuthenticated, authMsgError }
}

export { useAuth }