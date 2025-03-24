import { FiCode, FiDatabase, FiTool, FiServer, FiCloud } from "react-icons/fi";

export function SkillsSection() {
  const skills = {
    programming: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "Bash"],
    backend: ["Node.js", "Angular", "Nest.js", "Django", "Flask", "MongoDB"],
    frontend: ["React.js", "Redux", "WebSockets", "REST APIs", "HTML/CSS"],
    dataEngineering: [
      "Kafka",
      "Databricks",
      "Airflow",
      "MLflow",
      "Apache Spark",
      "Azure Data Lake",
    ],
    cloudDevOps: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    monitoring: [
      "Redis",
      "ElasticSearch",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "FAISS",
    ],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-background dark:bg-background-dark"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-text dark:text-text-dark">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are the technologies and tools I work with across various
            domains.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiCode className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Programming Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-text dark:text-text-dark rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiServer className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Backend & Databases
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-text dark:text-text-dark rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiCode className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Frontend Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-text dark:text-text-dark rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiDatabase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Data Engineering
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.dataEngineering.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-text dark:text-text-dark rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiCloud className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Cloud & DevOps
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloudDevOps.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-text dark:text-text-dark rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiTool className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Monitoring & Machine Learning
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.monitoring.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-text dark:text-text-dark rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
