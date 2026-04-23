import { useEffect, useRef } from 'react';

let mermaidInstancePromise: Promise<(typeof import('mermaid'))['default']> | null = null;

async function getMermaidInstance() {
  if (!mermaidInstancePromise) {
    mermaidInstancePromise = import('mermaid').then((module) => {
      const mermaid = module.default;

      mermaid.initialize({
        startOnLoad: true,
        theme: 'dark',
        securityLevel: 'loose',
        fontFamily: 'Inter, sans-serif',
      });

      return mermaid;
    });
  }

  return mermaidInstancePromise;
}

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function renderMermaid() {
      if (!ref.current) {
        return;
      }

      try {
        const mermaid = await getMermaidInstance();
        const elementId = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
        const { svg } = await mermaid.render(elementId, chart);

        if (isMounted && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (error) {
        if (isMounted && ref.current) {
          ref.current.textContent = 'Diagram could not be rendered.';
        }

        console.error('Mermaid render error:', error);
      }
    }

    void renderMermaid();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return <div className="mermaid flex justify-center my-8 overflow-x-auto" ref={ref} />;
}
