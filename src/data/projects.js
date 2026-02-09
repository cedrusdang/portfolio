const projects = [
  // ===== DA / BI / Analytics (top) =====
  {
    title: "Data Warehouse Project: Australian Road Fatality 2024",
    image: `${process.env.PUBLIC_URL}/projectImages/datawarehouse.png`,
    description:
      "Designed and implemented a scalable data warehouse to analyse Australian road fatality data using Kimball’s dimensional modelling. Integrated crash records and population statistics into a Star Schema to support multidimensional analysis. Built a centralised OLAP cube for complex analytical queries, developed Power BI dashboards for interactive visualisation, and applied association rule mining to identify behavioural patterns across road user types.",
    techStack:
      "PostgreSQL | Dimensional Modelling (Kimball) | Star Schema | ETL | OLAP | Power BI | Python | Association Rule Mining",
    githubURL: "https://github.com/cedrusdang/DataWarehouse_project",
  },
  {
    title: "Graph Database Project: Australian Road Fatality 2024",
    image: `${process.env.PUBLIC_URL}/projectImages/graphwarehouse.png`,
    description:
      "Implemented a graph-based analytical pipeline using Neo4j to analyse Australian road crash fatalities in 2024. Designed a property graph schema (aligned to dimensional concepts), built a Python ETL pipeline for ingestion, and performed relationship loading and querying using Cypher. Produced a technical report with schema visuals and graph analytics outputs.",
    techStack: "Neo4j | Property Graph Modelling | Python | ETL | Cypher | Graph Analytics",
    githubURL: "https://github.com/cedrusdang/graph-db-query",
  },
  {
    title: "Queensland Traffic Accidents Analysis (2001–2021)",
    image: `${process.env.PUBLIC_URL}/projectImages/datastorytelling.png`,
    description:
      "Analysed 20 years of Queensland traffic accident data to identify long-term trends and behavioural drivers. Built Tableau Prep flows for cleaning and integration, created Tableau dashboards for trend exploration and data storytelling, and highlighted a potential underreporting issue in fatigue-related incidents. Translated findings into actionable safety insights.",
    techStack: "Tableau | Tableau Prep | Data Cleaning | Dashboarding | Data Storytelling",
    githubURL: "https://github.com/cedrusdang/DataStoryTelling",
  },
  {
    title: "Classification and Clustering of Low Birth Weight Mortality",
    image: `${process.env.PUBLIC_URL}/projectImages/cdaproject.png`,
    description:
      "Conducted analysis and modelling on global health and economic data (World Bank) focused on low birth weight mortality. Completed EDA, built and validated classification models (Decision Tree, Naive Bayes), applied Recursive Feature Elimination (RFE) and 10-fold cross-validation, and used hierarchical clustering to surface socioeconomic risk patterns. Delivered results via an interactive Shiny app.",
    techStack: "R | Shiny | EDA | Feature Selection (RFE) | Classification | Clustering | Cross-Validation",
    githubURL: "https://github.com/cedrusdang/CDA_Project",
  },
  {
    title: "Smart Livestock Tracking System - IoT",
    image: `${process.env.PUBLIC_URL}/projectImages/iotproject.png`,
    description:
      "Designed and developed an IoT-based livestock tracking system using GPS, LoRaWAN, and AWS cloud services to improve farm security and operational monitoring. Integrated geofencing for real-time alerts, optimised device battery performance (up to 50 days) with ~99% outdoor GPS accuracy, and validated stable communication up to ~1 km in typical field conditions.",
    techStack: "IoT | GPS | LoRaWAN | AWS IoT Core | MQTT | Python | Geofencing | Embedded Systems",
    githubURL: "https://github.com/cedrusdang/IoT_UWA_Project_G22",
  },

  // ===== DS / AI (bottom) =====
  {
    title: "Time Series Forecasting: Western Australian Temperature (GRU + VAE)",
    image: `${process.env.PUBLIC_URL}/projectImages/dl_temp.png`,
    description:
      "Applied deep learning methods to Western Australian temperature data. Built GRU-based recurrent models to forecast future monthly temperatures and evaluated prediction accuracy across multiple forecast horizons. Trained a Variational Autoencoder (VAE) to generate realistic synthetic temperature sequences and assessed the model’s ability to reproduce seasonal and long-term temperature patterns.",
    techStack: "Python | Deep Learning | GRU | VAE | Time Series Forecasting",
    githubURL: "https://github.com/cedrusdang/Cedrus_Dang_DL_UWA",
  },
  {
    title: "Explainable Natural Language Query Interface for Relational Databases (Multi-Agent System)",
    image: `${process.env.PUBLIC_URL}/projectImages/nl2sql.png`,
    description:
      "Developed a natural language interface enabling SQL querying without requiring users to write SQL. Designed a coordinated multi-agent reasoning pipeline for intent parsing, schema selection, and SQL generation. Implemented retrieval-augmented schema understanding to adapt across diverse relational databases and added step-by-step transparency to explain how each query was interpreted and formed. Built a full-stack app (Next.js + Django REST), containerised with Docker, and evaluated on benchmark datasets and real-world scenarios.",
    techStack: "Python | SQL | LangChain | Multi-Agent LLMs | RAG | Next.js | Django | Docker",
    githubURL: "https://github.com/cedrusdang/explainable-nl-query-db-agents",
  },
  {
    title: "NovelForger - AI Agent Novelist",
    image: `${process.env.PUBLIC_URL}/projectImages/novelforger.png`,
    description:
      "Built an open-source AI novel-writing agent using Gemini + LangGraph. Implemented multi-stage generation with revision loops, rubric-based QA, multilingual support (English/Vietnamese), and Markdown export for structured long-form content.",
    techStack: "Gemini API | LangGraph | LangChain | Python | Jupyter",
    githubURL: "https://github.com/cedrusdang/NovelForger",
  },
  {
    title: "Image Classification with CNNs and MobileNetV3Small",
    image: `${process.env.PUBLIC_URL}/projectImages/dl_cnn.png`,
    description:
      "Implemented and optimised CNN-based image classification models. Used data augmentation, dropout, learning rate scheduling, and batch normalisation to improve generalisation, and compared architectures to evaluate robustness and performance trade-offs.",
    techStack: "Python | CNN | Deep Learning | Computer Vision",
    githubURL: "https://github.com/cedrusdang/Cedrus_Dang_DL_UWA",
  },
  {
    title: "Little Lemon Restaurant - UX Design Principles and React Front-End Application",
    image: `${process.env.PUBLIC_URL}/projectImages/littlelemon.png`,
    description:
      "Translated Figma UX/UI designs into a working React application, implementing booking validation, reservation management logic, and responsive layouts. Focused on form handling, state management, user interaction flow, and aligning front-end behaviour with system and user requirements — reflecting ICT Business Analysis and front-end system implementation.",
    techStack:
      "React | JavaScript | HTML | CSS | Figma | State Management | Form Validation | UX/UI Interpretation",
    githubURL: "https://github.com/cedrusdang/portfoliofe",
  },
];

export default projects;
