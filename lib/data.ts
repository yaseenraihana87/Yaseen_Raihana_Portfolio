// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// Edit this file to personalize the entire portfolio. Every section reads
// from here — you should rarely need to touch component files directly.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Yaseen Raihana S",
  role: "AI & ML Engineering Student",
  tagline: "Computer Science (AI & ML) · Full-Stack Development · Machine Learning",
  shortIntro:
    "Computer Science Engineering (AI & ML) student building full-stack applications and applying machine learning, computer vision, and deep learning to real-world problems. Experienced in end-to-end ML pipelines, REST APIs, and model evaluation.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "yaseenraihana87@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/yaseenraihana87",
    linkedin: "https://www.linkedin.com/in/yaseen-raihana-ml-enthusiast",
    leetcode: "https://leetcode.com/u/Yaseen-raihana-S/",
    hackerrank: "https://www.hackerrank.com/profile/yaseenraihana87"
  },
  seo: {
    title: "Yaseen Raihana S — AI & ML Engineering Student",
    description:
      "Computer Science Engineering (AI & ML) student skilled in Java, Python, Spring Boot, React, and SQL. Building full-stack applications and machine learning / computer vision projects.",
    url: "https://yaseenraihana.dev",
    keywords: [
      "Yaseen Raihana",
      "AI ML Student",
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "Full-Stack Developer",
      "Java",
      "Python",
      "Spring Boot",
      "React",
      "Portfolio"
    ]
  }
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export const typingWords = [
  "AI & ML Student",
  "Full-Stack Developer",
  "Computer Vision Enthusiast",
  "Machine Learning Engineer"
];

// ── ABOUT ───────────────────────────────────────────────────────────────

export const about = {
  intro:
    "I'm a Computer Science Engineering student specializing in AI & Machine Learning, with a strong foundation in Java, Python, Spring Boot, React, SQL, and Data Structures. I enjoy building full-stack applications and applying machine learning, computer vision, and deep learning techniques to solve real-world problems.",
  objective:
    "I'm looking to grow as an AI/ML-integrated software engineer — building end-to-end ML pipelines, REST APIs, and full-stack systems, and developing a strong problem-solving mindset along the way.",
  interests: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Exploratory Data Analysis",
    "Model Evaluation",
    "Full-Stack Development"
  ],
  timeline: [
    {
      year: "2023 — 2027",
      title: "B.E., Computer Science Engineering (AI & ML)",
      org: "Sri Krishna College of Technology, Coimbatore",
      description: "Currently pursuing, CGPA 7.98/10."
    },
    {
      year: "2 Months",
      title: "AI/ML Intern",
      org: "Skill Forge",
      description:
        "Hands-on internship in Python, AI, and ML — cleaned and preprocessed datasets with Pandas and NumPy, and built and evaluated machine learning models under mentor guidance."
    }
  ]
};

// ── SKILLS ───────────────────────────────────────────────────────────────

export type SkillCategory = { title: string; icon: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "Python", "C++", "JavaScript"]
  },
  {
    title: "Frameworks & Libraries",
    icon: "Layers",
    skills: [
      "Spring Boot",
      "React",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Scikit-learn",
      "Pandas",
      "NumPy"
    ]
  },
  {
    title: "Web Technologies",
    icon: "Globe",
    skills: ["HTML", "CSS", "REST APIs", "Streamlit"]
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "SQL", "DBMS"]
  },
  {
    title: "Developer Tools & Cloud",
    icon: "Wrench",
    skills: ["Git", "GitHub", "AWS (Basic)"]
  },
  {
    title: "Core Concepts",
    icon: "Brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "EDA",
      "Model Evaluation",
      "Data Structures",
      "OOP",
      "Problem Solving"
    ]
  }
];

// ── PROJECTS ─────────────────────────────────────────────────────────────

export type ProjectStatus = "Completed" | "In Progress";
export type ProjectCategory = "Computer Vision" | "Deep Learning" | "Full-Stack";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  image: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  results: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
};

