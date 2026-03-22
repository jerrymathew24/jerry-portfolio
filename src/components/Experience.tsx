export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Bairuhatech LLP",
      period: "August 2025 – March 2026",
      highlights: [
        "Led requirement analysis through 50+ hours of client discussions for a 15+ module system",
        "Designed and developed a Facility Management platform for service workflows and scheduling",
        "Built a scalable Home Automation platform with React, NestJS, and Raspberry Pi",
        "Developed a 20+ module FSM mobile app with real-time GPS tracking and offline capabilities",
        "Built multilingual, CMS-driven web platforms using Next.js, Prisma, and AWS S3",
        "Contributed to a high-traffic e-paper platform using Strapi CMS"
      ]
    }
  ];

  return (
    <section id="experience" className="py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-white">
        Experience
      </h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="card p-8 rounded-2xl flex flex-col md:flex-row gap-8 group hover:card-hover-glow transition-shadow duration-500">
            <div className="md:w-1/3 flex flex-col gap-1.5">
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <p className="text-accent text-sm">{exp.company}</p>
              <p className="text-xs text-foreground/30">{exp.period}</p>
            </div>

            <div className="md:w-2/3">
              <ul className="flex flex-col gap-3">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80 text-base">
                    <span className="text-accent mt-0.5">▸</span>
                    <span className="leading-relaxed drop-shadow-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
