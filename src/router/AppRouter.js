import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./Root";
import ProtectedRoute from "./ProtectedRoot";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Layout from "../layout/Layout";
import { Fragment } from "react";
import Dashboard from "../pages/main/Dashboard";
import StockManagementSystemIndex from "../pages/main/stock-management-system/StockManagementSystemIndex";
import CostTrackingSystemIndex from "../pages/main/cost-tracking-system/CostTrackingSystemIndex";
import PersonnelTrackingSystemIndex from "../pages/main/personnel-tracking-system/PersonnelTrackingSystemIndex";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Fragment>
            <Route element={<Root />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<Layout />}>
                <Route path="/" element={<ProtectedRoute allowedRoles={["admin", "super_user", "standart_user"]} />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/stock-management-system" element={<ProtectedRoute allowedRoles={["admin", "super_user", "standart_user"]} />}>
                    <Route index element={<StockManagementSystemIndex />} />
                </Route>
                <Route path="/cost-tracking-system" element={<ProtectedRoute allowedRoles={["admin", "super_user", "standart_user"]} />}>
                    <Route index element={<CostTrackingSystemIndex />} />
                </Route>
                <Route path="/personnel-tracking-system" element={<ProtectedRoute allowedRoles={["admin", "super_user"]} />}>
                    <Route index element={<PersonnelTrackingSystemIndex />} />
                </Route>
            </Route>
        </Fragment>
    )
)