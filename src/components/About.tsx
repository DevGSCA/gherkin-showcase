import { GherkinBlock, GherkinLine } from "./GherkinSyntax";

export const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gherkin-feature">
          Feature: Sobre o Product Owner
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <GherkinBlock>
            <GherkinLine keyword="Scenario" text="Background Profissional" />
            <GherkinLine keyword="Given" text="que atuo como Product Owner na V8.TECH" indent={1} />
            <GherkinLine keyword="And" text="trabalho com transformação digital" indent={1} />
            <GherkinLine keyword="When" text="gerencio produtos e projetos" indent={1} />
            <GherkinLine keyword="Then" text="foco em agregar valor ao cliente" indent={1} />
            <GherkinLine keyword="And" text="aplico metodologias ágeis" indent={1} />
            <GherkinLine keyword="And" text="promovo práticas de melhoria contínua" indent={1} />
          </GherkinBlock>

          <GherkinBlock>
            <GherkinLine keyword="Scenario" text="Especialidades em Agilidade" />
            <GherkinLine keyword="Given" text="que sou certificado Scrum Master" indent={1} />
            <GherkinLine keyword="And" text="tenho expertise em Project Management" indent={1} />
            <GherkinLine keyword="And" text="trabalho com transformação digital" indent={1} />
            <GherkinLine keyword="When" text="lidero equipes ágeis" indent={1} />
            <GherkinLine keyword="Then" text="facilito processos de melhoria" indent={1} />
            <GherkinLine keyword="And" text="integro IA com inteligência humana" indent={1} />
          </GherkinBlock>
        </div>

        <GherkinBlock className="mt-8">
          <GherkinLine keyword="Scenario" text="Filosofia de Trabalho" />
          <GherkinLine keyword="Given" text="que vivo com o propósito de ajudar pessoas" indent={1} />
          <GherkinLine keyword="And" text="auxilio organizações a praticar agilidade" indent={1} />
          <GherkinLine keyword="When" text="trabalho com equipes" indent={1} />
          <GherkinLine keyword="Then" text="melhoro o valor dos produtos para o cliente" indent={1} />
          <GherkinLine keyword="And" text="sempre busco alcançar objetivos estratégicos" indent={1} />
          <GherkinLine keyword="And" text="promovo transformação digital sustentável" indent={1} />
        </GherkinBlock>
      </div>
    </section>
  );
};