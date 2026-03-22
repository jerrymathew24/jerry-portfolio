export default function Contact() {
  return (
    <section id="contact" className="w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] -ml-6 md:-ml-12 mt-10 mb-0 border-y border-white/10 bg-white/[0.02] backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 w-full">
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white drop-shadow-md">
            Let&apos;s build something great.
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-sm">
            Have a project in mind or want to discuss opportunities? I&apos;m always open to new roles and exciting projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <a href="https://wa.me/917907456230" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent/90 text-[#020617] font-bold text-lg transition-all w-full sm:w-auto text-center shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] active:scale-95 cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            Say Hello
          </a>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="mailto:jer2ymatheww@gmail.com" className="p-4 rounded-full border border-white/20 text-foreground/80 hover:border-accent/50 hover:text-accent transition-all bg-background/50 backdrop-blur-md active:scale-95" aria-label="Email">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            {/* <a href="https://wa.me/917907456230" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/20 text-foreground/80 hover:border-accent/50 hover:text-accent transition-all bg-background/50 backdrop-blur-md active:scale-95" aria-label="WhatsApp">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.996 0C5.372 0 0 5.373 0 11.999c0 2.126.556 4.195 1.613 6.01L.002 24l6.136-1.609a11.956 11.956 0 005.858 1.528h.005c6.623 0 11.995-5.373 11.995-11.92 0-3.21-1.25-6.223-3.518-8.494A11.94 11.94 0 0011.996 0zm6.541 17.306c-.28.788-1.579 1.491-2.222 1.543-.591.047-1.353-.198-3.791-1.157-3.085-1.215-5.06-4.405-5.213-4.608-.152-.204-1.246-1.657-1.246-3.155 0-1.5.76-2.27 1.033-2.585.274-.315.599-.395.798-.395.197 0 .394.001.564.009.18.008.423-.075.658.49.248.599.845 2.062.921 2.213.076.152.127.329.026.526-.102.198-.152.316-.304.492-.152.179-.319.394-.456.55-.152.177-.321.371-.122.715.198.342.883 1.458 1.896 2.358 1.309 1.163 2.395 1.524 2.738 1.676.342.152.544.127.751-.106.208-.233.894-1.04 1.132-1.396.238-.356.476-.296.798-.178.324.118 2.05.967 2.404 1.144.354.177.591.265.677.411.085.148.085.853-.195 1.641z"/></svg>
            </a> */}
            <a href="https://linkedin.com/in/jerry-mathew-14611412b" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/20 text-foreground/80 hover:border-accent/50 hover:text-accent transition-all bg-background/50 backdrop-blur-md active:scale-95" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/jerrymathew24" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/20 text-foreground/80 hover:border-accent/50 hover:text-accent transition-all bg-background/50 backdrop-blur-md active:scale-95" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
