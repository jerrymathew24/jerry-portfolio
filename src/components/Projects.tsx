import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const projects = [
    {
      title: "Facility Management System (KSA)",
      type: "Client Project",
      description: [
        "Led end-to-end requirement analysis with 50+ hours of client discussions to define architecture.",
        "Designed a 15+ module system covering operations, service management, scheduling, and multi-role access.",
        "Created detailed sprint plans, epics, and task breakdowns.",
        "Designed role-based flows for Admin, FM Manager, Supervisor, Technicians, and Staff."
      ],
      tags: ["React.js", "NestJS", "PostgreSQL"]
    },
    {
      title: "Field Service Management Mobile App",
      type: "Company Product",
      description: [
        "Developed a 20+ module mobile app for field service operations.",
        "Implemented offline-first data handling using WatermelonDB with sync.",
        "Built real-time job tracking via WebSockets and integrated GPS tracking, timesheets, and push notifications.",
        "Secured with token storage and biometric login."
      ],
      tags: ["React Native", "WatermelonDB", "WebSockets"]
    },
    {
      title: "Home Automation System (IoT Platform)",
      type: "Company Product",
      description: [
        "Built an IoT-based home automation platform integrating hardware devices and backend services.",
        "Implemented dynamic configuration flows, OAuth-based integrations, and multi-step setup systems.",
        "Developed device registry and entity synchronization systems for real-time updates.",
        "Integrated Home Assistant APIs for device communication and automation workflows.",
        "Designed dashboards, automation pipelines, and developer tools."
      ],
      tags: ["React", "NestJS", "Raspberry Pi"]
    },
    {
      title: "Rukn Al Nakhil Corporate Website (Genix)",
      type: "Client Project",
      description: [
        "Developed a multilingual platform supporting both LTR and RTL.",
        "Built a CMS-based admin dashboard for managing services and media.",
        "Integrated AWS S3 for scalable media storage and optimized API performance."
      ],
      tags: ["Next.js", "Prisma", "AWS S3"]
    },
    {
      title: "Personal Brand Platform (Samir Jezzini)",
      type: "Client Project",
      description: [
        "Built a full-stack personal brand platform with CMS capabilities.",
        "Developed lead capture systems and structured content workflows.",
        "Integrated GSAP and Framer Motion for advanced animations and UI/UX."
      ],
      tags: ["Full-stack", "CMS", "Animations"]
    }
  ];

  return (
    <section id="projects" className="py-10 max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-white">
          Projects
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="card p-6 md:p-8 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 hover:card-hover-glow transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border shrink-0 w-fit ${
                  project.type === "Client Project"
                    ? "bg-secondary/10 text-secondary/80 border-secondary/20"
                    : "bg-accent/10 text-accent/80 border-accent/20"
                }`}>
                  <svg className="w-3 h-3 inline-block mr-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  {project.type}
                </span>
              </div>
              
              <ul className="flex flex-col gap-3 mt-2">
                {project.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80 text-base">
                    <span className="text-accent mt-1.5 text-xs">◆</span>
                    <span className="leading-relaxed drop-shadow-sm">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-accent-muted text-accent/70 border border-accent/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
