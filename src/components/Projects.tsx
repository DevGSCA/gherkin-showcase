import { GherkinBlock, GherkinLine } from "./GherkinSyntax";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Transformação Digital V8.TECH",
    description: "Liderança na integração de IA com inteligência humana",
    tech: ["Scrum", "Kanban", "IA", "Process Mining"],
    features: [
      "Implementação de metodologias ágeis",
      "Roadmap de produtos digitais", 
      "Integração de soluções de IA",
      "Melhoria de processos organizacionais"
    ]
  },
  {
    title: "Sistema de Gestão Ágil",
    description: "Plataforma para acompanhamento de projetos e sprints",
    tech: ["Jira", "Confluence", "OKRs", "Analytics"],
    features: [
      "Dashboard de métricas ágeis",
      "Gestão de backlog automatizada",
      "Relatórios de produtividade",
      "Integração com ferramentas DevOps"
    ]
  },
  {
    title: "Produto de E-commerce B2B",
    description: "Product Owner de plataforma para clientes corporativos",
    tech: ["User Stories", "A/B Testing", "MVP", "Analytics"],
    features: [
      "Definição de roadmap estratégico",
      "Priorização baseada em valor",
      "Testes de usabilidade contínuos",
      "Métricas de engajamento e conversão"
    ]
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gherkin-then">
          Feature: Projetos e Experiências
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <GherkinBlock key={index} className="hover:shadow-glow-accent/20">
              <GherkinLine keyword="Feature" text={project.title} />
              <GherkinLine keyword="#" text={project.description} indent={1} />
              <div className="mt-4"></div>
              
              <GherkinLine keyword="Scenario" text="Implementação e gestão" indent={1} />
              <GherkinLine keyword="Given" text={`que utilizei ${project.tech.join(', ')}`} indent={2} />
              <GherkinLine keyword="When" text="gerenciei as entregas" indent={2} />
              <GherkinLine keyword="Then" text="o projeto apresenta:" indent={2} />
              
              <div className="mt-2 space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <GherkinLine 
                    key={featureIndex}
                    keyword="And" 
                    text={feature} 
                    indent={3} 
                  />
                ))}
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  Código
                </Button>
                <Button variant="default" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </div>
            </GherkinBlock>
          ))}
        </div>
      </div>
    </section>
  );
};