import { GherkinBlock, GherkinLine } from "./GherkinSyntax";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gherkin-and">
          Feature: Contato Profissional
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <GherkinBlock>
            <GherkinLine keyword="Scenario" text="Cliente entra em contato" />
            <GherkinLine keyword="Given" text="que você tem um desafio de produto" indent={1} />
            <GherkinLine keyword="And" text="precisa de um Product Owner experiente" indent={1} />
            <GherkinLine keyword="When" text="você preenche o formulário" indent={1} />
            <GherkinLine keyword="Then" text="recebo sua mensagem" indent={1} />
            <GherkinLine keyword="And" text="respondo em até 24 horas" indent={1} />
            <GherkinLine keyword="And" text="agendamos uma conversa estratégica" indent={1} />
            
            <div className="mt-6 pt-4 border-t border-border/50">
              <GherkinLine keyword="#" text="Disponível para:" indent={0} />
              <GherkinLine keyword="#" text="• Product Management e Strategy" indent={1} />
              <GherkinLine keyword="#" text="• Facilitação Scrum e Agile Coaching" indent={1} />
              <GherkinLine keyword="#" text="• Transformação Digital" indent={1} />
              <GherkinLine keyword="#" text="• Consultoria em Metodologias Ágeis" indent={1} />
              <GherkinLine keyword="#" text="• Salvador, Bahia - Brasil" indent={1} />
            </div>
          </GherkinBlock>

          <div className="space-y-6">
            <GherkinBlock>
              <GherkinLine keyword="Scenario" text="Formulário de contato" />
            </GherkinBlock>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="project">Tipo de Necessidade</Label>
                <Input id="project" placeholder="Product Strategy, Scrum, Transformação Digital..." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva seu desafio de produto ou processo..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};