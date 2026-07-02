import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

const AdminLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-slate-100">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Topbar />

                <main className="flex-1 p-8">

                    {children}

                </main>

            </div>

        </div>
    );
};

export default AdminLayout;