import { useEffect, useState } from "react";
import api from "../services/api";

const useDashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            console.log("Base URL:", api.defaults.baseURL);

            const response = await api.get("/admin/dashboard");

            console.log("Request URL:", response.config.url);
            console.log("Full Config:", response.config);
            console.log("Response:", response);

            console.log("Axios Response:", response);
            console.log("Response Data:", response.data);

            setStats(response.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        stats,
        loading,
    };
};

export default useDashboard;