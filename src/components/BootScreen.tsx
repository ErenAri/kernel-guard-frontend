import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const bootSequence = [
    "KERNEL_GUARD_OS v2.4.1",
    "Initializing core modules...",
    "[OK] Memory integrity verified",
    "[OK] eBPF security hooks loaded",
    "[OK] Post-quantum crypto engine ready",
    "Establishing secure connection...",
    "Access Granted."
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 600); // Wait a bit before fading out
      }
    }, 250); // Speed of typing

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] bg-[#0a0a0a] text-[#00ff00] font-mono p-8 flex flex-col justify-end pointer-events-none"
    >
      <div className="max-w-3xl mb-12">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-2 text-sm md:text-base"
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-3 h-5 bg-[#00ff00] ml-2 align-middle"
        />
      </div>
    </motion.div>
  );
}
