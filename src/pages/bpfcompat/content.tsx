/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Localized copy for the bpfcompat product page. Technical tokens (PASS/FAIL,
 * exit codes, CLI/YAML, kernel names, libbpf errors, JSON keys) are NOT
 * translated — they are literal tool output. Everything else is.
 */

import { createContext, useContext, type ReactNode } from 'react';
import type { Language } from '../../context/LanguageContext';

export interface BpStrings {
  breadcrumb: string;
  hero: {
    eyebrow: string;
    chipOpenSource: string; chipPreview: string;
    h1a: string; h1b: string; subline: string;
    ctaDemo: string; ctaGithub: string; ctaAction: string;
    termSimulated: string; termRunLink: string;
  };
  plain: { eyebrow: string; pre: string; emph: string; post: string };
  whatsNew: {
    eyebrow: string;
    heading: string;
    subline: string;
    items: Array<{ title: string; body: string }>;
    cta: string;
  };
  ways: {
    eyebrow: string;
    heading: string;
    subline: string;
    items: Array<{ title: string; time: string; note: string }>;
  };
  problem: {
    heading: string; subline: string;
    cards: Array<{ label: string; sentence: string }>;
  };
  stats: Array<{ value: string; label: string }>;
  how: { heading: string; stages: Array<{ title: string; body: string }> };
  evidence: {
    eyebrow: string; heading: string; subline: string;
    legendPartial: string;
    tallyRegression: string; tallyOk: string;
    selectHint: { pre: string; mid: string; post: string };
    drawerGate: string;
  };
  docs: {
    eyebrow: string; heading: string; subline: string;
    items: Array<{ title: string; desc: string }>;
    browseAll: string; readReadme: string; footnote: string;
    read: string;
  };
  adopt: {
    heading: string;
    copy: string; copied: string;
    exitCompatible: string; exitError: string; exitRegression: string;
    actionNote: string;
    webSteps: string[]; webButton: string; webNote: string;
  };
  install: {
    eyebrow: string;
    heading: string;
    subline: string;
    methods: Array<{ title: string; note: string; alt: string }>;
    runHeading: string;
    runNote: string;
    runAlt: string;
  };
  coverage: {
    eyebrow: string;
    heading: string;
    vmHeading: string;
    vmBody: string;
    distrosHeading: string;
    distrosBody: string;
    archNote: string;
    backportHeading: string;
    backportBody: string;
    backportExample: string;
  };
  library: {
    eyebrow: string;
    heading: string;
    subline: string;
    apiHeading: string;
    apiBody: string;
    points: Array<{ title: string; body: string }>;
    passHeading: string;
    passBody: string;
    passAlt: string;
    failHeading: string;
    failBody: string;
    failAlt: string;
    footnote: string;
  };
  repo: {
    title: string; measured: string; github: string; languageMix: string;
    labels: { primaryLanguage: string; license: string; latestRelease: string; kernelRange: string };
  };
  scope: {
    heading: string; isLabel: string; isNotLabel: string;
    isList: string[]; isNotList: string[]; footer: string;
  };
  why: { eyebrow: string; heading: string; body: string; sources: string };
  compare: {
    eyebrow: string; heading: string; note: string; colDiy: string;
    rows: Array<{ label: string; cells: [string, string, string, string] }>;
  };
  toolchain: {
    eyebrow: string; heading: string;
    beforeShip: string; atRuntime: string; youAreHere: string; viewProject: string;
    bpfDesc: string; aegisDesc: string; footer: string;
  };
  finalCta: { headline: string; ctaDemo: string; ctaSource: string; ctaDocs: string };
  sectionTitles: { howEyebrow: string; repoTitle: string };
}

const en: BpStrings = {
  breadcrumb: 'Open-source projects',
  hero: {
    chipOpenSource: 'Open source', chipPreview: 'Technical Preview',
    eyebrow: 'Open-source eBPF compatibility validation',
    h1a: 'Kernel compatibility,', h1b: 'proven before production.',
    subline: 'Test your eBPF programs on every Linux kernel you ship to — before your users do.',
    ctaDemo: 'Run the live demo', ctaGithub: 'View on GitHub', ctaAction: 'Use the GitHub Action',
    termSimulated: 'Simulated output, looping.', termRunLink: 'Run it yourself in the demo →',
  },
  whatsNew: {
    eyebrow: 'What’s new — v0.2.0',
    heading: 'The biggest release since launch.',
    subline: 'A new embeddable library API, a new OS family, and ARM64 — all proven on real kernels.',
    items: [
      { title: 'Library mode', body: 'Embed bpfcompat in Go: ValidateBeforeLoad does a real load on the node’s own kernel — no VM, no network — as a pre-load gate.' },
      { title: 'OpenShift / RHCOS', body: 'CoreOS boots via Ignition now. A real RHCOS evidence matrix spans OpenShift 4.14 / 4.16 / 4.18, including a BPF-LSM backport boundary.' },
      { title: 'ARM64 / aarch64', body: 'Real aarch64 VM boots: UEFI firmware plus cross-arch emulation, with RHCOS load+attach proven on ARM64.' },
      { title: 'Zero-config gadgets', body: 'Validate a published OCI gadget directly, with --quick (no matrix file), auto-sized maps, and program auto-typing.' },
    ],
    cta: 'Read the v0.2.0 release',
  },
  plain: {
    eyebrow: 'In plain terms',
    pre: 'eBPF programs run inside the Linux kernel. Different kernels accept different programs — so software that runs on one server can ',
    emph: 'fail to start', post: ' on another.',
  },
  ways: {
    eyebrow: 'Get started',
    heading: 'Three ways to use it — each in under 10 minutes.',
    subline: 'Run it locally, gate it in CI, or embed it in your loader. Same engine, real kernels.',
    items: [
      { title: 'Locally — CLI', time: '~5 min', note: 'Install and check a .bpf.o across kernels; --quick needs no matrix file.' },
      { title: 'In CI — GitHub Action', time: '~10 min', note: 'Drop the action into a workflow and fail the build when an artifact regresses.' },
      { title: 'Embedded — Go library', time: '~10 min', note: 'Import pkg/bpfcompat and gate a program before your loader ever loads it.' },
    ],
  },
  problem: {
    heading: 'None of these show up at compile time.',
    subline: "They show up on your customer's kernel — usually in production. Here is what the kernel actually says.",
    cards: [
      { label: 'Missing BTF', sentence: 'Older kernels ship without the type information your program needs to load.' },
      { label: 'CO-RE relocation', sentence: 'Kernel structs move between versions. A relocation that resolves on 6.8 can fail on 5.15.' },
      { label: 'Unsupported type', sentence: 'Newer map, program, and attach types are rejected on kernels that predate them.' },
    ],
  },
  stats: [
    { value: '5.x–6.x', label: 'Kernel range tested' },
    { value: 'x86_64 · ARM64', label: 'Architectures' },
    { value: '14', label: 'Enterprise kernels proven' },
    { value: 'exit 2', label: 'The CI gate' },
  ],
  how: {
    heading: 'Four stages. Real kernels. Real loads.',
    stages: [
      { title: 'Submit artifacts', body: 'Provide your compiled BPF objects, a manifest, and the kernel matrix your organization ships to.' },
      { title: 'Boot real kernels', body: 'Each kernel profile boots as a disposable QEMU/KVM virtual machine from a clean cloud image. Nothing touches your host.' },
      { title: 'Load inside the guest', body: 'A C/libbpf validator runs inside each VM and actually loads and attaches every program — no static guessing.' },
      { title: 'Read the verdict', body: 'Results aggregate into an artifact-by-kernel pass/fail matrix with structured reasons. Exit code 2 fails the build.' },
    ],
  },
  evidence: {
    eyebrow: 'The evidence',
    heading: 'The output is a verdict, not a log file.',
    subline: 'Every cell is a load that actually happened, on that exact kernel, in a real VM.',
    legendPartial: 'PARTIAL — loaded, attach limited',
    tallyRegression: 'compatibility regression — the build fails',
    tallyOk: 'all targets compatible',
    selectHint: { pre: 'Select a ', mid: ', or annotated ', post: ' cell to inspect its recorded evidence.' },
    drawerGate: 'gate',
  },
  docs: {
    eyebrow: 'Documentation',
    heading: 'Documented like production software.',
    subline: 'Architecture, the in-guest validator, kernel profiles, the security model, and the CI integration are all written down — and open.',
    items: [
      { title: 'Architecture', desc: 'How artifacts, disposable VMs, and the in-guest validator fit together.' },
      { title: 'In-guest validator', desc: 'The C/libbpf loader that runs inside each kernel and records evidence.' },
      { title: 'Kernel & distro profiles', desc: 'Every kernel image the matrix can target, x86_64 and ARM64.' },
      { title: 'Compatibility suites', desc: 'Describe a whole product release as a single suite to gate on.' },
      { title: 'API & Web UI', desc: 'Drive bpfcompat over HTTP or the browser; OpenAPI spec included.' },
      { title: 'Security & threat model', desc: 'What runs where, and the trust boundaries between host and guest.' },
    ],
    browseAll: 'Browse all documentation', readReadme: 'Read the README', read: 'Read',
    footnote: '20+ documents covering image pipeline, acceptance tests, CI proofs, Firecracker & upstream-kernel backends, and the runtime-decisioning roadmap.',
  },
  adopt: {
    heading: 'Three ways in. Each under ten minutes.',
    copy: 'Copy', copied: 'Copied',
    exitCompatible: 'compatible', exitError: 'execution error', exitRegression: 'regression — fail the pipeline',
    actionNote: 'On a compatibility regression the job exits with code 2 and writes the matrix to the GitHub Actions job summary, so reviewers see exactly which kernel broke.',
    webSteps: [
      'Pick your target environments — Enterprise, Ubuntu LTS, RHEL, Cloud, or Custom.',
      'Upload a compiled .bpf.o or a suite YAML, and choose a gate mode: load, load+attach, or load+attach+behavior.',
      'Run it and read the pass/fail matrix.',
    ],
    webButton: 'Open the Technical Preview',
    webNote: 'Runs on shared infrastructure and is rate-limited. No account required.',
  },
  install: {
    eyebrow: 'Install',
    heading: 'Install the CLI in one command.',
    subline: 'Three verified ways to get bpfcompat — a prebuilt release binary, a source build, or go install. Every command below was run on a real KVM host.',
    methods: [
      { title: 'Prebuilt release binary', note: 'Recommended. Ships the CLI and the in-guest validator, checksum-verified. Linux x86_64.', alt: 'Terminal: downloading the bpfcompat release binary, verifying its checksum, and printing the version.' },
      { title: 'From source', note: 'Builds the CLI and the validator, and stamps the binary with the real version.', alt: 'Terminal: cloning the repository and running make build and make validator-static.' },
      { title: 'go install', note: 'CLI only. Use the lowercase module path and the cmd/bpfcompat subpackage — the bare module path does not install.', alt: 'Terminal: installing bpfcompat with go install and printing the version.' },
    ],
    runHeading: 'Then run it across real kernels.',
    runNote: 'bpfcompat test boots each kernel in a disposable VM and returns a per-kernel pass/fail matrix — here failing on 5.4 (ring buffer support lands in 5.8) and passing on 6.1 and 6.8.',
    runAlt: 'Terminal: a bpfcompat validation run showing ubuntu-20.04-5.4 fail, debian-12-6.1 pass, and ubuntu-24.04-6.8 pass.',
  },
  coverage: {
    eyebrow: 'Coverage',
    heading: 'Real distros. Real kernels. Inside a VM.',
    vmHeading: 'Full VM validation — not static analysis.',
    vmBody: 'bpfcompat does not parse your object and guess. For each target it boots the real distro cloud image and its actual kernel as a disposable QEMU/KVM virtual machine, copies a C/libbpf validator into the guest, and runs the real load and attach inside that kernel. The verdict is what the kernel itself accepted or rejected — verifier log, BTF, CO-RE relocation, map and program support — not a heuristic.',
    distrosHeading: 'Distributions covered',
    distrosBody: 'A curated, multi-distro, multi-architecture matrix — the kernels enterprises and cloud fleets actually run. RHEL itself is a bring-your-own subscription image; AlmaLinux, Rocky, and CentOS Stream are the public, ABI-compatible rebuilds used as the reproducible stand-in.',
    archNote: 'x86_64 · ARM64 · upstream mainline',
    backportHeading: 'Kernel version ≠ feature support.',
    backportBody: 'Enterprise distros heavily backport eBPF features onto old kernel bases, so the version number alone predicts nothing. Because bpfcompat boots the real vendor kernel, this is tested directly instead of inferred.',
    backportExample: 'A ring-buffer program fails on Ubuntu’s vanilla 5.4 (ring buffer lands upstream in 5.8) yet passes on AlmaLinux 8’s backported 4.18 — and Amazon Linux 2’s 4.14, with no embedded BTF, still loads and attaches.',
  },
  library: {
    eyebrow: 'Library mode',
    heading: 'Validate before you load.',
    subline: 'The same engine, embeddable. ValidateBeforeLoad does a real load of a compiled eBPF object against the node’s own running kernel — no VM, no network — so a loader like bpfman can gate a program before it ever reaches the kernel.',
    apiHeading: 'One call, before the load path.',
    apiBody: 'Import the Go package and ask one question: will this object load on this kernel? The verdict comes from the real verifier, in milliseconds, with no QEMU and nothing fetched over the network.',
    points: [
      { title: 'In-process, no VM', body: 'A real bpf() load against the local running kernel — the node it runs on is the node the program will load on, so the running kernel is the target. Sub-millisecond, not a static guess.' },
      { title: 'Air-gap safe', body: 'The static validator is embedded in the binary; nothing is downloaded at runtime. Host loading is opt-in behind a build tag, off by default.' },
      { title: 'Machine-readable verdict', body: 'On rejection you get a stable classification code and the verifier log tail — branch on the code, surface the reason, fall back to another artifact.' },
    ],
    passHeading: 'Loads cleanly — in milliseconds.',
    passBody: 'A compatible object returns OK=true with the kernel it was checked against. Fast enough to sit in front of every load.',
    passAlt: 'Terminal: ValidateBeforeLoad returning OK=true for a compatible object in 3 milliseconds.',
    failHeading: 'Caught before load — with the reason.',
    failBody: 'An incompatible object returns OK=false with a classification code and the kernel’s own verifier message — caught at the gate, not at runtime.',
    failAlt: 'Terminal: ValidateBeforeLoad returning OK=false with a CO-RE relocation failure classification and verifier log.',
    footnote: 'Library mode is gated behind a build tag and intended for privileged pre-load callers such as bpfman. Pre-1.0 / experimental.',
  },
  repo: {
    title: 'Repository evidence', measured: 'Measured from the public repository.', github: 'GitHub', languageMix: 'Language mix',
    labels: { primaryLanguage: 'Primary language', license: 'License', latestRelease: 'Latest release', kernelRange: 'Kernel range tested' },
  },
  scope: {
    heading: 'What it is — and what comes next.',
    isLabel: 'Available today', isNotLabel: 'On the roadmap',
    isList: [
      'Real load-and-attach evidence from inside real kernels — a local .bpf.o or a published gadget by OCI reference',
      'Run it locally or as a CI gate — deterministic exit codes, ships as a GitHub Action',
      'A multi-distro, multi-arch kernel matrix (5.x–6.x, x86_64 + ARM64)',
      'Apache-2.0, fully open source',
    ],
    isNotList: [
      'A production runtime loader — today it validates; guided deploy is planned',
      'A multi-tenant SaaS — the hosted UI is a single-tenant Technical Preview',
      'Runtime decisioning — available as an experimental, operator-gated preview',
    ],
    footer: 'This release is deliberately scoped: a dependable compatibility gate first, with runtime delivery layered on as it hardens. Not just a label — the evidence and docs are in the repo.',
  },
  why: {
    eyebrow: 'Why this exists',
    heading: 'Every serious eBPF team ends up building this.',
    body: 'Cilium and Tetragon boot their probes across kernels with little-vm-helper. Falco maintains a Firecracker-based kernel-testing framework. There is no off-the-shelf way to prove a compiled BPF object loads across the kernels you ship to — so teams build their own VM harness, or find out in production. bpfcompat packages that capability so you can run it locally or as a drop-in CI gate.',
    sources: 'Public references',
  },
  compare: {
    eyebrow: 'How it compares',
    heading: 'Where bpfcompat fits.',
    note: 'These are excellent tools. bpfcompat does not replace the lower-level building blocks — it packages the compatibility-gate use case so you do not assemble it yourself.',
    colDiy: 'Roll your own (vmtest)',
    rows: [
      { label: 'What it is', cells: ['Drop-in compat gate + report', 'VM building block', 'Falco driver validator', 'DIY VM harness'] },
      { label: 'Boots real kernels in VMs', cells: ['✓', '✓', '✓', '✓'] },
      { label: 'Curated multi-distro matrix included', cells: ['✓', '~', '~', '–'] },
      { label: 'Per-kernel verifier · BTF · classification in report', cells: ['✓', '–', '~', '–'] },
      { label: 'One-line GitHub Action + job summary', cells: ['✓', '✓', '~', '–'] },
      { label: 'Best when', cells: ['you want a drop-in gate + shareable evidence', 'you already live in Cilium tooling', 'you validate Falco drivers', 'you need full control / custom kernels'] },
    ],
  },
  toolchain: {
    eyebrow: 'Kernel Guard eBPF toolchain',
    heading: 'One toolchain for the kernel boundary.',
    beforeShip: 'Before you ship', atRuntime: 'At runtime', youAreHere: 'you are here', viewProject: 'View project',
    bpfDesc: 'Prove your eBPF programs load on every kernel you support.',
    aegisDesc: 'Enforce security policy in the kernel with eBPF LSM hooks.',
    footer: 'Prove compatibility first. Enforce policy second.',
  },
  finalCta: {
    headline: 'Stop discovering kernel incompatibilities in production.',
    ctaDemo: 'Run the live demo', ctaSource: 'View source on GitHub', ctaDocs: 'Read the docs',
  },
  sectionTitles: { howEyebrow: 'Pipeline', repoTitle: 'Repository evidence' },
};

