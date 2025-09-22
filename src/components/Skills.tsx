import { GherkinBlock, GherkinLine } from "./GherkinSyntax";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Metodologias Ágeis",
    scenario: "Facilitação de Processos Ágeis",
    skills: ["Scrum", "Kanban", "SAFe", "Design Thinking", "Lean Startup", "OKRs"]
  },
  {
    title: "Product Management", 
    scenario: "Gestão de Produtos Digitais",
    skills: ["Product Backlog", "User Stories", "Roadmap", "MVPs", "A/B Testing", "Analytics"]
  },
  {
    title: "Project Management",
    scenario: "Liderança de Projetos",
    skills: ["PMP", "PMBOK", "Jira", "Confluence", "Trello", "MS Project"]
  },
  {
    title: "Transformação Digital",
    scenario: "Integração de Tecnologia e Negócio", 
    skills: ["IA", "Machine Learning", "Process Mining", "Automação", "Cloud", "DevOps"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gherkin-scenario">
          Feature: Competências Profissionais
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <GherkinBlock key={index}>
              <GherkinLine keyword="Scenario" text={category.scenario} />
              <GherkinLine keyword="Given" text={`que trabalho com ${category.title.toLowerCase()}`} indent={1} />
              <GherkinLine keyword="When" text="preciso implementar soluções" indent={1} />
              <GherkinLine keyword="Then" text="utilizo as seguintes tecnologias:" indent={1} />
              
              <div className="mt-4 pl-8">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-gradient-accent text-primary-foreground border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-2">
                <GherkinLine keyword="And" text="garanto qualidade e performance" indent={1} />
              </div>
            </GherkinBlock>
          ))}
        </div>
      </div>
    </section>
  );
};