import { cn } from "@/lib/utils";

interface GherkinLineProps {
  keyword: string;
  text: string;
  indent?: number;
  className?: string;
}

export const GherkinLine = ({ keyword, text, indent = 0, className }: GherkinLineProps) => {
  const keywordColorMap: Record<string, string> = {
    'Feature': 'gherkin-feature',
    'Scenario': 'gherkin-scenario', 
    'Given': 'gherkin-given',
    'When': 'gherkin-when',
    'Then': 'gherkin-then',
    'And': 'gherkin-and',
    'But': 'gherkin-and',
    '#': 'gherkin-comment'
  };

  const keywordColor = keywordColorMap[keyword] || 'gherkin-feature';
  
  return (
    <div 
      className={cn("flex items-start gap-2 py-1", className)}
      style={{ paddingLeft: `${indent * 1.5}rem` }}
    >
      <span className={cn("gherkin-keyword", keywordColor, "min-w-fit")}>
        {keyword}{keyword !== '#' ? ':' : ''}
      </span>
      <span className="text-foreground/90">{text}</span>
    </div>
  );
};

interface GherkinBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const GherkinBlock = ({ children, className }: GherkinBlockProps) => {
  return (
    <div className={cn(
      "bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-border/50",
      "shadow-lg hover:shadow-glow-primary/20 transition-all duration-300",
      className
    )}>
      <div className="font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};