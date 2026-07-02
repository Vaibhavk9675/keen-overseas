import { FiBell, FiSearch } from "react-icons/fi";

const Topbar = () => {
    return (
        <header className="h-20 bg-white border-b flex items-center justify-between px-8">

            <div className="relative">

                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                    type="text"
                    placeholder="Search..."
                    className="pl-12 pr-5 py-3 rounded-xl border border-slate-300 w-80 outline-none focus:border-[#C89B3C]"
                />

            </div>

            <div className="flex items-center gap-6">

                <button className="text-2xl text-slate-600">

                    <FiBell />

                </button>

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-[#C89B3C] flex items-center justify-center font-bold">

                        V

                    </div>

                    <div>

                        <h4 className="font-semibold">
                            Vaibhav
                        </h4>

                        <p className="text-xs text-slate-500">
                            Administrator
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
};

export default Topbar;