import { ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automação de Processos Operacionais Bancários",
      description: "Automação de rotinas operacionais utilizando Python para eliminar tarefas manuais repetitivas, integrando dados entre sistemas internos do banco.",
      technologies: ["Python", "Excel Avançado", "APIs", "Lógica de RPA"],
      benefit: "Redução de retrabalho, ganho de eficiência e diminuição de erros operacionais.",
      category: "Automação",
    },
    {
      title: "Pipeline de Dados para Consolidação de Informações",
      description: "Criação de pipeline ETL para consolidação de dados provenientes de bases SQL e NoSQL, com validação e tratamento de qualidade.",
      technologies: ["Python", "SQL", "MongoDB", "ETL"],
      benefit: "Base única confiável para análise e tomada de decisão.",
      category: "Dados",
    },
    {
      title: "Dashboard de Indicadores Operacionais",
      description: "Desenvolvimento de dashboards em Power BI para monitoramento de KPIs operacionais e acompanhamento de performance em tempo real.",
      technologies: ["Power BI", "Python", "SQL"],
      benefit: "Visão gerencial clara e suporte à tomada de decisão.",
      category: "BI & Analytics",
    },
    {
      title: "Classificador Inteligente de Demandas Operacionais",
      description: "Sistema que interpreta solicitações internas e direciona automaticamente para fluxo correto (API, automação ou processo manual).",
      technologies: ["Python", "IA", "NLP"],
      benefit: "Agilidade operacional e redução de gargalos no atendimento.",
      category: "IA",
    },
  ];

  return (
    <section id="projetos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções implementadas em ambiente corporativo com impacto mensurável em eficiência e qualidade.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-border/50">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Benefit */}
                <div className="bg-primary/5 rounded-lg p-4 mb-5">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">Resultado:</span>{" "}
                    {project.benefit}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
