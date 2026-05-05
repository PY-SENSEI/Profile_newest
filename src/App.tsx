import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Simple Footer */}
      <footer className="flex flex-col gap-6 border-t border-[#D7E2EA]/10 py-16 text-center text-sm uppercase tracking-widest text-[#D7E2EA]/40">
        <div className="flex justify-center gap-8">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#D7E2EA]">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#D7E2EA]">
            <Linkedin size={20} />
          </a>
          <a href="mailto:gauravjena48@gmail.com" className="transition-colors hover:text-[#D7E2EA]">
            <Mail size={20} />
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span>&copy; {new Date().getFullYear()} Gaurav &bull; Software Developer Portfolio</span>
          <a href="mailto:gauravjena48@gmail.com" className="lowercase tracking-normal transition-colors hover:text-[#D7E2EA]">
            gauravjena48@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
