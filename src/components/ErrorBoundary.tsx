import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorId: '' };
  }

  public static getDerivedStateFromError(_: Error): State {
    // Generate a safe error ID without exposing sensitive information
    const errorId = Math.random().toString(36).substring(2, 15);
    return { hasError: true, errorId };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error securely without exposing sensitive information
    console.error('ErrorBoundary caught an error:', {
      errorId: this.state.errorId,
      message: error.message,
      componentStack: errorInfo.componentStack?.substring(0, 500) // Limit stack trace
    });
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[200px] flex items-center justify-center p-6">
          <Alert className="max-w-md">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Algo deu errado</AlertTitle>
            <AlertDescription>
              Ocorreu um erro inesperado. Tente recarregar a página ou entre em contato se o problema persistir.
              <br />
              <span className="text-xs text-muted-foreground mt-2 block">
                ID do erro: {this.state.errorId}
              </span>
            </AlertDescription>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}