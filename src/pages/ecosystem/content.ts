import type { Language } from '../../context/LanguageContext';

export type IntegrationId = 'falco' | 'inspektor-gadget';

export interface BrandLogo {
  src: string;
  alt: string;
}

export interface DownstreamRelationship {
  name: string;
  logos?: BrandLogo[];
  category: string;
  relationship: string;
  evidenceLabel: string;
  evidenceUrl: string;
}

export interface IntegrationPageCopy {
  name: string;
  logo: BrandLogo;
  kicker: string;
  title: string;
  description: string;
  whatTitle: string;
  whatBody: string;
  contributionTitle: string;
  contribution: string[];
  whyTitle: string;
  why: string[];
  downstreamTitle: string;
  downstreamIntro: string;
  downstream: DownstreamRelationship[];
  evidenceTitle: string;
  evidenceIntro: string;
  claimTitle: string;
  claimBody: string;
}

export interface EcosystemCopy {
  index: {
    kicker: string;
    title1: string;
    title2: string;
    description: string;
    whyTitle: string;
    whyP1: string;
    whyP2: string;
    chainTitle: string;
    chainSteps: [string, string, string];
    integrationsTitle: string;
    integrationsDescription: string;
    view: string;
    downstreamTitle: string;
    downstreamDescription: string;
    claimTitle: string;
    claimBody: string;
  };
  labels: {
    back: string;
    publicEvidence: string;
    merged: string;
    downstream: string;
    upstreamIntegration: string;
  };
  integrations: Record<IntegrationId, IntegrationPageCopy>;
}

export const brandLogos = {
  falco: { src: '/images/ecosystem/falco.svg', alt: 'Falco' },
  inspektorGadget: { src: '/images/ecosystem/inspektor-gadget.svg', alt: 'Inspektor Gadget' },
  sysdig: { src: '/images/ecosystem/sysdig.svg', alt: 'Sysdig' },
  aws: { src: '/images/ecosystem/aws.svg', alt: 'Amazon Web Services' },
  qonto: { src: '/images/ecosystem/qonto.svg', alt: 'Qonto' },
  shopify: { src: '/images/ecosystem/shopify.svg', alt: 'Shopify' },
  frameio: { src: '/images/ecosystem/frameio.svg', alt: 'Frame.io' },
  azure: { src: '/images/ecosystem/azure.svg', alt: 'Microsoft Azure' },
  kubernetes: { src: '/images/ecosystem/kubernetes.svg', alt: 'Kubernetes' },
} satisfies Record<string, BrandLogo>;

