import { Navigate, Outlet } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const Root = () => {
    const { auth } = useAuth();
    
    if (auth) { return <Navigate to="/" /> }

    return <Outlet />;
}

export default Root;