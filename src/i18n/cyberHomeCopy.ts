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

export const cyberHomeCopy: Record<Language, CyberHomeCopy> = {
  en: {
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
  },
  tr: {
    seo: {
      title: 'Kernel Guard | Siber Güvenlik Altyapısı',
      description: 'Kernel Guard; uyumluluk güvencesi, çalışma zamanı yaptırımı ve doğrulanabilir koruma için siber güvenlik altyapısı geliştirir.',
      keywords: 'Kernel Guard, siber güvenlik altyapısı, çalışma zamanı güvenliği, eBPF güvenliği, Linux güvenliği, BPFCompat, AegisBPF, bulut yerel güvenlik, uyumluluk güvencesi',
    },
    hero: {
      line1: 'Siber Güvenlik',
      line2: 'Altyapısı',
      description: 'Dağıtım öncesi uyumluluk güvencesi. Dağıtım sonrası çalışma zamanı yaptırımı. Modern sistemler için doğrulanabilir güvenlik altyapısı.',
    },
    mission: {
      title: 'Yayın aşamasından çalışma zamanına güvenlik',
      p1: 'BPFCompat, derlenmiş eBPF artifact’lerini ve gerçek loader’ları kullanıcıların gerçekten çalıştırdığı çekirdeklerde test ederek uyumluluk varsayımlarını çalıştırılabilir kanıta dönüştürür ve siber güvenliğin dağıtım öncesi katmanını güçlendirir.',
      p2: 'AegisBPF; çekirdek seviyesinde yaptırım, kapsamlandırılmış politika kontrolleri ve yapılandırılmış güvenlik olaylarıyla çalışma zamanı tarafını kapsar. Linux ve eBPF teknik katmandır; Kernel Guard daha geniş ve doğrulanabilir bir siber güvenlik altyapısı inşa eder.',
    },
    tech: {
      title: 'Siber Güvenlik Mühendisliği Teknolojileri',
      description: 'Uyumluluk güvencesi, çalışma zamanı yaptırımı ve siber güvenlik altyapısının arkasındaki sistem teknolojileri.',
    },
    proof: {
      badge: 'GÜVENLİK // AÇIK_KANIT',
      title: 'Yüzey metriği değil, güvenlik kanıtı',
      description: 'Yayınlanmış güvenlik mühendisliğine ve kamuya açık upstream çalışmalara bağlı kanıtlar.',
      cards: [
        { label: 'Birleştirilmiş upstream entegrasyonlar', detail: 'BPFCompat uyumluluk hatları Falco ve Inspektor Gadget upstream projelerine birleştirildi.' },
        { label: 'Gerçek çekirdek doğrulaması', detail: 'Geçici QEMU/KVM sanal makineleri statik sürüm tahminleri yerine gerçek dağıtıcı çekirdeklerini çalıştırır.' },
        { label: 'Mimari kapsamı', detail: 'Uyumluluk doğrulaması x86_64 ve ARM64 mimarilerini kapsar.' },
        { label: 'Tedarik zinciri kanıtı', detail: 'Etiketli sürümler imza, CycloneDX SBOM ve SLSA provenance içerir.' },
      ],
      summary: ['upstream’e birleştirildi', 'uyumluluk çalıştırması', 'sürüm kanıtı'],
      footnote: 'Adı geçen ekosistem projeleri entegrasyondur; müşteri olarak sunulmaz.',
    },
  },
  de: {
    seo: {
      title: 'Kernel Guard | Cybersecurity-Infrastruktur',
      description: 'Kernel Guard entwickelt Cybersecurity-Infrastruktur für Kompatibilitätssicherheit, Runtime-Enforcement und verifizierbaren Schutz moderner Systeme.',
      keywords: 'Kernel Guard, Cybersecurity-Infrastruktur, Runtime Security, eBPF-Sicherheit, Linux-Sicherheit, BPFCompat, AegisBPF, Cloud-Native-Sicherheit, Kompatibilität',
    },
    hero: {
      line1: 'Cybersecurity',
      line2: 'Infrastruktur',
      description: 'Kompatibilität vor dem Deployment. Runtime-Enforcement danach. Verifizierbare Sicherheitsinfrastruktur für moderne Systeme.',
    },
    mission: {
      title: 'Sicherheit vom Release bis zur Runtime',
      p1: 'BPFCompat stärkt die Sicherheit vor dem Deployment, indem kompilierte eBPF-Artefakte und reale Loader auf den Kerneln getestet werden, die Nutzer tatsächlich betreiben. So werden Kompatibilitätsannahmen zu ausführbarer Evidenz.',
      p2: 'AegisBPF deckt die Runtime-Seite mit Enforcement auf Kernel-Ebene, gezielt abgegrenzten Richtlinien und strukturierten Sicherheitsereignissen ab. Linux und eBPF bilden die technische Schicht; Kernel Guard baut darüber hinaus verifizierbare Cybersecurity-Infrastruktur.',
    },
    tech: {
      title: 'Security-Engineering-Stack',
      description: 'Die Systemtechnologien hinter Kompatibilitätssicherheit, Runtime-Enforcement und Cybersecurity-Infrastruktur.',
    },
    proof: {
      badge: 'SECURITY // ÖFFENTLICHE_EVIDENZ',
      title: 'Sicherheitsnachweise statt Oberflächenmetriken',
      description: 'Nachweise, die direkt mit ausgelieferter Security-Engineering-Arbeit und öffentlicher Upstream-Integration verbunden sind.',
      cards: [
        { label: 'Gemergte Upstream-Integrationen', detail: 'BPFCompat-Kompatibilitäts-Lanes wurden in Falco und Inspektor Gadget integriert.' },
        { label: 'Validierung auf realen Kerneln', detail: 'Disposable QEMU/KVM-Gäste führen reale Vendor-Kernel aus statt statischer Versionsheuristiken.' },
        { label: 'Architekturabdeckung', detail: 'Die Kompatibilitätsvalidierung deckt x86_64 und ARM64 ab.' },
        { label: 'Supply-Chain-Evidenz', detail: 'Getaggte Releases enthalten Signaturen, CycloneDX-SBOMs und SLSA-Provenance.' },
      ],
      summary: ['upstream integriert', 'Kompatibilitätsausführung', 'Release-Evidenz'],
      footnote: 'Genannte Ökosystem-Projekte sind Integrationen und werden nicht als Kunden dargestellt.',
    },
  },
  ja: {
    seo: {
      title: 'Kernel Guard | サイバーセキュリティ基盤',
      description: 'Kernel Guard は、互換性保証、ランタイムでのポリシー適用、検証可能な保護のためのサイバーセキュリティ基盤を構築します。',
      keywords: 'Kernel Guard, サイバーセキュリティ基盤, ランタイムセキュリティ, eBPF セキュリティ, Linux セキュリティ, BPFCompat, AegisBPF, クラウドネイティブセキュリティ, 互換性保証',
    },
    hero: {
      line1: 'サイバーセキュリティ',
      line2: '基盤',
      description: 'デプロイ前の互換性保証。デプロイ後のランタイム適用。現代のシステム向けの検証可能なセキュリティ基盤。',
    },
    mission: {
      title: 'リリースからランタイムまでのセキュリティ',
      p1: 'BPFCompat は、コンパイル済み eBPF アーティファクトと実際のローダーをユーザーが運用する実カーネル上で検証し、互換性の仮定を実行可能な証拠へ変えます。',
      p2: 'AegisBPF は、カーネルレベルの enforcement、スコープされたポリシー制御、構造化されたセキュリティイベントでランタイム側を担います。Linux と eBPF は技術レイヤーであり、Kernel Guard はより広い検証可能なサイバーセキュリティ基盤を構築します。',
    },
    tech: {
      title: 'セキュリティエンジニアリング・スタック',
      description: '互換性保証、ランタイム enforcement、サイバーセキュリティ基盤を支えるシステム技術。',
    },
    proof: {
      badge: 'SECURITY // 公開証拠',
      title: '表面的な指標ではなく、セキュリティの証拠',
      description: '実際に提供しているセキュリティエンジニアリングと公開 upstream 作業に結び付いた証拠です。',
      cards: [
        { label: 'マージ済み upstream 統合', detail: 'BPFCompat の互換性レーンは Falco と Inspektor Gadget にマージされています。' },
        { label: '実カーネル検証', detail: '使い捨て QEMU/KVM ゲストで、静的なバージョン推測ではなく実際のベンダーカーネルを起動します。' },
        { label: 'アーキテクチャ対応', detail: '互換性検証は x86_64 と ARM64 を対象にします。' },
        { label: 'サプライチェーン証拠', detail: 'タグ付きリリースには署名、CycloneDX SBOM、SLSA provenance が含まれます。' },
      ],
      summary: ['upstream にマージ済み', '互換性実行', 'リリース証拠'],
      footnote: '掲載しているエコシステムプロジェクトは統合先であり、顧客として表示しているものではありません。',
    },
  },
  'zh-CN': {
    seo: {
      title: 'Kernel Guard | 网络安全基础设施',
      description: 'Kernel Guard 构建面向兼容性保障、运行时策略执行和可验证保护的网络安全基础设施。',
      keywords: 'Kernel Guard, 网络安全基础设施, 运行时安全, eBPF 安全, Linux 安全, BPFCompat, AegisBPF, 云原生安全, 兼容性保障',
    },
    hero: {
      line1: '网络安全',
      line2: '基础设施',
      description: '部署前的兼容性保障。部署后的运行时策略执行。面向现代系统的可验证安全基础设施。',
    },
    mission: {
      title: '从发布到运行时的安全',
      p1: 'BPFCompat 在用户实际运行的内核上测试已编译的 eBPF 工件和真实加载器，把兼容性假设转化为可执行证据，从而强化部署前的安全保障。',
      p2: 'AegisBPF 通过内核级策略执行、限定范围的策略控制和结构化安全事件覆盖运行时侧。Linux 和 eBPF 是技术层；Kernel Guard 在此基础上构建更广泛、可验证的网络安全基础设施。',
    },
    tech: {
      title: '安全工程技术栈',
      description: '支撑兼容性保障、运行时策略执行和网络安全基础设施的系统技术。',
    },
    proof: {
      badge: 'SECURITY // 公开证据',
      title: '安全证据，而不是表面指标',
      description: '与已交付的安全工程和公开 upstream 工作直接相关的证据。',
      cards: [
        { label: '已合并的 upstream 集成', detail: 'BPFCompat 兼容性流水线已合并到 Falco 和 Inspektor Gadget。' },
        { label: '真实内核验证', detail: '一次性 QEMU/KVM 虚拟机运行真实厂商内核，而不是依赖静态版本推断。' },
        { label: '架构覆盖', detail: '兼容性验证覆盖 x86_64 和 ARM64。' },
        { label: '供应链证据', detail: '带标签的发布包含签名、CycloneDX SBOM 和 SLSA provenance。' },
      ],
      summary: ['已合并到 upstream', '兼容性执行', '发布证据'],
      footnote: '页面中点名的生态项目表示集成关系，并不表示客户关系。',
    },
  },
  es: {
    seo: {
      title: 'Kernel Guard | Infraestructura de ciberseguridad',
      description: 'Kernel Guard desarrolla infraestructura de ciberseguridad para asegurar compatibilidad, aplicar políticas en tiempo de ejecución y ofrecer protección verificable.',
      keywords: 'Kernel Guard, infraestructura de ciberseguridad, seguridad en tiempo de ejecución, seguridad eBPF, seguridad Linux, BPFCompat, AegisBPF, seguridad cloud native, compatibilidad',
    },
    hero: {
      line1: 'Infraestructura de',
      line2: 'Ciberseguridad',
      description: 'Compatibilidad antes del despliegue. Enforcement en tiempo de ejecución después del despliegue. Infraestructura de seguridad verificable para sistemas modernos.',
    },
    mission: {
      title: 'Seguridad desde el release hasta el runtime',
      p1: 'BPFCompat refuerza la seguridad previa al despliegue al probar artefactos eBPF compilados y loaders reales en los kernels que utilizan los usuarios, convirtiendo supuestos de compatibilidad en evidencia ejecutable.',
      p2: 'AegisBPF cubre el runtime con enforcement a nivel de kernel, controles de política con alcance definido y eventos de seguridad estructurados. Linux y eBPF son la capa técnica; Kernel Guard construye una infraestructura de ciberseguridad más amplia y verificable.',
    },
    tech: {
      title: 'Stack de ingeniería de seguridad',
      description: 'Las tecnologías de sistemas detrás de la compatibilidad, el enforcement en runtime y la infraestructura de ciberseguridad.',
    },
    proof: {
      badge: 'SEGURIDAD // EVIDENCIA_PÚBLICA',
      title: 'Evidencia de seguridad, no métricas superficiales',
      description: 'Pruebas vinculadas al trabajo de ingeniería de seguridad entregado y a integraciones upstream públicas.',
      cards: [
        { label: 'Integraciones upstream fusionadas', detail: 'Los lanes de compatibilidad de BPFCompat se han fusionado en Falco e Inspektor Gadget.' },
        { label: 'Validación en kernels reales', detail: 'Guests QEMU/KVM desechables ejecutan kernels reales de proveedores en lugar de heurísticas estáticas de versión.' },
        { label: 'Cobertura de arquitecturas', detail: 'La validación de compatibilidad cubre x86_64 y ARM64.' },
        { label: 'Evidencia de cadena de suministro', detail: 'Las releases etiquetadas incluyen firmas, CycloneDX SBOM y SLSA provenance.' },
      ],
      summary: ['fusionado upstream', 'ejecución de compatibilidad', 'evidencia de release'],
      footnote: 'Los proyectos del ecosistema mencionados son integraciones; no se presentan como clientes.',
    },
  },
  fr: {
    seo: {
      title: 'Kernel Guard | Infrastructure de cybersécurité',
      description: 'Kernel Guard développe une infrastructure de cybersécurité pour garantir la compatibilité, appliquer des politiques à l’exécution et fournir une protection vérifiable.',
      keywords: 'Kernel Guard, infrastructure de cybersécurité, sécurité runtime, sécurité eBPF, sécurité Linux, BPFCompat, AegisBPF, sécurité cloud native, assurance de compatibilité',
    },
    hero: {
      line1: 'Infrastructure de',
      line2: 'Cybersécurité',
      description: 'Assurance de compatibilité avant déploiement. Enforcement à l’exécution après déploiement. Infrastructure de sécurité vérifiable pour les systèmes modernes.',
    },
    mission: {
      title: 'La sécurité du release au runtime',
      p1: 'BPFCompat renforce la sécurité avant déploiement en testant les artefacts eBPF compilés et les vrais loaders sur les noyaux réellement utilisés, transformant ainsi les hypothèses de compatibilité en preuves exécutables.',
      p2: 'AegisBPF couvre le runtime avec un enforcement au niveau du noyau, des contrôles de politique ciblés et des événements de sécurité structurés. Linux et eBPF constituent la couche technique; Kernel Guard construit une infrastructure de cybersécurité plus large et vérifiable.',
    },
    tech: {
      title: 'Stack d’ingénierie sécurité',
      description: 'Les technologies systèmes derrière l’assurance de compatibilité, l’enforcement runtime et l’infrastructure de cybersécurité.',
    },
    proof: {
      badge: 'SÉCURITÉ // PREUVE_PUBLIQUE',
      title: 'Des preuves de sécurité, pas des métriques de surface',
      description: 'Des preuves directement liées à l’ingénierie sécurité livrée et aux intégrations upstream publiques.',
      cards: [
        { label: 'Intégrations upstream fusionnées', detail: 'Les lanes de compatibilité BPFCompat ont été fusionnées dans Falco et Inspektor Gadget.' },
        { label: 'Validation sur de vrais noyaux', detail: 'Des guests QEMU/KVM jetables exécutent de vrais noyaux éditeurs au lieu de simples heuristiques de version.' },
        { label: 'Couverture des architectures', detail: 'La validation de compatibilité couvre x86_64 et ARM64.' },
        { label: 'Preuves de supply chain', detail: 'Les releases taguées incluent des signatures, des SBOM CycloneDX et une provenance SLSA.' },
      ],
      summary: ['fusionné upstream', 'exécution de compatibilité', 'preuve de release'],
      footnote: 'Les projets d’écosystème cités sont des intégrations et ne sont pas présentés comme des clients.',
    },
  },
  ko: {
    seo: {
      title: 'Kernel Guard | 사이버보안 인프라',
      description: 'Kernel Guard는 호환성 보장, 런타임 정책 집행, 검증 가능한 보호를 위한 사이버보안 인프라를 구축합니다.',
      keywords: 'Kernel Guard, 사이버보안 인프라, 런타임 보안, eBPF 보안, Linux 보안, BPFCompat, AegisBPF, 클라우드 네이티브 보안, 호환성 보장',
    },
    hero: {
      line1: '사이버보안',
      line2: '인프라',
      description: '배포 전 호환성 보장. 배포 후 런타임 정책 집행. 현대 시스템을 위한 검증 가능한 보안 인프라.',
    },
    mission: {
      title: '릴리스부터 런타임까지의 보안',
      p1: 'BPFCompat는 사용자가 실제로 운영하는 커널에서 컴파일된 eBPF 아티팩트와 실제 로더를 테스트해 호환성 가정을 실행 가능한 증거로 바꾸고 배포 전 보안을 강화합니다.',
      p2: 'AegisBPF는 커널 수준 enforcement, 범위가 지정된 정책 제어, 구조화된 보안 이벤트로 런타임 영역을 담당합니다. Linux와 eBPF는 기술 계층이며, Kernel Guard는 그 위에 더 넓고 검증 가능한 사이버보안 인프라를 구축합니다.',
    },
    tech: {
      title: '보안 엔지니어링 스택',
      description: '호환성 보장, 런타임 enforcement, 사이버보안 인프라를 구성하는 시스템 기술입니다.',
    },
    proof: {
      badge: '보안 // 공개_증거',
      title: '표면 지표가 아닌 보안 증거',
      description: '실제로 제공되는 보안 엔지니어링과 공개 upstream 작업에 직접 연결된 증거입니다.',
      cards: [
        { label: '병합된 upstream 통합', detail: 'BPFCompat 호환성 lane이 Falco와 Inspektor Gadget에 병합되었습니다.' },
        { label: '실제 커널 검증', detail: '일회성 QEMU/KVM guest가 정적인 버전 추정 대신 실제 벤더 커널을 실행합니다.' },
        { label: '아키텍처 범위', detail: '호환성 검증은 x86_64와 ARM64를 지원합니다.' },
        { label: '공급망 증거', detail: '태그된 릴리스에는 서명, CycloneDX SBOM, SLSA provenance가 포함됩니다.' },
      ],
      summary: ['upstream 병합', '호환성 실행', '릴리스 증거'],
      footnote: '이름이 표시된 생태계 프로젝트는 통합 대상이며 고객으로 제시되지 않습니다.',
    },
  },
};
