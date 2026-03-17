import baseProjects from "./projects.js";
import { mottos as baseMottos } from "./intro.js";

const sharedLinks = {
  ownerName: "Cedrus Dang",
  GitHubURL: "https://github.com/cedrusdang",
  LinkedInURL: "https://www.linkedin.com/in/cedrusdang/",
  email: "cedrusdang@gmail.com",
};

const defaultProjectOrder = [
  // Analysing first
  "Queensland Traffic Accidents Analysis (2001-2021)",
  "Queensland Traffic Accidents Analysis (2001–2021)",
  "Classification and Clustering of Low Birth Weight Mortality",
  // DE next
  "Data Warehouse Project: Australian Road Fatality 2024",
  "Graph Database Project: Australian Road Fatality 2024",
  // DS then
  "Time Series Forecasting: Western Australian Temperature (GRU + VAE)",
  "Image Classification with CNNs and MobileNetV3Small",
  // AIE last
  "Explainable Natural Language Query Interface for Relational Databases (Multi-Agent System)",
  "NovelForger - AI Agent Novelist",
  "Smart Livestock Tracking System - IoT",
  "Little Lemon Restaurant - UX Design Principles and React Front-End Application",
];

const defaultProjects = defaultProjectOrder
  .map((title) => baseProjects.find((project) => project.title === title))
  .filter(Boolean);

const dataScienceProjectOrder = [
  // AI app + IoT first
  "Explainable Natural Language Query Interface for Relational Databases (Multi-Agent System)",
  "Smart Livestock Tracking System - IoT",
  "Little Lemon Restaurant - UX Design Principles and React Front-End Application",
  "NovelForger - AI Agent Novelist",
  // DS projects
  "Time Series Forecasting: Western Australian Temperature (GRU + VAE)",
  "Image Classification with CNNs and MobileNetV3Small",
  "Classification and Clustering of Low Birth Weight Mortality",
  // DE projects
  "Data Warehouse Project: Australian Road Fatality 2024",
  "Graph Database Project: Australian Road Fatality 2024",
  // DA projects
  "Queensland Traffic Accidents Analysis (2001-2021)",
  "Queensland Traffic Accidents Analysis (2001–2021)",
];

const dataScienceProjects = dataScienceProjectOrder
  .map((title) => baseProjects.find((project) => project.title === title))
  .filter(Boolean);

export const defaultProfile = {
  ...sharedLinks,
  topbarIntro: "A Data Analyst Portfolio",
  pageTitle: "Cedrus Dang | Data Analyst Portfolio",
  leftBoxIntro:
    "Data Analyst | Business & Systems Analysis | Analytics & Automation",
  skillSets: [
    {
      category: "SQL & Data Management",
      skills: "SQL|PostgreSQL|MySQL|ETL|Data Modelling|Data Warehousing",
    },
    {
      category: "Data Processing & Automation",
      skills: "Python|Bash/Shell|Pandas|NumPy|REST APIs|GitHub",
    },
    {
      category: "Reporting & Visualisation",
      skills: "Power BI|Tableau|Excel",
    },
    {
      category: "Data Analysis",
      skills:
        "Data Validation|Data Cleaning|Exploratory Analysis|Operational Reporting",
    },
    {
      category: "Business & Operations Analysis",
      skills:
        "Process Optimisation|Logistics & Supply Chain Analysis|Cost Analysis|Systems Analysis",
    },
    {
      category: "Advanced Analytics",
      skills: "Statistical Modelling|Machine Learning|NLP|Bayesian Methods",
    },
  ],
  mottos: baseMottos,
  projects: defaultProjects,
};

export const dataScienceProfile = {
  ...sharedLinks,
  topbarIntro: "A Data Scientist and AI Engineer Porfolio",
  pageTitle: "A Data Scientist and AI Engineer Porfolio",
  leftBoxIntro: "Data Scientist and AI Engineer",
  skillSets: [
    {
      category: "Data Science & AI",
      skills:
        "Machine Learning|Deep Learning|NLP|Computer Vision|AI Agents|Scikit-learn|TensorFlow|PyTorch",
    },
    {
      category: "LLM & GenAI",
      skills: "OpenAI API|Hugging Face Transformers|LangChain|RAG",
    },
    {
      category: "Data Engineering",
      skills:
        "ETL pipelines|data warehousing|data modelling|PostgreSQL|MySQL|Neo4j",
    },
    {
      category: "Data Processing",
      skills: "Pandas|NumPy",
    },
    {
      category: "Backend & Systems",
      skills: "REST APIs|FastAPI|Django|Flask|Docker|system integration",
    },
    {
      category: "Analytics & Visualisation",
      skills: "Power BI|Tableau|Excel (advanced)",
    },
    {
      category: "Cloud & Tools",
      skills: "AWS|Git|GitHub",
    },
  ],
  mottos: baseMottos,
  projects: dataScienceProjects,
};

export function getProfileByPath(pathname = "/") {
  if (pathname.toLowerCase().startsWith("/datascience")) {
    return dataScienceProfile;
  }
  return defaultProfile;
}
