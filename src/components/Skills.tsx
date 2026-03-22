export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Vite", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "WebSockets"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Mobile & IoT",
      skills: ["React Native (Expo)", "Raspberry Pi", "Offline-first systems"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "Strapi", "AWS S3"]
    },
    {
      title: "Concepts",
      skills: ["JWT Auth", "Real-Time Systems", "IoT Integration", "CMS Dev", "Agile", "Sprint Planning"]
    }
  ];

  return (
    <section id="skills" className="py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-white">
        Skills
      </h2>

      <div className="flex flex-col gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center border-b border-white/5 pb-6 md:pb-8 last:border-0">
            <h3 className="text-base md:text-lg font-semibold text-foreground/70 md:w-44 shrink-0">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 md:px-4 py-1.5 text-sm font-mono rounded-lg border border-white/5 bg-white/[0.02] text-foreground/60 hover:text-accent hover:border-accent/20 transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
