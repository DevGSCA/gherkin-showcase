import { GherkinBlock, GherkinLine } from "./GherkinSyntax";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com React e Node.js",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    features: [
      "Sistema de autenticação completo",
      "Carrinho de compras com persistência", 
      "Integração com gateway de pagamento",
      "Dashboard administrativo"
    ]
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real",
    tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
    features: [
      "Colaboração em tempo real",
      "Sistema de notificações",
      "Drag and drop interface",
      "Relatórios de produtividade"
    ]
  },
  {
    title: "API RESTful",
    description: "API robusta para sistema de gestão empresarial",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    features: [
      "Documentação automática com Swagger",
      "Autenticação JWT",
      "Rate limiting e caching",
      "Testes automatizados com 95% coverage"
    ]
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gherkin-then">
          Feature: Projetos Desenvolvidos
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <GherkinBlock key={index} className="hover:shadow-glow-accent/20">
              <GherkinLine keyword="Feature" text={project.title} />
              <GherkinLine keyword="#" text={project.description} indent={1} />
              <div className="mt-4"></div>
              
              <GherkinLine keyword="Scenario" text="Implementação das funcionalidades" indent={1} />
              <GherkinLine keyword="Given" text={`que utilizei ${project.tech.join(', ')}`} indent={2} />
              <GherkinLine keyword="When" text="desenvolvi as funcionalidades" indent={2} />
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