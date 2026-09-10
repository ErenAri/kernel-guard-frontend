import { useState, useEffect } from 'react';

const LOG_SEQUENCE = [
  { text: 'kernel-guard@lab:~$ bpfcompat test --artifact ringbuf_modern.bpf.o --quick', type: 'cmd', delay: 800 },
  { text: '[INFO] Booting ubuntu-20.04 · kernel 5.4 · x86_64', type: 'info', delay: 500 },
  { text: '[ERROR] load: FAIL · BPF_MAP_TYPE_RINGBUF requires kernel >= 5.8', type: 'error', delay: 900 },
  { text: '[INFO] Booting ubuntu-22.04 · kernel 5.15 · x86_64', type: 'info', delay: 500 },
  { text: '[OK] load + attach: PASS', type: 'success', delay: 300 },
  { text: '[INFO] Booting ubuntu-24.04 · kernel 6.8 · x86_64', type: 'info', delay: 500 },
  { text: '[OK] load + attach: PASS', type: 'success', delay: 300 },
  { text: '[INFO] Booting ubuntu-22.04 · kernel 5.15 · arm64', type: 'info', delay: 500 },
  { text: '[OK] load + attach: PASS', type: 'success', delay: 300 },
  { text: '[INFO] Writing structured evidence...', type: 'info', delay: 500 },
  { text: '[OK] report.json · verifier output · serial log', type: 'success', delay: 500 },
  { text: '[INFO] Compatibility gate complete.', type: 'info', delay: 3000 },
];

function getLogColor(type: string) {
  switch (type) {
    case 'cmd':
      return 'text-gray-200';
    case 'info':
      return 'text-[#78a9ff]';
    case 'warn':
      return 'text-[#f1c21b]';
    case 'success':
      return 'text-[#42be65]';
    case 'error':
      return 'text-[#ff8389]';
    default:
      return 'text-gray-200';
  }
}

export default function SecurityTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (visibleLines === 0) {
      timeout = setTimeout(() => setVisibleLines(1), 1000);
    } else if (visibleLines > LOG_SEQUENCE.length) {
      timeout = setTimeout(() => setVisibleLines(0), 2000);
    } else {
      const currentLog = LOG_SEQUENCE[visibleLines - 1];
      timeout = setTimeout(() => {
        setVisibleLines((value) => value + 1);
      }, currentLog.delay);
    }

    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-2xl shadow-primary/10">
      <div className="bg-[#1a1a1a] border-b border-gray-800 px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-4 text-xs font-mono text-gray-400">kernel-guard@server:~</div>
      </div>

      <div className="p-5 font-mono text-sm h-[320px] overflow-y-auto flex flex-col gap-2">
        {LOG_SEQUENCE.slice(0, visibleLines).map((log, index) => (
          <div key={index} className="flex items-start gap-2 animate-fade-in">
            {log.type === 'cmd' && <span className="text-[#78a9ff] shrink-0 mt-0.5">&gt;</span>}
            <span className={getLogColor(log.type)}>
              {log.text}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[#78a9ff] shrink-0">&gt;</span>
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
