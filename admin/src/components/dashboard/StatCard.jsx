const StatCard = ({ title, value, color }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200 hover:shadow-lg transition">

            <p className="text-slate-500 text-sm">
                {title}
            </p>

            <h2 className={`text-4xl font-bold mt-3 ${color}`}>
                {value}
            </h2>

        </div>
    );
};

export default StatCard;