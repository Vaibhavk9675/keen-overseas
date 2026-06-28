const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 border border-[#E6ECF2] rounded-3xl p-8 transition-all duration-300 border border-transparent dark:border-slate-700 hover:shadow-2xl hover:border-slate-100 dark:hover:border-slate-800 ">

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#0B2E4A] dark:bg-[#C89B3C] flex items-center justify-center text-3xl text-white dark:text-[#0B2E4A] transition-all duration-300">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-black dark:text-white transition-colors duration-300]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;