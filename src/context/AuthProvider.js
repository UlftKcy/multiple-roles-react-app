import { createContext, useCallback, useEffect, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const { getItem } = useLocalStorage();

    const current_user = useCallback(() => {
        return getItem("user");
    }, [])

    useEffect(() => {
        if(current_user){
            setAuth(current_user)
        }
    }, [current_user])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;