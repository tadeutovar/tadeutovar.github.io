import { Cog, Link2, Database, BarChart3, Brain } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Cog,
      title: "Automação de Processos",
      description: "Desenvolvimento de soluções em Python com lógica de RPA para eliminação de tarefas manuais repetitivas e redução de retrabalho operacional.",
      tags: ["Python", "RPA", "Automação"],
    },
    {
      icon: Link2,
      title: "Integração de Sistemas e APIs",
      description: "Conexão entre sistemas através de APIs REST, garantindo sincronização de dados e fluxos automatizados entre plataformas.",
      tags: ["APIs REST", "Integrações", "Webhooks"],
    },
    {
      icon: Database,
      title: "Dados & ETL",
      description: "Tratamento, validação e consolidação de dados através de pipelines ETL robustos, garantindo qualidade e confiabilidade das informações.",
      tags: ["ETL", "SQL", "Python"],
    },
    {
      icon: BarChart3,
      title: "Dashboards & BI",
      description: "Criação de dashboards em Power BI com indicadores operacionais e gerenciais para suporte à tomada de decisão estratégica.",
      tags: ["Power BI", "KPIs", "Analytics"],
    },
    {
      icon: Brain,
      title: "IA Aplicada a Processos",
      description: "Implementação de soluções inteligentes para classificação de demandas, automação de decisões e otimização de fluxos operacionais.",
      tags: ["IA", "NLP", "Machine Learning"],
    },
  ];

  return (
    <section id="solucoes" className="section-padding section-alt-bg">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise técnica aplicada a desafios reais de negócio, entregando eficiência operacional e resultados mensuráveis.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card-corporate group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {solution.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {solution.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
