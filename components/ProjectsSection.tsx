import { FiGithub, FiExternalLink } from "react-icons/fi";

export function ProjectsSection() {
  const projects = [
    {
      title: "Stock Price Prediction MLOps Project",
      description:
        "A comprehensive MLOps project for stock price prediction using multiple machine learning models (LSTM, XGBoost, LightGBM) with data ingestion, model deployment, and monitoring capabilities.",
      image: "/images/stock-prediction.webp",
      technologies: [
        "Python",
        "MLflow",
        "FastAPI",
        "Streamlit",
        "DVC",
        "LSTM",
        "XGBoost",
        "LightGBM",
      ],
      github: "https://github.com/dev7878/Stock-Price-Prediction-MLOps-Project",
      demo: "https://stock-prediction-demo.example.com",
    },
    {
      title: "Fin-Bot Finance News Research Tool",
      description:
        "An LLM-powered document retrieval system that uses LangChain, FAISS, and OpenAI for efficient semantic search of financial news articles, allowing users to query and analyze financial information through natural language.",
      image: "/images/finbot.jpg",
      technologies: [
        "Python",
        "LangChain",
        "FAISS",
        "OpenAI",
        "Streamlit",
        "Vector Embeddings",
      ],
      github: "https://github.com/dev7878/Fin-Bot-Finance-News-Research-Tool",
      demo: "https://finbot-demo.example.com",
    },
    {
      title: "Cloud Native Resource Monitoring App",
      description:
        "A scalable Python application deployed on AWS EKS for monitoring CPU and memory usage across cloud resources, featuring real-time metrics, threshold-based alerts, and an interactive dashboard.",
      image: "/images/cloud-monitoring.jpg",
      technologies: [
        "Python",
        "AWS EKS",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana",
      ],
      github: "https://github.com/dev7878/cloud-native-monitoring-app",
      demo: "https://cloud-monitor-demo.example.com",
    },
    {
      title: "AI LOGINSIGHT - Security Log Analyzer",
      description:
        "A security-focused log analysis tool designed to help administrators monitor and understand security logs from various systems. Uses structured generation techniques to summarize logs and detect potential security threats effectively.",
      image: "/images/loginsight.jpg",
      technologies: [
        "Python",
        "LLMs",
        "Outlines",
        "Schema-based Generation",
        "JSON Structured Output",
        "Security Analytics",
      ],
      github: "https://github.com/dev7878/AI-loginsight",
      demo: "https://loginsight-demo.example.com",
    },
    {
      title: "Stock Trading Application",
      description:
        "A full-stack TypeScript application for stock market trading with portfolio management, real-time market data, and personalized investment strategies, featuring secure user authentication and transaction history.",
      image: "/images/stock-trading.jpg",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
      ],
      github: "https://github.com/dev7878/stock-trading-platform",
      demo: "https://stock-trading-demo.example.com",
    },
    {
      title: "Student Performance Indicator",
      description:
        "A data science project that analyzes factors affecting student test scores and builds predictive models. Features exploratory data analysis, multiple regression algorithms (XGBoost, CatBoost), feature importance analysis, and visualization dashboards.",
      image: "/images/student-performance.jpg",
      technologies: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "CatBoost",
        "Pandas",
        "Data Visualization",
      ],
      github: "https://github.com/dev7878/Student-Learner---ML",
      demo: "https://student-performance-demo.example.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-background dark:bg-background-dark"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-text dark:text-text-dark">
            My Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Check out my
            GitHub for more.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-56 bg-gray-300 dark:bg-gray-700 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-text dark:text-text-dark">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-primary/10 dark:bg-primary/20 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-text dark:text-text-dark hover:text-primary transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-text dark:text-text-dark hover:text-primary transition-colors"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/dev7878"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors"
            >
              <FiGithub className="mr-2" />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