const en: EcosystemCopy = {
  index: {
    kicker: 'ECOSYSTEM // PUBLIC_EVIDENCE',
    title1: 'Upstream',
    title2: 'Integrations',
    description:
      'Kernel Guard contributes compatibility validation to open-source cybersecurity projects whose users depend on reliable kernel-level behavior.',
    whyTitle: 'Why upstream integration matters',
    whyP1:
      'A security tool becomes more credible when its compatibility checks run where the underlying technology is actually developed and released. BPFCompat integrations move validation from an isolated demo into upstream CI.',
    whyP2:
      'That does not make every downstream user a BPFCompat customer. It means upstream projects can detect compatibility regressions earlier, and the teams consuming those projects may indirectly benefit from stronger release evidence.',
    chainTitle: 'How the impact flows',
    chainSteps: ['Kernel Guard / BPFCompat', 'Upstream security project', 'Downstream products & security teams'],
    integrationsTitle: 'Current upstream integrations',
    integrationsDescription:
      'Each page below documents what was merged, why it matters, and which downstream products or publicly documented users sit behind the upstream project.',
    view: 'View integration',
    downstreamTitle: 'Downstream relevance, not a customer list',
    downstreamDescription:
      'We separate direct BPFCompat adoption from downstream ecosystem exposure. Named companies and products are included only where their relationship with Falco or Inspektor Gadget is publicly documented.',
    claimTitle: 'Claim discipline',
    claimBody:
      'Falco, Inspektor Gadget, Microsoft, Sysdig, AWS, Shopify, Qonto, Frame.io and other names on these pages are not presented as BPFCompat customers unless explicitly stated. The relationship shown is the public upstream/downstream chain.',
  },
  labels: {
    back: 'Back to upstream integrations',
    publicEvidence: 'Public evidence',
    merged: 'Merged upstream',
    downstream: 'Downstream relationship',
    upstreamIntegration: 'Upstream integration',
  },
  integrations: {
    falco: {
      name: 'Falco',
      logo: brandLogos.falco,
      kicker: 'CLOUD-NATIVE RUNTIME SECURITY',
      title: 'BPFCompat in the Falco compatibility path',
      description:
        'Falco is a CNCF-graduated runtime security project. Kernel Guard added recurring BPFCompat validation around Falco’s eBPF probe path so compatibility assumptions can be exercised against real kernel environments.',
      whatTitle: 'What Falco is',
      whatBody:
        'Falco detects suspicious behavior across hosts, containers, Kubernetes and cloud environments. Its runtime visibility depends on reliable access to Linux kernel events, including eBPF-based probe paths.',
      contributionTitle: 'What Kernel Guard integrated',
      contribution: [
        'PR #3024 merged the scheduled BPFCompat compatibility lane for Falco’s modern_bpf path; the follow-up #3061 proof run exercised the real scap-open --modern_bpf loader path.',
        'PR #3061 expanded the lane with AlmaLinux 8 and 9. Its dress rehearsal passed all five kernels through the real loader path, including AlmaLinux 8’s 4.18 base with backported BPF ring-buffer and BTF support.',
        'The result is executable compatibility evidence: load and attach behavior can be checked in real kernel profiles instead of inferred from kernel version numbers.',
      ],
      whyTitle: 'Why this matters for cybersecurity',
      why: [
        'Runtime detection loses value if the kernel probe cannot load or attach reliably on the fleet being protected.',
        'Enterprise Linux vendors backport eBPF capabilities, so two kernels with very different version numbers can expose surprising compatibility behavior.',
        'Upstream CI gives maintainers a place to catch compatibility regressions before they propagate into downstream deployments.',
      ],
      downstreamTitle: 'Who sits downstream of Falco',
      downstreamIntro:
        'These are publicly documented Falco relationships. They show ecosystem reach, not direct BPFCompat adoption.',
      downstream: [
        {
          name: 'Sysdig Secure / Sysdig cloud security',
          logos: [brandLogos.sysdig],
          category: 'Commercial security products',
          relationship:
            'Sysdig states that Falco sits at the core of its cloud security products. BPFCompat’s Falco CI work therefore has indirect relevance to a commercial security stack built on the same upstream technology.',
          evidenceLabel: 'Sysdig — Falco',
          evidenceUrl: 'https://www.sysdig.com/opensource/falco',
        },
        {
          name: 'Stratoshark',
          logos: [brandLogos.sysdig],
          category: 'Open-source cloud forensics',
          relationship:
            'Falco can produce SCAP captures that feed Stratoshark investigation workflows. Compatibility confidence in Falco’s kernel-event path can therefore matter upstream of that forensic workflow.',
          evidenceLabel: 'Sysdig — Stratoshark',
          evidenceUrl: 'https://www.sysdig.com/opensource/stratoshark',
        },
        {
          name: 'AWS · Qonto · Shopify',
          logos: [brandLogos.aws, brandLogos.qonto, brandLogos.shopify],
          category: 'Publicly documented Falco users',
          relationship:
            'Falco’s graduation material publicly identified these organizations as Falco users. They are not claimed as BPFCompat users; they represent teams downstream of the upstream project.',
          evidenceLabel: 'Falco graduation evidence',
          evidenceUrl: 'https://falco.org/blog/falco-applies-for-graduation/',
        },
        {
          name: 'Frame.io',
          logos: [brandLogos.frameio],
          category: 'CNCF case study',
          relationship:
            'CNCF documented Frame.io building an end-to-end security system on top of Falco data. This is another example of a production security workflow downstream of Falco, not a direct BPFCompat adoption claim.',
          evidenceLabel: 'CNCF case study',
          evidenceUrl: 'https://www.cncf.io/case-studies/frameio/',
        },
      ],
      evidenceTitle: 'Public contribution evidence',
      evidenceIntro:
        'The integration claims on this page resolve to merged public pull requests in the upstream Falco libraries repository.',
      claimTitle: 'What we are not claiming',
      claimBody:
        'Kernel Guard is not claiming that Sysdig, AWS, Qonto, Shopify, Frame.io or every Falco user runs BPFCompat directly. The defensible claim is narrower: BPFCompat is merged into an upstream Falco compatibility workflow, and downstream Falco users may benefit from the release evidence that workflow produces.',
    },
    'inspektor-gadget': {
      name: 'Inspektor Gadget',
      logo: brandLogos.inspektorGadget,
      kicker: 'KUBERNETES & LINUX OBSERVABILITY',
      title: 'BPFCompat for published eBPF gadgets',
      description:
        'Inspektor Gadget packages eBPF programs as OCI-based Gadgets for Kubernetes and Linux inspection. Kernel Guard added a weekly BPFCompat lane that validates published Gadgets across kernel profiles.',
      whatTitle: 'What Inspektor Gadget is',
      whatBody:
        'Inspektor Gadget is a framework and toolset for collecting low-level system data from Kubernetes clusters and Linux hosts using eBPF. Gadgets are packaged as OCI images and can be run interactively or continuously.',
      contributionTitle: 'What Kernel Guard integrated',
      contribution: [
        'PR #5708 merged a non-blocking weekly kernel-compatibility lane for published Gadgets.',
        'The workflow resolves published OCI Gadget references and records per-kernel compatibility evidence for baseline and current versions. The full proof run covered 49 Gadgets across 11 kernel profiles: 539 baseline-to-current comparison cells.',
        'The lane can classify regressions, improvements, expected missing artifacts and incomplete profile results instead of reducing the result to a single opaque pass/fail. The proof run reported 0 regressions, 4 improvements and 0 unexpected missing reports.',
      ],
      whyTitle: 'Why this matters for cybersecurity & operations',
      why: [
        'Security and observability Gadgets rely on kernel features that differ across distro families, vendor backports and architectures.',
        'Published OCI artifacts can be checked as users consume them, rather than validating only source code or a developer workstation.',
        'A recurring compatibility lane gives maintainers earlier evidence when a Gadget release changes behavior across the kernel matrix.',
      ],
      downstreamTitle: 'Who sits downstream of Inspektor Gadget',
      downstreamIntro:
        'The strongest named downstream relationship is Microsoft Azure Kubernetes Service. This is not presented as direct Microsoft adoption of BPFCompat.',
      downstream: [
        {
          name: 'Microsoft Azure Kubernetes Service (AKS)',
          logos: [brandLogos.azure],
          category: 'Managed Kubernetes product',
          relationship:
            'Microsoft offers an Inspektor Gadget cluster extension for AKS in preview. The extension type is microsoft.inspektorgadget and it deploys the upstream tool as a DaemonSet. Upstream Gadget compatibility work can therefore have indirect relevance to users consuming Inspektor Gadget through AKS.',
          evidenceLabel: 'Microsoft Learn — AKS extension',
          evidenceUrl: 'https://learn.microsoft.com/en-us/azure/aks/inspektor-gadget-configure',
        },
        {
          name: 'Azure Monitor managed Prometheus',
          logos: [brandLogos.azure],
          category: 'Telemetry integration',
          relationship:
            'The AKS extension can export Gadget metrics to Azure Monitor managed Prometheus. This places Inspektor Gadget in a broader Microsoft observability workflow, while remaining distinct from direct BPFCompat usage.',
          evidenceLabel: 'Microsoft Learn — configuration',
          evidenceUrl: 'https://learn.microsoft.com/en-us/azure/aks/inspektor-gadget-configure',
        },
        {
          name: 'Kubernetes operators using kubectl gadget / Helm',
          logos: [brandLogos.kubernetes],
          category: 'Open-source deployment paths',
          relationship:
            'Inspektor Gadget is distributed for Kubernetes through its kubectl plugin and Helm-based deployment paths. Those operators are downstream consumers of the same published Gadget ecosystem exercised by the compatibility lane.',
          evidenceLabel: 'Inspektor Gadget documentation',
          evidenceUrl: 'https://github.com/inspektor-gadget/inspektor-gadget',
        },
      ],
      evidenceTitle: 'Public contribution evidence',
      evidenceIntro:
        'The integration claim resolves to the merged upstream pull request that added the weekly compatibility workflow.',
      claimTitle: 'What we are not claiming',
      claimBody:
        'Kernel Guard is not claiming that Microsoft, Azure, AKS customers or every Inspektor Gadget user runs BPFCompat directly. The claim is that BPFCompat-backed compatibility validation is merged into the upstream project whose Gadgets are consumed through these downstream paths.',
    },
  },
};

