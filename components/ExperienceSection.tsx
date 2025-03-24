import { FiBriefcase } from "react-icons/fi";

export function ExperienceSection() {
  const experiences = [
    {
      company: "RBC Investor Services",
      position: "Data Engineer Co-op",
      period: "Jan 2025 - Present",
      description:
        "Introduced and developed a real-time notification engine using Flask and WebSockets, enabling fund accounting alerts where no infrastructure previously existed. Built a bulk download pipeline with Apache Airflow and Databricks. Developed a Kafka-based event-driven system using Node.js and TypeScript, improving API latency by 40%. Wrote unit tests using Jest and integration tests, achieving 85% test coverage.",
      technologies: [
        "Flask",
        "WebSockets",
        "Apache Airflow",
        "Databricks",
        "Kafka",
        "Node.js",
        "TypeScript",
        "Jest",
      ],
    },
    {
      company: "Toronto Stock Exchange (TMX Group)",
      position: "Network (software) Engineer Co-op",
      period: "May 2024 - Aug 2024",
      description:
        "Migrated legacy Bash scripts to Ansible Tower, automating reporting workflows and eliminating 6+ hours of manual work per week. Developed a Flask-based network diagnostic tool enabling 20+ engineers to execute tests, reducing verification time from 30 minutes to 5 minutes. Built API-based data exporters to aggregate syslog data using Prometheus, Splunk, and Elasticsearch.",
      technologies: [
        "Ansible",
        "Flask",
        "Prometheus",
        "Splunk",
        "Elasticsearch",
        "Python",
        "Bash",
      ],
    },
    {
      company: "Savi Finance",
      position: "Cloud Software Engineer Co-op",
      period: "Jan 2024 - May 2024",
      description:
        "Developed and deployed cloud-native microservices using AWS Lambda, S3, and DynamoDB. Designed a secrets management system with HashiCorp Vault, securing API keys across AWS and Kubernetes (EKS), improving security posture by 25%. Automated CI/CD pipelines using Terraform, GitHub Actions, and Ansible, reducing deployment setup time by 40%.",
      technologies: [
        "AWS Lambda",
        "S3",
        "DynamoDB",
        "HashiCorp Vault",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
      ],
    },
    {
      company: "SignAgent Inc",
      position: "Full Stack Developer Co-op",
      period: "Sep 2023 - Dec 2023",
      description:
        "Implemented role-based authentication in Django, improving system security by restricting unauthorized access. Integrated Stripe API for payments, increasing transaction processing speed by 33% and ensuring redundant payment failover for reliability.",
      technologies: [
        "Django",
        "Stripe API",
        "Python",
        "JavaScript",
        "Authentication",
      ],
    },
    {
      company: "Brandon Consulting",
      position: "Software Developer Co-op",
      period: "May 2023 - Sep 2023",
      description:
        "Developed a job posting web app using React, Flask, and MongoDB, implementing lazy loading and pagination to handle large datasets, increasing user engagement by 50%. Optimized React UI components for efficient state management. Built RESTful APIs with Flask for job search and filtering, integrating rate-limiting and logging.",
      technologies: [
        "React",
        "Flask",
        "MongoDB",
        "RESTful APIs",
        "UI Optimization",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-text dark:text-text-dark">
            Work Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            My professional journey in software engineering, cloud, and data.
          </p>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-2">
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-3 top-6 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                  <FiBriefcase className="h-3 w-3 text-white" />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-text dark:text-text-dark">
                      {exp.position}
                    </h3>
                    <span className="text-sm font-medium bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-text dark:text-text-dark rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
