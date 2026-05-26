import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-slate-100">

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-500 text-3xl">
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
      <Link 
      to="/services" className="mt-6 text-yellow-600 font-semibold hover:text-yellow-500 transition">
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;