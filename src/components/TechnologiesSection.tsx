const TechnologiesSection = () => {
  const techCategories = [
    {
      title: "Linguagens & Frameworks",
      items: ["Python", "FastAPI", "Django", "SQL"],
    },
    {
      title: "Banco de Dados",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "Analytics & BI",
      items: ["Power BI", "Excel Avançado", "DAX", "ETL"],
    },
    {
      title: "Automação",
      items: ["RPA", "APIs REST", "Webhooks", "Integrações"],
    },
    {
      title: "DevOps & Versionamento",
      items: ["Git", "CI/CD", "Docker", "Azure DevOps"],
    },
    {
      title: "Metodologias",
      items: ["Scrum", "Kanban", "Jira", "Agile"],
    },
  ];

  return (
    <section id="tecnologias" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tecnologias
          </h2>
          <p className="text-muted-foreground text-lg">
            Stack tecnológico utilizado para entregar soluções robustas e escaláveis.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-4 py-2 text-sm font-medium text-foreground bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Outras competências:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["IA Aplicada", "NLP", "Machine Learning", "Data Validation", "Process Mining"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
