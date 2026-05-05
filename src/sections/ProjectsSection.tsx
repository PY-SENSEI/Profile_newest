import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
import { LiveProjectButton } from "../components/Buttons";

const projects = [
  {
    num: "01",
    category: "Client",
    name: "Nextlevel Studio",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
  },
  {
    num: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
  },
  {
    num: "03",
    category: "Client",
    name: "Solaris Digital",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ],
  },
];

interface CardProps {
  project: typeof projects[0];
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({ project, index, progress, range, targetScale }: CardProps) => {
  const containerRef = useRef(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-24 md:top-32 flex h-[85vh] items-start justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5% + ${index * 28}px)`,
        }}
        className="relative h-full w-full max-w-6xl overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        {/* Top Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-black leading-none" style={{ fontSize: "clamp(2rem, 8vw, 80px)" }}>
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3 className="font-medium uppercase tracking-tight" style={{ fontSize: "clamp(1rem, 2.5vw, 2.5rem)" }}>
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image Grid */}
        <div className="grid h-[calc(100%-120px)] grid-cols-10 gap-3">
          {/* Left Column (40%) */}
          <div className="col-span-10 flex flex-col gap-3 sm:col-span-4">
            <div 
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <img src={project.images[0]} alt="" className="h-full w-full object-cover" />
            </div>
            <div 
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <img src={project.images[1]} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
          {/* Right Column (60%) */}
          <div className="col-span-10 h-full overflow-hidden rounded-[20px] sm:col-span-6 sm:rounded-[30px] md:rounded-[40px]">
            <img src={project.images[2]} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={container} 
      id="projects" 
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <div className="mb-20 flex flex-col items-center">
        <h2 className="hero-heading font-black uppercase text-[#D7E2EA]" style={{ fontSize: "clamp(3.5rem, 12vw, 160px)" }}>
          Project
        </h2>
      </div>

      <div className="flex flex-col gap-20 sm:gap-32 md:gap-40">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card
              key={project.num}
              index={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
