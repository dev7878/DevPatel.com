"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background dark:bg-background-dark z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-text dark:text-text-dark"
          >
            Dev Patel
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              className="ml-2 p-2 text-text dark:text-text-dark"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background dark:bg-background-dark">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="py-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="py-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#experience"
                className="py-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="py-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="py-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
