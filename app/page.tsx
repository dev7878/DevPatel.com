import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm bg-background dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Dev Patel. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
