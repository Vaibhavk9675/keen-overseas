import { HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const CourseModal = ({ course, onClose }) => {
    return (
        <AnimatePresence>
            {course && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">

                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        className=" relative bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide shadow-2xl" >

                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0B2E4A] to-[#163A59] px-8 py-6 border-b border-white/10">

                            <div className="flex justify-between items-start">

                                <div>
                                    <h2 className="text-3xl font-bold text-white">
                                        {course.title}
                                    </h2>

                                    <p className="text-white/80 mt-1">
                                        Your Pathway to Global Opportunities
                                    </p>
                                </div>

                                <button
                                    onClick={onClose}
                                    className=" w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/10 hover:rotate-90 cursor-pointer transition-all duration-300" >
                                    <HiX size={28} />
                                </button>

                            </div>

                        </div>

                        {/* Body */}
                        <div className="p-8 space-y-10">

                            {/* About */}
                            <section>
                                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                                    About
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {course.about}
                                </p>
                            </section>

                            {/* Exam Sections */}
                            <section>
                                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                                    Exam Sections
                                </h3>

                                <div className="flex flex-wrap gap-3">

                                    {course.sections.map((section, index) => (
                                        <span
                                            key={index}
                                            className="
                        bg-[#F6F8FB]
                        px-4
                        py-2
                        rounded-full
                        font-medium
                        text-slate-700
                      "
                                        >
                                            {section}
                                        </span>
                                    ))}

                                </div>
                            </section>

                            {/* Exam Pattern */}
                            <section>
                                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                                    Exam Pattern
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-4">

                                    {course.examPattern.map((item, index) => (
                                        <div
                                            key={index}
                                            className=" bg-[#F6F8FB] rounded-2xl p-4 text-slate-700" >
                                            {item}
                                        </div>
                                    ))}

                                </div>
                            </section>

                            {/* Scoring */}
                            <section>
                                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                                    Scoring System
                                </h3>

                                <div className="space-y-3">

                                    {course.scoring.map((score, index) => (
                                        <div
                                            key={index}
                                            className={` rounded-2xl p-4 ${score.includes("⭐")
                                                ? "bg-[#FFF3D6]"
                                                : "bg-[#F6F8FB]"}`} >
                                            {score}
                                        </div>
                                    ))}

                                </div>
                            </section>

                            {/* Accepted For */}
                            <section>
                                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-4">
                                    Accepted For
                                </h3>

                                <div className="flex flex-wrap gap-3">

                                    {course.acceptedFor.map((item, index) => (
                                        <span
                                            key={index}
                                            className=" bg-[#AB2330]/10 text-[#AB2330] px-4 py-2 rounded-full font-medium" >
                                            {item}
                                        </span>
                                    ))}

                                </div>
                            </section>

                            {/* Coaching Info */}
                            {/* <section className="bg-[#F6F8FB] rounded-3xl p-6">

                                <h3 className="text-2xl font-bold text-[#0B2E4A] mb-5">
                                    Need Professional Guidance?
                                </h3>

                                <div className="grid sm:grid-cols-3 gap-5 text-slate-700">

                                    <div>
                                        <span className="font-semibold block mb-1">
                                            Mode
                                        </span>

                                        {course.coachingInfo.mode}
                                    </div>

                                    <div>
                                        <span className="font-semibold block mb-1">
                                            Batch Timings
                                        </span>

                                        {course.coachingInfo.timing}
                                    </div>

                                    <div>
                                        <span className="font-semibold block mb-1">
                                            Fee
                                        </span>

                                        {course.coachingInfo.fee}
                                    </div>

                                </div>

                            </section> */}

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">

                                <button className=" flex-1 bg-[#AB2330] hover:bg-[#941F2A] cursor-pointer text-white font-semibold py-4 rounded-xl transition ">
                                    Book Free Consultation
                                </button>

                                <a
                                    href={`https://wa.me/919756604100?text=Hello Keen Overseas, I would like to know more about ${course.title}.`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className=" flex-1 border-2 border-[#0B2E4A] text-[#0B2E4A] hover:bg-[#0B2E4A] hover:text-white text-center font-semibold py-4 rounded-xl transition">
                                    WhatsApp Us
                                </a>

                            </div>

                        </div>

                    </motion.div>

                </div>
            )}
        </AnimatePresence>
    );
};

export default CourseModal;