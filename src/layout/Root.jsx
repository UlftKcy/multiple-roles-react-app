import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Root = () => {
    let { current_user } = useAuth();
    if (current_user) { return <Navigate to="/" /> }

    return <Outlet />;
}

export default Root;