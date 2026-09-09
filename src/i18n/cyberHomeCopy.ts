import type { Language } from '../context/LanguageContext';

export interface CyberHomeCopy {
  seo: { title: string; description: string; keywords: string };
  hero: { line1: string; line2: string; description: string };
  mission: { title: string; p1: string; p2: string };
  tech: { title: string; description: string };
  proof: {
    badge: string;
    title: string;
    description: string;
    cards: Array<{ label: string; detail: string }>;
    summary: [string, string, string];
    footnote: string;
  };
}

const en: CyberHomeCopy = {
  seo: {
    title: 'Kernel Guard | Cybersecurity Infrastructure',
    description: 'Kernel Guard builds cybersecurity infrastructure for compatibility assurance, runtime enforcement, and verifiable protection across modern systems.',
    keywords: 'Kernel Guard, cybersecurity infrastructure, runtime security, eBPF security, Linux security, BPFCompat, AegisBPF, cloud native security, compatibility assurance',
  },
  hero: {
    line1: 'Cybersecurity',
    line2: 'Infrastructure',
    description: 'Compatibility assurance before deployment. Runtime enforcement after deployment. Verifiable security infrastructure for modern systems.',
  },
  mission: {
    title: 'Security from release to runtime',
    p1: 'BPFCompat strengthens the pre-deployment side of cybersecurity by testing compiled eBPF artifacts and real loaders against the kernels users actually run, turning compatibility assumptions into executable evidence.',
    p2: 'AegisBPF covers the runtime side with kernel-level enforcement, scoped policy controls, and structured security events. Linux and eBPF are the technical layer; Kernel Guard is building broader, verifiable cybersecurity infrastructure.',
  },
  tech: {
    title: 'Security Engineering Stack',
    description: 'The systems technologies behind compatibility assurance, runtime enforcement, and cybersecurity infrastructure.',
  },
  proof: {
    badge: 'SECURITY // PUBLIC_EVIDENCE',
    title: 'Security evidence, not surface metrics',
    description: 'Proof tied to shipped security engineering and public upstream work.',
    cards: [
      { label: 'Merged upstream integrations', detail: 'BPFCompat compatibility lanes merged into Falco and Inspektor Gadget.' },
      { label: 'Real-kernel validation', detail: 'Disposable QEMU/KVM guests run actual vendor kernels instead of static version heuristics.' },
      { label: 'Architecture coverage', detail: 'Compatibility validation covers x86_64 and ARM64.' },
      { label: 'Supply-chain evidence', detail: 'Tagged releases include signatures, CycloneDX SBOMs, and SLSA provenance.' },
    ],
    summary: ['merged upstream', 'compatibility execution', 'release evidence'],
    footnote: 'Named ecosystem projects are integrations, not claimed customers.',
  },
};

const tr: CyberHomeCopy = {
  seo: {
    title: 'Kernel Guard | Siber Güvenlik Altyapısı',
    description: 'Kernel Guard; uyumluluk güvencesi, runtime enforcement ve doğrulanabilir koruma için siber güvenlik altyapısı geliştirir.',
    keywords: 'Kernel Guard, siber güvenlik altyapısı, runtime security, eBPF güvenliği, Linux güvenliği, BPFCompat, AegisBPF, cloud native security',
  },
  hero: {
    line1: 'Siber Güvenlik',
    line2: 'Altyapısı',
    description: 'Dağıtım öncesi uyumluluk güvencesi. Dağıtım sonrası runtime enforcement. Modern sistemler için doğrulanabilir güvenlik altyapısı.',
  },
  mission: {
    title: "Release'den runtime'a güvenlik",
    p1: "BPFCompat, derlenmiş eBPF artifact'lerini ve gerçek loader'ları kullanıcıların gerçekten çalıştırdığı kernel'larda test ederek uyumluluk varsayımlarını çalıştırılabilir kanıta dönüştürür ve siber güvenliğin dağıtım öncesi katmanını güçlendirir.",
    p2: "AegisBPF, kernel-level enforcement, scope'lu politika kontrolleri ve yapılandırılmış security event'lerle runtime tarafını kapsar. Linux ve eBPF teknik katmandır; Kernel Guard daha geniş ve doğrulanabilir bir siber güvenlik altyapısı inşa eder.",
  },
  tech: {
    title: "Siber Güvenlik Mühendisliği Stack'i",
    description: 'Uyumluluk güvencesi, runtime enforcement ve siber güvenlik altyapısının arkasındaki sistem teknolojileri.',
  },
  proof: {
    badge: 'GÜVENLİK // AÇIK_KANIT',
    title: 'Yüzey metriği değil, güvenlik kanıtı',
    description: 'Yayınlanan güvenlik mühendisliğine ve kamuya açık upstream çalışmalara bağlı kanıt.',
    cards: [
      { label: 'Merge edilmiş upstream entegrasyonlar', detail: "BPFCompat compatibility lane'leri Falco ve Inspektor Gadget'a merge edildi." },
      { label: 'Gerçek-kernel doğrulama', detail: "Disposable QEMU/KVM guest'ler statik version heuristics yerine gerçek vendor kernel'ları çalıştırır." },
      { label: 'Mimari kapsamı', detail: "Uyumluluk doğrulaması x86_64 ve ARM64'ü kapsar." },
      { label: 'Supply-chain kanıtı', detail: "Tagged release'ler signature, CycloneDX SBOM ve SLSA provenance içerir." },
    ],
    summary: ['upstream merge', 'compatibility execution', 'release kanıtı'],
    footnote: 'İsim verilen ekosistem projeleri entegrasyondur; müşteri olarak iddia edilmez.',
  },
};