const tr: EcosystemCopy = {
  ...en,
  index: {
    kicker: 'EKOSİSTEM // AÇIK_KANIT',
    title1: 'Upstream',
    title2: 'Entegrasyonları',
    description:
      'Kernel Guard, kullanıcıları güvenilir kernel davranışına bağlı olan açık kaynak siber güvenlik projelerine uyumluluk doğrulaması entegre eder.',
    whyTitle: 'Upstream entegrasyon neden önemli?',
    whyP1:
      'Bir güvenlik aracının uyumluluk kontrolleri, teknolojinin gerçekten geliştirildiği ve yayınlandığı yerde çalıştığında daha anlamlı hale gelir. BPFCompat entegrasyonları doğrulamayı izole bir demodan upstream CI içine taşır.',
    whyP2:
      'Bu, her downstream kullanıcının BPFCompat müşterisi olduğu anlamına gelmez. Upstream projeler uyumluluk regresyonlarını daha erken yakalayabilir; bu projeleri kullanan ekipler de daha güçlü release kanıtından dolaylı olarak faydalanabilir.',
    chainTitle: 'Etki nasıl yayılıyor?',
    chainSteps: ['Kernel Guard / BPFCompat', 'Upstream güvenlik projesi', 'Downstream ürünler ve güvenlik ekipleri'],
    integrationsTitle: 'Mevcut upstream entegrasyonlar',
    integrationsDescription:
      'Aşağıdaki sayfalar neyin merge edildiğini, neden önemli olduğunu ve upstream projenin arkasında hangi downstream ürünlerin veya kamuya açık kullanıcıların bulunduğunu açıklar.',
    view: 'Entegrasyonu incele',
    downstreamTitle: 'Müşteri listesi değil, downstream etki',
    downstreamDescription:
      'Doğrudan BPFCompat adoption ile ekosistem erişimini ayırıyoruz. Şirket ve ürün isimleri yalnızca Falco veya Inspektor Gadget ile ilişkileri kamuya açık şekilde belgelenmişse eklenir.',
    claimTitle: 'Claim disiplini',
    claimBody:
      'Bu sayfalardaki Falco, Inspektor Gadget, Microsoft, Sysdig, AWS, Shopify, Qonto, Frame.io ve diğer isimler açıkça belirtilmedikçe BPFCompat müşterisi olarak sunulmaz. Gösterilen ilişki kamuya açık upstream/downstream zinciridir.',
  },
  labels: {
    back: 'Upstream entegrasyonlara dön',
    publicEvidence: 'Kamuya açık kanıt',
    merged: 'Upstream merge edildi',
    downstream: 'Downstream ilişki',
    upstreamIntegration: 'Upstream entegrasyon',
  },
  integrations: {
    falco: {
      ...en.integrations.falco,
      kicker: 'CLOUD-NATIVE RUNTIME SECURITY',
      title: 'Falco uyumluluk yolunda BPFCompat',
      description:
        'Falco, CNCF graduated bir runtime security projesidir. Kernel Guard, Falco’nun eBPF probe yoluna tekrarlayan BPFCompat doğrulaması ekleyerek uyumluluk varsayımlarının gerçek kernel ortamlarında test edilmesini sağladı.',
      whatTitle: 'Falco nedir?',
      whatBody:
        'Falco; host, container, Kubernetes ve cloud ortamlarında şüpheli davranışları tespit eder. Runtime görünürlüğü Linux kernel event’lerine ve eBPF tabanlı probe yollarına güvenilir erişime bağlıdır.',
      contributionTitle: 'Kernel Guard ne entegre etti?',
      contribution: [
        'PR #3024, Falco modern_bpf yolu için scheduled BPFCompat compatibility lane’ini merge etti; follow-up #3061 proof run gerçek scap-open --modern_bpf loader yolunu çalıştırdı.',
        'PR #3061, AlmaLinux 8 ve 9’u matrix’e ekledi. Dress rehearsal beş kernel’ın tamamını gerçek loader yolundan geçirdi; AlmaLinux 8’in 4.18 tabanı backport edilmiş BPF ring-buffer ve BTF desteğini de gösterdi.',
        'Sonuç: load ve attach davranışı kernel versiyonundan tahmin edilmek yerine gerçek kernel profillerinde çalıştırılarak kanıtlanabiliyor.',
      ],
      whyTitle: 'Siber güvenlik açısından neden önemli?',
      why: [
        'Korunan filoda kernel probe güvenilir biçimde load/attach olamıyorsa runtime detection’ın değeri düşer.',
        'Enterprise Linux vendor’ları eBPF özelliklerini backport eder; bu nedenle kernel version heuristics güvenilir değildir.',
        'Upstream CI, compatibility regression’larının downstream deployment’lara ulaşmadan önce yakalanabileceği bir kontrol noktası sağlar.',
      ],
      downstreamTitle: 'Falco’nun downstream’inde kimler var?',
      downstreamIntro:
        'Aşağıdakiler kamuya açık Falco ilişkileridir. Ekosistem erişimini gösterir; doğrudan BPFCompat adoption iddiası değildir.',
      downstream: en.integrations.falco.downstream.map((item) => ({
        ...item,
        relationship:
          item.name === 'Sysdig Secure / Sysdig cloud security'
            ? 'Sysdig, Falco’nun cloud security ürünlerinin çekirdeğinde yer aldığını belirtiyor. Bu nedenle BPFCompat’ın Falco CI çalışması, aynı upstream teknoloji üzerine kurulu ticari güvenlik stack’i açısından dolaylı öneme sahiptir.'
            : item.name === 'Stratoshark'
              ? 'Falco, Stratoshark investigation workflow’larına SCAP capture sağlayabilir. Falco’nun kernel-event yolundaki compatibility confidence bu forensic workflow’un upstream’inde önem taşır.'
              : item.name === 'AWS · Qonto · Shopify'
                ? 'Falco’nun graduation materyali bu organizasyonları Falco kullanıcıları olarak kamuya açık şekilde tanımladı. BPFCompat kullanıcısı olarak gösterilmiyorlar; upstream projenin downstream’indeki ekipleri temsil ediyorlar.'
                : 'CNCF, Frame.io’nun Falco verisi üzerinde uçtan uca bir güvenlik sistemi kurduğunu belgeledi. Bu doğrudan BPFCompat adoption iddiası değil, Falco’nun downstream’inde üretim güvenlik workflow’una bir örnektir.',
      })),
      evidenceTitle: 'Kamuya açık contribution kanıtı',
      evidenceIntro:
        'Bu sayfadaki integration claim’leri upstream Falco libraries reposundaki merge edilmiş public pull request’lere dayanır.',
      claimTitle: 'Neyi iddia etmiyoruz?',
      claimBody:
        'Kernel Guard; Sysdig, AWS, Qonto, Shopify, Frame.io veya tüm Falco kullanıcılarının BPFCompat’ı doğrudan çalıştırdığını iddia etmiyor. Savunulabilir claim daha dar: BPFCompat upstream Falco compatibility workflow’una merge edildi ve downstream Falco kullanıcıları bu workflow’un ürettiği release kanıtından dolaylı fayda görebilir.',
    },
    'inspektor-gadget': {
      ...en.integrations['inspektor-gadget'],
      kicker: 'KUBERNETES & LINUX OBSERVABILITY',
      title: 'Yayımlanmış eBPF Gadget’ları için BPFCompat',
      description:
        'Inspektor Gadget, eBPF programlarını Kubernetes ve Linux inspection için OCI tabanlı Gadget’lar olarak paketler. Kernel Guard, yayımlanmış Gadget’ları kernel profillerinde doğrulayan haftalık BPFCompat lane’i ekledi.',
      whatTitle: 'Inspektor Gadget nedir?',
      whatBody:
        'Inspektor Gadget, Kubernetes cluster’ları ve Linux host’lardan eBPF ile low-level system data toplayan framework ve araç setidir. Gadget’lar OCI image olarak paketlenir ve interaktif veya sürekli çalıştırılabilir.',
      contributionTitle: 'Kernel Guard ne entegre etti?',
      contribution: [
        'PR #5708, yayımlanmış Gadget’lar için non-blocking haftalık kernel-compatibility lane’ini merge etti.',
        'Workflow yayımlanmış OCI Gadget referanslarını resolve eder ve baseline/current sürümleri için kernel bazlı compatibility evidence kaydeder. Full proof run 49 Gadget × 11 kernel profiliyle 539 comparison cell üretti.',
        'Lane regression, improvement, expected missing artifact ve incomplete profile result durumlarını tek bir opaque pass/fail sonucuna indirgemeden sınıflandırabilir. Proof run 0 regression, 4 improvement ve 0 unexpected missing report gösterdi.',
      ],
      whyTitle: 'Siber güvenlik ve operasyon açısından neden önemli?',
      why: [
        'Security ve observability Gadget’ları distro family, vendor backport ve architecture’a göre değişen kernel özelliklerine dayanır.',
        'Yayımlanmış OCI artifact’leri kullanıcıların tükettiği biçimde test edilebilir; yalnızca source code veya developer workstation doğrulanmaz.',
        'Tekrarlayan compatibility lane, Gadget release davranışı kernel matrix üzerinde değiştiğinde maintainers’a daha erken kanıt sağlar.',
      ],
      downstreamTitle: 'Inspektor Gadget’ın downstream’inde kimler var?',
      downstreamIntro:
        'En güçlü isimlendirilmiş downstream ilişki Microsoft Azure Kubernetes Service’tir. Bu, Microsoft’un BPFCompat’ı doğrudan kullandığı iddiası değildir.',
      downstream: en.integrations['inspektor-gadget'].downstream.map((item) => ({
        ...item,
        relationship:
          item.name === 'Microsoft Azure Kubernetes Service (AKS)'
            ? 'Microsoft, AKS için preview Inspektor Gadget cluster extension sunuyor. Extension type microsoft.inspektorgadget ve upstream aracı DaemonSet olarak deploy ediyor. Upstream Gadget compatibility çalışması bu nedenle Inspektor Gadget’ı AKS üzerinden kullanan ekipler açısından dolaylı öneme sahip olabilir.'
            : item.name === 'Azure Monitor managed Prometheus'
              ? 'AKS extension, Gadget metrics’i Azure Monitor managed Prometheus’a export edebilir. Böylece Inspektor Gadget daha geniş bir Microsoft observability workflow’una girer; bu yine doğrudan BPFCompat kullanımı değildir.'
              : 'Inspektor Gadget Kubernetes üzerinde kubectl plugin ve Helm deployment yollarıyla dağıtılır. Bu operator’lar compatibility lane’in test ettiği aynı yayımlanmış Gadget ekosisteminin downstream kullanıcılarıdır.',
      })),
      evidenceTitle: 'Kamuya açık contribution kanıtı',
      evidenceIntro:
        'Integration claim, haftalık compatibility workflow’unu ekleyen merge edilmiş upstream pull request’e dayanır.',
      claimTitle: 'Neyi iddia etmiyoruz?',
      claimBody:
        'Kernel Guard; Microsoft, Azure, AKS müşterileri veya tüm Inspektor Gadget kullanıcılarının BPFCompat’ı doğrudan çalıştırdığını iddia etmiyor. Claim şudur: BPFCompat-backed compatibility validation, Gadget’ları bu downstream yollar üzerinden tüketilen upstream projeye merge edilmiştir.',
    },
  },
};