const tr: BpStrings = {
  breadcrumb: 'Açık kaynak projeler',
  hero: {
    chipOpenSource: 'Açık kaynak', chipPreview: 'Teknik Önizleme',
    eyebrow: 'Açık kaynaklı eBPF uyumluluk doğrulaması',
    h1a: 'Çekirdek uyumluluğu,', h1b: 'üretimden önce kanıtlanır.',
    subline: 'eBPF programlarınızı gönderim yaptığınız her Linux çekirdeğinde test edin — kullanıcılarınızdan önce.',
    ctaDemo: 'Canlı demoyu çalıştır', ctaGithub: "GitHub'da görüntüle", ctaAction: "GitHub Action'ı kullan",
    termSimulated: 'Benzetilmiş çıktı, döngüde.', termRunLink: 'Kendiniz demoda çalıştırın →',
  },
  whatsNew: {
    eyebrow: 'Yenilikler — v0.2.0',
    heading: 'Lansmandan bu yana en büyük sürüm.',
    subline: 'Yeni gömülebilir kütüphane API’si, yeni bir işletim sistemi ailesi ve ARM64 — hepsi gerçek çekirdeklerde kanıtlandı.',
    items: [
      { title: 'Kütüphane modu', body: 'bpfcompat’i Go içinde gömün: ValidateBeforeLoad, düğümün kendi çekirdeğinde gerçek bir yükleme yapar — sanal makine yok, ağ yok — yükleme öncesi denetim olarak.' },
      { title: 'OpenShift / RHCOS', body: 'CoreOS artık Ignition ile açılıyor. Gerçek bir RHCOS kanıt matrisi OpenShift 4.14 / 4.16 / 4.18’i kapsıyor; bir BPF-LSM geriye-port sınırı dahil.' },
      { title: 'ARM64 / aarch64', body: 'Gerçek aarch64 sanal makine açılışları: UEFI ürün yazılımı ve çapraz-mimari öykünme; RHCOS yükle+bağla ARM64’te kanıtlandı.' },
      { title: 'Sıfır yapılandırmalı gadget’lar', body: 'Yayınlanmış bir OCI gadget’ını doğrudan doğrulayın; --quick (matris dosyası yok), otomatik boyutlanan haritalar ve program otomatik tiplemesi.' },
    ],
    cta: 'v0.2.0 sürümünü oku',
  },
  plain: {
    eyebrow: 'Sade bir dille',
    pre: 'eBPF programları Linux çekirdeğinin içinde çalışır. Farklı çekirdekler farklı programları kabul eder — bu yüzden bir sunucuda çalışan yazılım başka birinde ',
    emph: 'başlatılamayabilir', post: '.',
  },
  ways: {
    eyebrow: 'Başlayın',
    heading: 'Kullanmanın üç yolu — her biri 10 dakikadan kısa.',
    subline: 'Yerelde çalıştırın, CI’da denetleyin veya yükleyicinize gömün. Aynı motor, gerçek çekirdekler.',
    items: [
      { title: 'Yerelde — CLI', time: '~5 dk', note: 'Bir .bpf.o’yu çekirdekler arasında kurun ve kontrol edin; --quick matris dosyası gerektirmez.' },
      { title: 'CI’da — GitHub Action', time: '~10 dk', note: 'Action’ı bir iş akışına ekleyin ve bir yapı bozulduğunda derlemeyi başarısız kılın.' },
      { title: 'Gömülü — Go kütüphanesi', time: '~10 dk', note: 'pkg/bpfcompat’i içe aktarın ve yükleyiciniz yüklemeden önce programı denetleyin.' },
    ],
  },
  problem: {
    heading: 'Bunların hiçbiri derleme zamanında ortaya çıkmaz.',
    subline: 'Bunlar müşterinizin çekirdeğinde ortaya çıkar — genellikle üretimde. İşte çekirdeğin gerçekte söyledikleri.',
    cards: [
      { label: 'Eksik BTF', sentence: 'Eski çekirdekler, programınızın yüklenmesi için gereken tür bilgisi olmadan gelir.' },
      { label: 'CO-RE yer değiştirmesi', sentence: 'Çekirdek yapıları sürümler arasında değişir. 6.8 üzerinde çözülen bir yer değiştirme 5.15 üzerinde başarısız olabilir.' },
      { label: 'Desteklenmeyen tür', sentence: 'Daha yeni map, program ve attach türleri, bunlardan önceki çekirdeklerde reddedilir.' },
    ],
  },
  stats: [
    { value: '5.x–6.x', label: 'Test edilen çekirdek aralığı' },
    { value: 'x86_64 · ARM64', label: 'Mimariler' },
    { value: '14', label: 'Kanıtlanan kurumsal çekirdek' },
    { value: 'exit 2', label: 'CI kapısı' },
  ],
  how: {
    heading: 'Dört aşama. Gerçek çekirdekler. Gerçek yüklemeler.',
    stages: [
      { title: 'Yapıtları gönderin', body: 'Derlenmiş BPF nesnelerinizi, bir manifesto dosyasını ve kuruluşunuzun gönderim yaptığı çekirdek matrisini sağlayın.' },
      { title: 'Gerçek çekirdekleri başlatın', body: 'Her çekirdek profili, temiz bir bulut imajından tek kullanımlık bir QEMU/KVM sanal makinesi olarak başlar. Ana makinenize hiçbir şey dokunmaz.' },
      { title: 'Konuğun içinde yükleyin', body: 'Her VM içinde bir C/libbpf doğrulayıcısı çalışır ve her programı gerçekten yükleyip bağlar — statik tahmin yok.' },
      { title: 'Kararı okuyun', body: 'Sonuçlar, yapılandırılmış nedenlerle bir yapıt-çekirdek geçti/kaldı matrisine toplanır. Çıkış kodu 2 derlemeyi başarısız kılar.' },
    ],
  },
  evidence: {
    eyebrow: 'Kanıt',
    heading: 'Çıktı bir günlük dosyası değil, bir karardır.',
    subline: 'Her hücre, tam olarak o çekirdekte, gerçek bir VM içinde gerçekten gerçekleşmiş bir yüklemedir.',
    legendPartial: 'KISMİ — yüklendi, bağlama sınırlı',
    tallyRegression: 'uyumluluk gerilemesi — derleme başarısız olur',
    tallyOk: 'tüm hedefler uyumlu',
    selectHint: { pre: 'Kayıtlı kanıtı incelemek için bir ', mid: ' veya açıklamalı bir ', post: ' hücresi seçin.' },
    drawerGate: 'kapı',
  },
  docs: {
    eyebrow: 'Belgeler',
    heading: 'Üretim yazılımı gibi belgelendi.',
    subline: 'Mimari, konuk içi doğrulayıcı, çekirdek profilleri, güvenlik modeli ve CI entegrasyonu — hepsi yazılı ve açık.',
    items: [
      { title: 'Mimari', desc: 'Yapıtların, tek kullanımlık VM’lerin ve konuk içi doğrulayıcının nasıl bir araya geldiği.' },
      { title: 'Konuk içi doğrulayıcı', desc: 'Her çekirdeğin içinde çalışan ve kanıt kaydeden C/libbpf yükleyicisi.' },
      { title: 'Çekirdek ve dağıtım profilleri', desc: 'Matrisin hedefleyebileceği her çekirdek imajı, x86_64 ve ARM64.' },
      { title: 'Uyumluluk süitleri', desc: 'Tüm bir ürün sürümünü, denetlenecek tek bir süit olarak tanımlayın.' },
      { title: 'API ve Web Arayüzü', desc: "bpfcompat'ı HTTP veya tarayıcı üzerinden çalıştırın; OpenAPI şeması dahil." },
      { title: 'Güvenlik ve tehdit modeli', desc: 'Neyin nerede çalıştığı ve ana makine ile konuk arasındaki güven sınırları.' },
    ],
    browseAll: 'Tüm belgelere göz atın', readReadme: "README'yi okuyun", read: 'Oku',
    footnote: 'İmaj hattını, kabul testlerini, CI kanıtlarını, Firecracker ve üst akış çekirdek arka uçlarını ve çalışma zamanı karar yol haritasını kapsayan 20+ belge.',
  },
  adopt: {
    heading: 'Üç giriş yolu. Her biri on dakikadan kısa.',
    copy: 'Kopyala', copied: 'Kopyalandı',
    exitCompatible: 'uyumlu', exitError: 'yürütme hatası', exitRegression: 'gerileme — hattı durdurun',
    actionNote: 'Uyumluluk gerilemesinde iş, çıkış kodu 2 ile sonlanır ve matrisi GitHub Actions iş özetine yazar; böylece inceleyenler hangi çekirdeğin bozulduğunu tam olarak görür.',
    webSteps: [
      'Hedef ortamlarınızı seçin — Enterprise, Ubuntu LTS, RHEL, Cloud veya Özel.',
      'Derlenmiş bir .bpf.o veya bir süit YAML yükleyin ve bir kapı modu seçin: load, load+attach veya load+attach+behavior.',
      'Çalıştırın ve geçti/kaldı matrisini okuyun.',
    ],
    webButton: 'Teknik Önizlemeyi aç',
    webNote: 'Paylaşılan altyapıda çalışır ve hız sınırlıdır. Hesap gerekmez.',
  },
  install: {
    eyebrow: 'Kurulum',
    heading: "CLI'yi tek komutla kurun.",
    subline: "bpfcompat'ı edinmenin üç doğrulanmış yolu — hazır sürüm ikilisi, kaynaktan derleme veya go install. Aşağıdaki her komut gerçek bir KVM ana makinesinde çalıştırıldı.",
    methods: [
      { title: 'Hazır sürüm ikilisi', note: 'Önerilen. CLI ile konuk içi doğrulayıcıyı, sağlama toplamı doğrulanmış olarak getirir. Linux x86_64.', alt: 'Terminal: bpfcompat sürüm ikilisini indirme, sağlama toplamını doğrulama ve sürümü yazdırma.' },
      { title: 'Kaynaktan', note: "CLI ve doğrulayıcıyı derler, ikiliye gerçek sürümü işler.", alt: "Terminal: depoyu klonlama ve make build ile make validator-static çalıştırma." },
      { title: 'go install', note: "Yalnızca CLI. Küçük harfli modül yolunu ve cmd/bpfcompat alt paketini kullanın — yalın modül yolu kurulmaz.", alt: 'Terminal: go install ile bpfcompat kurma ve sürümü yazdırma.' },
    ],
    runHeading: 'Sonra gerçek çekirdeklerde çalıştırın.',
    runNote: 'bpfcompat test her çekirdeği tek kullanımlık bir VM içinde başlatır ve çekirdek başına geçti/kaldı matrisi döndürür — burada 5.4 üzerinde başarısız (ring buffer desteği 5.8 ile gelir), 6.1 ve 6.8 üzerinde geçer.',
    runAlt: 'Terminal: ubuntu-20.04-5.4 kaldı, debian-12-6.1 geçti ve ubuntu-24.04-6.8 geçti gösteren bir bpfcompat doğrulama çalıştırması.',
  },
  coverage: {
    eyebrow: 'Kapsam',
    heading: 'Gerçek dağıtımlar. Gerçek çekirdekler. VM içinde.',
    vmHeading: 'Tam VM doğrulaması — statik analiz değil.',
    vmBody: 'bpfcompat nesnenizi ayrıştırıp tahmin yürütmez. Her hedef için gerçek dağıtımın bulut imajını ve gerçek çekirdeğini tek kullanımlık bir QEMU/KVM sanal makinesi olarak başlatır, konuğa bir C/libbpf doğrulayıcı kopyalar ve gerçek yükleme ile bağlamayı o çekirdeğin içinde çalıştırır. Karar, çekirdeğin kendisinin kabul ya da reddettiği şeydir — doğrulayıcı günlüğü, BTF, CO-RE yer değiştirmesi, map ve program desteği — bir sezgi değil.',
    distrosHeading: 'Kapsanan dağıtımlar',
    distrosBody: 'Özenle seçilmiş, çok dağıtımlı, çok mimarili bir matris — kurumların ve bulut filolarının gerçekten çalıştırdığı çekirdekler. RHEL’in kendisi abonelik gerektiren, kendi imajınızı getirdiğiniz bir imajdır; AlmaLinux, Rocky ve CentOS Stream, yeniden üretilebilir karşılık olarak kullanılan herkese açık, ABI uyumlu yeniden derlemelerdir.',
    archNote: 'x86_64 · ARM64 · upstream mainline',
    backportHeading: 'Çekirdek sürümü ≠ özellik desteği.',
    backportBody: 'Kurumsal dağıtımlar eBPF özelliklerini eski çekirdek tabanlarına yoğun biçimde geri taşır (backport), bu yüzden sürüm numarası tek başına hiçbir şey söylemez. bpfcompat gerçek satıcı çekirdeğini başlattığı için bu, çıkarımla değil doğrudan test edilir.',
    backportExample: 'Bir ring buffer programı Ubuntu’nun vanilla 5.4’ünde başarısız olur (ring buffer upstream’e 5.8’de gelir) ama AlmaLinux 8’in geri taşınmış 4.18’inde geçer — ve Amazon Linux 2’nin gömülü BTF’si olmayan 4.14’ü hâlâ yüklenip bağlanır.',
  },
  library: {
    eyebrow: 'Kütüphane modu',
    heading: 'Yüklemeden önce doğrulayın.',
    subline: 'Aynı motor, gömülebilir. ValidateBeforeLoad, derlenmiş bir eBPF nesnesini düğümün kendi çalışan çekirdeğine karşı gerçekten yükler — sanal makine yok, ağ yok — böylece bpfman gibi bir yükleyici, bir programı çekirdeğe ulaşmadan önce denetleyebilir.',
    apiHeading: 'Yükleme yolundan önce tek bir çağrı.',
    apiBody: 'Go paketini içe aktarın ve tek soruyu sorun: bu nesne bu çekirdekte yüklenecek mi? Karar, QEMU olmadan ve ağdan hiçbir şey indirilmeden, milisaniyeler içinde gerçek doğrulayıcıdan gelir.',
    points: [
      { title: 'Süreç içi, sanal makine yok', body: 'Yerel çalışan çekirdeğe karşı gerçek bir bpf() yüklemesi — çalıştığı düğüm, programın yükleneceği düğümdür, dolayısıyla çalışan çekirdek hedeftir. Statik bir tahmin değil, milisaniyenin altında.' },
      { title: 'Hava boşluğuna uygun', body: 'Statik doğrulayıcı ikili dosyaya gömülüdür; çalışma zamanında hiçbir şey indirilmez. Ana makinede yükleme bir derleme etiketiyle isteğe bağlıdır, varsayılan olarak kapalıdır.' },
      { title: 'Makinece okunabilir karar', body: 'Reddedildiğinde kararlı bir sınıflandırma kodu ve doğrulayıcı günlüğünün sonu gelir — koda göre dallanın, nedeni gösterin, başka bir yapıta geri dönün.' },
    ],
    passHeading: 'Temiz yüklenir — milisaniyeler içinde.',
    passBody: 'Uyumlu bir nesne, kontrol edildiği çekirdekle birlikte OK=true döndürür. Her yüklemenin önünde durabilecek kadar hızlı.',
    passAlt: 'Terminal: ValidateBeforeLoad, uyumlu bir nesne için 3 milisaniyede OK=true döndürüyor.',
    failHeading: 'Yüklemeden önce yakalanır — nedeniyle birlikte.',
    failBody: 'Uyumsuz bir nesne, bir sınıflandırma kodu ve çekirdeğin kendi doğrulayıcı mesajıyla OK=false döndürür — çalışma zamanında değil, kapıda yakalanır.',
    failAlt: 'Terminal: ValidateBeforeLoad, CO-RE yeniden konumlandırma hatası sınıflandırması ve doğrulayıcı günlüğüyle OK=false döndürüyor.',
    footnote: 'Kütüphane modu bir derleme etiketiyle sınırlandırılmıştır ve bpfman gibi ayrıcalıklı, yükleme öncesi çağıranlar için tasarlanmıştır. 1.0 öncesi / deneysel.',
  },
  repo: {
    title: 'Depo kanıtı', measured: 'Herkese açık depodan ölçüldü.', github: 'GitHub', languageMix: 'Dil dağılımı',
    labels: { primaryLanguage: 'Birincil dil', license: 'Lisans', latestRelease: 'Son sürüm', kernelRange: 'Test edilen çekirdek aralığı' },
  },
  scope: {
    heading: 'Ne olduğu — ve sırada ne olduğu.',
    isLabel: 'Bugün mevcut', isNotLabel: 'Yol haritasında',
    isList: [
      'Gerçek çekirdeklerin içinden gerçek yükleme-ve-bağlama kanıtı — yerel bir .bpf.o veya OCI referansıyla yayımlanmış bir gadget',
      'İster yerelde ister CI kapısı olarak çalıştırın — belirlenimci çıkış kodları, GitHub Action olarak gelir',
      'Çok dağıtımlı, çok mimarili bir çekirdek matrisi (5.x–6.x, x86_64 + ARM64)',
      'Apache-2.0, tümüyle açık kaynak',
    ],
    isNotList: [
      'Üretim çalışma zamanı yükleyicisi — bugün doğrular; rehberli dağıtım planlanıyor',
      'Çok kiracılı bir SaaS değil — barındırılan arayüz tek kiracılı bir Teknik Önizleme',
      'Çalışma zamanı kararı — deneysel, operatör korumalı bir önizleme olarak mevcut',
    ],
    footer: 'Bu sürüm bilinçli olarak kapsamlandı: önce güvenilir bir uyumluluk kapısı, olgunlaştıkça eklenen çalışma zamanı teslimi. Yalnızca bir etiket değil — kanıt ve belgeler depoda.',
  },
  why: {
    eyebrow: 'Bu neden var',
    heading: 'Ciddi her eBPF ekibi eninde sonunda bunu kendi kuruyor.',
    body: 'Cilium ve Tetragon, probe’larını little-vm-helper ile birçok çekirdekte başlatır. Falco, Firecracker tabanlı bir kernel-testing çerçevesi sürdürür. Derlenmiş bir BPF nesnesinin gönderim yaptığınız çekirdeklerde yüklendiğini kanıtlamanın hazır bir yolu yoktur — bu yüzden ekipler kendi VM düzeneklerini kurar ya da bunu üretimde öğrenir. bpfcompat, bu yeteneği hazır bir CI kapısı olarak paketler.',
    sources: 'Herkese açık kaynaklar',
  },
  compare: {
    eyebrow: 'Nasıl karşılaştırılır',
    heading: 'bpfcompat nereye oturur.',
    note: 'Bunlar mükemmel araçlar. bpfcompat, alt seviye yapı taşlarının yerini almaz — uyumluluk kapısı senaryosunu, kendiniz kurmayasınız diye paketler.',
    colDiy: 'Kendin kur (vmtest)',
    rows: [
      { label: 'Ne olduğu', cells: ['Hazır uyumluluk kapısı + rapor', 'VM yapı taşı', 'Falco sürücü doğrulayıcı', 'El yapımı VM düzeneği'] },
      { label: 'Gerçek çekirdekleri VM’lerde başlatır', cells: ['✓', '✓', '✓', '✓'] },
      { label: 'Hazır çok dağıtımlı çekirdek matrisi', cells: ['✓', '~', '~', '–'] },
      { label: 'Rapor başına doğrulayıcı · BTF · sınıflandırma', cells: ['✓', '–', '~', '–'] },
      { label: 'Tek satırlık GitHub Action + iş özeti', cells: ['✓', '✓', '~', '–'] },
      { label: 'En uygun olduğu durum', cells: ['hazır bir kapı + paylaşılabilir kanıt istiyorsanız', 'zaten Cilium araçlarının içindeyseniz', 'Falco sürücülerini doğruluyorsanız', 'tam kontrol / özel çekirdekler istiyorsanız'] },
    ],
  },
  toolchain: {
    eyebrow: 'Kernel Guard eBPF araç zinciri',
    heading: 'Çekirdek sınırı için tek bir araç zinciri.',
    beforeShip: 'Göndermeden önce', atRuntime: 'Çalışma zamanında', youAreHere: 'buradasınız', viewProject: 'Projeyi görüntüle',
    bpfDesc: 'eBPF programlarınızın desteklediğiniz her çekirdekte yüklendiğini kanıtlayın.',
    aegisDesc: 'eBPF LSM kancalarıyla çekirdekte güvenlik politikası uygulayın.',
    footer: 'Önce uyumluluğu kanıtlayın. Sonra politikayı uygulayın.',
  },
  finalCta: {
    headline: 'Çekirdek uyumsuzluklarını üretimde keşfetmeyi bırakın.',
    ctaDemo: 'Canlı demoyu çalıştır', ctaSource: "Kaynağı GitHub'da görüntüle", ctaDocs: 'Belgeleri okuyun',
  },
  sectionTitles: { howEyebrow: 'İşlem hattı', repoTitle: 'Depo kanıtı' },
};

