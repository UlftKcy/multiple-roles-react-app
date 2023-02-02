import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Unauthorized from "../pages/main/Unauthorized";

const ProtectedRoot = ({ allowedRoles }) => {
    const { auth } = useAuth();

    const userHasRole = allowedRoles?.find((role) => role === auth?.role) ? true : false

    if (!auth) { return <Navigate to="/login" /> }

    if (userHasRole) {
        return <Outlet />
    } else {
        return <Unauthorized />
    }

}

export default ProtectedRoot;