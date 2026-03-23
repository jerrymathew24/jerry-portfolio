import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-3xl pt-24 pb-8 mt-0 relative z-10 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Top CTA Section */}
        <div className="relative mb-24 p-8 md:p-12 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="absolute inset-0 backdrop-blur-sm border border-white/10" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">
                Have a project in mind?
              </h2>
              <p className="text-foreground/60 text-lg max-w-md">
                Let's build something amazing together. Currently available for new opportunities.
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl shadow-accent/10 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3">
              <span className="font-display font-bold text-3xl tracking-tighter text-white">
                Jerry Mathew<span className="text-accent">.</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">
                  Available for new projects
                </span>
              </div>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-sm">
              Full-stack developer specializing in building premium web applications
              with React, Next.js, and modern cloud architectures. Focused on performance
              and user-centric design.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase">Navigation</h3>
            <div className="flex flex-col items-center gap-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/50 hover:text-accent transition-colors text-sm w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase">Socials</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/jerry-mathew-14611412b', hoverColor: 'group-hover:text-[#0A66C2]', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
                { label: 'WhatsApp', href: 'https://wa.me/917907456230', hoverColor: 'group-hover:text-[#25D366]', icon: <path d="M11.996 0C5.372 0 0 5.373 0 11.999c0 2.126.556 4.195 1.613 6.01L.002 24l6.136-1.609a11.956 11.956 0 005.858 1.528h.005c6.623 0 11.995-5.373 11.995-11.92 0-3.21-1.25-6.223-3.518-8.494A11.94 11.94 0 0011.996 0zm6.541 17.306c-.28.788-1.579 1.491-2.222 1.543-.591.047-1.353-.198-3.791-1.157-3.085-1.215-5.06-4.405-5.213-4.608-.152-.204-1.246-1.657-1.246-3.155 0-1.5.76-2.27 1.033-2.585.274-.315.599-.395.798-.395.197 0 .394.001.564.009.18.008.423-.075.658.49.248.599.845 2.062.921 2.213.076.152.127.329.026.526-.102.198-.152.316-.304.492-.152.177-.319.394-.456.55-.152.177-.321.371-.122.715.198.342.883 1.458 1.896 2.358 1.309 1.163 2.395 1.524 2.738 1.676.342.152.544.127.751-.106.208-.233.894-1.04 1.132-1.396.238-.356.476-.296.798-.178.324.118 2.05.967 2.404 1.144.354.177.591.265.677.411.085.148.085.853-.195 1.641z" /> },
                { label: 'GitHub', href: 'https://github.com/jerrymathew24', hoverColor: 'group-hover:text-white', icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> },
                { label: 'Mail', href: 'mailto:jer2ymatheww@gmail.com', hoverColor: 'group-hover:text-[#EA4335]', icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent/30 transition-all group overflow-hidden active:scale-95"
                  aria-label={social.label}
                >
                  <svg className={`w-6 h-6 text-foreground/70 ${social.hoverColor} transition-colors fill-current`} viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-mono text-foreground/40 text-center w-full">
          <p>© {new Date().getFullYear()} Jerry Mathew. Kerala, India.</p>
        </div>
      </div>
    </footer>
  );
}

