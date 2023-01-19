import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import ProtectedRoot from "../layout/ProtectedRoot";
import Root from "../layout/Root";
import Dashboard from "../pages/main/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { Fragment } from "react";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Fragment>
            <Route element={<Root />}>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Route>
            <Route path="/" element={<ProtectedRoot />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Fragment>
    )
);