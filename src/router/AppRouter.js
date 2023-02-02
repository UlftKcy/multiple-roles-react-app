import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./Root";
import ProtectedRoute from "./ProtectedRoot";
import Login from "../pages/auth/Login";
import Layout from "../layout/Layout";
import { Fragment, lazy, Suspense } from "react";
import Dashboard from "../pages/main/Dashboard";
import ErrorPage from "../pages/main/ErrorPage";
import Loader from "../pages/main/Loader";

const Register = lazy(() => import("../pages/auth/Register"));
const StockManagementSystemIndex = lazy(() => import("../pages/main/stock-management-system/StockManagementSystemIndex"));
const CostTrackingSystemIndex = lazy(() => import("../pages/main/cost-tracking-system/CostTrackingSystemIndex"));
const PersonnelTrackingSystemIndex = lazy(() => import("../pages/main/personnel-tracking-system/PersonnelTrackingSystemIndex"));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Fragment>
            <Route element={<Root />} errorElement={<ErrorPage />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Suspense fallback={<Loader />}><Register /> </Suspense>} />
            </Route>
            <Route element={<Layout />} errorElement={<ErrorPage />}>
                <Route path="/" element={<ProtectedRoute allowedRoles={["admin", "super_user", "standart_user"]} />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/stock-management-system" element={<ProtectedRoute allowedRoles={["admin", "super_user", "standart_user"]} />}>
                    <Route index element={<Suspense fallback={<Loader />}><StockManagementSystemIndex /></Suspense>} />
                </Route>
                <Route path="/cost-tracking-system" element={<ProtectedRoute allowedRoles={["admin", "super_user", "standart_user"]} />}>
                    <Route index element={<Suspense fallback={<Loader />}><CostTrackingSystemIndex /></Suspense>} />
                </Route>
                <Route path="/personnel-tracking-system" element={<ProtectedRoute allowedRoles={["admin", "super_user"]} />}>
                    <Route index element={<Suspense fallback={<Loader />}><PersonnelTrackingSystemIndex /></Suspense>} />
                </Route>
            </Route>
        </Fragment >
    )
)