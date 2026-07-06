export {};

declare global {
  interface Window {
    turnstile?: {
      reset: (widgetId?: string) => void;
      render: (el: string | HTMLElement, opts: Record<string, unknown>) => string;
    };
  }
}
