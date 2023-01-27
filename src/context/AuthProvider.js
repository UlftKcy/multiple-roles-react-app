import { createContext, useEffect, useState } from "react"
import { useQueryClient } from "react-query";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const queryClient = useQueryClient();

    useEffect(()=>{
        const current_user = JSON.parse(localStorage.getItem("user"));
        if(current_user){
            setAuth(current_user)
            queryClient.setQueryData('authUser', current_user)
        }
    },[queryClient])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;