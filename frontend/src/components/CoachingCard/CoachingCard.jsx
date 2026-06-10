const CoachingCard = ({
  icon: Icon,
  title,
  description,
  features,
  buttonText,
}) => {
  return (
    <div className="group bg-white border border-[#E6ECF2] rounded-3xl p-8 transition-all duration-300  hover:shadow-2xl hover:border-slate-100">

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#0B2E4A] flex items-center justify-center text-3xl text-white transition-all duration-300 group-hover:text-white">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-[#0B2E4A] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-600 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-slate-700"
          >
            <span className="mr-3 text-[#C89B3C]">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="mt-8 bg-[#AB2330] hover:bg-[#921E29] text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
        {buttonText}
      </button>

    </div>
  );
};

export default CoachingCard;