const de: BpStrings = {
  breadcrumb: 'Open-Source-Projekte',
  hero: {
    chipOpenSource: 'Open Source', chipPreview: 'Technische Vorschau',
    eyebrow: 'Open-Source-Validierung der eBPF-Kompatibilität',
    h1a: 'Kernel-Kompatibilität,', h1b: 'vor der Produktion bewiesen.',
    subline: 'Teste deine eBPF-Programme auf jedem Linux-Kernel, an den du auslieferst — bevor es deine Nutzer tun.',
    ctaDemo: 'Live-Demo starten', ctaGithub: 'Auf GitHub ansehen', ctaAction: 'GitHub Action verwenden',
    termSimulated: 'Simulierte Ausgabe, in Schleife.', termRunLink: 'Selbst in der Demo ausführen →',
  },
  whatsNew: {
    eyebrow: 'Neu — v0.2.0',
    heading: 'Das größte Release seit dem Start.',
    subline: 'Eine neue einbettbare Bibliotheks-API, eine neue OS-Familie und ARM64 — alles auf echten Kerneln bewiesen.',
    items: [
      { title: 'Bibliotheksmodus', body: 'bpfcompat in Go einbetten: ValidateBeforeLoad lädt echt auf dem Kernel des Knotens — ohne VM, ohne Netzwerk — als Pre-Load-Gate.' },
      { title: 'OpenShift / RHCOS', body: 'CoreOS bootet jetzt via Ignition. Eine echte RHCOS-Evidenzmatrix umfasst OpenShift 4.14 / 4.16 / 4.18, inklusive einer BPF-LSM-Backport-Grenze.' },
      { title: 'ARM64 / aarch64', body: 'Echte aarch64-VM-Boots: UEFI-Firmware plus Cross-Arch-Emulation, mit auf ARM64 bewiesenem RHCOS load+attach.' },
      { title: 'Zero-Config-Gadgets', body: 'Ein veröffentlichtes OCI-Gadget direkt validieren, mit --quick (keine Matrixdatei), automatisch dimensionierten Maps und Programm-Auto-Typing.' },
    ],
    cta: 'Release v0.2.0 lesen',
  },
  plain: {
    eyebrow: 'Einfach gesagt',
    pre: 'eBPF-Programme laufen im Linux-Kernel. Verschiedene Kernel akzeptieren verschiedene Programme — Software, die auf einem Server läuft, kann auf einem anderen ',
    emph: 'nicht starten', post: '.',
  },
  ways: {
    eyebrow: 'Loslegen',
    heading: 'Drei Wege zur Nutzung — jeder in unter 10 Minuten.',
    subline: 'Lokal ausführen, in CI absichern oder in den Loader einbetten. Dieselbe Engine, echte Kernel.',
    items: [
      { title: 'Lokal — CLI', time: '~5 Min', note: 'Ein .bpf.o installieren und über Kernel prüfen; --quick braucht keine Matrixdatei.' },
      { title: 'In CI — GitHub Action', time: '~10 Min', note: 'Die Action in einen Workflow einfügen und den Build bei einer Regression scheitern lassen.' },
      { title: 'Eingebettet — Go-Bibliothek', time: '~10 Min', note: 'pkg/bpfcompat importieren und ein Programm prüfen, bevor der Loader es lädt.' },
    ],
  },
  problem: {
    heading: 'Nichts davon zeigt sich zur Kompilierzeit.',
    subline: 'Es zeigt sich auf dem Kernel deines Kunden — meist in der Produktion. Das sagt der Kernel tatsächlich.',
    cards: [
      { label: 'Fehlendes BTF', sentence: 'Ältere Kernel kommen ohne die Typinformationen, die dein Programm zum Laden braucht.' },
      { label: 'CO-RE-Relokation', sentence: 'Kernel-Strukturen verschieben sich zwischen Versionen. Eine Relokation, die auf 6.8 aufgeht, kann auf 5.15 scheitern.' },
      { label: 'Nicht unterstützter Typ', sentence: 'Neuere Map-, Programm- und Attach-Typen werden auf älteren Kerneln abgelehnt.' },
    ],
  },
  stats: [
    { value: '5.x–6.x', label: 'Getesteter Kernel-Bereich' },
    { value: 'x86_64 · ARM64', label: 'Architekturen' },
    { value: '14', label: 'Geprüfte Enterprise-Kernel' },
    { value: 'exit 2', label: 'Das CI-Gate' },
  ],
  how: {
    heading: 'Vier Stufen. Echte Kernel. Echte Ladevorgänge.',
    stages: [
      { title: 'Artefakte einreichen', body: 'Übergib deine kompilierten BPF-Objekte, ein Manifest und die Kernel-Matrix, an die deine Organisation ausliefert.' },
      { title: 'Echte Kernel starten', body: 'Jedes Kernel-Profil startet als wegwerfbare QEMU/KVM-VM aus einem sauberen Cloud-Image. Dein Host bleibt unberührt.' },
      { title: 'Im Gast laden', body: 'Ein C/libbpf-Validator läuft in jeder VM und lädt und attacht jedes Programm wirklich — kein statisches Raten.' },
      { title: 'Das Urteil lesen', body: 'Ergebnisse werden zu einer Artefakt-Kernel-Pass/Fail-Matrix mit strukturierten Gründen verdichtet. Exit-Code 2 lässt den Build scheitern.' },
    ],
  },
  evidence: {
    eyebrow: 'Der Nachweis',
    heading: 'Das Ergebnis ist ein Urteil, keine Logdatei.',
    subline: 'Jede Zelle ist ein Ladevorgang, der wirklich stattfand — auf genau diesem Kernel, in einer echten VM.',
    legendPartial: 'TEILWEISE — geladen, Attach eingeschränkt',
    tallyRegression: 'Kompatibilitätsregression — der Build scheitert',
    tallyOk: 'alle Ziele kompatibel',
    selectHint: { pre: 'Wähle eine ', mid: ' oder annotierte ', post: '-Zelle, um den aufgezeichneten Nachweis zu sehen.' },
    drawerGate: 'Gate',
  },
  docs: {
    eyebrow: 'Dokumentation',
    heading: 'Dokumentiert wie Produktionssoftware.',
    subline: 'Architektur, der Gast-Validator, Kernel-Profile, das Sicherheitsmodell und die CI-Integration sind alle dokumentiert — und offen.',
    items: [
      { title: 'Architektur', desc: 'Wie Artefakte, wegwerfbare VMs und der Gast-Validator zusammenspielen.' },
      { title: 'Gast-Validator', desc: 'Der C/libbpf-Loader, der in jedem Kernel läuft und Nachweise aufzeichnet.' },
      { title: 'Kernel- & Distro-Profile', desc: 'Jedes Kernel-Image, das die Matrix ansteuern kann, x86_64 und ARM64.' },
      { title: 'Kompatibilitäts-Suites', desc: 'Beschreibe ein ganzes Produkt-Release als eine einzige Suite zum Gaten.' },
      { title: 'API & Web-UI', desc: 'Steuere bpfcompat per HTTP oder Browser; OpenAPI-Spezifikation inklusive.' },
      { title: 'Sicherheits- & Bedrohungsmodell', desc: 'Was wo läuft und die Vertrauensgrenzen zwischen Host und Gast.' },
    ],
    browseAll: 'Gesamte Dokumentation ansehen', readReadme: 'README lesen', read: 'Lesen',
    footnote: 'Über 20 Dokumente zu Image-Pipeline, Akzeptanztests, CI-Nachweisen, Firecracker- & Upstream-Kernel-Backends und der Roadmap zur Laufzeit-Entscheidung.',
  },
  adopt: {
    heading: 'Drei Wege hinein. Jeder in unter zehn Minuten.',
    copy: 'Kopieren', copied: 'Kopiert',
    exitCompatible: 'kompatibel', exitError: 'Ausführungsfehler', exitRegression: 'Regression — Pipeline stoppen',
    actionNote: 'Bei einer Kompatibilitätsregression endet der Job mit Exit-Code 2 und schreibt die Matrix in die GitHub-Actions-Job-Zusammenfassung, sodass Prüfer genau sehen, welcher Kernel brach.',
    webSteps: [
      'Wähle deine Zielumgebungen — Enterprise, Ubuntu LTS, RHEL, Cloud oder Benutzerdefiniert.',
      'Lade eine kompilierte .bpf.o oder ein Suite-YAML hoch und wähle einen Gate-Modus: load, load+attach oder load+attach+behavior.',
      'Führe es aus und lies die Pass/Fail-Matrix.',
    ],
    webButton: 'Technische Vorschau öffnen',
    webNote: 'Läuft auf geteilter Infrastruktur und ist ratenbegrenzt. Kein Konto erforderlich.',
  },
  install: {
    eyebrow: 'Installation',
    heading: 'Installiere die CLI mit einem Befehl.',
    subline: 'Drei geprüfte Wege zu bpfcompat — ein vorgefertigtes Release-Binary, ein Quellcode-Build oder go install. Jeder Befehl unten wurde auf einem echten KVM-Host ausgeführt.',
    methods: [
      { title: 'Vorgefertigtes Release-Binary', note: 'Empfohlen. Liefert die CLI und den Gast-Validator, prüfsummenverifiziert. Linux x86_64.', alt: 'Terminal: Herunterladen des bpfcompat-Release-Binaries, Prüfsummen-Verifikation und Ausgabe der Version.' },
      { title: 'Aus dem Quellcode', note: 'Baut die CLI und den Validator und versieht das Binary mit der echten Version.', alt: 'Terminal: Klonen des Repositorys und Ausführen von make build und make validator-static.' },
      { title: 'go install', note: 'Nur die CLI. Nutze den kleingeschriebenen Modulpfad und das cmd/bpfcompat-Unterpaket — der bloße Modulpfad lässt sich nicht installieren.', alt: 'Terminal: Installation von bpfcompat mit go install und Ausgabe der Version.' },
    ],
    runHeading: 'Dann auf echten Kerneln ausführen.',
    runNote: 'bpfcompat test startet jeden Kernel in einer wegwerfbaren VM und liefert eine Pass/Fail-Matrix pro Kernel — hier mit Fehler auf 5.4 (Ring-Buffer-Unterstützung kommt mit 5.8) und Erfolg auf 6.1 und 6.8.',
    runAlt: 'Terminal: ein bpfcompat-Validierungslauf mit ubuntu-20.04-5.4 fehlgeschlagen, debian-12-6.1 bestanden und ubuntu-24.04-6.8 bestanden.',
  },
  coverage: {
    eyebrow: 'Abdeckung',
    heading: 'Echte Distros. Echte Kernel. In einer VM.',
    vmHeading: 'Vollständige VM-Validierung — keine statische Analyse.',
    vmBody: 'bpfcompat parst dein Objekt nicht und rät. Für jedes Ziel startet es das echte Distro-Cloud-Image und dessen tatsächlichen Kernel als wegwerfbare QEMU/KVM-VM, kopiert einen C/libbpf-Validator in den Gast und führt das echte Laden und Attachen in diesem Kernel aus. Das Urteil ist, was der Kernel selbst akzeptiert oder abgelehnt hat — Verifier-Log, BTF, CO-RE-Relokation, Map- und Programmunterstützung — keine Heuristik.',
    distrosHeading: 'Abgedeckte Distributionen',
    distrosBody: 'Eine kuratierte Multi-Distro-, Multi-Arch-Matrix — die Kernel, die Unternehmen und Cloud-Flotten wirklich betreiben. RHEL selbst ist ein abonnementpflichtiges Bring-your-own-Image; AlmaLinux, Rocky und CentOS Stream sind die öffentlichen, ABI-kompatiblen Rebuilds, die als reproduzierbarer Ersatz dienen.',
    archNote: 'x86_64 · ARM64 · upstream mainline',
    backportHeading: 'Kernel-Version ≠ Feature-Unterstützung.',
    backportBody: 'Enterprise-Distros backporten eBPF-Features stark auf alte Kernel-Basen, daher sagt die Versionsnummer allein nichts aus. Da bpfcompat den echten Hersteller-Kernel startet, wird dies direkt getestet statt abgeleitet.',
    backportExample: 'Ein Ring-Buffer-Programm scheitert auf Ubuntus Vanilla-5.4 (Ring-Buffer kommt upstream mit 5.8), läuft aber auf AlmaLinux 8s backportetem 4.18 — und Amazon Linux 2s 4.14, ohne eingebettetes BTF, lädt und attacht weiterhin.',
  },
  library: {
    eyebrow: 'Bibliotheksmodus',
    heading: 'Validieren, bevor Sie laden.',
    subline: 'Dieselbe Engine, einbettbar. ValidateBeforeLoad lädt ein kompiliertes eBPF-Objekt tatsächlich gegen den laufenden Kernel des Knotens — ohne VM, ohne Netzwerk — sodass ein Loader wie bpfman ein Programm prüfen kann, bevor es überhaupt den Kernel erreicht.',
    apiHeading: 'Ein Aufruf, vor dem Ladepfad.',
    apiBody: 'Importieren Sie das Go-Paket und stellen Sie eine Frage: Lädt dieses Objekt auf diesem Kernel? Das Urteil kommt vom echten Verifier, in Millisekunden, ohne QEMU und ohne Netzwerk-Download.',
    points: [
      { title: 'Im Prozess, ohne VM', body: 'Ein echter bpf()-Ladevorgang gegen den lokal laufenden Kernel — der Knoten, auf dem er läuft, ist der Knoten, auf dem das Programm geladen wird, also ist der laufende Kernel das Ziel. Im Submillisekundenbereich, keine statische Vermutung.' },
      { title: 'Air-Gap-tauglich', body: 'Der statische Verifier ist in die Binärdatei eingebettet; zur Laufzeit wird nichts heruntergeladen. Das Laden auf dem Host ist über ein Build-Tag optional und standardmäßig deaktiviert.' },
      { title: 'Maschinenlesbares Urteil', body: 'Bei Ablehnung erhalten Sie einen stabilen Klassifizierungscode und das Ende des Verifier-Logs — verzweigen Sie nach dem Code, zeigen Sie den Grund, weichen Sie auf ein anderes Artefakt aus.' },
    ],
    passHeading: 'Lädt sauber — in Millisekunden.',
    passBody: 'Ein kompatibles Objekt liefert OK=true mit dem geprüften Kernel zurück. Schnell genug, um vor jedem Ladevorgang zu stehen.',
    passAlt: 'Terminal: ValidateBeforeLoad liefert OK=true für ein kompatibles Objekt in 3 Millisekunden.',
    failHeading: 'Vor dem Laden abgefangen — mit dem Grund.',
    failBody: 'Ein inkompatibles Objekt liefert OK=false mit einem Klassifizierungscode und der Verifier-Meldung des Kernels — am Tor abgefangen, nicht zur Laufzeit.',
    failAlt: 'Terminal: ValidateBeforeLoad liefert OK=false mit einer CO-RE-Relokationsfehler-Klassifizierung und Verifier-Log.',
    footnote: 'Der Bibliotheksmodus ist über ein Build-Tag abgesichert und für privilegierte Pre-Load-Aufrufer wie bpfman gedacht. Vor 1.0 / experimentell.',
  },
  repo: {
    title: 'Repository-Nachweis', measured: 'Gemessen aus dem öffentlichen Repository.', github: 'GitHub', languageMix: 'Sprachmix',
    labels: { primaryLanguage: 'Primäre Sprache', license: 'Lizenz', latestRelease: 'Neueste Version', kernelRange: 'Getesteter Kernel-Bereich' },
  },
  scope: {
    heading: 'Was es ist — und was als Nächstes kommt.',
    isLabel: 'Heute verfügbar', isNotLabel: 'Auf der Roadmap',
    isList: [
      'Echter Lade- und Attach-Nachweis aus echten Kerneln — eine lokale .bpf.o oder ein per OCI-Referenz veröffentlichtes Gadget',
      'Lokal oder als CI-Gate ausführen — deterministische Exit-Codes, als GitHub Action verfügbar',
      'Eine Multi-Distro-, Multi-Arch-Kernel-Matrix (5.x–6.x, x86_64 + ARM64)',
      'Apache-2.0, vollständig Open Source',
    ],
    isNotList: [
      'Ein Produktions-Laufzeit-Loader — heute validiert es; geführtes Deployment ist geplant',
      'Ein mandantenfähiges SaaS — die gehostete UI ist eine Single-Tenant-Vorschau',
      'Laufzeit-Entscheidung — als experimentelle, operator-geschützte Vorschau verfügbar',
    ],
    footer: 'Diese Version ist bewusst abgegrenzt: zuerst ein verlässliches Kompatibilitäts-Gate, danach schrittweise Laufzeit-Auslieferung, sobald sie reift. Kein bloßes Label — Nachweise und Doku liegen im Repo.',
  },
  why: {
    eyebrow: 'Warum es das gibt',
    heading: 'Jedes ernsthafte eBPF-Team baut das irgendwann selbst.',
    body: 'Cilium und Tetragon starten ihre Probes mit little-vm-helper über viele Kernel. Falco pflegt ein Firecracker-basiertes kernel-testing-Framework. Es gibt keinen fertigen Weg zu beweisen, dass ein kompiliertes BPF-Objekt auf den Kerneln lädt, für die du auslieferst — also bauen Teams ihr eigenes VM-Harness oder erfahren es in der Produktion. bpfcompat verpackt diese Fähigkeit als sofort einsetzbares CI-Gate.',
    sources: 'Öffentliche Referenzen',
  },
  compare: {
    eyebrow: 'Im Vergleich',
    heading: 'Wo bpfcompat hineinpasst.',
    note: 'Das sind hervorragende Werkzeuge. bpfcompat ersetzt die Low-Level-Bausteine nicht — es verpackt den Kompatibilitäts-Gate-Anwendungsfall, damit du ihn nicht selbst zusammenbaust.',
    colDiy: 'Selbst gebaut (vmtest)',
    rows: [
      { label: 'Was es ist', cells: ['Sofort einsetzbares Gate + Report', 'VM-Baustein', 'Falco-Treiber-Validator', 'DIY-VM-Harness'] },
      { label: 'Startet echte Kernel in VMs', cells: ['✓', '✓', '✓', '✓'] },
      { label: 'Kuratierte Multi-Distro-Matrix enthalten', cells: ['✓', '~', '~', '–'] },
      { label: 'Verifier · BTF · Klassifizierung im Report', cells: ['✓', '–', '~', '–'] },
      { label: 'Ein-Zeilen-GitHub-Action + Job-Summary', cells: ['✓', '✓', '~', '–'] },
      { label: 'Am besten, wenn', cells: ['du ein sofort einsetzbares Gate + teilbare Nachweise willst', 'du bereits in Cilium-Tooling lebst', 'du Falco-Treiber validierst', 'du volle Kontrolle / eigene Kernel brauchst'] },
    ],
  },
  toolchain: {
    eyebrow: 'Kernel Guard eBPF-Toolchain',
    heading: 'Eine Toolchain für die Kernel-Grenze.',
    beforeShip: 'Vor dem Ausliefern', atRuntime: 'Zur Laufzeit', youAreHere: 'du bist hier', viewProject: 'Projekt ansehen',
    bpfDesc: 'Beweise, dass deine eBPF-Programme auf jedem unterstützten Kernel laden.',
    aegisDesc: 'Setze Sicherheitsrichtlinien im Kernel mit eBPF-LSM-Hooks durch.',
    footer: 'Erst Kompatibilität beweisen. Dann Richtlinien durchsetzen.',
  },
  finalCta: {
    headline: 'Schluss damit, Kernel-Inkompatibilitäten erst in der Produktion zu entdecken.',
    ctaDemo: 'Live-Demo starten', ctaSource: 'Quellcode auf GitHub ansehen', ctaDocs: 'Dokumentation lesen',
  },
  sectionTitles: { howEyebrow: 'Pipeline', repoTitle: 'Repository-Nachweis' },
};

