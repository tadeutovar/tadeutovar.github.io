import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tadeutovar/",
      description: "Conecte-se comigo",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tadeutovar",
      description: "Veja meus projetos",
    },
    {
      icon: Mail,
      label: "E-mail",
      href: "mailto:tadeutovar@gmail.com",
      description: "Entre em contato",
    },
  ];

  return (
    <section id="contato" className="section-padding hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-hero-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Quer automatizar processos, integrar sistemas e transformar dados em decisões estratégicas? Estou pronto para ajudar.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <link.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-hero-foreground mb-1">
                  {link.label}
                </h3>
                <p className="text-hero-foreground/60 text-sm">
                  {link.description}
                </p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5521988840669"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
          >
            <span>Whatsapp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