function derived(base: EcosystemCopy, values: Partial<EcosystemCopy['index']>, labels: Partial<EcosystemCopy['labels']>): EcosystemCopy {
  return {
    ...base,
    index: { ...base.index, ...values },
    labels: { ...base.labels, ...labels },
  };
}

const de = derived(en, {
  kicker: 'ÖKOSYSTEM // ÖFFENTLICHE_EVIDENZ',
  title1: 'Upstream',
  title2: 'Integrationen',
  description: 'Kernel Guard bringt Kompatibilitätsvalidierung in Open-Source-Cybersecurity-Projekte ein, deren Nutzer auf zuverlässiges Kernel-Verhalten angewiesen sind.',
  whyTitle: 'Warum Upstream-Integration wichtig ist',
  chainTitle: 'Wie die Wirkung weitergegeben wird',
  integrationsTitle: 'Aktuelle Upstream-Integrationen',
  view: 'Integration ansehen',
  downstreamTitle: 'Downstream-Relevanz, keine Kundenliste',
  claimTitle: 'Claim-Disziplin',
}, { back: 'Zurück zu Upstream-Integrationen', publicEvidence: 'Öffentliche Evidenz' });

const ja = derived(en, {
  kicker: 'ECOSYSTEM // PUBLIC_EVIDENCE',
  title1: 'Upstream',
  title2: '統合',
  description: 'Kernel Guard は、信頼できるカーネル動作に依存するオープンソースのサイバーセキュリティプロジェクトへ互換性検証を統合します。',
  whyTitle: 'Upstream 統合が重要な理由',
  chainTitle: '影響の流れ',
  integrationsTitle: '現在の Upstream 統合',
  view: '統合を見る',
  downstreamTitle: '顧客リストではなく downstream relevance',
  claimTitle: 'Claim discipline',
}, { back: 'Upstream 統合へ戻る', publicEvidence: '公開証拠' });

