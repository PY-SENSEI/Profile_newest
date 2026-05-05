import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, ReactNode } from "react";
import FadeIn from "../components/FadeIn";

const experiences = [
  {
    company: "Gilard Electronics Pvt Ltd",
    role: "Software Developer",
    period: "Feb 2026 - Present",
  },
  {
    company: "Solitaire Infosystem Pvt Ltd",
    role: "Software Developer",
    period: "Feb 2025 - Jan 2026",
  },
  {
    company: "Freelancer",
    role: "Full Stack Developer",
    period: "March 2024 - Dec 2024",
  },
];

interface CharRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const CharReveal = ({ text, className = "", style = {} }: CharRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const chars = text.split("");

  return (
    <h3 ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h3>
  );
};

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:px-8 md:px-10 md:py-32"
    >
      <div className="flex flex-col items-center">
        <FadeIn y={40}>
          <h2 className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3.5rem, 12vw, 160px)" }}>
            Experience
          </h2>
        </FadeIn>

        <div className="relative mx-auto w-full max-w-5xl">
          {/* Vertical Decorative Line */}
          <div className="absolute -left-4 top-0 hidden h-full w-[1px] bg-white/10 md:block">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-transparent via-[#B600A8] to-transparent"
            />
          </div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`flex flex-col border-[#D7E2EA]/15 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10 md:py-12 ${
                i !== experiences.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="mb-4 flex flex-col sm:mb-0">
                <span className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/40 sm:text-sm">
                  {exp.period}
                </span>
                <CharReveal 
                  text={exp.company}
                  className="font-medium uppercase tracking-tight"
                  style={{ fontSize: "clamp(1.25rem, 2.2vw, 2.5rem)" }}
                />
              </div>
              <div className="text-left sm:text-right">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.8 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="font-light uppercase tracking-widest"
                  style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.4rem)" }}
                >
                  {exp.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
