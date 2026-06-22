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
  plain: {
    eyebrow: 'In plain terms',
    pre: 'eBPF programs run inside the Linux kernel. Different kernels accept different programs — so software that runs on one server can ',
    emph: 'fail to start', post: ' on another.',
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
  plain: {
    eyebrow: 'Sade bir dille',
    pre: 'eBPF programları Linux çekirdeğinin içinde çalışır. Farklı çekirdekler farklı programları kabul eder — bu yüzden bir sunucuda çalışan yazılım başka birinde ',
    emph: 'başlatılamayabilir', post: '.',
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
  plain: {
    eyebrow: 'Einfach gesagt',
    pre: 'eBPF-Programme laufen im Linux-Kernel. Verschiedene Kernel akzeptieren verschiedene Programme — Software, die auf einem Server läuft, kann auf einem anderen ',
    emph: 'nicht starten', post: '.',
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
  plain: {
    eyebrow: 'En pocas palabras',
    pre: 'Los programas eBPF se ejecutan dentro del kernel de Linux. Cada kernel acepta programas distintos, así que el software que funciona en un servidor puede ',
    emph: 'no arrancar', post: ' en otro.',
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
  plain: {
    eyebrow: 'En clair',
    pre: 'Les programmes eBPF s’exécutent dans le noyau Linux. Chaque noyau accepte des programmes différents — un logiciel qui tourne sur un serveur peut donc ',
    emph: 'ne pas démarrer', post: ' sur un autre.',
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
  plain: {
    eyebrow: '簡単に言うと',
    pre: 'eBPF プログラムは Linux カーネルの内部で動作します。カーネルごとに受け入れるプログラムが異なるため、あるサーバーで動くソフトウェアが別のサーバーでは',
    emph: '起動しない', post: 'ことがあります。',
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
  plain: {
    eyebrow: '通俗地说',
    pre: 'eBPF 程序运行在 Linux 内核内部。不同内核接受不同的程序，因此在一台服务器上能运行的软件，在另一台上可能',
    emph: '无法启动', post: '。',
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
  plain: {
    eyebrow: '쉽게 말하면',
    pre: 'eBPF 프로그램은 Linux 커널 내부에서 실행됩니다. 커널마다 받아들이는 프로그램이 다르므로, 한 서버에서 동작하는 소프트웨어가 다른 서버에서는 ',
    emph: '시작되지 않을', post: ' 수 있습니다.',
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
