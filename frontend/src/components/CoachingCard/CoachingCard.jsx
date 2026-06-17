const CoachingCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onLearnMore,
}) => {
  return (
    <div className="bg-white border border-[#E6ECF2] rounded-3xl p-8 transition-all duration-300  hover:shadow-2xl hover:border-slate-100">

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#0B2E4A]/10 text-[#0B2E4A] flex items-center justify-center text-3xl">
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

      {/* Button */}
      <button
        onClick={onLearnMore}
        className="mt-8 w-full bg-[#AB2330] hover:bg-[#941F2A] cursor-pointer text-white font-semibold py-3 rounded-xl transition duration-300"
      >
        {buttonText}
      </button>

    </div>
  );
};

export default CoachingCard;