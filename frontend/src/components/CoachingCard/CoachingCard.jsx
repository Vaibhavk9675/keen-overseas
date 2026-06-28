const CoachingCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onLearnMore,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 border border-[#E6ECF2] dark:border-slate-700 rounded-3xl p-8 transition-all duration-300  hover:shadow-2xl hover:border-slate-100 dark:hover:border-slate-800">

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#0B2E4A]/10 dark:bg-[#C89B3C] text-[#0B2E4A]  dark:text-[#0B2E4A] flex items-center justify-center text-3xl transition-color duration-300">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white transition-color duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed transition-color duration-300">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={onLearnMore}
        className="mt-8 w-full bg-[#AB2330] dark:bg-[#C89B3C] hover:bg-[#941F2A] dark:hover:bg-yellow-500 cursor-pointer text-white dark:text-[#0B2E4A] font-semibold py-3 rounded-xl transition duration-300"
      >
        {buttonText}
      </button>

    </div>
  );
};

export default CoachingCard;