import { GherkinBlock, GherkinLine } from "./GherkinSyntax";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
            BDD Portfolio
          </h1>
          <p className="text-xl text-muted-foreground">
            Comportamento orientado por qualidade e inovação
          </p>
        </div>

        <GherkinBlock className="mb-8">
          <GherkinLine keyword="Feature" text="Portfolio Profissional" />
          <GherkinLine keyword="#" text="Como um desenvolvedor experiente" indent={1} />
          <GherkinLine keyword="#" text="Eu quero apresentar minhas habilidades e projetos" indent={1} />
          <GherkinLine keyword="#" text="Para demonstrar minha expertise em desenvolvimento" indent={1} />
          <div className="mt-4"></div>
          <GherkinLine keyword="Scenario" text="Visitante conhece o desenvolvedor" indent={1} />
          <GherkinLine keyword="Given" text="que sou um desenvolvedor full-stack" indent={2} />
          <GherkinLine keyword="And" text="tenho experiência em tecnologias modernas" indent={2} />
          <GherkinLine keyword="When" text="você navega pelo meu portfolio" indent={2} />
          <GherkinLine keyword="Then" text="você encontra projetos de qualidade" indent={2} />
          <GherkinLine keyword="And" text="pode avaliar minhas habilidades técnicas" indent={2} />
        </GherkinBlock>

        <div className="flex justify-center gap-4">
          <Button variant="default" size="lg" className="gap-2">
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Mail className="w-5 h-5" />
            Contato
          </Button>
        </div>
      </div>
    </section>
  );
};