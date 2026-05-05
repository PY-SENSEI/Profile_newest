import FadeIn from "../components/FadeIn";

const services = [
  {
    num: "01",
    name: "Web Development",
    desc: "Building responsive, modern, and high-performance web applications using the latest technologies like React, Next.js, and TypeScript.",
  },
  {
    num: "02",
    name: "Mobile Apps",
    desc: "Developing cross-platform mobile applications with React Native and Expo, focusing on native-like performance and smooth animations.",
  },
  {
    num: "03",
    name: "Backend Systems",
    desc: "Designing scalable server-side architectures, RESTful APIs, and database schemas that power complex digital ecosystems.",
  },
  {
    num: "04",
    name: "UI/UX Engineering",
    desc: "Bridging the gap between design and code, ensuring every interface is pixel-perfect, accessible, and intuitive for users.",
  },
  {
    num: "05",
    name: "Cloud & DevOps",
    desc: "Deploying and managing applications on cloud platforms, implementing CI/CD pipelines to ensure rapid and reliable software delivery.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <div className="flex flex-col items-center">
        <h2 className="mb-16 font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3.5rem, 12vw, 160px)" }}>
          Services
        </h2>

        <div className="mx-auto w-full max-w-5xl">
          {services.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.1}
              className={`flex flex-col border-[#0C0C0C]/15 py-8 sm:flex-row sm:py-10 md:py-12 ${
                i !== services.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="mb-4 sm:mb-0 sm:w-1/3">
                <span className="font-black leading-none tracking-tighter sm:text-[clamp(3rem, 10vw, 140px)]" style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}>
                  {service.num}
                </span>
              </div>
              <div className="flex flex-col justify-center sm:w-2/3">
                <h3 className="mb-2 font-medium uppercase tracking-tight" style={{ fontSize: "clamp(1.25rem, 2.2vw, 2.1rem)" }}>
                  {service.name}
                </h3>
                <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}>
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
