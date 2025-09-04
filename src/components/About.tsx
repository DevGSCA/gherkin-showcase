import { GherkinBlock, GherkinLine } from "./GherkinSyntax";

export const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gherkin-feature">
          Feature: Sobre o Desenvolvedor
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <GherkinBlock>
            <GherkinLine keyword="Scenario" text="Background Profissional" />
            <GherkinLine keyword="Given" text="que tenho 5+ anos de experiência" indent={1} />
            <GherkinLine keyword="And" text="trabalhei em projetos web complexos" indent={1} />
            <GherkinLine keyword="When" text="desenvolvo soluções" indent={1} />
            <GherkinLine keyword="Then" text="foco em qualidade e performance" indent={1} />
            <GherkinLine keyword="And" text="aplico boas práticas de código" indent={1} />
            <GherkinLine keyword="And" text="utilizo metodologias ágeis" indent={1} />
          </GherkinBlock>

          <GherkinBlock>
            <GherkinLine keyword="Scenario" text="Especialidades Técnicas" />
            <GherkinLine keyword="Given" text="que domino React e TypeScript" indent={1} />
            <GherkinLine keyword="And" text="tenho expertise em Node.js" indent={1} />
            <GherkinLine keyword="And" text="trabalho com bancos SQL/NoSQL" indent={1} />
            <GherkinLine keyword="When" text="enfrento desafios técnicos" indent={1} />
            <GherkinLine keyword="Then" text="busco soluções escaláveis" indent={1} />
            <GherkinLine keyword="And" text="mantenho código limpo e testável" indent={1} />
          </GherkinBlock>
        </div>

        <GherkinBlock className="mt-8">
          <GherkinLine keyword="Scenario" text="Filosofia de Desenvolvimento" />
          <GherkinLine keyword="Given" text="que acredito em desenvolvimento orientado por testes" indent={1} />
          <GherkinLine keyword="And" text="valorizo comunicação clara com stakeholders" indent={1} />
          <GherkinLine keyword="When" text="trabalho em equipe" indent={1} />
          <GherkinLine keyword="Then" text="promovo colaboração e conhecimento compartilhado" indent={1} />
          <GherkinLine keyword="And" text="sempre busco melhorias contínuas" indent={1} />
          <GherkinLine keyword="And" text="mantenho foco na experiência do usuário" indent={1} />
        </GherkinBlock>
      </div>
    </section>
  );
};