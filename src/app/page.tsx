import TypingText from "@/components/TypingText";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative z-10 flex-1 flex flex-col px-6 md:px-12">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-16 text-center">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] text-white">
            Hi, I&apos;m Jerry Mathew.
          </h1>
          <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            <TypingText text="Full Stack Developer" className="text-accent drop-shadow-md" />
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mt-4 drop-shadow-sm">
            I build scalable web and mobile applications with 2+ years of hands-on experience in React.js, Node.js, and NestJS.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
            <a href="/resume.docx" download="Jerry_Mathew_FullStack_Developer_Resume.docx" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent text-[#020617] font-bold transition-all hover:bg-accent/90 active:scale-95 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" /></svg>
              Download Resume
            </a>
            <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-accent/30 text-accent font-medium transition-all hover:bg-accent/10 hover:border-accent/50 active:scale-95">
              View Work
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 text-foreground/60 font-medium transition-all hover:border-white/20 hover:text-foreground active:scale-95">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