function derived(overrides: Partial<CyberHomeCopy> & {
  hero: CyberHomeCopy['hero'];
  mission: CyberHomeCopy['mission'];
  tech: CyberHomeCopy['tech'];
  seo: CyberHomeCopy['seo'];
  proof: CyberHomeCopy['proof'];
}): CyberHomeCopy {
  return { ...en, ...overrides };
}

const de = derived({
  seo: { title: 'Kernel Guard | Cybersecurity-Infrastruktur', description: 'Kernel Guard entwickelt Cybersecurity-Infrastruktur für Kompatibilitätssicherheit, Runtime-Enforcement und verifizierbaren Schutz.', keywords: en.seo.keywords },
  hero: { line1: 'Cybersecurity', line2: 'Infrastruktur', description: 'Kompatibilität vor dem Deployment. Runtime-Enforcement danach. Verifizierbare Sicherheitsinfrastruktur für moderne Systeme.' },
  mission: { title: 'Sicherheit vom Release bis zur Runtime', p1: 'BPFCompat testet kompilierte eBPF-Artefakte und reale Loader auf den Kerneln, die Nutzer tatsächlich betreiben, und macht Kompatibilitätsannahmen zu ausführbarer Evidenz.', p2: 'AegisBPF deckt die Runtime-Seite mit Kernel-Enforcement, scoped Policies und strukturierten Security Events ab. Linux und eBPF sind die technische Schicht; Kernel Guard baut verifizierbare Cybersecurity-Infrastruktur.' },
  tech: { title: 'Security-Engineering-Stack', description: 'Systemtechnologien hinter Kompatibilitätssicherheit, Runtime-Enforcement und Cybersecurity-Infrastruktur.' },
  proof: { ...en.proof, badge: 'SECURITY // ÖFFENTLICHE_EVIDENZ', title: 'Security-Evidenz statt Oberflächenmetriken', description: 'Nachweise aus ausgelieferter Security-Engineering-Arbeit und öffentlicher Upstream-Integration.', footnote: 'Genannte Ökosystem-Projekte sind Integrationen, keine behaupteten Kunden.' },
});

const ja = derived({
  seo: { title: 'Kernel Guard | サイバーセキュリティ基盤', description: 'Kernel Guard は互換性保証、ランタイム enforcement、検証可能な保護のためのサイバーセキュリティ基盤を開発します。', keywords: en.seo.keywords },
  hero: { line1: 'サイバーセキュリティ', line2: '基盤', description: 'デプロイ前の互換性保証。デプロイ後の runtime enforcement。現代のシステム向けの検証可能なセキュリティ基盤。' },
  mission: { title: 'Release から Runtime までのセキュリティ', p1: 'BPFCompat は、コンパイル済み eBPF artifact と実際の loader をユーザーが使う実カーネルで検証し、互換性の仮定を実行可能な証拠に変えます。', p2: 'AegisBPF は kernel-level enforcement、scoped policy、構造化 security event でランタイム側を担います。Linux と eBPF は技術レイヤーであり、Kernel Guard は検証可能なサイバーセキュリティ基盤を構築します。' },
  tech: { title: 'セキュリティ・エンジニアリング・スタック', description: '互換性保証、runtime enforcement、サイバーセキュリティ基盤を支えるシステム技術。' },
  proof: { ...en.proof, badge: 'SECURITY // PUBLIC_EVIDENCE', title: '表面的な指標ではなくセキュリティ証拠', description: '公開 upstream 作業と実際の security engineering に紐づく証拠。', footnote: '掲載プロジェクトは integration であり、顧客として主張していません。' },
});

const zhCN = derived({
  seo: { title: 'Kernel Guard | 网络安全基础设施', description: 'Kernel Guard 构建面向兼容性保障、运行时策略执行和可验证保护的网络安全基础设施。', keywords: en.seo.keywords },
  hero: { line1: '网络安全', line2: '基础设施', description: '部署前兼容性保障。部署后运行时策略执行。面向现代系统的可验证安全基础设施。' },
  mission: { title: '从发布到运行时的安全', p1: 'BPFCompat 在用户实际运行的内核上测试已编译 eBPF artifact 和真实 loader，把兼容性假设转化为可执行证据。', p2: 'AegisBPF 通过内核级 enforcement、作用域策略控制和结构化安全事件覆盖运行时侧。Linux 和 eBPF 是技术层；Kernel Guard 构建更广泛、可验证的网络安全基础设施。' },
  tech: { title: '安全工程技术栈', description: '支撑兼容性保障、runtime enforcement 和网络安全基础设施的系统技术。' },
  proof: { ...en.proof, badge: 'SECURITY // 公开证据', title: '不是表面指标，而是安全证据', description: '与实际安全工程和公开 upstream 工作直接相关的证据。', footnote: '列出的生态项目表示集成关系，并不表示客户关系。' },
});

