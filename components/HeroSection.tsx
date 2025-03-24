import { FiArrowDown } from "react-icons/fi";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex items-center justify-center min-h-screen pt-16 pb-16 bg-background dark:bg-background-dark"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text dark:text-text-dark">
            <span className="block">Hello, I&apos;m Dev Patel</span>
            <span className="block text-primary mt-2">Software Engineer</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Building elegant solutions to complex problems with clean, efficient
            code.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary rounded-md transition-colors text-text dark:text-text-dark"
            >
              View My Work
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <a href="#about" aria-label="Scroll Down">
              <FiArrowDown className="mx-auto w-6 h-6 text-text dark:text-text-dark" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
