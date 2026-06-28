const CountryCard = ({
  name,
  image,
  description,
  buttonText,
  onLearnMore,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl h-[420px]">

      {/* Image */}
      <img
        src={image}
        alt={name}
        className=" w-full h-full object-cover group-hover:scale-110 transition duration-500"/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-8 text-white w-full">

        <h3 className="text-3xl font-bold">
          {name}
        </h3>

        <p className="mt-3 text-gray-200 leading-relaxed">
          {description}
        </p>

        <button
          onClick={onLearnMore}
          className=" mt-5 w-full bg-[#AB2330] dark:bg-[#C89B3C] cursor-pointer hover:bg-[#941F2A] dark:hover:bg-yellow-500 text-white dark:text-[#0B2E4A] font-semibold py-3 rounded-xl transition duration-300">
          {buttonText}
        </button>

      </div>

    </div>
  );
};

export default CountryCard;