import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const Root = () => {
    let current_user = JSON.parse(localStorage.getItem("user"));
    if (current_user) { return <Navigate to="/" /> }

    return <Outlet />;
}

export default Root;