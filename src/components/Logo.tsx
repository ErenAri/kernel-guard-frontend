import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export default function Logo({ className = '', dark = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center leading-none ${className}`}>
      <span 
        className="font-['Michroma'] font-bold text-[1.35rem] tracking-[0.35em] uppercase ml-3"
        style={{ 
          color: dark ? '#ffffff' : 'var(--logo-text)',
          textShadow: dark ? 'none' : 'var(--logo-shadow)'
        }}
      >
        Kernel
      </span>
      <span 
        className="font-['Michroma'] font-bold text-[2.75rem] tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-[#0047b3] via-[#0066cc] to-[#00aaff] uppercase mt-1"
        style={{ textShadow: '0.5px 0.5px 0px rgba(0, 102, 204, 0.2)' }}
      >
        Guard
      </span>
      <div className="h-[2px] w-[98%] bg-gradient-to-r from-transparent via-[#0066cc] to-transparent mt-2 opacity-80"></div>
    </div>
  );
}
