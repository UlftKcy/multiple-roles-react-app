import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./Root";
import ProtectedRoute from "./ProtectedRoot";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Layout from "../layout/Layout";
import { Fragment } from "react";
import Dashboard from "../pages/main/Dashboard";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Fragment>
            <Route element={<Root />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/admin" element={<ProtectedRoute allowRoles={["admin"]} />}>
                </Route>
                <Route path="/standart-user" element={<ProtectedRoute allowRoles={["standart_user"]} />}>
                </Route>
                <Route path="/super-user" element={<ProtectedRoute allowRoles={["super_user"]} />}>
                </Route>
            </Route>
        </Fragment>
    )
)