import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-3xl pt-16 pb-8 mt-0 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="font-display font-bold text-3xl tracking-tighter text-white">
            Jerry Mathew<span className="text-accent">.</span>
          </span>
          <p className="text-foreground/60 text-sm leading-relaxed">
            Building scalable web and mobile applications with a focus on performance, modern architecture, and elegant user experiences.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24 flex-wrap">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase">Navigation</h3>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-foreground/50 hover:text-accent transition-colors text-sm">About</a>
              <a href="#experience" className="text-foreground/50 hover:text-accent transition-colors text-sm">Experience</a>
              <a href="#projects" className="text-foreground/50 hover:text-accent transition-colors text-sm">Projects</a>
              <a href="#skills" className="text-foreground/50 hover:text-accent transition-colors text-sm">Skills</a>
              <a href="#contact" className="text-foreground/50 hover:text-accent transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Connect Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase">Connect</h3>
            <div className="flex flex-col gap-3 flex-wrap">
              <a href="mailto:jer2ymatheww@gmail.com" className="text-foreground/50 hover:text-accent transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </a>
              <a href="https://linkedin.com/in/jerry-mathew-14611412b" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                LinkedIn
              </a>
              <a href="https://github.com/jerrymathew24" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                GitHub
              </a>
              <a href="https://wa.me/917907456230" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.996 0C5.372 0 0 5.373 0 11.999c0 2.126.556 4.195 1.613 6.01L.002 24l6.136-1.609a11.956 11.956 0 005.858 1.528h.005c6.623 0 11.995-5.373 11.995-11.92 0-3.21-1.25-6.223-3.518-8.494A11.94 11.94 0 0011.996 0zm6.541 17.306c-.28.788-1.579 1.491-2.222 1.543-.591.047-1.353-.198-3.791-1.157-3.085-1.215-5.06-4.405-5.213-4.608-.152-.204-1.246-1.657-1.246-3.155 0-1.5.76-2.27 1.033-2.585.274-.315.599-.395.798-.395.197 0 .394.001.564.009.18.008.423-.075.658.49.248.599.845 2.062.921 2.213.076.152.127.329.026.526-.102.198-.152.316-.304.492-.152.179-.319.394-.456.55-.152.177-.321.371-.122.715.198.342.883 1.458 1.896 2.358 1.309 1.163 2.395 1.524 2.738 1.676.342.152.544.127.751-.106.208-.233.894-1.04 1.132-1.396.238-.356.476-.296.798-.178.324.118 2.05.967 2.404 1.144.354.177.591.265.677.411.085.148.085.853-.195 1.641z" /></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex justify-center text-center text-xs text-foreground/40 font-mono">
        <p>© {new Date().getFullYear()} Jerry Mathew. All rights reserved.</p>
      </div>
    </footer>
  );
}
