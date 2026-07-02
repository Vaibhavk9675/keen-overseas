import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import AdminLayout from "../layouts/AdminLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AdminLayout>
                        <Dashboard />
                    </AdminLayout>
                }
            />
        </Routes>
    );
};

export default AppRoutes;