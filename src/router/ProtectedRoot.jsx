import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import Unauthorized from "../pages/Unauthorized";

const ProtectedRoot = ({ allowRoles }) => {
    const { auth } = useAuth();

    if (!auth) { return <Navigate to="/login" /> }

    const userHasRole = auth && allowRoles?.find((role) => auth.role === role) ? true : false;


    return (

        userHasRole ? <Outlet /> : <Unauthorized />

    )
}

export default ProtectedRoot;