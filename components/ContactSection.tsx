"use client";

import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
const initializeEmailJs = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Call the initialization function
initializeEmailJs();

// Service and template IDs - make sure these match your EmailJS configuration
const SERVICE_ID = "service_sib2czt"; // Your EmailJS service ID
const TEMPLATE_ID = "template_portfolio"; // Your main contact form template ID
const ACKNOWLEDGE_TEMPLATE_ID = "template_acknowledge"; // Your acknowledgment template ID

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      setError(
        "Contact form is not properly configured. Please email me directly."
      );
      setIsSubmitting(false);
      return;
    }

    // Send notification email to you
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current!)
      .then((result) => {
        console.log("Email to owner sent successfully:", result.text);

        // Send acknowledgment email to the sender
        // Prepare template parameters for acknowledgment email
        const acknowledgeParams = {
          to_name: formData.user_name,
          to_email: formData.user_email,
          message:
            "Thank you for contacting me. I've received your message and will get back to you soon.",
          from_name: "Dev Patel",
        };

        // Send acknowledgment email
        return emailjs.send(
          SERVICE_ID,
          ACKNOWLEDGE_TEMPLATE_ID,
          acknowledgeParams
        );
      })
      .then((result) => {
        console.log("Acknowledgment email sent successfully:", result?.text);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ user_name: "", user_email: "", message: "" });

        // Reset the submission message after a delay
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setIsSubmitting(false);
        setError(
          "Failed to send message. Please try again or email me directly."
        );
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-background dark:bg-background-dark"
    >
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
                  href="mailto:career.devpatel@gmail.com"
                  className="flex items-center text-text dark:text-text-dark hover:text-primary transition-colors"
                >
                  <FiMail className="w-5 h-5 mr-3" />
                  career.devpatel@gmail.com
                </a>
                <a
                  href="https://github.com/dev7878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text dark:text-text-dark hover:text-primary transition-colors"
                >
                  <FiGithub className="w-5 h-5 mr-3" />
                  github.com/dev7878
                </a>
                <a
                  href="https://www.linkedin.com/in/devpatel7878/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text dark:text-text-dark hover:text-primary transition-colors"
                >
                  <FiLinkedin className="w-5 h-5 mr-3" />
                  linkedin.com/in/devpatel7878
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-text dark:text-text-dark mb-1"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-text dark:text-text-dark mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text dark:text-text-dark mb-1"
                  >
                    Message <span className="text-red-500">*</span>
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
                    Thank you for your message! I will get back to you soon. An
                    acknowledgement has been sent to your email.
                  </div>
                )}

                {error && (
                  <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-md">
                    {error}
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
