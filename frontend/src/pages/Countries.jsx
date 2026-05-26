import { Link } from "react-router-dom";
import detailedCountriesData from "../data/detailedCountriesData";
import { motion } from "framer-motion";

const Countries = () => {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

          {/* <span className="text-yellow-400 uppercase tracking-wider font-semibold">
            Destinations
          </span> */}

          <h1 className="mt-5 text-5xl md:text-6xl font-bold">
            Explore Countries Worldwide
          </h1>

          <p className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover top international destinations offering education,
            immigration, PR opportunities, and career growth.
          </p>
        </div>
      </section>

      {/* Countries Showcase */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">

          {detailedCountriesData.map((country, index) => (
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >

              {/* Image */}
              <div className="group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={country.image}
                  alt={country.name}
                  className="h-[450px] w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>

                {/* <span className="text-yellow-500 uppercase tracking-wider font-semibold">
                  Destination {country.id}
                </span> */}

                <h2 className="mt-4 text-5xl font-bold text-slate-900">
                  {country.name}
                </h2>

                <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                  {country.description}
                </p>

                <Link
                  to="/contact"
                  className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

    </>
  );
};

export default Countries;