const es: BpStrings = {
  breadcrumb: 'Proyectos de código abierto',
  hero: {
    chipOpenSource: 'Código abierto', chipPreview: 'Vista previa técnica',
    eyebrow: 'Validación de compatibilidad de eBPF de código abierto',
    h1a: 'Compatibilidad de kernel,', h1b: 'probada antes de producción.',
    subline: 'Prueba tus programas eBPF en cada kernel de Linux al que entregas — antes que tus usuarios.',
    ctaDemo: 'Ejecutar la demo en vivo', ctaGithub: 'Ver en GitHub', ctaAction: 'Usar la GitHub Action',
    termSimulated: 'Salida simulada, en bucle.', termRunLink: 'Ejecútalo tú mismo en la demo →',
  },
  whatsNew: {
    eyebrow: 'Novedades — v0.2.0',
    heading: 'La mayor versión desde el lanzamiento.',
    subline: 'Una nueva API de biblioteca integrable, una nueva familia de SO y ARM64 — todo probado en kernels reales.',
    items: [
      { title: 'Modo biblioteca', body: 'Integra bpfcompat en Go: ValidateBeforeLoad hace una carga real en el propio kernel del nodo — sin VM, sin red — como verificación previa a la carga.' },
      { title: 'OpenShift / RHCOS', body: 'CoreOS ahora arranca vía Ignition. Una matriz de evidencia real de RHCOS abarca OpenShift 4.14 / 4.16 / 4.18, incluida una frontera de backport de BPF-LSM.' },
      { title: 'ARM64 / aarch64', body: 'Arranques reales de VM aarch64: firmware UEFI más emulación entre arquitecturas, con load+attach de RHCOS probado en ARM64.' },
      { title: 'Gadgets sin configuración', body: 'Valida un gadget OCI publicado directamente, con --quick (sin archivo de matriz), mapas autodimensionados y autotipado de programas.' },
    ],
    cta: 'Leer la versión v0.2.0',
  },
  plain: {
    eyebrow: 'En pocas palabras',
    pre: 'Los programas eBPF se ejecutan dentro del kernel de Linux. Cada kernel acepta programas distintos, así que el software que funciona en un servidor puede ',
    emph: 'no arrancar', post: ' en otro.',
  },
  ways: {
    eyebrow: 'Empezar',
    heading: 'Tres formas de usarlo — cada una en menos de 10 minutos.',
    subline: 'Ejecútalo localmente, contrólalo en CI o intégralo en tu cargador. Mismo motor, kernels reales.',
    items: [
      { title: 'Localmente — CLI', time: '~5 min', note: 'Instala y comprueba un .bpf.o en varios kernels; --quick no necesita archivo de matriz.' },
      { title: 'En CI — GitHub Action', time: '~10 min', note: 'Añade la action a un workflow y haz fallar la build cuando un artefacto regrese.' },
      { title: 'Integrado — biblioteca Go', time: '~10 min', note: 'Importa pkg/bpfcompat y valida un programa antes de que tu cargador lo cargue.' },
    ],
  },
  problem: {
    heading: 'Nada de esto aparece en tiempo de compilación.',
    subline: 'Aparece en el kernel de tu cliente — normalmente en producción. Esto es lo que dice el kernel realmente.',
    cards: [
      { label: 'BTF ausente', sentence: 'Los kernels antiguos vienen sin la información de tipos que tu programa necesita para cargar.' },
      { label: 'Reubicación CO-RE', sentence: 'Las estructuras del kernel cambian entre versiones. Una reubicación que funciona en 6.8 puede fallar en 5.15.' },
      { label: 'Tipo no soportado', sentence: 'Los tipos de map, programa y attach más nuevos se rechazan en kernels anteriores.' },
    ],
  },
  stats: [
    { value: '5.x–6.x', label: 'Rango de kernels probado' },
    { value: 'x86_64 · ARM64', label: 'Arquitecturas' },
    { value: '14', label: 'Kernels enterprise probados' },
    { value: 'exit 2', label: 'La compuerta de CI' },
  ],
  how: {
    heading: 'Cuatro etapas. Kernels reales. Cargas reales.',
    stages: [
      { title: 'Envía los artefactos', body: 'Aporta tus objetos BPF compilados, un manifiesto y la matriz de kernels a la que entrega tu organización.' },
      { title: 'Arranca kernels reales', body: 'Cada perfil de kernel arranca como una VM QEMU/KVM desechable desde una imagen de nube limpia. Nada toca tu host.' },
      { title: 'Carga dentro del invitado', body: 'Un validador en C/libbpf se ejecuta dentro de cada VM y carga y conecta realmente cada programa — sin conjeturas estáticas.' },
      { title: 'Lee el veredicto', body: 'Los resultados se agregan en una matriz artefacto-por-kernel de pasa/falla con motivos estructurados. El código de salida 2 hace fallar la compilación.' },
    ],
  },
  evidence: {
    eyebrow: 'La evidencia',
    heading: 'La salida es un veredicto, no un archivo de registro.',
    subline: 'Cada celda es una carga que ocurrió de verdad, en ese kernel exacto, en una VM real.',
    legendPartial: 'PARCIAL — cargado, attach limitado',
    tallyRegression: 'regresión de compatibilidad — la compilación falla',
    tallyOk: 'todos los objetivos compatibles',
    selectHint: { pre: 'Selecciona una celda ', mid: ', o una ', post: ' anotada para ver su evidencia registrada.' },
    drawerGate: 'compuerta',
  },
  docs: {
    eyebrow: 'Documentación',
    heading: 'Documentado como software de producción.',
    subline: 'La arquitectura, el validador en el invitado, los perfiles de kernel, el modelo de seguridad y la integración de CI están escritos — y abiertos.',
    items: [
      { title: 'Arquitectura', desc: 'Cómo encajan los artefactos, las VM desechables y el validador en el invitado.' },
      { title: 'Validador en el invitado', desc: 'El cargador C/libbpf que se ejecuta dentro de cada kernel y registra evidencia.' },
      { title: 'Perfiles de kernel y distro', desc: 'Cada imagen de kernel que la matriz puede probar, x86_64 y ARM64.' },
      { title: 'Suites de compatibilidad', desc: 'Describe toda una versión de producto como una sola suite para usar como compuerta.' },
      { title: 'API e interfaz web', desc: 'Controla bpfcompat por HTTP o desde el navegador; incluye la especificación OpenAPI.' },
      { title: 'Modelo de seguridad y amenazas', desc: 'Qué se ejecuta dónde y los límites de confianza entre host e invitado.' },
    ],
    browseAll: 'Ver toda la documentación', readReadme: 'Leer el README', read: 'Leer',
    footnote: 'Más de 20 documentos sobre el pipeline de imágenes, pruebas de aceptación, evidencias de CI, backends de Firecracker y kernel upstream, y la hoja de ruta de decisión en tiempo de ejecución.',
  },
  adopt: {
    heading: 'Tres formas de empezar. Cada una en menos de diez minutos.',
    copy: 'Copiar', copied: 'Copiado',
    exitCompatible: 'compatible', exitError: 'error de ejecución', exitRegression: 'regresión — detén la pipeline',
    actionNote: 'Ante una regresión de compatibilidad, el job termina con código de salida 2 y escribe la matriz en el resumen del job de GitHub Actions, para que los revisores vean exactamente qué kernel se rompió.',
    webSteps: [
      'Elige tus entornos de destino — Enterprise, Ubuntu LTS, RHEL, Cloud o Personalizado.',
      'Sube un .bpf.o compilado o un YAML de suite y elige un modo de compuerta: load, load+attach o load+attach+behavior.',
      'Ejecútalo y lee la matriz de pasa/falla.',
    ],
    webButton: 'Abrir la Vista previa técnica',
    webNote: 'Se ejecuta en infraestructura compartida y con límite de uso. No requiere cuenta.',
  },
  install: {
    eyebrow: 'Instalación',
    heading: 'Instala la CLI con un solo comando.',
    subline: 'Tres formas verificadas de obtener bpfcompat — un binario de release precompilado, una compilación desde el código, o go install. Cada comando de abajo se ejecutó en un host KVM real.',
    methods: [
      { title: 'Binario de release precompilado', note: 'Recomendado. Incluye la CLI y el validador en el invitado, verificados por checksum. Linux x86_64.', alt: 'Terminal: descarga del binario de release de bpfcompat, verificación de su checksum e impresión de la versión.' },
      { title: 'Desde el código', note: 'Compila la CLI y el validador, y marca el binario con la versión real.', alt: 'Terminal: clonación del repositorio y ejecución de make build y make validator-static.' },
      { title: 'go install', note: 'Solo la CLI. Usa la ruta de módulo en minúsculas y el subpaquete cmd/bpfcompat — la ruta de módulo a secas no se instala.', alt: 'Terminal: instalación de bpfcompat con go install e impresión de la versión.' },
    ],
    runHeading: 'Luego ejecútalo en kernels reales.',
    runNote: 'bpfcompat test arranca cada kernel en una VM desechable y devuelve una matriz de pasa/falla por kernel — aquí falla en 5.4 (el soporte de ring buffer llega en 5.8) y pasa en 6.1 y 6.8.',
    runAlt: 'Terminal: una ejecución de validación de bpfcompat que muestra ubuntu-20.04-5.4 falla, debian-12-6.1 pasa y ubuntu-24.04-6.8 pasa.',
  },
  coverage: {
    eyebrow: 'Cobertura',
    heading: 'Distros reales. Kernels reales. Dentro de una VM.',
    vmHeading: 'Validación completa en VM, no análisis estático.',
    vmBody: 'bpfcompat no analiza tu objeto para adivinar. Para cada objetivo arranca la imagen de nube real de la distro y su kernel real como una VM QEMU/KVM desechable, copia un validador en C/libbpf dentro del invitado y ejecuta la carga y el attach reales dentro de ese kernel. El veredicto es lo que el propio kernel aceptó o rechazó — registro del verificador, BTF, reubicación CO-RE, soporte de map y programa — no una heurística.',
    distrosHeading: 'Distribuciones cubiertas',
    distrosBody: 'Una matriz curada, multi-distro y multiarquitectura — los kernels que de verdad ejecutan las empresas y las flotas en la nube. RHEL en sí es una imagen de suscripción que aportas tú; AlmaLinux, Rocky y CentOS Stream son las recompilaciones públicas y compatibles a nivel de ABI que se usan como sustituto reproducible.',
    archNote: 'x86_64 · ARM64 · upstream mainline',
    backportHeading: 'La versión del kernel ≠ soporte de funciones.',
    backportBody: 'Las distros empresariales hacen muchos backports de funciones eBPF sobre bases de kernel antiguas, así que el número de versión por sí solo no predice nada. Como bpfcompat arranca el kernel real del proveedor, esto se prueba directamente en lugar de inferirse.',
    backportExample: 'Un programa de ring buffer falla en el 5.4 vanilla de Ubuntu (el ring buffer llega upstream en 5.8) pero pasa en el 4.18 con backport de AlmaLinux 8 — y el 4.14 de Amazon Linux 2, sin BTF embebido, sigue cargando y haciendo attach.',
  },
  library: {
    eyebrow: 'Modo biblioteca',
    heading: 'Valida antes de cargar.',
    subline: 'El mismo motor, integrable. ValidateBeforeLoad carga de verdad un objeto eBPF compilado contra el propio kernel en ejecución del nodo — sin VM, sin red — para que un cargador como bpfman pueda validar un programa antes de que llegue al kernel.',
    apiHeading: 'Una llamada, antes de la ruta de carga.',
    apiBody: 'Importa el paquete de Go y haz una sola pregunta: ¿se cargará este objeto en este kernel? El veredicto viene del verificador real, en milisegundos, sin QEMU y sin descargar nada de la red.',
    points: [
      { title: 'En proceso, sin VM', body: 'Una carga bpf() real contra el kernel local en ejecución — el nodo donde se ejecuta es el nodo donde se cargará el programa, así que el kernel en ejecución es el objetivo. En menos de un milisegundo, no una suposición estática.' },
      { title: 'Apto para entornos aislados', body: 'El verificador estático está incrustado en el binario; no se descarga nada en tiempo de ejecución. La carga en el host es opcional tras una etiqueta de compilación y está desactivada por defecto.' },
      { title: 'Veredicto legible por máquina', body: 'Al rechazar obtienes un código de clasificación estable y el final del registro del verificador — ramifica según el código, muestra el motivo, recurre a otro artefacto.' },
    ],
    passHeading: 'Carga limpiamente — en milisegundos.',
    passBody: 'Un objeto compatible devuelve OK=true con el kernel contra el que se comprobó. Lo bastante rápido para ir delante de cada carga.',
    passAlt: 'Terminal: ValidateBeforeLoad devolviendo OK=true para un objeto compatible en 3 milisegundos.',
    failHeading: 'Detectado antes de cargar — con el motivo.',
    failBody: 'Un objeto incompatible devuelve OK=false con un código de clasificación y el propio mensaje del verificador del kernel — detectado en la puerta, no en tiempo de ejecución.',
    failAlt: 'Terminal: ValidateBeforeLoad devolviendo OK=false con una clasificación de fallo de reubicación CO-RE y el registro del verificador.',
    footnote: 'El modo biblioteca está protegido tras una etiqueta de compilación y pensado para llamadores privilegiados de pre-carga como bpfman. Anterior a 1.0 / experimental.',
  },
  repo: {
    title: 'Evidencia del repositorio', measured: 'Medido a partir del repositorio público.', github: 'GitHub', languageMix: 'Mezcla de lenguajes',
    labels: { primaryLanguage: 'Lenguaje principal', license: 'Licencia', latestRelease: 'Última versión', kernelRange: 'Rango de kernels probado' },
  },
  scope: {
    heading: 'Lo que es — y lo que viene después.',
    isLabel: 'Disponible hoy', isNotLabel: 'En la hoja de ruta',
    isList: [
      'Evidencia real de carga y attach desde dentro de kernels reales — un .bpf.o local o un gadget publicado por referencia OCI',
      'Ejecútalo en local o como compuerta de CI — códigos de salida deterministas, se entrega como GitHub Action',
      'Una matriz de kernels multi-distro y multi-arquitectura (5.x–6.x, x86_64 + ARM64)',
      'Apache-2.0, totalmente de código abierto',
    ],
    isNotList: [
      'Un cargador de ejecución de producción — hoy valida; el despliegue guiado está planificado',
      'Un SaaS multiinquilino — la interfaz alojada es una Vista previa técnica de un solo inquilino',
      'Decisión en tiempo de ejecución — disponible como vista previa experimental, con control de operador',
    ],
    footer: 'Esta versión tiene un alcance deliberado: primero una compuerta de compatibilidad fiable y, después, la entrega en ejecución a medida que madura. No es solo una etiqueta — la evidencia y la documentación están en el repositorio.',
  },
  why: {
    eyebrow: 'Por qué existe',
    heading: 'Todo equipo de eBPF serio acaba construyendo esto.',
    body: 'Cilium y Tetragon arrancan sus probes en muchos kernels con little-vm-helper. Falco mantiene un framework de kernel-testing basado en Firecracker. No existe una forma lista para usar de demostrar que un objeto BPF compilado carga en los kernels a los que despliegas — así que los equipos construyen su propio arnés de VM, o lo descubren en producción. bpfcompat empaqueta esa capacidad como una compuerta de CI lista para usar.',
    sources: 'Referencias públicas',
  },
  compare: {
    eyebrow: 'Cómo se compara',
    heading: 'Dónde encaja bpfcompat.',
    note: 'Son herramientas excelentes. bpfcompat no reemplaza los bloques de bajo nivel — empaqueta el caso de uso de la compuerta de compatibilidad para que no lo montes tú mismo.',
    colDiy: 'Hazlo tú mismo (vmtest)',
    rows: [
      { label: 'Qué es', cells: ['Compuerta lista + informe', 'Bloque de VM', 'Validador de drivers de Falco', 'Arnés de VM casero'] },
      { label: 'Arranca kernels reales en VMs', cells: ['✓', '✓', '✓', '✓'] },
      { label: 'Matriz multi-distro curada incluida', cells: ['✓', '~', '~', '–'] },
      { label: 'Verificador · BTF · clasificación en el informe', cells: ['✓', '–', '~', '–'] },
      { label: 'GitHub Action de una línea + resumen del job', cells: ['✓', '✓', '~', '–'] },
      { label: 'Mejor cuando', cells: ['quieres una compuerta lista + evidencia compartible', 'ya vives en el tooling de Cilium', 'validas drivers de Falco', 'necesitas control total / kernels propios'] },
    ],
  },
  toolchain: {
    eyebrow: 'Cadena de herramientas eBPF de Kernel Guard',
    heading: 'Una cadena de herramientas para la frontera del kernel.',
    beforeShip: 'Antes de entregar', atRuntime: 'En tiempo de ejecución', youAreHere: 'estás aquí', viewProject: 'Ver proyecto',
    bpfDesc: 'Demuestra que tus programas eBPF cargan en cada kernel que soportas.',
    aegisDesc: 'Aplica políticas de seguridad en el kernel con hooks LSM de eBPF.',
    footer: 'Primero demuestra la compatibilidad. Luego aplica la política.',
  },
  finalCta: {
    headline: 'Deja de descubrir incompatibilidades de kernel en producción.',
    ctaDemo: 'Ejecutar la demo en vivo', ctaSource: 'Ver el código en GitHub', ctaDocs: 'Leer la documentación',
  },
  sectionTitles: { howEyebrow: 'Pipeline', repoTitle: 'Evidencia del repositorio' },
};

