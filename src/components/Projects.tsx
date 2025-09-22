import { GherkinBlock, GherkinLine } from "./GherkinSyntax";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Plataforma de E-commerce B2B",
      description: "Liderou a transformação digital de uma plataforma B2B, implementando metodologias ágeis e aumentando a eficiência do time em 40%.",
      tech: ["Product Strategy", "Scrum", "Jira", "Data Analysis"],
      impact: "40% melhoria na eficiência"
    },
    {
      title: "Sistema de CRM Customizado", 
      description: "Desenvolvimento de roadmap estratégico para sistema CRM, facilitando workshops de discovery e definindo MVPs que geraram ROI de 300%.",
      tech: ["Design Thinking", "OKRs", "Stakeholder Management"],
      impact: "300% ROI"
    },
    {
      title: "Transformação Ágil Corporativa",
      description: "Implementação de framework Scrum em 5 squads, conduzindo coaching ágil e estabelecendo cerimônias que melhoraram a entrega em 60%.",
      tech: ["Agile Coaching", "SAFe", "Team Leadership"],
      impact: "60% melhoria na entrega"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-16 text-center">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <GherkinBlock>
              <GherkinLine keyword="Feature" text="Projetos de Impacto" />
              <div className="mt-4"></div>
              <GherkinLine keyword="Background" text="Histórico de entregas" />
              <GherkinLine keyword="Given" text="que liderei projetos de transformação digital" indent={1} />
              <GherkinLine keyword="And" text="implementei metodologias ágeis eficazes" indent={1} />
              <GherkinLine keyword="When" text="aplico estratégias de Product Management" indent={1} />
              <GherkinLine keyword="Then" text="gero resultados mensuráveis e sustentáveis" indent={1} />
              <GherkinLine keyword="And" text="promovo crescimento organizacional" indent={1} />
              
              <div className="mt-6 pt-4 border-t border-border/50">
                <GherkinLine keyword="#" text="Métricas de Sucesso:" />
                <GherkinLine keyword="#" text="• +300% ROI em projetos estratégicos" indent={1} />
                <GherkinLine keyword="#" text="• 60% melhoria na eficiência de entregas" indent={1} />
                <GherkinLine keyword="#" text="• 5+ squads transformados com Scrum" indent={1} />
                <GherkinLine keyword="#" text="• 40% redução no time-to-market" indent={1} />
              </div>
            </GherkinBlock>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm font-medium text-primary">
                      🎯 {project.impact}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};