const es = derived({
  seo: { title: 'Kernel Guard | Infraestructura de ciberseguridad', description: 'Kernel Guard desarrolla infraestructura de ciberseguridad para assurance de compatibilidad, enforcement runtime y protección verificable.', keywords: en.seo.keywords },
  hero: { line1: 'Infraestructura de', line2: 'Ciberseguridad', description: 'Compatibility assurance antes del despliegue. Enforcement runtime después. Infraestructura de seguridad verificable para sistemas modernos.' },
  mission: { title: 'Seguridad desde el release hasta runtime', p1: 'BPFCompat prueba artifacts eBPF compilados y loaders reales contra los kernels que ejecutan los usuarios, convirtiendo supuestos de compatibilidad en evidencia ejecutable.', p2: 'AegisBPF cubre runtime con enforcement a nivel de kernel, políticas con scope y eventos de seguridad estructurados. Linux y eBPF son la capa técnica; Kernel Guard construye infraestructura de ciberseguridad verificable.' },
  tech: { title: 'Stack de ingeniería de seguridad', description: 'Tecnologías de sistemas detrás de compatibility assurance, runtime enforcement y ciberseguridad.' },
  proof: { ...en.proof, badge: 'SECURITY // EVIDENCIA_PUBLICA', title: 'Evidencia de seguridad, no métricas superficiales', description: 'Pruebas vinculadas a ingeniería de seguridad y trabajo upstream público.', footnote: 'Los proyectos nombrados son integraciones, no clientes declarados.' },
});

const fr = derived({
  seo: { title: 'Kernel Guard | Infrastructure de cybersécurité', description: 'Kernel Guard développe une infrastructure de cybersécurité pour l’assurance de compatibilité, l’enforcement runtime et une protection vérifiable.', keywords: en.seo.keywords },
  hero: { line1: 'Infrastructure de', line2: 'Cybersécurité', description: 'Assurance de compatibilité avant déploiement. Enforcement runtime après. Infrastructure de sécurité vérifiable pour les systèmes modernes.' },
  mission: { title: 'La sécurité du release au runtime', p1: 'BPFCompat teste les artifacts eBPF compilés et les vrais loaders sur les noyaux réellement utilisés, transformant les hypothèses de compatibilité en preuves exécutables.', p2: 'AegisBPF couvre le runtime avec enforcement au niveau du noyau, politiques scoped et événements de sécurité structurés. Linux et eBPF sont la couche technique; Kernel Guard construit une infrastructure de cybersécurité vérifiable.' },
  tech: { title: 'Stack d’ingénierie sécurité', description: 'Technologies systèmes derrière compatibility assurance, runtime enforcement et cybersécurité.' },
  proof: { ...en.proof, badge: 'SECURITY // PREUVE_PUBLIQUE', title: 'Des preuves de sécurité, pas des métriques de surface', description: 'Preuves liées à l’ingénierie sécurité livrée et au travail upstream public.', footnote: 'Les projets nommés sont des intégrations, pas des clients revendiqués.' },
});

const ko = derived({
  seo: { title: 'Kernel Guard | 사이버보안 인프라', description: 'Kernel Guard는 호환성 보장, 런타임 정책 집행, 검증 가능한 보호를 위한 사이버보안 인프라를 구축합니다.', keywords: en.seo.keywords },
  hero: { line1: '사이버보안', line2: '인프라', description: '배포 전 호환성 보장. 배포 후 runtime enforcement. 현대 시스템을 위한 검증 가능한 보안 인프라.' },
  mission: { title: 'Release부터 Runtime까지의 보안', p1: 'BPFCompat는 사용자가 실제로 실행하는 커널에서 컴파일된 eBPF artifact와 실제 loader를 테스트해 호환성 가정을 실행 가능한 증거로 바꿉니다.', p2: 'AegisBPF는 kernel-level enforcement, scoped policy controls, 구조화된 security event로 런타임 측을 담당합니다. Linux와 eBPF는 기술 레이어이며 Kernel Guard는 더 넓은 사이버보안 인프라를 구축합니다.' },
  tech: { title: '보안 엔지니어링 스택', description: '호환성 보장, runtime enforcement, 사이버보안 인프라를 구성하는 시스템 기술.' },
  proof: { ...en.proof, badge: 'SECURITY // 공개_증거', title: '표면 지표가 아닌 보안 증거', description: '실제 security engineering과 공개 upstream 작업에 연결된 증거.', footnote: '표시된 프로젝트는 integration이며 고객이라고 주장하지 않습니다.' },
});

export const cyberHomeCopy: Record<Language, CyberHomeCopy> = {
  en,
  tr,
  de,
  ja,
  'zh-CN': zhCN,
  es,
  fr,
  ko,
};