const fr: BpStrings = {
  breadcrumb: 'Projets open source',
  hero: {
    chipOpenSource: 'Open source', chipPreview: 'Aperçu technique',
    eyebrow: 'Validation de compatibilité eBPF open source',
    h1a: 'Compatibilité noyau,', h1b: 'prouvée avant la production.',
    subline: 'Testez vos programmes eBPF sur chaque noyau Linux auquel vous livrez — avant vos utilisateurs.',
    ctaDemo: 'Lancer la démo en direct', ctaGithub: 'Voir sur GitHub', ctaAction: 'Utiliser la GitHub Action',
    termSimulated: 'Sortie simulée, en boucle.', termRunLink: 'Essayez-le vous-même dans la démo →',
  },
  whatsNew: {
    eyebrow: 'Nouveautés — v0.2.0',
    heading: 'La plus grande version depuis le lancement.',
    subline: 'Une nouvelle API de bibliothèque intégrable, une nouvelle famille d’OS et ARM64 — le tout prouvé sur de vrais noyaux.',
    items: [
      { title: 'Mode bibliothèque', body: 'Intégrez bpfcompat en Go : ValidateBeforeLoad effectue un vrai chargement sur le noyau du nœud — sans VM, sans réseau — comme contrôle avant chargement.' },
      { title: 'OpenShift / RHCOS', body: 'CoreOS démarre désormais via Ignition. Une vraie matrice de preuves RHCOS couvre OpenShift 4.14 / 4.16 / 4.18, dont une frontière de rétroportage BPF-LSM.' },
      { title: 'ARM64 / aarch64', body: 'De vrais démarrages de VM aarch64 : firmware UEFI plus émulation inter-architecture, avec load+attach RHCOS prouvé sur ARM64.' },
      { title: 'Gadgets sans configuration', body: 'Validez directement un gadget OCI publié, avec --quick (sans fichier de matrice), des maps autodimensionnées et l’auto-typage des programmes.' },
    ],
    cta: 'Lire la version v0.2.0',
  },
  plain: {
    eyebrow: 'En clair',
    pre: 'Les programmes eBPF s’exécutent dans le noyau Linux. Chaque noyau accepte des programmes différents — un logiciel qui tourne sur un serveur peut donc ',
    emph: 'ne pas démarrer', post: ' sur un autre.',
  },
  ways: {
    eyebrow: 'Démarrer',
    heading: 'Trois façons de l’utiliser — chacune en moins de 10 minutes.',
    subline: 'Exécutez-le en local, contrôlez-le en CI, ou intégrez-le à votre chargeur. Même moteur, vrais noyaux.',
    items: [
      { title: 'En local — CLI', time: '~5 min', note: 'Installez et vérifiez un .bpf.o sur plusieurs noyaux ; --quick ne nécessite aucun fichier de matrice.' },
      { title: 'En CI — GitHub Action', time: '~10 min', note: 'Ajoutez l’action à un workflow et faites échouer le build en cas de régression d’un artefact.' },
      { title: 'Intégré — bibliothèque Go', time: '~10 min', note: 'Importez pkg/bpfcompat et validez un programme avant que votre chargeur ne le charge.' },
    ],
  },
  problem: {
    heading: 'Rien de tout cela n’apparaît à la compilation.',
    subline: 'Cela apparaît sur le noyau de votre client — généralement en production. Voici ce que dit réellement le noyau.',
    cards: [
      { label: 'BTF manquant', sentence: 'Les noyaux plus anciens n’embarquent pas les informations de type dont votre programme a besoin pour se charger.' },
      { label: 'Relocalisation CO-RE', sentence: 'Les structures du noyau changent entre versions. Une relocalisation qui aboutit sur 6.8 peut échouer sur 5.15.' },
      { label: 'Type non pris en charge', sentence: 'Les nouveaux types de map, de programme et d’attach sont rejetés par les noyaux antérieurs.' },
    ],
  },
  stats: [
    { value: '5.x–6.x', label: 'Plage de noyaux testée' },
    { value: 'x86_64 · ARM64', label: 'Architectures' },
    { value: '14', label: 'Noyaux enterprise validés' },
    { value: 'exit 2', label: 'La barrière CI' },
  ],
  how: {
    heading: 'Quatre étapes. De vrais noyaux. De vrais chargements.',
    stages: [
      { title: 'Soumettez les artefacts', body: 'Fournissez vos objets BPF compilés, un manifeste et la matrice de noyaux que votre organisation livre.' },
      { title: 'Démarrez de vrais noyaux', body: 'Chaque profil de noyau démarre comme une VM QEMU/KVM jetable à partir d’une image cloud propre. Rien ne touche votre hôte.' },
      { title: 'Chargez dans l’invité', body: 'Un validateur C/libbpf s’exécute dans chaque VM et charge et attache réellement chaque programme — aucune supposition statique.' },
      { title: 'Lisez le verdict', body: 'Les résultats sont agrégés en une matrice artefact-par-noyau succès/échec avec des motifs structurés. Le code de sortie 2 fait échouer le build.' },
    ],
  },
  evidence: {
    eyebrow: 'La preuve',
    heading: 'La sortie est un verdict, pas un fichier de logs.',
    subline: 'Chaque case est un chargement qui a réellement eu lieu, sur ce noyau précis, dans une vraie VM.',
    legendPartial: 'PARTIEL — chargé, attach limité',
    tallyRegression: 'régression de compatibilité — le build échoue',
    tallyOk: 'toutes les cibles compatibles',
    selectHint: { pre: 'Sélectionnez une case ', mid: ', ou une case ', post: ' annotée pour voir sa preuve enregistrée.' },
    drawerGate: 'barrière',
  },
  docs: {
    eyebrow: 'Documentation',
    heading: 'Documenté comme un logiciel de production.',
    subline: 'L’architecture, le validateur dans l’invité, les profils de noyau, le modèle de sécurité et l’intégration CI sont tous écrits — et ouverts.',
    items: [
      { title: 'Architecture', desc: 'Comment s’articulent les artefacts, les VM jetables et le validateur dans l’invité.' },
      { title: 'Validateur dans l’invité', desc: 'Le chargeur C/libbpf qui s’exécute dans chaque noyau et enregistre les preuves.' },
      { title: 'Profils de noyau et de distro', desc: 'Chaque image de noyau que la matrice peut cibler, x86_64 et ARM64.' },
      { title: 'Suites de compatibilité', desc: 'Décrivez toute une version de produit comme une seule suite servant de barrière.' },
      { title: 'API et interface web', desc: 'Pilotez bpfcompat en HTTP ou via le navigateur ; spécification OpenAPI incluse.' },
      { title: 'Modèle de sécurité et de menaces', desc: 'Ce qui s’exécute où, et les frontières de confiance entre hôte et invité.' },
    ],
    browseAll: 'Parcourir toute la documentation', readReadme: 'Lire le README', read: 'Lire',
    footnote: 'Plus de 20 documents couvrant le pipeline d’images, les tests d’acceptation, les preuves CI, les backends Firecracker et noyau upstream, et la feuille de route de décision à l’exécution.',
  },
  adopt: {
    heading: 'Trois façons de commencer. Chacune en moins de dix minutes.',
    copy: 'Copier', copied: 'Copié',
    exitCompatible: 'compatible', exitError: 'erreur d’exécution', exitRegression: 'régression — arrêtez le pipeline',
    actionNote: 'En cas de régression de compatibilité, le job se termine avec le code de sortie 2 et écrit la matrice dans le résumé de job GitHub Actions, afin que les relecteurs voient exactement quel noyau a cassé.',
    webSteps: [
      'Choisissez vos environnements cibles — Enterprise, Ubuntu LTS, RHEL, Cloud ou Personnalisé.',
      'Téléversez un .bpf.o compilé ou un YAML de suite, et choisissez un mode de barrière : load, load+attach ou load+attach+behavior.',
      'Lancez-le et lisez la matrice succès/échec.',
    ],
    webButton: 'Ouvrir l’Aperçu technique',
    webNote: 'S’exécute sur une infrastructure partagée et avec une limite de débit. Aucun compte requis.',
  },
  install: {
    eyebrow: 'Installation',
    heading: 'Installez la CLI en une commande.',
    subline: 'Trois façons vérifiées d’obtenir bpfcompat — un binaire de release préfabriqué, une compilation depuis les sources, ou go install. Chaque commande ci-dessous a été exécutée sur un vrai hôte KVM.',
    methods: [
      { title: 'Binaire de release préfabriqué', note: 'Recommandé. Fournit la CLI et le validateur invité, vérifiés par somme de contrôle. Linux x86_64.', alt: 'Terminal : téléchargement du binaire de release de bpfcompat, vérification de sa somme de contrôle et affichage de la version.' },
      { title: 'Depuis les sources', note: 'Compile la CLI et le validateur, et estampille le binaire avec la vraie version.', alt: 'Terminal : clonage du dépôt et exécution de make build et make validator-static.' },
      { title: 'go install', note: 'CLI uniquement. Utilisez le chemin de module en minuscules et le sous-paquet cmd/bpfcompat — le chemin de module seul ne s’installe pas.', alt: 'Terminal : installation de bpfcompat avec go install et affichage de la version.' },
    ],
    runHeading: 'Puis lancez-le sur de vrais noyaux.',
    runNote: 'bpfcompat test démarre chaque noyau dans une VM jetable et renvoie une matrice succès/échec par noyau — ici en échec sur 5.4 (la prise en charge du ring buffer arrive en 5.8) et en succès sur 6.1 et 6.8.',
    runAlt: 'Terminal : une exécution de validation bpfcompat montrant ubuntu-20.04-5.4 en échec, debian-12-6.1 en succès et ubuntu-24.04-6.8 en succès.',
  },
  coverage: {
    eyebrow: 'Couverture',
    heading: 'De vraies distros. De vrais noyaux. Dans une VM.',
    vmHeading: 'Validation complète en VM — pas d’analyse statique.',
    vmBody: 'bpfcompat n’analyse pas votre objet pour deviner. Pour chaque cible, il démarre l’image cloud réelle de la distro et son vrai noyau comme une VM QEMU/KVM jetable, copie un validateur C/libbpf dans l’invité et exécute le chargement et l’attach réels dans ce noyau. Le verdict est ce que le noyau lui-même a accepté ou rejeté — journal du vérificateur, BTF, relocalisation CO-RE, prise en charge des map et des programmes — pas une heuristique.',
    distrosHeading: 'Distributions couvertes',
    distrosBody: 'Une matrice curée, multi-distros et multi-architectures — les noyaux que les entreprises et les flottes cloud font réellement tourner. RHEL lui-même est une image sur abonnement à fournir soi-même ; AlmaLinux, Rocky et CentOS Stream sont les recompilations publiques et compatibles ABI utilisées comme substitut reproductible.',
    archNote: 'x86_64 · ARM64 · upstream mainline',
    backportHeading: 'Version du noyau ≠ prise en charge des fonctionnalités.',
    backportBody: 'Les distros d’entreprise rétroportent massivement les fonctionnalités eBPF sur d’anciennes bases de noyau, donc le numéro de version seul ne prédit rien. Comme bpfcompat démarre le vrai noyau du fournisseur, c’est testé directement plutôt que déduit.',
    backportExample: 'Un programme à ring buffer échoue sur le 5.4 vanilla d’Ubuntu (le ring buffer arrive upstream en 5.8) mais réussit sur le 4.18 rétroporté d’AlmaLinux 8 — et le 4.14 d’Amazon Linux 2, sans BTF embarqué, se charge et s’attache toujours.',
  },
  library: {
    eyebrow: 'Mode bibliothèque',
    heading: 'Validez avant de charger.',
    subline: 'Le même moteur, intégrable. ValidateBeforeLoad charge réellement un objet eBPF compilé sur le noyau en cours d’exécution du nœud — sans VM, sans réseau — afin qu’un chargeur comme bpfman puisse valider un programme avant qu’il n’atteigne le noyau.',
    apiHeading: 'Un appel, avant le chemin de chargement.',
    apiBody: 'Importez le paquet Go et posez une seule question : cet objet se chargera-t-il sur ce noyau ? Le verdict vient du vérificateur réel, en quelques millisecondes, sans QEMU et sans rien télécharger sur le réseau.',
    points: [
      { title: 'En processus, sans VM', body: 'Un véritable chargement bpf() sur le noyau local en cours d’exécution — le nœud où il s’exécute est le nœud où le programme sera chargé, donc le noyau en cours d’exécution est la cible. En moins d’une milliseconde, pas une supposition statique.' },
      { title: 'Compatible air-gap', body: 'Le vérificateur statique est intégré au binaire ; rien n’est téléchargé à l’exécution. Le chargement sur l’hôte est optionnel derrière un tag de compilation et désactivé par défaut.' },
      { title: 'Verdict lisible par machine', body: 'En cas de rejet, vous obtenez un code de classification stable et la fin du journal du vérificateur — branchez selon le code, affichez la raison, repliez-vous sur un autre artefact.' },
    ],
    passHeading: 'Se charge proprement — en quelques millisecondes.',
    passBody: 'Un objet compatible renvoie OK=true avec le noyau testé. Assez rapide pour précéder chaque chargement.',
    passAlt: 'Terminal : ValidateBeforeLoad renvoyant OK=true pour un objet compatible en 3 millisecondes.',
    failHeading: 'Détecté avant le chargement — avec la raison.',
    failBody: 'Un objet incompatible renvoie OK=false avec un code de classification et le message du vérificateur du noyau lui-même — détecté à la porte, pas à l’exécution.',
    failAlt: 'Terminal : ValidateBeforeLoad renvoyant OK=false avec une classification d’échec de relocalisation CO-RE et le journal du vérificateur.',
    footnote: 'Le mode bibliothèque est protégé par un tag de compilation et destiné aux appelants privilégiés de pré-chargement comme bpfman. Avant 1.0 / expérimental.',
  },
  repo: {
    title: 'Preuves du dépôt', measured: 'Mesuré à partir du dépôt public.', github: 'GitHub', languageMix: 'Répartition des langages',
    labels: { primaryLanguage: 'Langage principal', license: 'Licence', latestRelease: 'Dernière version', kernelRange: 'Plage de noyaux testée' },
  },
  scope: {
    heading: 'Ce que c’est — et ce qui vient ensuite.',
    isLabel: 'Disponible aujourd’hui', isNotLabel: 'Sur la feuille de route',
    isList: [
      'De vraies preuves de chargement et d’attach depuis de vrais noyaux — un .bpf.o local ou un gadget publié via une référence OCI',
      'À exécuter en local ou comme barrière CI — codes de sortie déterministes, livrée comme GitHub Action',
      'Une matrice de noyaux multi-distros et multi-architectures (5.x–6.x, x86_64 + ARM64)',
      'Apache-2.0, entièrement open source',
    ],
    isNotList: [
      'Un chargeur d’exécution de production — aujourd’hui il valide ; le déploiement guidé est prévu',
      'Un SaaS multi-locataire — l’interface hébergée est un Aperçu technique mono-locataire',
      'La décision à l’exécution — disponible en aperçu expérimental, réservé aux opérateurs',
    ],
    footer: 'Cette version a un périmètre délibéré : d’abord une barrière de compatibilité fiable, puis la livraison à l’exécution à mesure qu’elle mûrit. Pas qu’une étiquette — les preuves et la documentation sont dans le dépôt.',
  },
  why: {
    eyebrow: 'Pourquoi ça existe',
    heading: 'Toute équipe eBPF sérieuse finit par construire ça.',
    body: 'Cilium et Tetragon démarrent leurs probes sur de nombreux noyaux avec little-vm-helper. Falco maintient un framework kernel-testing basé sur Firecracker. Il n’existe pas de moyen prêt à l’emploi de prouver qu’un objet BPF compilé se charge sur les noyaux que vous ciblez — alors les équipes construisent leur propre harnais de VM, ou le découvrent en production. bpfcompat empaquette cette capacité sous forme de barrière CI prête à l’emploi.',
    sources: 'Références publiques',
  },
  compare: {
    eyebrow: 'Comparaison',
    heading: 'Où se situe bpfcompat.',
    note: 'Ce sont d’excellents outils. bpfcompat ne remplace pas les briques de bas niveau — il empaquette le cas d’usage de la barrière de compatibilité pour que vous n’ayez pas à l’assembler.',
    colDiy: 'Fait maison (vmtest)',
    rows: [
      { label: 'Ce que c’est', cells: ['Barrière prête + rapport', 'Brique de VM', 'Validateur de drivers Falco', 'Harnais de VM maison'] },
      { label: 'Démarre de vrais noyaux en VM', cells: ['✓', '✓', '✓', '✓'] },
      { label: 'Matrice multi-distros curée incluse', cells: ['✓', '~', '~', '–'] },
      { label: 'Vérificateur · BTF · classification dans le rapport', cells: ['✓', '–', '~', '–'] },
      { label: 'GitHub Action en une ligne + résumé du job', cells: ['✓', '✓', '~', '–'] },
      { label: 'Idéal quand', cells: ['vous voulez une barrière prête + des preuves partageables', 'vous vivez déjà dans l’outillage Cilium', 'vous validez des drivers Falco', 'vous voulez un contrôle total / des noyaux sur mesure'] },
    ],
  },
  toolchain: {
    eyebrow: 'Chaîne d’outils eBPF de Kernel Guard',
    heading: 'Une seule chaîne d’outils pour la frontière du noyau.',
    beforeShip: 'Avant de livrer', atRuntime: 'À l’exécution', youAreHere: 'vous êtes ici', viewProject: 'Voir le projet',
    bpfDesc: 'Prouvez que vos programmes eBPF se chargent sur chaque noyau que vous prenez en charge.',
    aegisDesc: 'Appliquez la politique de sécurité dans le noyau avec des hooks LSM eBPF.',
    footer: 'Prouvez d’abord la compatibilité. Appliquez ensuite la politique.',
  },
  finalCta: {
    headline: 'Cessez de découvrir les incompatibilités de noyau en production.',
    ctaDemo: 'Lancer la démo en direct', ctaSource: 'Voir le code sur GitHub', ctaDocs: 'Lire la documentation',
  },
  sectionTitles: { howEyebrow: 'Pipeline', repoTitle: 'Preuves du dépôt' },
};

