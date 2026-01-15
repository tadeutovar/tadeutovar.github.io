import { Building2, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Banco BOCOM BBM",
      role: "Estagiário de Product Manager",
      period: "2024-2026",
      description: "Atuação em projeto de implementação de core bancário, com foco em automação de processos, análise e validação de dados, apoio em ETL, integração de sistemas e criação de dashboards para acompanhamento operacional.",
      highlights: [
        "Implementação de sistema bancário",
        "Automação de processos operacionais",
        "Análise e validação de dados",
        "Integração de sistemas",
        "Criação de dashboards",
      ],
    },
    {
      company: "Agência Na Praça",
      role: "Estagiário de Marketing",
      period: "2021-2022",
      description: "Atuação com dados, automação de relatórios, análise de performance de campanhas e suporte à tomada de decisão através de indicadores e dashboards.",
      highlights: [
        "Automação de relatórios",
        "Análise de performance",
        "Suporte à decisão",
        "Dashboards operacionais",
      ],
    },
  ];

  return (
    <section id="experiencia" className="section-padding section-alt-bg">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiência
          </h2>
          <p className="text-muted-foreground text-lg">
            Trajetória profissional em ambiente corporativo com foco em automação, dados e integração de sistemas.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 md:left-1/2 top-16 bottom-0 w-px bg-border md:-translate-x-1/2" />
                )}

                <div className={`md:flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                      {/* Company Info */}
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-primary font-medium">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className={`flex items-center gap-2 mb-4 text-muted-foreground text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Description */}
                      <p className={`text-muted-foreground leading-relaxed mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
