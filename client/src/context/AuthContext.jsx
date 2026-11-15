import { createContext, useContext, useState } from "react";
import { STORAGE_KEYS } from "../constants";

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem(STORAGE_KEYS.TOKEN)))
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)))

    const login = (tokenData, userData) => {
        localStorage.setItem(STORAGE_KEYS.TOKEN, JSON.stringify(tokenData))
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData))
        setToken(tokenData)
        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem(STORAGE_KEYS.TOKEN)
        localStorage.removeItem(STORAGE_KEYS.USER)

        setToken(null)
        setUser(null)
    }

    const isLogin = Boolean(token && user)

    return (
        <AuthContext.Provider 
        value={{
            token,
            user,
            login,
            logout,
            isLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}


export {
    AuthContextProvider,
    useAuth,
}