export const projects: Project[] = [
  {
  slug: "fruitscan",
  title: "FruitScan – AI-Based Fruit Freshness Detection",
  category: "Computer Vision",
  status: "Completed",
  image: "/projects/fruitscan.svg",
  description:
    "An AI-powered computer vision application that classifies fruits as Fresh or Rotten using TensorFlow, MobileNetV2, OpenCV, and Streamlit.",
  problem:
    "Manual fruit freshness inspection is time-consuming and subjective. FruitScan provides fast, consistent, and AI-driven freshness classification using deep learning.",
  features: [
    "Built an end-to-end deep learning pipeline with image preprocessing, data augmentation, model training, evaluation, and deployment.",
    "Implemented MobileNetV2 transfer learning to classify fresh and rotten apples, bananas, and oranges.",
    "Supports both image upload and real-time webcam prediction using OpenCV with confidence scores.",
    "Integrated LIME Explainable AI (XAI) to visualize the regions influencing model predictions.",
    "Evaluated model performance using accuracy, precision, recall, F1-score, confusion matrix, and classification report."
  ],
  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "MobileNetV2",
    "OpenCV",
    "Streamlit",
    "LIME"
  ],
  results:
    "Successfully trained a MobileNetV2-based classifier and deployed it as an interactive Streamlit application supporting real-time inference and explainable AI visualizations.",
  githubUrl: "https://github.com/yaseenraihana87/Fruit-Freshness-Detection_2.0"
},
  {
    slug: "diabetic-retinopathy-detection",
    title: "Diabetic Retinopathy Detection using Deep Learning",
    category: "Deep Learning",
    status: "Completed",
    image: "/projects/retinopathy.svg",
    description:
      "A multi-class classification model using transfer learning on InceptionV3 to detect five stages of diabetic retinopathy from retinal fundus images.",
    problem:
      "Diabetic retinopathy screening relies on specialist review of fundus images — a trained classifier can help triage severity stages faster.",
    features: [
      "Multi-class classification across 5 stages: No_DR, Mild, Moderate, Severe, Proliferative_DR",
      "End-to-end image preprocessing pipeline using OpenCV and PIL, including normalization and augmentation",
      "Transfer learning and fine-tuning on the InceptionV3 architecture with TensorFlow/Keras",
      "Interactive Streamlit interface for uploading fundus images and viewing real-time predictions with confidence percentages"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "InceptionV3", "OpenCV", "Scikit-learn", "Streamlit"],
    results:
      "Delivers per-class confidence percentages for each of the 5 severity stages through the Streamlit interface.",
    githubUrl: "https://github.com/yaseenraihana87/diabetic-retinopathy-detection"
  },
  {
    slug: "event-management-web-app",
    title: "Event Management Web Application",
    category: "Full-Stack",
    status: "Completed",
    image: "/projects/event-management.svg",
    description:
      "A full-stack event management system with complete CRUD functionality, built with React and Spring Boot.",
    problem:
      "Organizing events by hand across spreadsheets and messages makes it hard to track creation, updates, and browsing in one place.",
    features: [
      "Dynamic, component-based React front-end for creating, browsing, and managing events",
      "RESTful backend built with Spring Boot",
      "SQL database integration for persistent, structured data storage",
      "Full CRUD functionality across the stack"
    ],
    technologies: ["React", "Spring Boot", "SQL"],
    results:
      "A complete full-stack CRUD application connecting a React front-end to a Spring Boot REST API and SQL database."
  }
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Computer Vision",
  "Deep Learning",
  "Full-Stack"
];

// ── EXPERIENCE ───────────────────────────────────────────────────────────

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI/ML Intern",
    company: "Skill Forge",
    period: "2 Months",
    responsibilities: [
      "Completed a hands-on internship in Python, Artificial Intelligence, and Machine Learning",
      "Worked with Pandas and NumPy to clean, preprocess, and analyze datasets for machine learning tasks",
      "Built and evaluated machine learning models under mentor guidance"
    ],
    achievements: [
      "Gained exposure to the end-to-end machine learning workflow, from data preparation to model evaluation"
    ]
  }
];

// ── CERTIFICATIONS ───────────────────────────────────────────────────────

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  logo: string;
};

export const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    credentialUrl: "https://drive.google.com/file/d/1X9AygxnhCJen9SL1IKh1bkRjDkb0Tis9/view?usp=sharing",
    logo: "Cloud"
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Infosys",
    credentialUrl: "https://drive.google.com/file/d/1tnf3lU34i_S74wCAgkVkHy4RocOQMZz6/view?usp=sharing",
    logo: "BadgeCheck"
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    credentialUrl: "https://drive.google.com/file/d/1WHId0PxdX6Sd9Agr0N08YxIh87_1myV4/view?usp=sharing",
    logo: "Cloud"
  },
  {
    title: "Data Analytics",
    issuer: "Maiyyam",
    logo: "BarChart3"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    credentialUrl: "https://drive.google.com/file/d/1whiWn3dQwyVFv-nJnu85HhtnWF544o29/view?usp=sharing",
    logo: "GraduationCap"
  }
];

// ── GITHUB ────────────────────────────────────────────────────────────

export const githubStats = {
  username: "yaseenraihana87",
  pinnedRepos: [
    {
      name: "diabetic-retinopathy-detection",
      description: "Deep learning classifier for diabetic retinopathy severity using InceptionV3.",
      url: "https://github.com/yaseenraihana87/diabetic-retinopathy-detection"
    },
    {
  name: "Fruit-Freshness-Detection_2.0",
  description: "AI-powered fruit freshness detection using TensorFlow, MobileNetV2, OpenCV, and Streamlit with real-time image upload and webcam prediction.",
  url: "https://github.com/yaseenraihana87/Fruit-Freshness-Detection_2.0"
}
  ]
};

// ── CONTACT ──────────────────────────────────────────────────────────────

export const contactInfo = {
  heading: "Let's build something intelligent together",
  subheading:
    "Open to internships, collaborative projects, and conversations about AI, ML, and full-stack development."
};
