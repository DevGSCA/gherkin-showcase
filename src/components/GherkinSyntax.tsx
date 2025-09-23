import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface GherkinLineProps {
  keyword: string;
  text: string;
  indent?: number;
  className?: string;
  animated?: boolean;
  delay?: number;
}

export const GherkinLine = ({ keyword, text, indent = 0, className, animated = false, delay = 0 }: GherkinLineProps) => {
  const [isVisible, setIsVisible] = useState(!animated);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [animated, delay]);

  const keywordColorMap: Record<string, string> = {
    'Feature': 'gherkin-feature',
    'Scenario': 'gherkin-scenario',
    'Background': 'gherkin-scenario', 
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
      className={cn(
        "flex items-start gap-2 py-1 transition-all duration-300",
        animated && "gherkin-line-animated",
        !isVisible && animated && "opacity-0",
        className
      )}
      style={{ 
        paddingLeft: `${indent * 1.5}rem`,
        animationDelay: animated ? `${delay}ms` : '0ms'
      }}
    >
      <span className={cn("gherkin-keyword", keywordColor, "min-w-fit select-none")}>
        {keyword}{keyword !== '#' ? ':' : ''}
      </span>
      <span className="text-foreground/90 select-none">{text}</span>
    </div>
  );
};

interface GherkinBlockProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  title?: string;
}

export const GherkinBlock = ({ children, className, animated = false, title }: GherkinBlockProps) => {
  return (
    <div className={cn(
      "bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-border/50",
      "shadow-lg hover:shadow-glow-primary/20 transition-all duration-500",
      "hover:scale-[1.02] hover:border-primary/30",
      animated && "gherkin-block-animated",
      className
    )}>
      {title && (
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/30">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            {title}
          </span>
        </div>
      )}
      <div className="font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};