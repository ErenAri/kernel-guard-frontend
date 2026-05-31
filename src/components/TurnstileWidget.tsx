import { useEffect, useRef, useState } from 'react';

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme?: 'light' | 'dark' | 'auto';
      callback?: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileWidgetProps {
  siteKey: string;
  onToken: (token: string) => void;
}

const SCRIPT_ID = 'cloudflare-turnstile-script';

function loadTurnstileScript() {
  if (typeof document === 'undefined') return Promise.resolve();

  const existing = document.getElementById(SCRIPT_ID);
  if (existing) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Unable to load Turnstile.'));
    document.head.appendChild(script);
  });
}

export default function TurnstileWidget({ siteKey, onToken }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let widgetId = '';
    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;

        widgetId = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'auto',
          callback: (token) => {
            setError('');
            onToken(token);
          },
          'expired-callback': () => onToken(''),
          'error-callback': () => {
            onToken('');
            setError('Turnstile verification could not be completed.');
          },
        });
      })
      .catch((err) => setError(err.message || 'Unable to load Turnstile.'));

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [onToken, siteKey]);

  return (
    <div className="space-y-2">
      <div ref={containerRef} />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
