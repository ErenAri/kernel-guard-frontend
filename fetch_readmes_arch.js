async function fetchAll() {
  const urls = [
    'https://raw.githubusercontent.com/Kernel-Guard/Aegis-BPF/main/README.md',
    'https://raw.githubusercontent.com/Kernel-Guard/post-quantum-messaging-app/main/README.md',
    'https://raw.githubusercontent.com/Kernel-Guard/CathodeX/main/README.md'
  ];
  for (const url of urls) {
    console.log(`\n\n--- Fetching: ${url} ---\n`);
    const res = await fetch(url);
    const text = await res.text();
    
    const lines = text.split('\n');
    let archIdx = lines.findIndex(l => l.toLowerCase().includes('architecture'));
    if (archIdx === -1) archIdx = 100;
    
    console.log(lines.slice(archIdx, archIdx + 50).join('\n'));
  }
}
fetchAll();
