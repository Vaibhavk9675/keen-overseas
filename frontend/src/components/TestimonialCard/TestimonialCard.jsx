const TestimonialCard = ({ name, country, review }) => {
  return (
    <div className="bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition duration-300">
      
      {/* Review */}
      <p className="text-slate-600 leading-relaxed">
        "{review}"
      </p>

      {/* User Info */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="text-yellow-500 font-medium text-sm mt-1">
          {country}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;