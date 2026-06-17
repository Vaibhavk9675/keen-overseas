import { FaGraduationCap, FaMicrophone } from "react-icons/fa";

const coachingData = [
  {
    id: 1,
    icon: FaGraduationCap,
    title: "IELTS Coaching",

    about:
      "IELTS is one of the world's most recognized English proficiency examinations accepted by universities, and immigration authorities worldwide.",

    sections: ["Listening", "Reading", "Writing", "Speaking"],

    examPattern: [
      "Listening – 30 Minutes",
      "Reading – 60 Minutes",
      "Writing – 60 Minutes",
      "Speaking – 11–14 Minutes",
    ],

    scoring: [
      "9.0 – Expert User",
      "8.0 – Very Good User",
      "⭐ 6.5–7.0 – Common university requirement",
      "6.0 – Competent User",
    ],

    acceptedFor: [
      "Study Abroad",
      "Work Visas",
      "Permanent Residency",
    ],
  },

  {
    id: 2,
    icon: FaMicrophone,
    title: "PTE Coaching",

    about:
      "PTE Academic is a computer-based English proficiency exam accepted globally by universities and immigration authorities.",

    sections: [
      "Speaking & Writing",
      "Reading",
      "Listening",
    ],

    examPattern: [
      "Speaking & Writing – 54–67 Minutes",
      "Reading – 29–30 Minutes",
      "Listening – 30–43 Minutes",
    ],

    scoring: [
      "86–90 – Excellent",
      "76–85 – Very Good",
      "⭐ 59–65 – Common requirement",
      "43–58 – Developing",
    ],

    acceptedFor: [
      "Universities",
      "Student Visas",
      "Migration",
    ],
  },
];

export default coachingData;