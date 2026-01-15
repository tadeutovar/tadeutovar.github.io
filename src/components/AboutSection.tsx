import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Atuação em projetos de implementação de core bancário",
    "Experiência com automação, dados e integração de sistemas",
    "Foco em eficiência operacional e qualidade de dados",
    "Perfil técnico, analítico e orientado a resultados",
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Profissional com experiência sólida em ambiente corporativo bancário, atuando na implementação de soluções que conectam automação de processos, análise de dados e integração de sistemas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Minha atuação é focada em traduzir necessidades de negócio em soluções técnicas eficientes, eliminando gargalos operacionais e entregando dados confiáveis para suporte à tomada de decisão. Trabalho com metodologias ágeis e tenho forte capacidade de adaptação a ambientes dinâmicos e de alta demanda.
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-secondary rounded-2xl p-8 md:p-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
                    <div className="text-secondary-foreground/70 text-sm">Anos de Experiência</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
                    <div className="text-secondary-foreground/70 text-sm">Projetos Entregues</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                    <div className="text-secondary-foreground/70 text-sm">Foco em Resultados</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">∞</div>
                    <div className="text-secondary-foreground/70 text-sm">Processos Otimizados</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
