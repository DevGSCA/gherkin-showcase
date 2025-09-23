import { GherkinBlock, GherkinLine } from "./GherkinSyntax";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code2, FileText, Users } from "lucide-react";

export const BDDShowcase = () => {
  const bddBenefits = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Colaboração Efetiva",
      description: "Une stakeholders, desenvolvedores e QA em uma linguagem comum"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Documentação Viva",
      description: "Especificações que servem como documentação executável"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Testes Automatizados",
      description: "Cenários que se tornam testes de aceitação automatizados"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Código Mais Limpo",
      description: "Desenvolvimento orientado por comportamento gera código mais limpo"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            BDD & Gherkin Expert
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Behavior-Driven Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especialista em BDD e sintaxe Gherkin para criar produtos com especificações claras, 
            testes automatizados e colaboração efetiva entre equipes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <GherkinBlock 
              title="Product Feature Specification"
              animated={true}
              className="hover:shadow-2xl"
            >
              <GherkinLine 
                keyword="Feature" 
                text="Sistema de Login de Usuário" 
                animated={true}
                delay={200}
              />
              <GherkinLine 
                keyword="#" 
                text="Como um usuário do sistema" 
                indent={1}
                animated={true}
                delay={400}
              />
              <GherkinLine 
                keyword="#" 
                text="Eu quero fazer login de forma segura" 
                indent={1}
                animated={true}
                delay={600}
              />
              <GherkinLine 
                keyword="#" 
                text="Para acessar minha conta" 
                indent={1}
                animated={true}
                delay={800}
              />
              
              <div className="my-4"></div>
              
              <GherkinLine 
                keyword="Scenario" 
                text="Login bem-sucedido" 
                animated={true}
                delay={1000}
              />
              <GherkinLine 
                keyword="Given" 
                text="que estou na página de login" 
                indent={1}
                animated={true}
                delay={1200}
              />
              <GherkinLine 
                keyword="And" 
                text="tenho credenciais válidas" 
                indent={1}
                animated={true}
                delay={1400}
              />
              <GherkinLine 
                keyword="When" 
                text="inserir email e senha corretos" 
                indent={1}
                animated={true}
                delay={1600}
              />
              <GherkinLine 
                keyword="And" 
                text="clicar no botão 'Entrar'" 
                indent={1}
                animated={true}
                delay={1800}
              />
              <GherkinLine 
                keyword="Then" 
                text="devo ser redirecionado para o dashboard" 
                indent={1}
                animated={true}
                delay={2000}
              />
              <GherkinLine 
                keyword="And" 
                text="ver minha foto de perfil no header" 
                indent={1}
                animated={true}
                delay={2200}
              />
            </GherkinBlock>

            <GherkinBlock 
              title="Error Handling Scenario"
              className="hover:shadow-2xl"
            >
              <GherkinLine keyword="Scenario" text="Tentativa de login com credenciais inválidas" />
              <GherkinLine keyword="Given" text="que estou na página de login" indent={1} />
              <GherkinLine keyword="When" text="inserir email ou senha incorretos" indent={1} />
              <GherkinLine keyword="And" text="clicar no botão 'Entrar'" indent={1} />
              <GherkinLine keyword="Then" text="devo ver uma mensagem de erro" indent={1} />
              <GherkinLine keyword="And" text="permanecer na página de login" indent={1} />
              <GherkinLine keyword="And" text="os campos devem ser limpos por segurança" indent={1} />
            </GherkinBlock>
          </div>

          <div className="space-y-6">
            <div className="bg-card border rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Por que BDD?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Behavior-Driven Development revoluciona como equipes colaboram no desenvolvimento 
                de software, criando uma ponte entre requisitos de negócio e implementação técnica.
              </p>
              
              <div className="grid gap-4">
                {bddBenefits.map((benefit, index) => (
                  <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-base font-semibold">
                        <div className="text-primary">
                          {benefit.icon}
                        </div>
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Metodologia BDD na Prática
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Workshops de Discovery com stakeholders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Especificações em linguagem natural (Gherkin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Automação de testes de aceitação</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Documentação viva e sempre atualizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <GherkinBlock className="inline-block">
            <GherkinLine keyword="Given" text="que você precisa de especificações claras" />
            <GherkinLine keyword="And" text="quer melhorar a colaboração da equipe" indent={1} />
            <GherkinLine keyword="When" text="implementamos BDD no seu projeto" indent={1} />
            <GherkinLine keyword="Then" text="você terá produtos mais robustos" indent={1} />
            <GherkinLine keyword="And" text="equipes mais alinhadas" indent={1} />
            <GherkinLine keyword="And" text="menor retrabalho" indent={1} />
          </GherkinBlock>
        </div>
      </div>
    </section>
  );
};