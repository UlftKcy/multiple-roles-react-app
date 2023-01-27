import { createContext, useEffect, useState } from "react"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    useEffect(()=>{
        const current_user = JSON.parse(localStorage.getItem("user"));
        if(current_user){
            setAuth(current_user)
        }
    },[])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;