import type { Language } from '../context/LanguageContext';

export interface EvidenceHomeCopy {
  seoTitle: string;
  seoDescription: string;
  nav: {
    bpfcompat: string;
    aegis: string;
    openSource: string;
    security: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleEvidence: string;
    titleAfter: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
    terminalLabel: string;
  };
  proof: {
    upstreamLabel: string;
    upstreamValue: string;
    executionLabel: string;
    executionValue: string;
    architecturesLabel: string;
    architecturesValue: string;
    provenanceLabel: string;
    provenanceValue: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; description: string }>;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    preDeployment: string;
    runtime: string;
    openSource: string;
    preview: string;
    bpfDesc: string;
    aegisDesc: string;
    explore: string;
  };
  lifecycle: {
    eyebrow: string;
    title: string;
    stages: Array<{ label: string; title: string; detail: string }>;
  };
  integrations: {
    eyebrow: string;
    title: string;
    description: string;
    falco: string;
    gadget: string;
    evidenceLink: string;
    disclaimer: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  quickstart: {
    eyebrow: string;
    title: string;
    description: string;
    docs: string;
  };
  kernels: {
    eyebrow: string;
    title: string;
    description: string;
    catalog: string;
  };
  final: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  footerDescription: string;
}

const en: EvidenceHomeCopy = {
  seoTitle: 'Kernel Guard — eBPF Compatibility Evidence & Runtime Enforcement',
  seoDescription: 'Kernel Guard builds open-source infrastructure for validating eBPF against real Linux kernels before deployment and enforcing policy at runtime.',
  nav: { bpfcompat: 'BPFCompat', aegis: 'AegisBPF', openSource: 'Open Source', security: 'Security', contact: 'Contact' },
  hero: {
    eyebrow: 'Linux · eBPF · reproducible evidence',
    titleBefore: 'Security infrastructure for',
    titleEvidence: 'the Linux kernel.',
    titleAfter: '',
    description: 'Validate eBPF before deployment. Enforce policy at runtime.',
    primaryCta: 'Test with BPFCompat',
    secondaryCta: 'Explore on GitHub',
    note: 'Self-hosted first · real vendor kernels · structured compatibility reports',
    terminalLabel: 'bpfcompat / real-kernel gate',
  },
  proof: {
    upstreamLabel: 'Running upstream',
    upstreamValue: 'Falco · Inspektor Gadget',
    executionLabel: 'Execution',
    executionValue: 'Real vendor kernels',
    architecturesLabel: 'Architectures',
    architecturesValue: 'x86_64 + ARM64',
    provenanceLabel: 'Supply chain',
    provenanceValue: 'Signed · SBOM · SLSA',
  },
  problem: {
    eyebrow: 'The problem',
    title: "Kernel versions don't tell the whole story.",
    description: 'CO-RE improves portability. It does not prove that a compiled artifact or the loader you ship will work on a customer kernel.',
    cards: [
      { title: 'Vendor backports', description: 'Enterprise distributions backport eBPF capabilities onto older kernel bases. Version-number heuristics miss this.' },
      { title: 'Verifier & BTF reality', description: 'Partial BTF, relocation failures, map support and attach-type differences still decide whether an artifact loads.' },
      { title: 'Your real loader', description: 'libbpf and ebpf-go are different implementations. BPFCompat can run the loader you actually ship inside every target VM.' },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'One lifecycle. Two control points.',
    description: 'Validate compatibility before release with BPFCompat. Enforce policy after deployment with AegisBPF.',
    preDeployment: 'Pre-deployment',
    runtime: 'Runtime',
    openSource: 'Open source',
    preview: 'Preview',
    bpfDesc: 'Compatibility evidence for compiled eBPF artifacts and real project loaders across real Linux kernels.',
    aegisDesc: 'Enforcement-first Linux runtime security using BPF LSM, scoped policy controls and structured forensic evidence.',
    explore: 'Explore',
  },
  lifecycle: {
    eyebrow: 'Lifecycle',
    title: 'Know before you ship. Enforce after you deploy.',
    stages: [
      { label: '01', title: 'Build', detail: 'Compile the artifact and package the loader.' },
      { label: '02 · BPFCompat', title: 'Validate', detail: 'Boot target kernels, load, attach and classify.' },
      { label: '03', title: 'Release', detail: 'Turn compatibility evidence into a CI decision.' },
      { label: '04', title: 'Deploy', detail: 'Ship into Linux and Kubernetes fleets.' },
      { label: '05 · AegisBPF', title: 'Enforce', detail: 'Apply runtime policy close to the kernel.' },
    ],
  },
  integrations: {
    eyebrow: 'Upstream proof',
    title: 'Integrated where eBPF is actually shipped.',
    description: 'BPFCompat now has recurring compatibility lanes merged into two upstream eBPF projects.',
    falco: "Falco's modern_bpf probe is exercised through its real loader in scheduled CI, with a follow-up expansion to RHEL-family vendor kernels.",
    gadget: 'Inspektor Gadget merged a weekly lane that pulls published gadgets by OCI reference and validates load/attach behavior on vendor distro images.',
    evidenceLink: 'View merged PR',
    disclaimer: 'These are public upstream CI integrations, not claimed customer deployments or endorsements.',
  },
  trust: {
    eyebrow: 'Trust model',
    title: 'Evidence you can inspect and reproduce.',
    description: 'The strongest Kernel Guard claims resolve to source code, execution evidence or verifiable release provenance.',
    items: [
      { title: 'Real kernels', description: 'Compatibility verdicts come from actual vendor kernel execution, not a static feature table.' },
      { title: 'Disposable VMs', description: 'Matrix validation runs inside throwaway guests; host execution is not the default path.' },
      { title: 'Signed releases', description: 'Tagged BPFCompat releases ship checksums and keyless signature evidence.' },
      { title: 'CycloneDX SBOM', description: 'Release artifacts include a machine-readable software bill of materials.' },
      { title: 'SLSA provenance', description: 'Build origin can be verified instead of accepted as an opaque binary claim.' },
      { title: 'Open development', description: 'Core projects, security policies, issues and technical evidence are reviewed in public.' },
    ],
  },
  quickstart: {
    eyebrow: 'Quickstart',
    title: 'Run a real compatibility test.',
    description: 'Point BPFCompat at a local object or a published OCI gadget. The quick profile needs no custom matrix.',
    docs: 'Read the quickstart',
  },
  kernels: {
    eyebrow: 'Kernel coverage',
    title: 'Designed for heterogeneous Linux fleets.',
    description: 'The maintained catalog spans public vendor families plus operator-supplied enterprise images where redistribution is restricted.',
    catalog: 'View current kernel catalog',
  },
  final: {
    title: 'Know before you ship.',
    description: 'Validate eBPF against the kernels your users actually run, then keep runtime policy close to the kernel.',
    primary: 'Try BPFCompat',
    secondary: 'Talk to Kernel Guard',
  },
  footerDescription: 'Open-source infrastructure for eBPF compatibility evidence and Linux runtime enforcement.',
};

const tr: EvidenceHomeCopy = {
  ...en,
  seoTitle: 'Kernel Guard — eBPF Uyumluluk Kanıtı ve Çalışma Zamanı Enforcement',
  seoDescription: 'Kernel Guard, eBPF yazılımlarını dağıtımdan önce gerçek Linux çekirdeklerinde doğrulamak ve çalışma zamanında politika uygulamak için açık kaynak altyapı geliştirir.',
  nav: { bpfcompat: 'BPFCompat', aegis: 'AegisBPF', openSource: 'Açık Kaynak', security: 'Güvenlik', contact: 'İletişim' },
  hero: {
    ...en.hero,
    eyebrow: 'Linux · eBPF · yeniden üretilebilir kanıt',
    titleBefore: 'Linux çekirdeği için',
    titleEvidence: 'güvenlik altyapısı.',
    titleAfter: '',
    description: 'eBPF’yi dağıtımdan önce doğrulayın. Politikayı çalışma zamanında uygulayın.',
    primaryCta: 'BPFCompat ile test et',
    secondaryCta: "GitHub'da incele",
    note: 'Önce self-hosted · gerçek vendor çekirdekleri · yapılandırılmış uyumluluk raporları',
    terminalLabel: 'bpfcompat / gerçek çekirdek kapısı',
  },
  proof: { upstreamLabel: 'Upstream kullanım', upstreamValue: 'Falco · Inspektor Gadget', executionLabel: 'Çalıştırma', executionValue: 'Gerçek vendor çekirdekleri', architecturesLabel: 'Mimariler', architecturesValue: 'x86_64 + ARM64', provenanceLabel: 'Tedarik zinciri', provenanceValue: 'İmzalı · SBOM · SLSA' },
  problem: {
    eyebrow: 'Problem',
    title: 'Çekirdek sürümü tek başına gerçeği söylemez.',
    description: 'CO-RE taşınabilirliği artırır; derlenmiş artifact’in veya gerçek loader’ın müşteri çekirdeğinde çalışacağını kanıtlamaz.',
    cards: [
      { title: 'Vendor backportları', description: 'Kurumsal dağıtımlar eBPF özelliklerini eski çekirdek tabanlarına backport eder. Sürüm numarası bunu güvenilir biçimde göstermez.' },
      { title: 'Verifier ve BTF gerçeği', description: 'Eksik BTF, relocation hataları, map ve attach-type farkları artifact’in yüklenip yüklenmeyeceğini belirlemeye devam eder.' },
      { title: 'Gerçek loader', description: 'libbpf ve ebpf-go farklı implementasyonlardır. BPFCompat dağıttığınız gerçek loader’ı her hedef VM içinde çalıştırabilir.' },
    ],
  },
  products: { ...en.products, eyebrow: 'Ürünler', title: 'Tek yaşam döngüsü. İki kontrol noktası.', description: 'Yayın öncesi BPFCompat ile uyumluluğu doğrulayın; dağıtım sonrası AegisBPF ile politika uygulayın.', preDeployment: 'Dağıtım öncesi', runtime: 'Çalışma zamanı', openSource: 'Açık kaynak', preview: 'Önizleme', bpfDesc: 'Derlenmiş eBPF artifact’leri ve gerçek proje loader’ları için gerçek Linux çekirdeklerinde uyumluluk kanıtı.', aegisDesc: 'BPF LSM, scope’lu politika kontrolleri ve yapılandırılmış forensic kanıt kullanan enforcement-first Linux runtime security.', explore: 'İncele' },
  lifecycle: { ...en.lifecycle, eyebrow: 'Yaşam döngüsü', title: 'Yayınlamadan önce bilin. Dağıtımdan sonra uygulayın.', stages: [
    { label: '01', title: 'Build', detail: 'Artifact’i derleyin ve loader’ı paketleyin.' },
    { label: '02 · BPFCompat', title: 'Doğrula', detail: 'Hedef çekirdekleri boot edin; load, attach ve classify edin.' },
    { label: '03', title: 'Yayınla', detail: 'Uyumluluk kanıtını CI kararına dönüştürün.' },
    { label: '04', title: 'Dağıt', detail: 'Linux ve Kubernetes filolarına gönderin.' },
    { label: '05 · AegisBPF', title: 'Uygula', detail: 'Runtime politikasını çekirdeğe yakın uygulayın.' },
  ]},
  integrations: { ...en.integrations, eyebrow: 'Upstream kanıt', title: 'eBPF’nin gerçekten yayınlandığı yere entegre.', description: 'BPFCompat artık iki upstream eBPF projesinde merge edilmiş tekrarlayan uyumluluk lane’lerine sahip.', falco: 'Falco modern_bpf probe’u gerçek loader üzerinden scheduled CI içinde test ediliyor; takip PR’ı RHEL-family vendor çekirdeklerini ekledi.', gadget: 'Inspektor Gadget, yayımlanmış OCI gadget’larını çekip vendor distro image’larında load/attach doğrulayan haftalık lane’i merge etti.', evidenceLink: 'Merge edilmiş PR’ı gör', disclaimer: 'Bunlar kamuya açık upstream CI entegrasyonlarıdır; müşteri deployment’ı veya endorsement iddiası değildir.' },
  trust: { ...en.trust, eyebrow: 'Güven modeli', title: 'İnceleyebileceğiniz ve yeniden üretebileceğiniz kanıt.', description: 'Kernel Guard’ın en güçlü iddiaları kaynak koda, çalışma kanıtına veya doğrulanabilir release provenance’a bağlanır.' },
  quickstart: { eyebrow: 'Hızlı başlangıç', title: 'Gerçek bir uyumluluk testi çalıştırın.', description: 'BPFCompat’ı yerel bir object’e veya yayımlanmış OCI gadget’a yöneltin. Quick profil özel matrix gerektirmez.', docs: 'Quickstart’ı oku' },
  kernels: { eyebrow: 'Çekirdek kapsamı', title: 'Heterojen Linux filoları için tasarlandı.', description: 'Bakımı yapılan katalog, public vendor ailelerinin yanında dağıtımı kısıtlı kurumsal image’lar için operator-supplied yolları da kapsar.', catalog: 'Güncel kernel kataloğunu gör' },
  final: { title: 'Yayınlamadan önce bilin.', description: 'eBPF’yi kullanıcılarınızın gerçekten çalıştırdığı çekirdeklerde doğrulayın; runtime politikasını çekirdeğe yakın tutun.', primary: 'BPFCompat’ı dene', secondary: 'Kernel Guard ile konuş' },
  footerDescription: 'eBPF uyumluluk kanıtı ve Linux runtime enforcement için açık kaynak altyapı.',
};

const de: EvidenceHomeCopy = {
  ...en,
  hero: { ...en.hero, eyebrow: 'Linux · eBPF · reproduzierbare Evidenz', titleBefore: 'Sicherheitsinfrastruktur für', titleEvidence: 'den Linux-Kernel.', titleAfter: '', description: 'eBPF vor dem Deployment validieren. Richtlinien zur Laufzeit durchsetzen.', primaryCta: 'Mit BPFCompat testen', secondaryCta: 'Auf GitHub ansehen', note: 'Self-hosted first · echte Vendor-Kernel · strukturierte Kompatibilitätsberichte', terminalLabel: 'bpfcompat / Real-Kernel-Gate' },
  problem: { ...en.problem, eyebrow: 'Das Problem', title: 'Kernel-Versionen erzählen nicht die ganze Geschichte.', description: 'CO-RE verbessert Portabilität, beweist aber nicht, dass ein kompiliertes Artefakt oder Ihr echter Loader auf einem Kunden-Kernel funktioniert.' },
  products: { ...en.products, eyebrow: 'Produkte', title: 'Ein Lebenszyklus. Zwei Kontrollpunkte.', description: 'Kompatibilität vor dem Release mit BPFCompat prüfen. Richtlinien nach dem Deployment mit AegisBPF durchsetzen.', preDeployment: 'Vor dem Deployment', runtime: 'Laufzeit', openSource: 'Open Source', preview: 'Preview', explore: 'Ansehen' },
  integrations: { ...en.integrations, eyebrow: 'Upstream-Evidenz', title: 'Integriert, wo eBPF tatsächlich ausgeliefert wird.', description: 'BPFCompat besitzt wiederkehrende, upstream gemergte Kompatibilitäts-Lanes in zwei eBPF-Projekten.', evidenceLink: 'Gemergten PR ansehen', disclaimer: 'Dies sind öffentliche Upstream-CI-Integrationen, keine behaupteten Kunden-Deployments oder Empfehlungen.' },
  trust: { ...en.trust, eyebrow: 'Vertrauensmodell', title: 'Evidenz, die Sie prüfen und reproduzieren können.' },
  quickstart: { eyebrow: 'Quickstart', title: 'Einen echten Kompatibilitätstest ausführen.', description: 'BPFCompat auf ein lokales Objekt oder ein veröffentlichtes OCI-Gadget richten. Das Quick-Profil benötigt keine eigene Matrix.', docs: 'Quickstart lesen' },
  kernels: { eyebrow: 'Kernel-Abdeckung', title: 'Für heterogene Linux-Flotten entwickelt.', description: 'Der gepflegte Katalog deckt öffentliche Vendor-Familien und vom Betreiber bereitgestellte Enterprise-Images ab.', catalog: 'Aktuellen Kernel-Katalog ansehen' },
  final: { title: 'Wissen, bevor Sie ausliefern.', description: 'Validieren Sie eBPF auf den Kerneln, die Ihre Nutzer tatsächlich betreiben, und halten Sie Runtime-Richtlinien nah am Kernel.', primary: 'BPFCompat testen', secondary: 'Kernel Guard kontaktieren' },
  footerDescription: 'Open-Source-Infrastruktur für eBPF-Kompatibilitätsevidenz und Linux-Runtime-Enforcement.',
};

const fr: EvidenceHomeCopy = {
  ...en,
  hero: { ...en.hero, eyebrow: 'Linux · eBPF · preuves reproductibles', titleBefore: 'Infrastructure de sécurité pour', titleEvidence: 'le noyau Linux.', titleAfter: '', description: 'Validez eBPF avant le déploiement. Appliquez les politiques à l’exécution.', primaryCta: 'Tester avec BPFCompat', secondaryCta: 'Voir sur GitHub', note: 'Self-hosted d’abord · vrais noyaux éditeurs · rapports structurés', terminalLabel: 'bpfcompat / validation noyau réel' },
  problem: { ...en.problem, eyebrow: 'Le problème', title: 'La version du noyau ne raconte pas toute l’histoire.', description: 'CO-RE améliore la portabilité, mais ne prouve pas qu’un artefact compilé ou votre vrai loader fonctionnera sur le noyau d’un client.' },
  products: { ...en.products, eyebrow: 'Produits', title: 'Un cycle de vie. Deux points de contrôle.', description: 'Validez avant la release avec BPFCompat. Appliquez les politiques après déploiement avec AegisBPF.', preDeployment: 'Pré-déploiement', runtime: 'Exécution', openSource: 'Open source', preview: 'Preview', explore: 'Explorer' },
  integrations: { ...en.integrations, eyebrow: 'Preuve upstream', title: 'Intégré là où eBPF est réellement livré.', description: 'BPFCompat dispose désormais de lanes de compatibilité récurrentes fusionnées dans deux projets eBPF upstream.', evidenceLink: 'Voir la PR fusionnée', disclaimer: 'Il s’agit d’intégrations CI upstream publiques, pas de déploiements clients ni d’endossements revendiqués.' },
  trust: { ...en.trust, eyebrow: 'Modèle de confiance', title: 'Des preuves que vous pouvez inspecter et reproduire.' },
  quickstart: { eyebrow: 'Démarrage rapide', title: 'Exécutez un vrai test de compatibilité.', description: 'Pointez BPFCompat vers un objet local ou un gadget OCI publié. Le profil quick ne nécessite aucune matrice personnalisée.', docs: 'Lire le quickstart' },
  kernels: { eyebrow: 'Couverture noyaux', title: 'Conçu pour des flottes Linux hétérogènes.', description: 'Le catalogue maintenu couvre les principales familles publiques ainsi que les images entreprise fournies par l’opérateur.', catalog: 'Voir le catalogue actuel' },
  final: { title: 'Sachez avant de livrer.', description: 'Validez eBPF sur les noyaux réellement utilisés par vos utilisateurs, puis gardez les politiques runtime près du noyau.', primary: 'Essayer BPFCompat', secondary: 'Parler à Kernel Guard' },
  footerDescription: 'Infrastructure open source pour la preuve de compatibilité eBPF et l’enforcement runtime Linux.',
};

const es: EvidenceHomeCopy = {
  ...en,
  hero: { ...en.hero, eyebrow: 'Linux · eBPF · evidencia reproducible', titleBefore: 'Infraestructura de seguridad para', titleEvidence: 'el kernel de Linux.', titleAfter: '', description: 'Valida eBPF antes del despliegue. Aplica políticas en tiempo de ejecución.', primaryCta: 'Probar con BPFCompat', secondaryCta: 'Ver en GitHub', note: 'Self-hosted primero · kernels reales de proveedores · informes estructurados', terminalLabel: 'bpfcompat / gate de kernel real' },
  problem: { ...en.problem, eyebrow: 'El problema', title: 'La versión del kernel no cuenta toda la historia.', description: 'CO-RE mejora la portabilidad, pero no demuestra que un artefacto compilado o tu loader real funcione en el kernel del cliente.' },
  products: { ...en.products, eyebrow: 'Productos', title: 'Un ciclo de vida. Dos puntos de control.', description: 'Valida antes del release con BPFCompat. Aplica políticas tras el despliegue con AegisBPF.', preDeployment: 'Pre-despliegue', runtime: 'Runtime', openSource: 'Open source', preview: 'Preview', explore: 'Explorar' },
  integrations: { ...en.integrations, eyebrow: 'Prueba upstream', title: 'Integrado donde eBPF realmente se distribuye.', description: 'BPFCompat ya tiene lanes recurrentes de compatibilidad fusionadas en dos proyectos eBPF upstream.', evidenceLink: 'Ver PR fusionada', disclaimer: 'Son integraciones CI upstream públicas; no se presentan como clientes, despliegues de producción ni endorsements.' },
  trust: { ...en.trust, eyebrow: 'Modelo de confianza', title: 'Evidencia que puedes inspeccionar y reproducir.' },
  quickstart: { eyebrow: 'Inicio rápido', title: 'Ejecuta una prueba real de compatibilidad.', description: 'Apunta BPFCompat a un objeto local o a un gadget OCI publicado. El perfil quick no necesita una matriz personalizada.', docs: 'Leer quickstart' },
  kernels: { eyebrow: 'Cobertura de kernels', title: 'Diseñado para flotas Linux heterogéneas.', description: 'El catálogo mantenido cubre familias públicas de proveedores e imágenes enterprise aportadas por el operador.', catalog: 'Ver catálogo actual' },
  final: { title: 'Saber antes de publicar.', description: 'Valida eBPF contra los kernels que tus usuarios ejecutan realmente y mantén la política runtime cerca del kernel.', primary: 'Probar BPFCompat', secondary: 'Hablar con Kernel Guard' },
  footerDescription: 'Infraestructura open source para evidencia de compatibilidad eBPF y enforcement runtime en Linux.',
};

const ja: EvidenceHomeCopy = {
  ...en,
  hero: { ...en.hero, eyebrow: 'Linux · eBPF · 再現可能な証拠', titleBefore: 'Linux カーネルのための', titleEvidence: 'セキュリティ基盤。', titleAfter: '', description: 'デプロイ前に eBPF を検証し、ランタイムでポリシーを適用します。', primaryCta: 'BPFCompat でテスト', secondaryCta: 'GitHub で見る', note: 'セルフホスト優先 · 実ベンダーカーネル · 構造化された互換性レポート', terminalLabel: 'bpfcompat / 実カーネルゲート' },
  problem: { ...en.problem, eyebrow: '課題', title: 'カーネルバージョンだけでは真実は分からない。', description: 'CO-RE は移植性を高めますが、コンパイル済み artifact や実際の loader が顧客カーネルで動くことを証明しません。' },
  products: { ...en.products, eyebrow: 'プロダクト', title: '1つのライフサイクル。2つの制御点。', description: 'リリース前は BPFCompat で互換性を検証し、デプロイ後は AegisBPF でポリシーを適用します。', preDeployment: 'デプロイ前', runtime: 'ランタイム', openSource: 'オープンソース', preview: 'プレビュー', explore: '見る' },
  integrations: { ...en.integrations, eyebrow: 'Upstream の証拠', title: 'eBPF が実際に出荷される場所に統合。', description: 'BPFCompat は現在、2つの upstream eBPF プロジェクトに定期互換性 lane がマージされています。', evidenceLink: 'マージ済み PR を見る', disclaimer: 'これは公開 upstream CI 統合であり、顧客導入や endorsement を意味しません。' },
  trust: { ...en.trust, eyebrow: '信頼モデル', title: '確認し、再現できる証拠。' },
  quickstart: { eyebrow: 'Quickstart', title: '実際の互換性テストを実行。', description: 'ローカル object または公開 OCI gadget を BPFCompat に指定します。quick profile に独自 matrix は不要です。', docs: 'Quickstart を読む' },
  kernels: { eyebrow: 'Kernel coverage', title: '異種 Linux fleet のために設計。', description: '管理カタログは公開 vendor family と operator 提供の enterprise image をカバーします。', catalog: '現在の kernel catalog' },
  final: { title: '出荷前に知る。', description: 'ユーザーが実際に使うカーネルで eBPF を検証し、ランタイムポリシーをカーネルの近くに保ちます。', primary: 'BPFCompat を試す', secondary: 'Kernel Guard に相談' },
  footerDescription: 'eBPF 互換性証拠と Linux runtime enforcement のためのオープンソース基盤。',
};

const zhCN: EvidenceHomeCopy = {
  ...en,
  hero: { ...en.hero, eyebrow: 'Linux · eBPF · 可复现证据', titleBefore: '面向 Linux 内核的', titleEvidence: '安全基础设施。', titleAfter: '', description: '部署前验证 eBPF，运行时执行策略。', primaryCta: '使用 BPFCompat 测试', secondaryCta: '在 GitHub 查看', note: '优先自托管 · 真实厂商内核 · 结构化兼容性报告', terminalLabel: 'bpfcompat / 真实内核门禁' },
  problem: { ...en.problem, eyebrow: '问题', title: '内核版本并不能说明全部事实。', description: 'CO-RE 提升可移植性，但不能证明已编译 artifact 或真实 loader 能在客户内核上工作。' },
  products: { ...en.products, eyebrow: '产品', title: '一个生命周期，两个控制点。', description: '发布前用 BPFCompat 验证兼容性；部署后用 AegisBPF 执行策略。', preDeployment: '部署前', runtime: '运行时', openSource: '开源', preview: '预览', explore: '查看' },
  integrations: { ...en.integrations, eyebrow: 'Upstream 证据', title: '集成到 eBPF 真正发布的地方。', description: 'BPFCompat 目前已在两个 upstream eBPF 项目中合并定期兼容性 CI lane。', evidenceLink: '查看已合并 PR', disclaimer: '这些是公开的 upstream CI 集成，不代表客户部署或背书。' },
  trust: { ...en.trust, eyebrow: '信任模型', title: '可检查、可复现的证据。' },
  quickstart: { eyebrow: '快速开始', title: '运行一次真实兼容性测试。', description: '将 BPFCompat 指向本地 object 或已发布 OCI gadget；quick profile 不需要自定义 matrix。', docs: '阅读 Quickstart' },
  kernels: { eyebrow: '内核覆盖', title: '为异构 Linux 集群设计。', description: '维护中的目录覆盖公开厂商系列，以及由操作方提供的受限企业镜像。', catalog: '查看当前内核目录' },
  final: { title: '发布前先知道。', description: '在用户实际运行的内核上验证 eBPF，并让运行时策略尽可能靠近内核。', primary: '试用 BPFCompat', secondary: '联系 Kernel Guard' },
  footerDescription: '面向 eBPF 兼容性证据与 Linux 运行时策略执行的开源基础设施。',
};

const ko: EvidenceHomeCopy = {
  ...en,
  hero: { ...en.hero, eyebrow: 'Linux · eBPF · 재현 가능한 증거', titleBefore: 'Linux 커널을 위한', titleEvidence: '보안 인프라.', titleAfter: '', description: '배포 전에 eBPF를 검증하고 런타임에서 정책을 집행합니다.', primaryCta: 'BPFCompat로 테스트', secondaryCta: 'GitHub에서 보기', note: '셀프호스트 우선 · 실제 벤더 커널 · 구조화된 호환성 보고서', terminalLabel: 'bpfcompat / 실제 커널 게이트' },
  problem: { ...en.problem, eyebrow: '문제', title: '커널 버전만으로는 전체 사실을 알 수 없습니다.', description: 'CO-RE는 이식성을 높이지만 컴파일된 artifact나 실제 loader가 고객 커널에서 동작한다는 것을 증명하지 않습니다.' },
  products: { ...en.products, eyebrow: '제품', title: '하나의 라이프사이클, 두 개의 제어 지점.', description: '릴리스 전에는 BPFCompat로 호환성을 검증하고 배포 후에는 AegisBPF로 정책을 집행합니다.', preDeployment: '배포 전', runtime: '런타임', openSource: '오픈소스', preview: '프리뷰', explore: '살펴보기' },
  integrations: { ...en.integrations, eyebrow: 'Upstream 증거', title: 'eBPF가 실제로 배포되는 곳에 통합되었습니다.', description: 'BPFCompat는 현재 두 upstream eBPF 프로젝트에 반복 호환성 CI lane이 병합되어 있습니다.', evidenceLink: '병합된 PR 보기', disclaimer: '이는 공개 upstream CI 통합이며 고객 배포나 endorsement를 의미하지 않습니다.' },
  trust: { ...en.trust, eyebrow: '신뢰 모델', title: '검사하고 재현할 수 있는 증거.' },
  quickstart: { eyebrow: 'Quickstart', title: '실제 호환성 테스트를 실행하세요.', description: '로컬 object 또는 공개 OCI gadget을 BPFCompat에 지정하세요. quick profile에는 사용자 matrix가 필요 없습니다.', docs: 'Quickstart 읽기' },
  kernels: { eyebrow: '커널 범위', title: '이기종 Linux fleet을 위해 설계되었습니다.', description: '유지 관리되는 카탈로그는 공개 벤더 계열과 운영자가 제공하는 enterprise image를 포함합니다.', catalog: '현재 커널 카탈로그 보기' },
  final: { title: '배포 전에 확인하세요.', description: '사용자가 실제로 실행하는 커널에서 eBPF를 검증하고 런타임 정책을 커널 가까이에 유지하세요.', primary: 'BPFCompat 사용해보기', secondary: 'Kernel Guard 문의' },
  footerDescription: 'eBPF 호환성 증거와 Linux 런타임 정책 집행을 위한 오픈소스 인프라.',
};

export const evidenceHomeCopy: Record<Language, EvidenceHomeCopy> = {
  en,
  tr,
  de,
  fr,
  es,
  ja,
  'zh-CN': zhCN,
  ko,
};
