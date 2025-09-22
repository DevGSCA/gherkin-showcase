import { GherkinBlock, GherkinLine } from "./GherkinSyntax";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
            Luis Alberto Oliveira
          </h1>
          <p className="text-xl text-muted-foreground">
            Scrum Master | Product Owner | Project Manager
          </p>
        </div>

        <GherkinBlock className="mb-8">
          <GherkinLine keyword="Feature" text="Portfolio de Product Owner" />
          <GherkinLine keyword="#" text="Como um Product Owner e Scrum Master experiente" indent={1} />
          <GherkinLine keyword="#" text="Eu quero apresentar minha experiência em agilidade" indent={1} />
          <GherkinLine keyword="#" text="Para demonstrar como melhoro produtos e processos" indent={1} />
          <div className="mt-4"></div>
          <GherkinLine keyword="Scenario" text="Cliente conhece o profissional" indent={1} />
          <GherkinLine keyword="Given" text="que sou Product Owner na V8.TECH" indent={2} />
          <GherkinLine keyword="And" text="tenho experiência em metodologias ágeis" indent={2} />
          <GherkinLine keyword="When" text="você analisa meu perfil profissional" indent={2} />
          <GherkinLine keyword="Then" text="encontra expertise em transformação digital" indent={2} />
          <GherkinLine keyword="And" text="pode avaliar minha capacidade de gerar valor" indent={2} />
        </GherkinBlock>

        <div className="flex justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2"
            onClick={() => window.open('https://github.com/luisalberto-oliveira', '_blank')}
          >
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={() => window.open('https://www.linkedin.com/in/luis-alberto-oliveira-product-owner/', '_blank')}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={() => window.open('mailto:luis.alberto.oliveira@email.com', '_blank')}
          >
            <Mail className="w-5 h-5" />
            Contato
          </Button>
        </div>
      </div>
    </section>
  );
};