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
    console.log(text.substring(0, 1500)); // only first 1500 chars to avoid buffer overflowing
  }
}
fetchAll();
