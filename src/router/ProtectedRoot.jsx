import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const ProtectedRoot = () => {
    const { auth } = useAuth();

    if (!auth) { return <Navigate to="/login" /> }

    return <Outlet /> 
}

export default ProtectedRoot;