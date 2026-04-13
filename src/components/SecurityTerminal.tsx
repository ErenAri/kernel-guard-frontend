import { useState, useEffect } from 'react';

const LOG_SEQUENCE = [
  { text: "kernel-guard@sys:~$ init_secure_server", type: "cmd", delay: 800 },
  { text: "[INFO] Initializing zero-trust architecture...", type: "info", delay: 400 },
  { text: "[INFO] Compiling React application...", type: "info", delay: 600 },
  { text: "[WARN] Scanning for vulnerabilities...", type: "warn", delay: 1200 },
  { text: "✓ XSS Protection: ACTIVE", type: "success", delay: 200 },
  { text: "✓ CSRF Tokens: VERIFIED", type: "success", delay: 200 },
  { text: "✓ API Endpoints: ENCRYPTED (AES-256)", type: "success", delay: 200 },
  { text: "[SUCCESS] Build completed securely in 2.4s.", type: "success", delay: 1000 },
  { text: "kernel-guard@sys:~$ monitor_traffic", type: "cmd", delay: 800 },
  { text: "[INFO] Intercepting incoming requests...", type: "info", delay: 500 },
  { text: "[ERROR] Blocked malicious payload (SQLi attempt)", type: "error", delay: 300 },
  { text: "[INFO] Validating JWT signatures... OK", type: "success", delay: 400 },
  { text: "[INFO] System secure. Awaiting input...", type: "info", delay: 3000 },
];

export default function SecurityTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const nextLine = () => {
      setVisibleLines((prev) => {
        const next = prev + 1;
        if (next > LOG_SEQUENCE.length) {
          // Reset after a delay
          timeout = setTimeout(() => setVisibleLines(0), 1000);
          return prev;
        }
        
        const currentLog = LOG_SEQUENCE[prev];
        timeout = setTimeout(nextLine, currentLog.delay);
        return next;
      });
    };

    // Start sequence
    if (visibleLines === 0) {
      timeout = setTimeout(nextLine, 1000);
    }

    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-2xl shadow-primary/10">
      {/* Terminal Header */}
      <div className="bg-[#1a1a1a] border-b border-gray-800 px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-4 text-xs font-mono text-gray-500">kernel-guard@server:~</div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-5 font-mono text-sm h-[320px] overflow-y-auto flex flex-col gap-2">
        {LOG_SEQUENCE.slice(0, visibleLines).map((log, i) => (
          <div key={i} className="flex items-start gap-2 animate-fade-in">
            {log.type === 'cmd' && <span className="text-primary shrink-0 mt-0.5">❯</span>}
            <span className={`
              ${log.type === 'cmd' ? 'text-gray-300' : ''}
              ${log.type === 'info' ? 'text-blue-400' : ''}
              ${log.type === 'warn' ? 'text-yellow-400' : ''}
              ${log.type === 'success' ? 'text-green-400' : ''}
              ${log.type === 'error' ? 'text-red-400' : ''}
            `}>
              {log.text}
            </span>
          </div>
        ))}
        {/* Blinking Cursor */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-primary shrink-0">❯</span>
          <span className="w-2 h-4 bg-gray-300/70 animate-pulse" />
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
