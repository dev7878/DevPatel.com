"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This would be replaced with actual form submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset the submission message after a delay
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-text dark:text-text-dark">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions, want to
            collaborate, or just say hello!
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-text dark:text-text-dark">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I am currently open to freelance opportunities, contract work,
                and full-time positions. Let&apos;s connect and discuss how we
                can work together!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:john.doe@example.com"
                  className="flex items-center text-text dark:text-text-dark hover:text-primary transition-colors"
                >
                  <FiMail className="w-5 h-5 mr-3" />
                  john.doe@example.com
                </a>
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text dark:text-text-dark hover:text-primary transition-colors"
                >
                  <FiGithub className="w-5 h-5 mr-3" />
                  github.com/johndoe
                </a>
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text dark:text-text-dark hover:text-primary transition-colors"
                >
                  <FiLinkedin className="w-5 h-5 mr-3" />
                  linkedin.com/in/johndoe
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text dark:text-text-dark mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text dark:text-text-dark mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text dark:text-text-dark mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors w-full md:w-auto disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {submitted && (
                  <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
                    Thank you for your message! I will get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
