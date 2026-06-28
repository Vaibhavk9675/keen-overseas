import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
    return (
        <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">

            <div className="max-w-2xl mx-auto text-center">

                {/* Error Code */}
                <h1 className="text-8xl md:text-9xl font-black text-[#AB2330]">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-6 text-3xl md:text-4xl font-bold text-[#0B2E4A]">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-5 text-slate-600 text-lg leading-8">
                    The page you're looking for doesn't exist, may have been moved,
                    or the link is incorrect.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-[#0B2E4A] hover:bg-[#143C5A] text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
                    >
                        <FaHome />
                        Back to Home
                    </Link>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center border-2 border-[#C89B3C] text-[#C89B3C] hover:bg-[#C89B3C] hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
                    >
                        Contact Us
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default NotFound;