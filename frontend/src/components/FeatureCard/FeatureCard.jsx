const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-8 transition duration-300 hover:shadow-xl">
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-500 flex items-center justify-center text-3xl">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;