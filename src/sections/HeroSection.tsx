import { Github, Linkedin, Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import { ContactButton } from "../components/Buttons";

export default function HeroSection() {
  const navLinks = ["About", "Experience", "Projects", "Contact"];

  const { scrollY } = useScroll();
  const parallaxX = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-x-clip px-6 pb-7 sm:px-10 sm:pb-8 md:pb-10">
      {/* Navbar */}
      <FadeIn as="nav" y={-20} className="flex w-full items-center justify-between pt-6 md:pt-8">
        <div className="flex w-full items-center justify-between">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="relative z-0 mt-12 flex flex-1 flex-col justify-center sm:mt-16 md:mt-20">
        <div className="overflow-hidden">
          <FadeIn y={40} delay={0.15}>
            <motion.div style={{ x: parallaxX }} className="flex whitespace-nowrap">
              <motion.div
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="flex"
              >
                <h1 className="hero-heading px-4 text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
                  Hi, i&apos;m gaurav &bull;
                </h1>
                <h1 className="hero-heading px-4 text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
                  Hi, i&apos;m gaurav &bull;
                </h1>
              </motion.div>
              <motion.div
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="flex"
              >
                <h1 className="hero-heading px-4 text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
                  Hi, i&apos;m gaurav &bull;
                </h1>
                <h1 className="hero-heading px-4 text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
                  Hi, i&apos;m gaurav &bull;
                </h1>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 top-[60%] z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[350px] sm:translate-y-0 md:w-[420px] lg:w-[500px]">
        <FadeIn y={30} delay={0.6}>
          <Magnet padding={150} strength={3}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Gaurav Portrait"
              className="w-full object-contain"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex w-full items-end justify-between">
        <FadeIn y={20} delay={0.35} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <div className="flex flex-col gap-2">
            <Terminal size={18} className="text-[#B600A8]/80" />
            <p
              className="text-left font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              a software developer driven by crafting high-performance and user-centric applications
            </p>
          </div>
        </FadeIn>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <FadeIn y={20} delay={0.45} className="flex gap-4">
             <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#D7E2EA]/50 transition-colors hover:text-[#D7E2EA]">
               <Github size={24} />
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#D7E2EA]/50 transition-colors hover:text-[#D7E2EA]">
               <Linkedin size={24} />
             </a>
          </FadeIn>
          <FadeIn y={20} delay={0.5}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
