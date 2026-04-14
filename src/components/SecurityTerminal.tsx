import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const BOOT_SEQUENCE = [
  { text: "kernel-guard@sys:~$ init_secure_server", type: "cmd", delay: 400 },
  { text: "[INFO] Initializing zero-trust architecture...", type: "info", delay: 200 },
  { text: "✓ XSS Protection: ACTIVE", type: "success", delay: 100 },
  { text: "✓ CSRF Tokens: VERIFIED", type: "success", delay: 100 },
  { text: "[SUCCESS] System secure. Interactive shell ready.", type: "success", delay: 300 },
  { text: "Type 'help' to see available commands.", type: "info", delay: 100 },
];

interface HistoryItem {
  text: React.ReactNode;
  type: string;
}

export default function SecurityTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Boot sequence effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const nextLine = () => {
      if (currentIndex < BOOT_SEQUENCE.length) {
        setHistory(prev => [...prev, BOOT_SEQUENCE[currentIndex]]);
        currentIndex++;
        timeout = setTimeout(nextLine, BOOT_SEQUENCE[currentIndex]?.delay || 0);
      } else {
        setIsBooting(false);
      }
    };

    timeout = setTimeout(nextLine, 500);

    return () => clearTimeout(timeout);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history, isBooting]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add the user's command to history
    setHistory(prev => [...prev, { text: `kernel-guard@guest:~$ ${cmd}`, type: "cmd" }]);

    if (trimmedCmd === '') return;

    let output: React.ReactNode = '';
    let type = 'info';

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="space-y-1">
            <div>Available commands:</div>
            <div><span className="text-primary">about</span>    - Learn about Kernel Guard</div>
            <div><span className="text-primary">projects</span> - View our open source projects</div>
            <div><span className="text-primary">contact</span>  - Get in touch</div>
            <div><span className="text-primary">clear</span>    - Clear terminal output</div>
            <div><span className="text-primary">sudo</span>     - Execute command as superuser</div>
            <div><span className="text-primary">whoami</span>   - Print current user</div>
          </div>
        );
        break;
      case 'about':
        output = 'Kernel Guard specializes in building high-performance, secure web applications and hardened backend architectures. We believe in security by design.';
        break;
      case 'projects':
        output = 'Initiating secure transfer to projects directory...';
        type = 'success';
        setTimeout(() => navigate('/projects'), 1000);
        break;
      case 'contact':
        output = 'Secure channel: iletisim@kernelguard.net';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'sudo':
        output = 'guest is not in the sudoers file. This incident will be reported.';
        type = 'error';
        break;
      case 'whoami':
        output = 'guest';
        break;
      default:
        output = `Command not found: ${trimmedCmd}. Type 'help' for a list of commands.`;
        type = 'error';
    }

    setHistory(prev => [...prev, { text: output, type }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div 
      className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-2xl shadow-primary/10 cursor-text"
      onClick={() => !isBooting && inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="bg-[#1a1a1a] border-b border-gray-800 px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-4 text-xs font-mono text-gray-500">kernel-guard@server:~</div>
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={scrollContainerRef}
        className="p-5 font-mono text-sm h-[320px] overflow-y-auto flex flex-col gap-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
      >
        {history.map((log, i) => {
          if (!log) return null;
          return (
            <div key={i} className="flex items-start gap-2 animate-fade-in">
              {log.type === 'cmd' && typeof log.text === 'string' && log.text.includes('init_secure_server') && <span className="text-primary shrink-0 mt-0.5">❯</span>}
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
          );
        })}
        
        {/* Interactive Input Area */}
        {!isBooting && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-primary shrink-0">kernel-guard@guest:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-gray-300 focus:ring-0 p-0 m-0"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
        )}

        {/* Blinking Cursor during boot */}
        {isBooting && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-primary shrink-0">❯</span>
            <span className="w-2 h-4 bg-gray-300/70 animate-pulse" />
          </div>
        )}
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
