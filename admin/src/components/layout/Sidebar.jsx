import {
    FiGrid,
    FiUsers,
    FiBarChart2,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";

const menu = [
    { name: "Dashboard", icon: <FiGrid /> },
    { name: "Enquiries", icon: <FiUsers /> },
    { name: "Analytics", icon: <FiBarChart2 /> },
    { name: "Settings", icon: <FiSettings /> },
];

const Sidebar = () => {
    return (
        <aside className="w-72 bg-[#0B2E4A] text-white min-h-screen flex flex-col">

            <div className="p-8 border-b border-white/10">

                <h1 className="text-2xl font-bold">
                    Keen Overseas
                </h1>

                <p className="text-sm text-slate-300 mt-1">
                    Admin CRM
                </p>

            </div>

            <nav className="flex-1 p-5">

                {menu.map((item) => (
                    <button
                        key={item.name}
                        className="w-full flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-white/10 transition mb-2"
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                    </button>
                ))}

            </nav>

            <div className="p-5 border-t border-white/10">

                <button className="flex items-center gap-4 text-red-300 hover:text-white transition">

                    <FiLogOut />

                    Logout

                </button>

            </div>

        </aside>
    );
};

export default Sidebar;