import { Link } from "react-router-dom";

const CountryCard = ({ name, image, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl h-[420px]">

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-8 text-white">

        <h3 className="text-3xl font-bold">
          {name}
        </h3>

        <p className="mt-3 text-gray-200 leading-relaxed">
          {description}
        </p>

        {/* <button className="mt-5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-xl transition duration-300">
          Explore
        </button> */}

        <Link
          to="/countries" 
          className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-xl transition duration-300">
          Explore
        </Link>

      </div>
    </div>
  );
};

export default CountryCard;