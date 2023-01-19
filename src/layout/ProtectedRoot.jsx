import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoot = () => {
    let current_user = JSON.parse(localStorage.getItem("user"));

    if (!current_user) { return <Navigate to="/login" /> }
    return <Outlet />;
}

export default ProtectedRoot;