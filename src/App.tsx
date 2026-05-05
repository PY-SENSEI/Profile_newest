import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";

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
      <footer className="flex flex-col gap-2 border-t border-[#D7E2EA]/10 py-10 text-center text-sm uppercase tracking-widest text-[#D7E2EA]/40">
        <span>&copy; {new Date().getFullYear()} Gaurav &bull; Software Developer Portfolio</span>
        <a href="mailto:gauravjena48@gmail.com" className="lowercase tracking-normal transition-colors hover:text-[#D7E2EA]">
          gauravjena48@gmail.com
        </a>
      </footer>
    </main>
  );
}
