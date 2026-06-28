import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Navigation,
    Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testimonials from "../../data/testimonialsData";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const TestimonialsSection = () => {
    return (
        <section className="py-10 bg-slate-50 dark:bg-[#0B1220] transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Heading */}

                <div className="text-center mb-14">

                    <span className="text-yellow-500 uppercase tracking-widest font-semibold">
                        Success Stories
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2E4A] dark:text-white transition-colors duration-300">
                        Student Testimonials
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-slate-600 text-lg leading-8 dark:text-white transition-colors duration-300">
                        Every visa approval represents someone's dream becoming reality.
                        Here's what our students have to say about their journey with
                        Keen Overseas.
                    </p>

                </div>

                {/* Slider */}

                <Swiper
                    className="testimonial-slider"
                    modules={[Autoplay, Pagination]}

                    spaceBetween={30}

                    pagination={{
                        clickable: true,
                    }}

                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}

                    loop={true}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialCard {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default TestimonialsSection;