const ja: BpStrings = {
  breadcrumb: 'オープンソースプロジェクト',
  hero: {
    chipOpenSource: 'オープンソース', chipPreview: 'テクニカルプレビュー',
    eyebrow: 'オープンソースの eBPF 互換性検証',
    h1a: 'カーネル互換性を、', h1b: '本番投入の前に証明。',
    subline: '出荷先のあらゆる Linux カーネルで eBPF プログラムをテストしましょう — ユーザーより先に。',
    ctaDemo: 'ライブデモを実行', ctaGithub: 'GitHub で見る', ctaAction: 'GitHub Action を使う',
    termSimulated: 'シミュレートされた出力（ループ）。', termRunLink: 'デモで自分で実行する →',
  },
  whatsNew: {
    eyebrow: '新着 — v0.2.0',
    heading: '公開以来、最大のリリース。',
    subline: '新しい組み込み可能なライブラリAPI、新しいOSファミリ、そしてARM64 — すべて実カーネルで実証。',
    items: [
      { title: 'ライブラリモード', body: 'bpfcompatをGoに組み込み: ValidateBeforeLoad はノード自身のカーネルで実際にロード — VMなし、ネットワークなし — ロード前ゲートとして。' },
      { title: 'OpenShift / RHCOS', body: 'CoreOS が Ignition で起動するように。実際の RHCOS エビデンスマトリクスが OpenShift 4.14 / 4.16 / 4.18 を網羅し、BPF-LSM のバックポート境界も含む。' },
      { title: 'ARM64 / aarch64', body: '実際の aarch64 VM 起動: UEFI ファームウェアとクロスアーキ эмулーション、ARM64 で RHCOS の load+attach を実証。' },
      { title: 'ゼロ設定ガジェット', body: '公開済みの OCI ガジェットを直接検証: --quick(マトリクスファイル不要)、自動サイズ調整マップ、プログラムの自動型付け。' },
    ],
    cta: 'v0.2.0 リリースを読む',
  },
  plain: {
    eyebrow: '簡単に言うと',
    pre: 'eBPF プログラムは Linux カーネルの内部で動作します。カーネルごとに受け入れるプログラムが異なるため、あるサーバーで動くソフトウェアが別のサーバーでは',
    emph: '起動しない', post: 'ことがあります。',
  },
  ways: {
    eyebrow: 'はじめる',
    heading: '3 つの使い方 — それぞれ 10 分以内。',
    subline: 'ローカルで実行、CI でゲート、ローダーに組み込み。同じエンジン、実カーネル。',
    items: [
      { title: 'ローカル — CLI', time: '約5分', note: '.bpf.o をインストールしてカーネル横断で検査; --quick はマトリクスファイル不要。' },
      { title: 'CI — GitHub Action', time: '約10分', note: 'アクションをワークフローに追加し、アーティファクトが退行したらビルドを失敗させる。' },
      { title: '組み込み — Go ライブラリ', time: '約10分', note: 'pkg/bpfcompat をインポートし、ローダーが読み込む前にプログラムをゲートする。' },
    ],
  },
  problem: {
    heading: 'これらはどれもコンパイル時には現れません。',
    subline: '現れるのは顧客のカーネル上で、たいてい本番環境です。カーネルが実際に出力する内容がこちらです。',
    cards: [
      { label: 'BTF の欠如', sentence: '古いカーネルには、プログラムの読み込みに必要な型情報が含まれていません。' },
      { label: 'CO-RE 再配置', sentence: 'カーネル構造体はバージョン間で変化します。6.8 で解決できる再配置が 5.15 では失敗することがあります。' },
      { label: '未対応の型', sentence: '新しい map・プログラム・attach の型は、それより前のカーネルでは拒否されます。' },
    ],
  },
  stats: [
    { value: '5.x–6.x', label: 'テスト済みカーネル範囲' },
    { value: 'x86_64 · ARM64', label: 'アーキテクチャ' },
    { value: '14', label: '検証済みエンタープライズカーネル' },
    { value: 'exit 2', label: 'CI ゲート' },
  ],
  how: {
    heading: '4 つの段階。本物のカーネル。本物の読み込み。',
    stages: [
      { title: 'アーティファクトを提出', body: 'コンパイル済みの BPF オブジェクト、マニフェスト、そして組織が出荷するカーネルマトリクスを用意します。' },
      { title: '本物のカーネルを起動', body: '各カーネルプロファイルは、クリーンなクラウドイメージから使い捨ての QEMU/KVM 仮想マシンとして起動します。ホストには一切触れません。' },
      { title: 'ゲスト内で読み込む', body: '各 VM 内で C/libbpf バリデーターが動作し、すべてのプログラムを実際に読み込んでアタッチします。静的な推測はありません。' },
      { title: '判定を読む', body: '結果は、構造化された理由を伴うアーティファクト×カーネルの合否マトリクスに集約されます。終了コード 2 はビルドを失敗させます。' },
    ],
  },
  evidence: {
    eyebrow: '証拠',
    heading: '出力はログファイルではなく、判定です。',
    subline: '各セルは、まさにそのカーネル上で、本物の VM の中で実際に行われた読み込みです。',
    legendPartial: 'PARTIAL — 読み込み成功、アタッチ制限あり',
    tallyRegression: '互換性のリグレッション — ビルドが失敗します',
    tallyOk: 'すべての対象が互換',
    selectHint: { pre: '記録された証拠を見るには、', mid: '、または注釈付きの ', post: ' セルを選択してください。' },
    drawerGate: 'ゲート',
  },
  docs: {
    eyebrow: 'ドキュメント',
    heading: '本番ソフトウェアのように文書化。',
    subline: 'アーキテクチャ、ゲスト内バリデーター、カーネルプロファイル、セキュリティモデル、CI 連携 — すべてが文書化され、公開されています。',
    items: [
      { title: 'アーキテクチャ', desc: 'アーティファクト、使い捨て VM、ゲスト内バリデーターがどう連携するか。' },
      { title: 'ゲスト内バリデーター', desc: '各カーネル内で動作し、証拠を記録する C/libbpf ローダー。' },
      { title: 'カーネル＆ディストロのプロファイル', desc: 'マトリクスが対象にできるすべてのカーネルイメージ、x86_64 と ARM64。' },
      { title: '互換性スイート', desc: '製品リリース全体を、ゲートに使う単一のスイートとして記述します。' },
      { title: 'API と Web UI', desc: 'HTTP またはブラウザから bpfcompat を操作。OpenAPI 仕様付き。' },
      { title: 'セキュリティと脅威モデル', desc: '何がどこで動くか、ホストとゲスト間の信頼境界。' },
    ],
    browseAll: 'すべてのドキュメントを見る', readReadme: 'README を読む', read: '読む',
    footnote: 'イメージパイプライン、受け入れテスト、CI の証跡、Firecracker および upstream カーネルバックエンド、ランタイム判定のロードマップを網羅する 20 以上のドキュメント。',
  },
  adopt: {
    heading: '3 つの始め方。どれも 10 分以内。',
    copy: 'コピー', copied: 'コピーしました',
    exitCompatible: '互換', exitError: '実行エラー', exitRegression: 'リグレッション — パイプラインを止める',
    actionNote: '互換性のリグレッションが発生すると、ジョブは終了コード 2 で終了し、マトリクスを GitHub Actions のジョブサマリーに書き込みます。これによりレビュアーはどのカーネルが壊れたかを正確に把握できます。',
    webSteps: [
      '対象環境を選択 — Enterprise、Ubuntu LTS、RHEL、Cloud、またはカスタム。',
      'コンパイル済みの .bpf.o またはスイート YAML をアップロードし、ゲートモードを選択：load、load+attach、または load+attach+behavior。',
      '実行して合否マトリクスを読みます。',
    ],
    webButton: 'テクニカルプレビューを開く',
    webNote: '共有インフラ上で動作し、レート制限があります。アカウントは不要です。',
  },
  install: {
    eyebrow: 'インストール',
    heading: 'CLI をワンコマンドでインストール。',
    subline: 'bpfcompat を入手する 3 つの検証済みの方法 — ビルド済みリリースバイナリ、ソースからのビルド、または go install。以下のコマンドはすべて実際の KVM ホストで実行しました。',
    methods: [
      { title: 'ビルド済みリリースバイナリ', note: '推奨。CLI とゲスト内バリデーターを、チェックサム検証済みで提供します。Linux x86_64。', alt: 'ターミナル: bpfcompat のリリースバイナリをダウンロードし、チェックサムを検証してバージョンを表示。' },
      { title: 'ソースから', note: 'CLI とバリデーターをビルドし、バイナリに実際のバージョンを刻みます。', alt: 'ターミナル: リポジトリをクローンし、make build と make validator-static を実行。' },
      { title: 'go install', note: 'CLI のみ。小文字のモジュールパスと cmd/bpfcompat サブパッケージを使います — モジュールパスだけではインストールされません。', alt: 'ターミナル: go install で bpfcompat をインストールしてバージョンを表示。' },
    ],
    runHeading: 'そして実際のカーネルで実行。',
    runNote: 'bpfcompat test は各カーネルを使い捨ての VM で起動し、カーネルごとの合否マトリクスを返します — ここでは 5.4 で失敗（ring buffer 対応は 5.8 から）、6.1 と 6.8 で合格。',
    runAlt: 'ターミナル: ubuntu-20.04-5.4 が fail、debian-12-6.1 が pass、ubuntu-24.04-6.8 が pass を示す bpfcompat の検証実行。',
  },
  coverage: {
    eyebrow: 'カバレッジ',
    heading: '本物のディストロ。本物のカーネル。VM の中で。',
    vmHeading: '完全な VM 検証 — 静的解析ではありません。',
    vmBody: 'bpfcompat はオブジェクトを解析して推測したりしません。対象ごとに、実際のディストロのクラウドイメージとその実カーネルを使い捨ての QEMU/KVM 仮想マシンとして起動し、C/libbpf バリデーターをゲストにコピーして、そのカーネル内で実際の load と attach を実行します。判定はカーネル自身が受理または拒否した結果です — verifier ログ、BTF、CO-RE 再配置、map とプログラムのサポート — ヒューリスティックではありません。',
    distrosHeading: 'カバーするディストリビューション',
    distrosBody: '厳選されたマルチディストロ・マルチアーキテクチャのマトリクス — 企業やクラウド基盤が実際に動かしているカーネルです。RHEL 自体はサブスクリプションの持ち込みイメージで、AlmaLinux・Rocky・CentOS Stream が再現可能な代替として使われる公開・ABI 互換の再ビルドです。',
    archNote: 'x86_64 · ARM64 · upstream mainline',
    backportHeading: 'カーネルバージョン ≠ 機能サポート。',
    backportBody: 'エンタープライズディストロは eBPF 機能を古いカーネルベースに大量にバックポートするため、バージョン番号だけでは何もわかりません。bpfcompat は実際のベンダーカーネルを起動するので、これは推測ではなく直接テストされます。',
    backportExample: 'ring buffer プログラムは Ubuntu の vanilla 5.4 では失敗します（ring buffer の upstream 対応は 5.8 から）が、AlmaLinux 8 のバックポートされた 4.18 では合格します — そして埋め込み BTF を持たない Amazon Linux 2 の 4.14 でも load と attach に成功します。',
  },
  library: {
    eyebrow: 'ライブラリモード',
    heading: 'ロードする前に検証する。',
    subline: '同じエンジンを組み込み可能に。ValidateBeforeLoad は、コンパイル済みの eBPF オブジェクトをノード自身の実行中カーネルに対して実際にロードします — VM なし、ネットワークなし — そのため bpfman のようなローダーは、プログラムがカーネルに到達する前に検証できます。',
    apiHeading: 'ロードパスの前に、1 回の呼び出し。',
    apiBody: 'Go パッケージをインポートして、1 つだけ問いかけます。このオブジェクトはこのカーネルでロードできるか? 判定は本物のベリファイアから、ミリ秒で、QEMU なし・ネットワークダウンロードなしで返ります。',
    points: [
      { title: 'プロセス内、VM なし', body: 'ローカルの実行中カーネルに対する本物の bpf() ロード — 実行されるノードがプログラムをロードするノードなので、実行中カーネルがそのまま対象です。静的な推測ではなく、サブミリ秒。' },
      { title: 'エアギャップ対応', body: '静的ベリファイアはバイナリに埋め込まれており、実行時に何もダウンロードしません。ホストでのロードはビルドタグによるオプトインで、デフォルトでは無効です。' },
      { title: '機械可読な判定', body: '拒否されると、安定した分類コードとベリファイアログの末尾が得られます — コードで分岐し、理由を提示し、別のアーティファクトにフォールバックできます。' },
    ],
    passHeading: 'きれいにロードされる — ミリ秒で。',
    passBody: '互換性のあるオブジェクトは、検査したカーネルとともに OK=true を返します。すべてのロードの前段に置けるほど高速です。',
    passAlt: 'ターミナル: ValidateBeforeLoad が互換オブジェクトに対して 3 ミリ秒で OK=true を返している。',
    failHeading: 'ロード前に捕捉 — その理由とともに。',
    failBody: '非互換のオブジェクトは、分類コードとカーネル自身のベリファイアメッセージとともに OK=false を返します — 実行時ではなく、ゲートで捕捉されます。',
    failAlt: 'ターミナル: ValidateBeforeLoad が CO-RE 再配置失敗の分類とベリファイアログとともに OK=false を返している。',
    footnote: 'ライブラリモードはビルドタグで制限されており、bpfman のような特権を持つロード前の呼び出し元を想定しています。1.0 以前 / 実験的。',
  },
  repo: {
    title: 'リポジトリの証拠', measured: '公開リポジトリから測定。', github: 'GitHub', languageMix: '言語構成',
    labels: { primaryLanguage: '主要言語', license: 'ライセンス', latestRelease: '最新リリース', kernelRange: 'テスト済みカーネル範囲' },
  },
  scope: {
    heading: '何であるか — そして次に来るもの。',
    isLabel: '現在利用可能', isNotLabel: 'ロードマップ',
    isList: [
      '本物のカーネル内部からの、実際の読み込み・アタッチの証拠 — ローカルの .bpf.o または OCI 参照で公開された gadget',
      'ローカルでも CI ゲートとしても実行可能 — 決定的な終了コード、GitHub Action として提供',
      'マルチディストロ・マルチアーキテクチャのカーネルマトリクス（5.x–6.x、x86_64 + ARM64）',
      'Apache-2.0、完全なオープンソース',
    ],
    isNotList: [
      '本番のランタイムローダー — 現在は検証のみ。ガイド付きデプロイは計画中',
      'マルチテナント SaaS — ホスト型 UI はシングルテナントのテクニカルプレビュー',
      'ランタイム判定 — 実験的な、オペレーター限定のプレビューとして提供',
    ],
    footer: 'このバージョンは意図的に範囲を絞っています。まず信頼できる互換性ゲート、成熟に応じてランタイム配信を重ねます。単なるラベルではなく、証拠とドキュメントはリポジトリにあります。',
  },
  why: {
    eyebrow: 'なぜ存在するのか',
    heading: '本気の eBPF チームは、結局これを自前で作る。',
    body: 'Cilium と Tetragon は little-vm-helper で多数のカーネル上にプローブを起動します。Falco は Firecracker ベースの kernel-testing フレームワークを維持しています。コンパイル済みの BPF オブジェクトが、出荷先のカーネルで読み込めることを証明する既製の方法はありません — だからチームは自前の VM ハーネスを作るか、本番で気づくことになります。bpfcompat は、その機能をそのまま使える CI ゲートとしてパッケージ化します。',
    sources: '公開リファレンス',
  },
  compare: {
    eyebrow: '比較',
    heading: 'bpfcompat の立ち位置。',
    note: 'これらは優れたツールです。bpfcompat は低レベルの構成要素を置き換えるものではなく、互換性ゲートのユースケースを、自分で組み立てなくて済むようにパッケージ化します。',
    colDiy: '自作（vmtest）',
    rows: [
      { label: '何であるか', cells: ['そのまま使える互換性ゲート + レポート', 'VM の構成要素', 'Falco ドライバ検証ツール', '自作の VM ハーネス'] },
      { label: '実カーネルを VM で起動', cells: ['✓', '✓', '✓', '✓'] },
      { label: 'キュレーション済みマルチディストロ・マトリクス同梱', cells: ['✓', '~', '~', '–'] },
      { label: 'レポートにベリファイア・BTF・分類', cells: ['✓', '–', '~', '–'] },
      { label: '1 行の GitHub Action + ジョブサマリ', cells: ['✓', '✓', '~', '–'] },
      { label: '最適なケース', cells: ['そのまま使えるゲート + 共有可能な証拠が欲しい', 'すでに Cilium のツール群を使っている', 'Falco ドライバを検証する', '完全な制御 / 独自カーネルが必要'] },
    ],
  },
  toolchain: {
    eyebrow: 'Kernel Guard eBPF ツールチェーン',
    heading: 'カーネル境界のための、ひとつのツールチェーン。',
    beforeShip: '出荷前', atRuntime: '実行時', youAreHere: '現在地', viewProject: 'プロジェクトを見る',
    bpfDesc: 'サポートするすべてのカーネルで eBPF プログラムが読み込まれることを証明します。',
    aegisDesc: 'eBPF LSM フックでカーネル内にセキュリティポリシーを適用します。',
    footer: 'まず互換性を証明。次にポリシーを適用。',
  },
  finalCta: {
    headline: 'カーネルの非互換を本番で発見するのは、もう終わりにしましょう。',
    ctaDemo: 'ライブデモを実行', ctaSource: 'GitHub でソースを見る', ctaDocs: 'ドキュメントを読む',
  },
  sectionTitles: { howEyebrow: 'パイプライン', repoTitle: 'リポジトリの証拠' },
};

