import { FiCode, FiDatabase, FiTool, FiServer, FiCloud } from "react-icons/fi";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-background dark:bg-background-dark"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-text dark:text-text-dark">
            My Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            I specialize in full-stack development with expertise in machine
            learning deployment and cloud infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiCode className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Programming Languages
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Python</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    JavaScript
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    TypeScript
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">SQL</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Java</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Bash</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiServer className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Backend & Databases
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Node.js</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Angular</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Nest.js</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Django</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Flask</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">MongoDB</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiCode className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Frontend Technologies
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    React.js
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Redux</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    WebSockets
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    REST APIs
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    HTML/CSS
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[100%]"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiDatabase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Data Engineering
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Kafka</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    Databricks
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Airflow</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">MLflow</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    Apache Spark
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    Azure Data Lake
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[70%]"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiCloud className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Cloud & DevOps
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">AWS</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Azure</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">GCP</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[70%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Docker</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    Kubernetes
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    Terraform
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FiTool className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold ml-3 text-text dark:text-text-dark">
                  Monitoring & Machine Learning
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">Redis</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    ElasticSearch
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    TensorFlow
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">PyTorch</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">
                    LangChain
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-text dark:text-text-dark">FAISS</span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[70%]"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
