const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white border border-[#E6ECF2] rounded-3xl p-8 transition-all duration-300  hover:shadow-2xl hover:border-slate-100">

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#0B2E4A] flex items-center justify-center text-3xl text-white transition-all duration-300">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-black transition-colors duration-300]">
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