const zhCN: BpStrings = {
  breadcrumb: '开源项目',
  hero: {
    chipOpenSource: '开源', chipPreview: '技术预览',
    eyebrow: '开源 eBPF 兼容性验证',
    h1a: '内核兼容性，', h1b: '在上线前完成验证。',
    subline: '在你交付的每个 Linux 内核上测试你的 eBPF 程序——赶在用户之前。',
    ctaDemo: '运行在线演示', ctaGithub: '在 GitHub 上查看', ctaAction: '使用 GitHub Action',
    termSimulated: '模拟输出，循环播放。', termRunLink: '在演示中亲自运行 →',
  },
  whatsNew: {
    eyebrow: '新功能 — v0.2.0',
    heading: '发布以来最大的一次更新。',
    subline: '全新可嵌入库 API、新的操作系统家族，以及 ARM64 — 全部在真实内核上验证。',
    items: [
      { title: '库模式', body: '将 bpfcompat 嵌入 Go：ValidateBeforeLoad 在节点自身内核上执行真实加载 — 无虚拟机、无网络 — 作为加载前把关。' },
      { title: 'OpenShift / RHCOS', body: 'CoreOS 现在通过 Ignition 启动。真实的 RHCOS 证据矩阵覆盖 OpenShift 4.14 / 4.16 / 4.18，包含一个 BPF-LSM 回移植边界。' },
      { title: 'ARM64 / aarch64', body: '真实的 aarch64 虚拟机启动：UEFI 固件加上跨架构模拟，并在 ARM64 上验证了 RHCOS 的加载+挂载。' },
      { title: '零配置 gadget', body: '直接验证已发布的 OCI gadget，支持 --quick（无需矩阵文件）、自动调整大小的 map 以及程序自动类型推断。' },
    ],
    cta: '阅读 v0.2.0 发布说明',
  },
  plain: {
    eyebrow: '通俗地说',
    pre: 'eBPF 程序运行在 Linux 内核内部。不同内核接受不同的程序，因此在一台服务器上能运行的软件，在另一台上可能',
    emph: '无法启动', post: '。',
  },
  ways: {
    eyebrow: '开始使用',
    heading: '三种使用方式 — 每种都在 10 分钟内。',
    subline: '本地运行、在 CI 中把关，或嵌入到你的加载器。同一引擎，真实内核。',
    items: [
      { title: '本地 — CLI', time: '约 5 分钟', note: '安装并在多个内核上检查一个 .bpf.o；--quick 无需矩阵文件。' },
      { title: 'CI — GitHub Action', time: '约 10 分钟', note: '将该 action 加入工作流，当工件回退时让构建失败。' },
      { title: '嵌入 — Go 库', time: '约 10 分钟', note: '导入 pkg/bpfcompat，在加载器加载程序之前对其把关。' },
    ],
  },
  problem: {
    heading: '这些问题在编译时都不会出现。',
    subline: '它们出现在客户的内核上——通常是在生产环境。这是内核实际给出的信息。',
    cards: [
      { label: '缺少 BTF', sentence: '较旧的内核不附带程序加载所需的类型信息。' },
      { label: 'CO-RE 重定位', sentence: '内核结构体在版本间会变化。在 6.8 上能解析的重定位，在 5.15 上可能失败。' },
      { label: '不支持的类型', sentence: '较新的 map、程序和 attach 类型会被早于它们的内核拒绝。' },
    ],
  },
  stats: [
    { value: '5.x–6.x', label: '已测试内核范围' },
    { value: 'x86_64 · ARM64', label: '架构' },
    { value: '14', label: '已验证的企业内核' },
    { value: 'exit 2', label: 'CI 闸门' },
  ],
  how: {
    heading: '四个阶段。真实内核。真实加载。',
    stages: [
      { title: '提交构件', body: '提供你编译好的 BPF 对象、一个清单，以及你的组织要交付的内核矩阵。' },
      { title: '启动真实内核', body: '每个内核配置都从干净的云镜像启动为一次性的 QEMU/KVM 虚拟机。不会触及你的主机。' },
      { title: '在来宾中加载', body: '一个 C/libbpf 验证器在每个虚拟机中运行，真正加载并挂载每个程序——没有静态猜测。' },
      { title: '阅读裁决', body: '结果汇总为带有结构化原因的“构件×内核”通过/失败矩阵。退出码 2 会让构建失败。' },
    ],
  },
  evidence: {
    eyebrow: '证据',
    heading: '输出是裁决，而不是日志文件。',
    subline: '每个单元格都是一次真实发生的加载——就在那个确切的内核上，在一台真实的虚拟机中。',
    legendPartial: '部分 — 已加载，挂载受限',
    tallyRegression: '兼容性回归——构建失败',
    tallyOk: '所有目标均兼容',
    selectHint: { pre: '选择一个 ', mid: '，或带注释的 ', post: ' 单元格以查看其记录的证据。' },
    drawerGate: '闸门',
  },
  docs: {
    eyebrow: '文档',
    heading: '像生产软件一样的文档。',
    subline: '架构、来宾内验证器、内核配置、安全模型以及 CI 集成都已写成文档——并且开放。',
    items: [
      { title: '架构', desc: '构件、一次性虚拟机和来宾内验证器如何协同工作。' },
      { title: '来宾内验证器', desc: '在每个内核中运行并记录证据的 C/libbpf 加载器。' },
      { title: '内核与发行版配置', desc: '矩阵可以面向的每一个内核镜像，x86_64 与 ARM64。' },
      { title: '兼容性套件', desc: '把整个产品发布描述为一个用于设闸的套件。' },
      { title: 'API 与 Web 界面', desc: '通过 HTTP 或浏览器驱动 bpfcompat；附带 OpenAPI 规范。' },
      { title: '安全与威胁模型', desc: '什么在哪里运行，以及主机与来宾之间的信任边界。' },
    ],
    browseAll: '浏览全部文档', readReadme: '阅读 README', read: '阅读',
    footnote: '20 多篇文档，涵盖镜像流水线、验收测试、CI 证据、Firecracker 与上游内核后端，以及运行时决策路线图。',
  },
  adopt: {
    heading: '三种上手方式。每种都不到十分钟。',
    copy: '复制', copied: '已复制',
    exitCompatible: '兼容', exitError: '执行错误', exitRegression: '回归——让流水线失败',
    actionNote: '发生兼容性回归时，作业会以退出码 2 结束，并把矩阵写入 GitHub Actions 作业摘要，让审阅者准确看到是哪个内核出了问题。',
    webSteps: [
      '选择你的目标环境——Enterprise、Ubuntu LTS、RHEL、Cloud 或自定义。',
      '上传编译好的 .bpf.o 或套件 YAML，并选择闸门模式：load、load+attach 或 load+attach+behavior。',
      '运行它并阅读通过/失败矩阵。',
    ],
    webButton: '打开技术预览',
    webNote: '运行在共享基础设施上并有速率限制。无需账户。',
  },
  install: {
    eyebrow: '安装',
    heading: '一条命令安装 CLI。',
    subline: '获取 bpfcompat 的三种已验证方式——预编译的发布二进制、从源码构建，或 go install。下面每条命令都在真实的 KVM 主机上运行过。',
    methods: [
      { title: '预编译发布二进制', note: '推荐。随附 CLI 与来宾内验证器，并经校验和验证。Linux x86_64。', alt: '终端：下载 bpfcompat 发布二进制、校验其校验和并打印版本。' },
      { title: '从源码构建', note: '构建 CLI 与验证器，并把真实版本号写入二进制。', alt: '终端：克隆仓库并运行 make build 与 make validator-static。' },
      { title: 'go install', note: '仅 CLI。请使用小写的模块路径与 cmd/bpfcompat 子包——裸模块路径无法安装。', alt: '终端：用 go install 安装 bpfcompat 并打印版本。' },
    ],
    runHeading: '然后在真实内核上运行。',
    runNote: 'bpfcompat test 在一次性虚拟机中启动每个内核，并返回逐内核的通过/失败矩阵——这里在 5.4 上失败（ring buffer 支持自 5.8 起），在 6.1 和 6.8 上通过。',
    runAlt: '终端：一次 bpfcompat 验证运行，显示 ubuntu-20.04-5.4 失败、debian-12-6.1 通过、ubuntu-24.04-6.8 通过。',
  },
  coverage: {
    eyebrow: '覆盖范围',
    heading: '真实发行版。真实内核。在虚拟机里。',
    vmHeading: '完整的虚拟机验证——不是静态分析。',
    vmBody: 'bpfcompat 不会解析你的对象再去猜测。对每个目标，它都会把真实发行版的云镜像及其真实内核作为一次性 QEMU/KVM 虚拟机启动，把 C/libbpf 验证器复制进来宾，并在该内核中执行真实的 load 与 attach。裁决就是内核本身接受或拒绝的结果——校验器日志、BTF、CO-RE 重定位、map 与程序支持——而不是某种启发式推断。',
    distrosHeading: '覆盖的发行版',
    distrosBody: '一个精选的、多发行版、多架构矩阵——企业与云机群真正运行的内核。RHEL 本身是需自带的订阅镜像；AlmaLinux、Rocky 和 CentOS Stream 是用作可复现替身的公开、ABI 兼容的重建版。',
    archNote: 'x86_64 · ARM64 · upstream mainline',
    backportHeading: '内核版本 ≠ 功能支持。',
    backportBody: '企业发行版会把 eBPF 功能大量回移植（backport）到旧的内核基线上，所以仅凭版本号什么都说明不了。因为 bpfcompat 启动的是真实的厂商内核，这一点是直接测试出来的，而不是推断的。',
    backportExample: '一个 ring buffer 程序在 Ubuntu 的原版 5.4 上会失败（ring buffer 自 5.8 才进入上游），但在 AlmaLinux 8 回移植的 4.18 上能通过——而没有内嵌 BTF 的 Amazon Linux 2 的 4.14 仍然能 load 和 attach。',
  },
  library: {
    eyebrow: '库模式',
    heading: '在加载之前先验证。',
    subline: '同一引擎，可嵌入。ValidateBeforeLoad 会将已编译的 eBPF 对象真正加载到节点自身正在运行的内核上 — 无虚拟机、无网络 — 因此像 bpfman 这样的加载器可以在程序到达内核之前对其进行把关。',
    apiHeading: '在加载路径之前，一次调用。',
    apiBody: '导入该 Go 包并只问一个问题：这个对象能在这个内核上加载吗？结论来自真实的验证器，在数毫秒内得出，无需 QEMU，也不从网络下载任何内容。',
    points: [
      { title: '进程内，无虚拟机', body: '针对本地正在运行的内核进行真实的 bpf() 加载 — 运行它的节点就是程序将要加载的节点，因此正在运行的内核就是目标。亚毫秒级，而非静态猜测。' },
      { title: '适用于隔离网络', body: '静态验证器已嵌入二进制文件；运行时不下载任何内容。主机加载通过构建标签选择启用，默认关闭。' },
      { title: '机器可读的结论', body: '被拒绝时，你会得到一个稳定的分类代码和验证器日志末尾 — 按代码分支、呈现原因、回退到另一个工件。' },
    ],
    passHeading: '干净加载 — 在数毫秒内。',
    passBody: '兼容的对象会返回 OK=true，并附带所检测的内核。快到足以置于每次加载之前。',
    passAlt: '终端：ValidateBeforeLoad 在 3 毫秒内为兼容对象返回 OK=true。',
    failHeading: '在加载前被拦截 — 并附带原因。',
    failBody: '不兼容的对象会返回 OK=false，并附带分类代码和内核自身的验证器消息 — 在入口处被拦截，而非在运行时。',
    failAlt: '终端：ValidateBeforeLoad 返回 OK=false，附带 CO-RE 重定位失败分类和验证器日志。',
    footnote: '库模式受构建标签限制，面向像 bpfman 这样的特权预加载调用方。1.0 之前 / 实验性。',
  },
  repo: {
    title: '仓库证据', measured: '基于公开仓库测量。', github: 'GitHub', languageMix: '语言构成',
    labels: { primaryLanguage: '主要语言', license: '许可证', latestRelease: '最新版本', kernelRange: '已测试内核范围' },
  },
  scope: {
    heading: '它是什么——以及接下来是什么。',
    isLabel: '现已提供', isNotLabel: '路线图',
    isList: [
      '来自真实内核内部的真实加载与挂载证据——本地 .bpf.o 或通过 OCI 引用发布的 gadget',
      '可在本地或作为 CI 闸门运行——确定性退出码，以 GitHub Action 形式提供',
      '多发行版、多架构的内核矩阵（5.x–6.x，x86_64 + ARM64）',
      'Apache-2.0，完全开源',
    ],
    isNotList: [
      '生产运行时加载器——目前只做验证；引导式部署在计划中',
      '多租户 SaaS——托管界面是单租户的技术预览',
      '运行时决策——以实验性、需操作员授权的预览形式提供',
    ],
    footer: '此版本是有意限定范围的：先做可靠的兼容性闸门，再随着成熟逐步叠加运行时交付。这不仅是一个标注——证据与文档都在仓库中。',
  },
  why: {
    eyebrow: '为什么会有它',
    heading: '认真做 eBPF 的团队，最终都会自己造这个。',
    body: 'Cilium 和 Tetragon 用 little-vm-helper 在众多内核上启动它们的探针。Falco 维护着一个基于 Firecracker 的 kernel-testing 框架。没有现成的方法可以证明一个已编译的 BPF 对象能在你要发布的内核上加载——于是团队要么自建 VM 测试台，要么在生产中才发现问题。bpfcompat 把这一能力打包成一个开箱即用的 CI 闸门。',
    sources: '公开参考',
  },
  compare: {
    eyebrow: '如何比较',
    heading: 'bpfcompat 的定位。',
    note: '这些都是优秀的工具。bpfcompat 并不替代底层构件——它把“兼容性闸门”这一用例打包好，省去你自己拼装。',
    colDiy: '自行搭建（vmtest）',
    rows: [
      { label: '它是什么', cells: ['开箱即用的兼容性闸门 + 报告', 'VM 构件', 'Falco 驱动验证器', '自制 VM 测试台'] },
      { label: '在 VM 中启动真实内核', cells: ['✓', '✓', '✓', '✓'] },
      { label: '内置精选的多发行版矩阵', cells: ['✓', '~', '~', '–'] },
      { label: '报告含校验器 · BTF · 分类', cells: ['✓', '–', '~', '–'] },
      { label: '一行 GitHub Action + 作业摘要', cells: ['✓', '✓', '~', '–'] },
      { label: '何时最适合', cells: ['想要开箱即用的闸门 + 可分享的证据', '已经在使用 Cilium 工具链', '要验证 Falco 驱动', '需要完全掌控 / 自定义内核'] },
    ],
  },
  toolchain: {
    eyebrow: 'Kernel Guard eBPF 工具链',
    heading: '面向内核边界的一套工具链。',
    beforeShip: '交付之前', atRuntime: '运行时', youAreHere: '你在这里', viewProject: '查看项目',
    bpfDesc: '证明你的 eBPF 程序能在你支持的每个内核上加载。',
    aegisDesc: '用 eBPF LSM 钩子在内核中执行安全策略。',
    footer: '先证明兼容性，再执行策略。',
  },
  finalCta: {
    headline: '别再在生产环境中才发现内核不兼容。',
    ctaDemo: '运行在线演示', ctaSource: '在 GitHub 上查看源码', ctaDocs: '阅读文档',
  },
  sectionTitles: { howEyebrow: '流水线', repoTitle: '仓库证据' },
};