const zhCN = derived(en, {
  kicker: 'ECOSYSTEM // 公开证据',
  title1: 'Upstream',
  title2: '集成',
  description: 'Kernel Guard 将兼容性验证集成到依赖可靠内核行为的开源网络安全项目中。',
  whyTitle: '为什么 upstream 集成很重要',
  chainTitle: '影响如何传递',
  integrationsTitle: '当前 upstream 集成',
  view: '查看集成',
  downstreamTitle: '下游相关性，而不是客户名单',
  claimTitle: '声明边界',
}, { back: '返回 upstream 集成', publicEvidence: '公开证据' });

const es = derived(en, {
  kicker: 'ECOSISTEMA // EVIDENCIA_PUBLICA',
  title1: 'Integraciones',
  title2: 'Upstream',
  description: 'Kernel Guard integra validación de compatibilidad en proyectos open source de ciberseguridad cuyos usuarios dependen de un comportamiento fiable del kernel.',
  whyTitle: 'Por qué importa la integración upstream',
  chainTitle: 'Cómo fluye el impacto',
  integrationsTitle: 'Integraciones upstream actuales',
  view: 'Ver integración',
  downstreamTitle: 'Relevancia downstream, no una lista de clientes',
  claimTitle: 'Disciplina de claims',
}, { back: 'Volver a integraciones upstream', publicEvidence: 'Evidencia pública' });

