import { Link } from "react-router-dom";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div
      className="
        group
        bg-white
        rounded-3xl
        p-8
        border
        border-[#E6ECF2]
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      {/* Icon */}
      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-[#C89B3C]/10
          text-[#C89B3C]
          flex
          items-center
          justify-center
          text-3xl
          group-hover:bg-[#C89B3C]
          group-hover:text-white
          transition-all
          duration-300
        "
      >
        <Icon />
      </div>

      {/* Title */}
      <h3
        className="
          mt-6
          text-2xl
          font-bold
          text-[#0B2E4A]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          text-[#6B7A8C]
          leading-relaxed
        "
      >
        {description}
      </p>

      {/* Button */}
      <Link
        to="/contact"
        className="
          inline-flex
          items-center
          mt-6
          font-semibold
          text-[#AB2330]
          hover:text-[#0B2E4A]
          transition
        "
      >
        Learn More →
      </Link>

    </div>
  );
};

export default ServiceCard;