const ko: BpStrings = {
  breadcrumb: '오픈소스 프로젝트',
  hero: {
    chipOpenSource: '오픈소스', chipPreview: '기술 미리보기',
    eyebrow: '오픈소스 eBPF 호환성 검증',
    h1a: '커널 호환성,', h1b: '프로덕션 전에 증명.',
    subline: '배포하는 모든 Linux 커널에서 eBPF 프로그램을 테스트하세요 — 사용자보다 먼저.',
    ctaDemo: '라이브 데모 실행', ctaGithub: 'GitHub에서 보기', ctaAction: 'GitHub Action 사용',
    termSimulated: '시뮬레이션 출력, 반복 재생.', termRunLink: '데모에서 직접 실행하기 →',
  },
  whatsNew: {
    eyebrow: '새로운 기능 — v0.2.0',
    heading: '출시 이후 가장 큰 릴리스.',
    subline: '새로운 임베드 가능 라이브러리 API, 새로운 OS 제품군, 그리고 ARM64 — 모두 실제 커널에서 검증.',
    items: [
      { title: '라이브러리 모드', body: 'bpfcompat를 Go에 임베드: ValidateBeforeLoad는 노드 자체 커널에서 실제 로드를 수행합니다 — VM 없이, 네트워크 없이 — 로드 전 게이트로.' },
      { title: 'OpenShift / RHCOS', body: '이제 CoreOS는 Ignition으로 부팅됩니다. 실제 RHCOS 증거 매트릭스가 OpenShift 4.14 / 4.16 / 4.18을 아우르며 BPF-LSM 백포트 경계를 포함합니다.' },
      { title: 'ARM64 / aarch64', body: '실제 aarch64 VM 부팅: UEFI 펌웨어와 교차 아키텍처 에뮬레이션, ARM64에서 RHCOS load+attach 검증.' },
      { title: '제로 구성 가젯', body: '게시된 OCI 가젯을 직접 검증: --quick(매트릭스 파일 불필요), 자동 크기 조정 맵, 프로그램 자동 타입 지정.' },
    ],
    cta: 'v0.2.0 릴리스 읽기',
  },
  plain: {
    eyebrow: '쉽게 말하면',
    pre: 'eBPF 프로그램은 Linux 커널 내부에서 실행됩니다. 커널마다 받아들이는 프로그램이 다르므로, 한 서버에서 동작하는 소프트웨어가 다른 서버에서는 ',
    emph: '시작되지 않을', post: ' 수 있습니다.',
  },
  ways: {
    eyebrow: '시작하기',
    heading: '사용하는 세 가지 방법 — 각각 10분 이내.',
    subline: '로컬에서 실행하고, CI에서 게이트하고, 로더에 임베드하세요. 같은 엔진, 실제 커널.',
    items: [
      { title: '로컬 — CLI', time: '~5분', note: '.bpf.o를 설치하고 여러 커널에서 검사; --quick은 매트릭스 파일이 필요 없습니다.' },
      { title: 'CI — GitHub Action', time: '~10분', note: '액션을 워크플로에 추가하고 아티팩트가 회귀하면 빌드를 실패시킵니다.' },
      { title: '임베드 — Go 라이브러리', time: '~10분', note: 'pkg/bpfcompat를 가져와 로더가 로드하기 전에 프로그램을 게이트합니다.' },
    ],
  },
  problem: {
    heading: '이 중 어느 것도 컴파일 시점에는 드러나지 않습니다.',
    subline: '그것은 고객의 커널에서 — 대개 운영 환경에서 — 드러납니다. 커널이 실제로 내놓는 메시지는 이렇습니다.',
    cards: [
      { label: 'BTF 누락', sentence: '오래된 커널에는 프로그램 로드에 필요한 타입 정보가 포함되어 있지 않습니다.' },
      { label: 'CO-RE 재배치', sentence: '커널 구조체는 버전마다 바뀝니다. 6.8에서 해결되는 재배치가 5.15에서는 실패할 수 있습니다.' },
      { label: '미지원 타입', sentence: '더 새로운 map·프로그램·attach 타입은 그보다 이전의 커널에서 거부됩니다.' },
    ],
  },
  stats: [
    { value: '5.x–6.x', label: '테스트된 커널 범위' },
    { value: 'x86_64 · ARM64', label: '아키텍처' },
    { value: '14', label: '검증된 엔터프라이즈 커널' },
    { value: 'exit 2', label: 'CI 게이트' },
  ],
  how: {
    heading: '네 단계. 진짜 커널. 진짜 로드.',
    stages: [
      { title: '아티팩트 제출', body: '컴파일된 BPF 객체, 매니페스트, 그리고 조직이 배포하는 커널 매트릭스를 제공합니다.' },
      { title: '진짜 커널 부팅', body: '각 커널 프로파일은 깨끗한 클라우드 이미지에서 일회용 QEMU/KVM 가상 머신으로 부팅됩니다. 호스트에는 아무것도 손대지 않습니다.' },
      { title: '게스트 안에서 로드', body: '각 VM 안에서 C/libbpf 검증기가 실행되어 모든 프로그램을 실제로 로드하고 attach합니다. 정적 추측은 없습니다.' },
      { title: '판정 읽기', body: '결과는 구조화된 사유와 함께 아티팩트×커널 합격/불합격 매트릭스로 집계됩니다. 종료 코드 2는 빌드를 실패시킵니다.' },
    ],
  },
  evidence: {
    eyebrow: '증거',
    heading: '출력은 로그 파일이 아니라 판정입니다.',
    subline: '모든 셀은 바로 그 커널에서, 진짜 VM 안에서 실제로 일어난 로드입니다.',
    legendPartial: '부분 — 로드됨, attach 제한',
    tallyRegression: '호환성 회귀 — 빌드가 실패합니다',
    tallyOk: '모든 대상이 호환됨',
    selectHint: { pre: '기록된 증거를 보려면 ', mid: ', 또는 주석이 달린 ', post: ' 셀을 선택하세요.' },
    drawerGate: '게이트',
  },
  docs: {
    eyebrow: '문서',
    heading: '운영 소프트웨어처럼 문서화되었습니다.',
    subline: '아키텍처, 게스트 내 검증기, 커널 프로파일, 보안 모델, CI 통합이 모두 문서로 작성되어 있고 — 공개되어 있습니다.',
    items: [
      { title: '아키텍처', desc: '아티팩트, 일회용 VM, 게스트 내 검증기가 어떻게 맞물리는지.' },
      { title: '게스트 내 검증기', desc: '각 커널 안에서 실행되며 증거를 기록하는 C/libbpf 로더.' },
      { title: '커널 및 배포판 프로파일', desc: '매트릭스가 대상으로 삼을 수 있는 모든 커널 이미지, x86_64와 ARM64.' },
      { title: '호환성 스위트', desc: '제품 릴리스 전체를 게이트로 쓸 하나의 스위트로 기술합니다.' },
      { title: 'API 및 웹 UI', desc: 'HTTP나 브라우저로 bpfcompat를 구동합니다. OpenAPI 명세 포함.' },
      { title: '보안 및 위협 모델', desc: '무엇이 어디서 실행되는지, 그리고 호스트와 게스트 사이의 신뢰 경계.' },
    ],
    browseAll: '전체 문서 보기', readReadme: 'README 읽기', read: '읽기',
    footnote: '이미지 파이프라인, 인수 테스트, CI 증적, Firecracker 및 업스트림 커널 백엔드, 런타임 결정 로드맵을 다루는 20여 개의 문서.',
  },
  adopt: {
    heading: '시작하는 세 가지 방법. 각각 10분 이내.',
    copy: '복사', copied: '복사됨',
    exitCompatible: '호환', exitError: '실행 오류', exitRegression: '회귀 — 파이프라인 중단',
    actionNote: '호환성 회귀가 발생하면 작업은 종료 코드 2로 끝나고 매트릭스를 GitHub Actions 작업 요약에 기록하므로, 리뷰어가 어떤 커널이 깨졌는지 정확히 볼 수 있습니다.',
    webSteps: [
      '대상 환경 선택 — Enterprise, Ubuntu LTS, RHEL, Cloud 또는 사용자 지정.',
      '컴파일된 .bpf.o 또는 스위트 YAML을 업로드하고 게이트 모드를 선택합니다: load, load+attach 또는 load+attach+behavior.',
      '실행한 뒤 합격/불합격 매트릭스를 읽습니다.',
    ],
    webButton: '기술 미리보기 열기',
    webNote: '공유 인프라에서 실행되며 속도 제한이 있습니다. 계정이 필요 없습니다.',
  },
  install: {
    eyebrow: '설치',
    heading: '명령 하나로 CLI를 설치하세요.',
    subline: 'bpfcompat를 받는 검증된 세 가지 방법 — 사전 빌드된 릴리스 바이너리, 소스 빌드, 또는 go install. 아래의 모든 명령은 실제 KVM 호스트에서 실행했습니다.',
    methods: [
      { title: '사전 빌드된 릴리스 바이너리', note: '권장. CLI와 게스트 내 검증기를 체크섬 검증된 상태로 제공합니다. Linux x86_64.', alt: '터미널: bpfcompat 릴리스 바이너리를 내려받고 체크섬을 검증한 뒤 버전을 출력.' },
      { title: '소스에서', note: 'CLI와 검증기를 빌드하고 바이너리에 실제 버전을 새깁니다.', alt: '터미널: 저장소를 클론하고 make build와 make validator-static을 실행.' },
      { title: 'go install', note: 'CLI만 설치. 소문자 모듈 경로와 cmd/bpfcompat 하위 패키지를 사용하세요 — 모듈 경로만으로는 설치되지 않습니다.', alt: '터미널: go install로 bpfcompat를 설치하고 버전을 출력.' },
    ],
    runHeading: '그런 다음 실제 커널에서 실행하세요.',
    runNote: 'bpfcompat test는 각 커널을 일회용 VM으로 부팅하고 커널별 합격/불합격 매트릭스를 반환합니다 — 여기서는 5.4에서 실패(ring buffer 지원은 5.8부터), 6.1과 6.8에서 합격.',
    runAlt: '터미널: ubuntu-20.04-5.4 실패, debian-12-6.1 합격, ubuntu-24.04-6.8 합격을 보여주는 bpfcompat 검증 실행.',
  },
  coverage: {
    eyebrow: '커버리지',
    heading: '진짜 배포판. 진짜 커널. VM 안에서.',
    vmHeading: '완전한 VM 검증 — 정적 분석이 아닙니다.',
    vmBody: 'bpfcompat는 객체를 파싱해 추측하지 않습니다. 각 대상마다 실제 배포판 클라우드 이미지와 그 실제 커널을 일회용 QEMU/KVM 가상 머신으로 부팅하고, C/libbpf 검증기를 게스트에 복사한 뒤 그 커널 안에서 실제 load와 attach를 실행합니다. 판정은 커널 자신이 수락했거나 거부한 결과입니다 — verifier 로그, BTF, CO-RE 재배치, map 및 프로그램 지원 — 휴리스틱이 아닙니다.',
    distrosHeading: '커버하는 배포판',
    distrosBody: '엄선된 다중 배포판·다중 아키텍처 매트릭스 — 기업과 클라우드 플릿이 실제로 운영하는 커널입니다. RHEL 자체는 구독형 BYO 이미지이며, AlmaLinux·Rocky·CentOS Stream이 재현 가능한 대체로 쓰이는 공개·ABI 호환 리빌드입니다.',
    archNote: 'x86_64 · ARM64 · upstream mainline',
    backportHeading: '커널 버전 ≠ 기능 지원.',
    backportBody: '엔터프라이즈 배포판은 eBPF 기능을 오래된 커널 베이스에 대거 백포트하므로 버전 번호만으로는 아무것도 예측할 수 없습니다. bpfcompat는 실제 벤더 커널을 부팅하므로 이는 추론이 아니라 직접 테스트됩니다.',
    backportExample: 'ring buffer 프로그램은 Ubuntu의 바닐라 5.4에서는 실패하지만(ring buffer는 업스트림 5.8부터) AlmaLinux 8의 백포트된 4.18에서는 합격합니다 — 그리고 내장 BTF가 없는 Amazon Linux 2의 4.14에서도 여전히 load와 attach가 됩니다.',
  },
  library: {
    eyebrow: '라이브러리 모드',
    heading: '로드하기 전에 검증하세요.',
    subline: '동일한 엔진을 임베드 가능하게. ValidateBeforeLoad는 컴파일된 eBPF 객체를 노드 자체의 실행 중인 커널에 대해 실제로 로드합니다 — VM 없이, 네트워크 없이 — 따라서 bpfman 같은 로더가 프로그램이 커널에 도달하기 전에 검사할 수 있습니다.',
    apiHeading: '로드 경로 이전에, 한 번의 호출.',
    apiBody: 'Go 패키지를 가져와 한 가지만 물어보세요: 이 객체가 이 커널에서 로드될까요? 판정은 실제 검증기에서, 밀리초 단위로, QEMU 없이 그리고 네트워크 다운로드 없이 반환됩니다.',
    points: [
      { title: '프로세스 내, VM 없음', body: '로컬에서 실행 중인 커널에 대한 실제 bpf() 로드 — 실행되는 노드가 곧 프로그램이 로드될 노드이므로, 실행 중인 커널이 바로 대상입니다. 정적 추측이 아니라 1밀리초 미만.' },
      { title: '에어갭 환경 지원', body: '정적 검증기가 바이너리에 임베드되어 있어 런타임에 아무것도 다운로드하지 않습니다. 호스트 로드는 빌드 태그를 통한 옵트인이며 기본적으로 꺼져 있습니다.' },
      { title: '기계가 읽을 수 있는 판정', body: '거부되면 안정적인 분류 코드와 검증기 로그 끝부분을 얻습니다 — 코드로 분기하고, 이유를 표시하고, 다른 아티팩트로 폴백하세요.' },
    ],
    passHeading: '깔끔하게 로드됩니다 — 밀리초 단위로.',
    passBody: '호환되는 객체는 검사한 커널과 함께 OK=true를 반환합니다. 모든 로드 앞단에 둘 수 있을 만큼 빠릅니다.',
    passAlt: '터미널: ValidateBeforeLoad가 호환 객체에 대해 3밀리초 만에 OK=true를 반환.',
    failHeading: '로드 전에 포착 — 이유와 함께.',
    failBody: '호환되지 않는 객체는 분류 코드와 커널 자체의 검증기 메시지와 함께 OK=false를 반환합니다 — 런타임이 아니라 게이트에서 포착됩니다.',
    failAlt: '터미널: ValidateBeforeLoad가 CO-RE 재배치 실패 분류와 검증기 로그와 함께 OK=false를 반환.',
    footnote: '라이브러리 모드는 빌드 태그로 제한되며 bpfman 같은 권한 있는 사전 로드 호출자를 위한 것입니다. 1.0 이전 / 실험적.',
  },
  repo: {
    title: '저장소 증거', measured: '공개 저장소에서 측정함.', github: 'GitHub', languageMix: '언어 구성',
    labels: { primaryLanguage: '주요 언어', license: '라이선스', latestRelease: '최신 릴리스', kernelRange: '테스트된 커널 범위' },
  },
  scope: {
    heading: '무엇인지 — 그리고 다음에 무엇이 오는지.',
    isLabel: '현재 제공', isNotLabel: '로드맵',
    isList: [
      '진짜 커널 내부에서 나온 실제 로드 및 attach 증거 — 로컬 .bpf.o 또는 OCI 참조로 게시된 gadget',
      '로컬에서도 CI 게이트로도 실행 — 결정적 종료 코드, GitHub Action으로 제공',
      '다중 배포판·다중 아키텍처 커널 매트릭스(5.x–6.x, x86_64 + ARM64)',
      'Apache-2.0, 완전한 오픈소스',
    ],
    isNotList: [
      '운영 런타임 로더 — 현재는 검증만 수행하며, 가이드 배포는 계획 중',
      '멀티테넌트 SaaS — 호스팅 UI는 단일 테넌트 기술 미리보기',
      '런타임 결정 — 실험적이며 운영자 전용 미리보기로 제공',
    ],
    footer: '이 버전은 의도적으로 범위를 좁혔습니다: 먼저 신뢰할 수 있는 호환성 게이트, 이후 성숙해짐에 따라 런타임 전달을 더합니다. 단순한 라벨이 아니라 증거와 문서가 저장소에 있습니다.',
  },
  why: {
    eyebrow: '왜 존재하는가',
    heading: '진지한 eBPF 팀은 결국 이것을 직접 만든다.',
    body: 'Cilium과 Tetragon은 little-vm-helper로 여러 커널에서 프로브를 부팅합니다. Falco는 Firecracker 기반 kernel-testing 프레임워크를 유지합니다. 컴파일된 BPF 오브젝트가 배포 대상 커널에서 로드되는지 증명하는 기성 방법은 없습니다 — 그래서 팀들은 자체 VM 하니스를 만들거나, 프로덕션에서 알게 됩니다. bpfcompat은 그 기능을 바로 쓸 수 있는 CI 게이트로 패키징합니다.',
    sources: '공개 참고자료',
  },
  compare: {
    eyebrow: '비교',
    heading: 'bpfcompat의 위치.',
    note: '모두 훌륭한 도구입니다. bpfcompat은 저수준 구성요소를 대체하지 않습니다 — 호환성 게이트 사용 사례를 직접 조립하지 않아도 되도록 패키징합니다.',
    colDiy: '직접 구축 (vmtest)',
    rows: [
      { label: '무엇인가', cells: ['바로 쓰는 호환성 게이트 + 리포트', 'VM 구성요소', 'Falco 드라이버 검증기', '자체 VM 하니스'] },
      { label: '실제 커널을 VM에서 부팅', cells: ['✓', '✓', '✓', '✓'] },
      { label: '큐레이션된 다중 배포판 매트릭스 포함', cells: ['✓', '~', '~', '–'] },
      { label: '리포트에 검증기 · BTF · 분류', cells: ['✓', '–', '~', '–'] },
      { label: '한 줄 GitHub Action + 잡 요약', cells: ['✓', '✓', '~', '–'] },
      { label: '가장 적합할 때', cells: ['바로 쓰는 게이트 + 공유 가능한 증거가 필요할 때', '이미 Cilium 도구를 쓰고 있을 때', 'Falco 드라이버를 검증할 때', '완전한 제어 / 커스텀 커널이 필요할 때'] },
    ],
  },
  toolchain: {
    eyebrow: 'Kernel Guard eBPF 툴체인',
    heading: '커널 경계를 위한 하나의 툴체인.',
    beforeShip: '배포 전', atRuntime: '런타임', youAreHere: '현재 위치', viewProject: '프로젝트 보기',
    bpfDesc: '지원하는 모든 커널에서 eBPF 프로그램이 로드됨을 증명하세요.',
    aegisDesc: 'eBPF LSM 후크로 커널에서 보안 정책을 적용하세요.',
    footer: '먼저 호환성을 증명하고, 다음에 정책을 적용하세요.',
  },
  finalCta: {
    headline: '커널 비호환성을 운영 환경에서야 발견하는 일을 멈추세요.',
    ctaDemo: '라이브 데모 실행', ctaSource: 'GitHub에서 소스 보기', ctaDocs: '문서 읽기',
  },
  sectionTitles: { howEyebrow: '파이프라인', repoTitle: '저장소 증거' },
};

export const BP_CONTENT: Record<Language, BpStrings> = {
  en, tr, de, es, fr, ja, 'zh-CN': zhCN, ko,
};

export function getBpStrings(language: Language): BpStrings {
  return BP_CONTENT[language] ?? en;
}

const BpStringsContext = createContext<BpStrings>(en);

export function BpStringsProvider({ language, children }: { language: Language; children: ReactNode }) {
  return <BpStringsContext.Provider value={getBpStrings(language)}>{children}</BpStringsContext.Provider>;
}

export function useBp(): BpStrings {
  return useContext(BpStringsContext);
}
