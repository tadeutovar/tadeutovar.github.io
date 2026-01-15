import { ArrowDown, Linkedin, Github, MessageCircleMore } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Especialista em Automação & Dados
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Tadeu Tovar
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Automação, Dados & IA para Processos Empresariais
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-hero-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Transformo processos manuais em fluxos automáticos, integro sistemas e converto dados em decisões estratégicas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Fale Comigo
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-8 py-4 border border-hero-foreground/20 text-hero-foreground font-medium rounded-lg hover:bg-hero-foreground/5 transition-all duration-300"
            >
              Ver Projetos
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://linkedin.com/tadeutovar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-hero-foreground/60 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/tadeutovar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-hero-foreground/60 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://wa.me/5521988840669"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-hero-foreground/60 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            >
              <MessageCircleMore size={22} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#sobre" className="text-hero-foreground/40 hover:text-hero-foreground/60 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
