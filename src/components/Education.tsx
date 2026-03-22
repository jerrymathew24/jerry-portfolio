export default function Education() {
  const education = [
    {
      degree: "B.Tech Mechanical Production",
      institution: "Sree Chitra Thirunal College of Engineering, TVM"
    }
  ];

  return (
    <section id="education" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-white">
        Education
      </h2>

      <div className="flex flex-col gap-8">
        {education.map((edu, index) => (
          <div key={index} className="card p-8 rounded-2xl flex flex-col md:flex-row gap-8 group hover:card-hover-glow transition-shadow duration-500">
            <div className="w-full flex flex-col gap-1.5">
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="text-accent text-sm">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
