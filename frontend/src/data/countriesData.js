import canadaImg from "../assets/images/canadaFlag.png";
import australiaImg from "../assets/images/ausFlag.jpg";
import ukImg from "../assets/images/ukFlag.jpg";
import germanyImg from "../assets/images/gerFlag.jpg";
import usaImg from "../assets/images/usaFlag.jpg";
import singaporeImg from "../assets/images/sgpFlag.jpg";
import cyprusImg from "../assets/images/cypFlag.jpg";
import franceImg from "../assets/images/frFlag.jpg";

const countriesData = [
  {
    id: 1,
    name: "Canada",
    image: canadaImg,
    description:
      "Top destination for study, PR, and work opportunities.",

    why:
      "Canada offers world-class education, multicultural exposure, and excellent post-study opportunities.",

    courses: [
      "Business",
      "IT & Computer Science",
      "Healthcare",
      "Engineering",
    ],

    intakes: ["January", "May", "September"],

    work: [
      "Part-time work during studies",
      "Post-Graduation Work Permit (PGWP)",
    ],

    universities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Alberta",
    ],

    cities: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Calgary",
    ],
  },

  {
    id: 2,
    name: "Australia",
    image: australiaImg,
    description:
      "Globally recognized universities and excellent lifestyle.",

    why:
      "Australia provides globally respected qualifications and strong graduate opportunities.",

    courses: [
      "Nursing",
      "Engineering",
      "Hospitality",
      "Information Technology",
    ],

    intakes: ["February", "July", "November"],

    work: [
      "Part-time work rights",
      "Graduate Visa pathways",
    ],

    universities: [
      "University of Melbourne",
      "Monash University",
      "University of Sydney",
      "Australian National University",
    ],

    cities: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
    ],
  },

  {
    id: 3,
    name: "United Kingdom",
    image: ukImg,
    description:
      "High-quality education and strong career pathways.",

    why:
      "The UK offers prestigious universities and shorter degree durations.",

    courses: [
      "Business",
      "Law",
      "Engineering",
      "Data Science",
    ],

    intakes: ["January", "September"],

    work: [
      "Graduate Route Visa",
      "Part-time work opportunities",
    ],

    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University of Manchester",
    ],

    cities: [
      "London",
      "Manchester",
      "Birmingham",
      "Edinburgh",
    ],
  },

  {
    id: 4,
    name: "Germany",
    image: germanyImg,
    description:
      "Affordable education and growing job opportunities.",

    why:
      "Germany is known for affordable education and a strong engineering sector.",

    courses: [
      "Engineering",
      "Automotive",
      "Business",
      "Computer Science",
    ],

    intakes: ["March", "September"],

    work: [
      "Student work opportunities",
      "Post-study work options",
    ],

    universities: [
      "Technical University of Munich",
      "Heidelberg University",
      "LMU Munich",
      "RWTH Aachen",
    ],

    cities: [
      "Berlin",
      "Munich",
      "Frankfurt",
      "Hamburg",
    ],
  },

  {
    id: 5,
    name: "United States",
    image: usaImg,
    description:
      "Home to some of the world's leading universities.",

    why:
      "The USA offers unmatched academic flexibility and innovation.",

    courses: [
      "Business",
      "Computer Science",
      "Engineering",
      "Medicine",
    ],

    intakes: ["Fall", "Spring"],

    work: [
      "On-campus work",
      "OPT opportunities",
    ],

    universities: [
      "Harvard University",
      "Stanford University",
      "MIT",
      "UC Berkeley",
    ],

    cities: [
      "New York",
      "Boston",
      "Los Angeles",
      "Chicago",
    ],
  },

  {
    id: 6,
    name: "Singapore",
    image: singaporeImg,
    description:
      "Asia's education hub with excellent career prospects.",

    why:
      "Singapore combines quality education with strong industry exposure.",

    courses: [
      "Business",
      "Hospitality",
      "Finance",
      "IT",
    ],

    intakes: ["January", "August"],

    work: [
      "Industry exposure",
      "Global networking opportunities",
    ],

    universities: [
      "National University of Singapore",
      "Nanyang Technological University",
      "Singapore Management University",
      "SETI Institute",
    ],

    cities: ["Singapore"],
  },

  {
    id: 7,
    name: "Cyprus",
    image: cyprusImg,
    description:
      "Affordable European education with growing popularity.",

    why:
      "Cyprus offers quality education with affordable living costs.",

    courses: [
      "Business",
      "Tourism",
      "Hospitality",
      "Computer Science",
    ],

    intakes: ["February", "September"],

    work: [
      "Part-time opportunities",
      "International exposure",
    ],

    universities: [
      "University of Cyprus",
      "European University Cyprus",
      "Cyprus International University",
      "Internapa College",
    ],

    cities: [
      "Nicosia",
      "Limassol",
      "Larnaca",
    ],
  },

  {
    id: 8,
    name: "France",
    image: franceImg,
    description:
      "Experience top-ranked universities, affordable education, and a vibrant student life in France.",

    why:
      "France is home to globally recognized universities and business schools, offering high-quality education, strong industry connections, and access to the European job market.",

    courses: [
      "Business & Management",
      "Fashion Design",
      "Hospitality & Tourism",
      "Engineering",
      "Computer Science",
      "International Relations",
    ],

    intakes: [
      "January",
      "September",
    ],

    work: [
      "Part-time work opportunities during studies",
      "Post-study work visa options",
    ],

    universities: [
      "Sorbonne University",
      "ESSEC Business School",
      "École Polytechnique",
      "University of Paris-Saclay",
    ],

    cities: [
      "Paris",
      "Lyon",
      "Marseille",
      "Lille",
    ],
  }
];

export default countriesData;