const fr = derived(en, {
  kicker: 'ÉCOSYSTÈME // PREUVE_PUBLIQUE',
  title1: 'Intégrations',
  title2: 'Upstream',
  description: 'Kernel Guard intègre la validation de compatibilité dans des projets open source de cybersécurité dont les utilisateurs dépendent du comportement fiable du noyau.',
  whyTitle: 'Pourquoi l’intégration upstream compte',
  chainTitle: 'Comment l’impact se propage',
  integrationsTitle: 'Intégrations upstream actuelles',
  view: 'Voir l’intégration',
  downstreamTitle: 'Pertinence downstream, pas une liste de clients',
  claimTitle: 'Discipline des claims',
}, { back: 'Retour aux intégrations upstream', publicEvidence: 'Preuve publique' });

const ko = derived(en, {
  kicker: 'ECOSYSTEM // 공개_증거',
  title1: 'Upstream',
  title2: '통합',
  description: 'Kernel Guard는 안정적인 커널 동작에 의존하는 오픈소스 사이버보안 프로젝트에 호환성 검증을 통합합니다.',
  whyTitle: 'Upstream 통합이 중요한 이유',
  chainTitle: '영향이 전달되는 방식',
  integrationsTitle: '현재 upstream 통합',
  view: '통합 보기',
  downstreamTitle: '고객 목록이 아닌 downstream relevance',
  claimTitle: 'Claim discipline',
}, { back: 'Upstream 통합으로 돌아가기', publicEvidence: '공개 증거' });

export const ecosystemCopy: Record<Language, EcosystemCopy> = {
  en,
  tr,
  de,
  ja,
  'zh-CN': zhCN,
  es,
  fr,
  ko,
};

export const integrationEvidence: Record<IntegrationId, Array<{ label: string; url: string }>> = {
  falco: [
    { label: 'falcosecurity/libs PR #3024', url: 'https://github.com/falcosecurity/libs/pull/3024' },
    { label: 'falcosecurity/libs PR #3061', url: 'https://github.com/falcosecurity/libs/pull/3061' },
  ],
  'inspektor-gadget': [
    { label: 'inspektor-gadget/inspektor-gadget PR #5708', url: 'https://github.com/inspektor-gadget/inspektor-gadget/pull/5708' },
  ],
};
