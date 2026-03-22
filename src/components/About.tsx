export default function About() {
  return (
    <section id="about" className="py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 text-white">
        About Me
      </h2>

      <div className="card p-8 rounded-2xl relative overflow-hidden group hover:card-hover-glow transition-shadow duration-500">
        <p className="text-base text-foreground/80 leading-relaxed drop-shadow-sm">
          I am a Full Stack Developer with over 2 years of hands-on development experience and 1+ year of professional experience.
          Skilled in building scalable web and mobile applications using <span className="text-accent font-medium">React.js</span>, <span className="text-accent font-medium">Node.js</span>, and <span className="text-accent font-medium">NestJS</span>.
          <br /><br />
          My expertise spans from requirement analysis and sprint planning to end-to-end product development. I&apos;ve built diverse solutions including real-time systems, IoT-based applications, and enterprise platforms such as Facility Management, Home Automation, and Field Service systems.
        </p>
      </div>
    </section>
  );
}
