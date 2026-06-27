import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";

const contactData = {
    hero: {
        badge: "Contact Us",

        heading: "Let's Plan Your Study Abroad Journey",

        description:
            "Whether you're planning to study abroad, apply for a student visa, or prepare for IELTS/PTE, our experienced counselors are here to guide you every step of the way.",

        stats: [
            {
                number: "5000+",
                label: "Students Guided",
            },
            {
                number: "15+",
                label: "Partner Institutions",
            },
            {
                number: "7+",
                label: "Study Destinations",
            },
        ],
    },

    contactCards: [
        {
            icon: FaPhoneAlt,
            title: "Call Us",
            value: "+91 XXXXX XXXXX",
        },

        {
            icon: FaEnvelope,
            title: "Email Us",
            value: "info@keenoverseas.com",
        },

        {
            icon: FaMapMarkerAlt,
            title: "Visit Office",
            value: "Your Office Address",
        }
    ],

    countries: [
        "Canada",
        "Australia",
        "United Kingdom",
        "Germany",
        "Singapore",
        "Russia",
        "Mauritius",
    ],

    intakes: [
        "Spring Intake",
        "Summer Intake",
        "Fall Intake",
        "Winter Intake",
        "Not Sure Yet",
    ],

    goals: [
        "Study Abroad",
        "Student Visa",
        "IELTS Coaching",
        "PTE Coaching",
        "General Enquiry",
    ],

    trust: {
        heading: "Why Students Trust Keen Overseas",

        points: [
            "Experienced Immigration Experts",
            "Transparent Guidance",
            "Personalized Counseling",
            "High Visa Success Rate",
        ],
    },
};

export default contactData;