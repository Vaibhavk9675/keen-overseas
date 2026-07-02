import StatCard from "../../components/dashboard/StatCard";
import useDashboard from "../../hooks/useDashboard";

const Dashboard = () => {

    const { stats, loading } = useDashboard();

    console.log("Stats:", stats);

    if (loading || !stats) {
        return <h2>Loading...</h2>;
    }

    return (

        <>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">

                <StatCard title="Total" value={stats.totalEnquiries} color="text-[#0B2E4A]" />

                <StatCard title="Pending" value={stats.pending} color="text-yellow-500" />

                <StatCard title="Contacted" value={stats.contacted} color="text-blue-500" />

                <StatCard title="Follow Up" value={stats.followUp} color="text-orange-500" />

                <StatCard title="Converted" value={stats.converted} color="text-green-500" />

                <StatCard title="Closed" value={stats.closed} color="text-red-500" />

            </div>

        </>

    );
};

export default Dashboard;