import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const ProtectedRoot = () => {
    let { current_user } = useAuth();

    if (!current_user) { return <Navigate to="/login" /> }
    return <Outlet />;
}

export default ProtectedRoot;