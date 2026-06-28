import { FaStar } from "react-icons/fa";

const TestimonialCard = ({
  visa,
  name,
  country,
  feedback,
  rating,
}) => {
  return (
    <div
      className="
      bg-white border border-[#E6ECF2] rounded-3xl overflow-hidden transition-all duration-300  hover:shadow-xl hover:border-slate-100 ">
      {/* Visa Image */}

      <div className="overflow-hidden">
        <img
          src={visa}
          alt={name}
          className=" w-full h-72 object-cover transition-transform duration-500 hover:scale-105" />
      </div>

      {/* Content */}

      <div className="p-7">

        {/* Rating */}

        <div className="flex justify-center gap-1 text-yellow-400 mb-5">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Feedback */}

        <p className="text-slate-600 italic leading-7 text-center">
          "{feedback}"
        </p>

        {/* Divider */}

        <div className="w-16 h-1 bg-[#C89B3C] rounded-full mx-auto my-6"></div>

        {/* Name */}

        <h3 className="text-xl font-bold text-[#0B2E4A] text-center">
          {name}
        </h3>

        {/* Country */}

        <p className="mt-2 text-center text-[#AB2330] font-medium">
          {country}
        </p>

      </div>
    </div>
  );
};

export default TestimonialCard;