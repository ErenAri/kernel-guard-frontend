import type { Language } from '../context/LanguageContext';
import type { GrowthServiceContent } from './growthServices';

export type NonEnglishLanguage = Exclude<Language, 'en'>;

export const growthServiceTranslations: Record<string, Record<NonEnglishLanguage, GrowthServiceContent>> = {
  'cybersecurity-consulting': {
    tr: {
      title: 'Web Platformları için Siber Güvenlik Danışmanlığı',
      shortTitle: 'Siber Güvenlik Danışmanlığı',
      description:
        'Web uygulamaları, API’ler, bulut edge katmanları ve herkese açık iş sistemleri için pratik siber güvenlik danışmanlığı.',
      keywords:
        'siber güvenlik danışmanlığı, web uygulama güvenliği danışmanlığı, API güvenliği danışmanlığı, bulut güvenliği danışmanı',
      serviceType: 'Siber güvenlik danışmanlığı',
      intent:
        'Yeni bir web sistemini yayına almadan, ölçeklemeden veya dış dünyaya açmadan önce net bir güvenlik planına ihtiyaç duyan ekipler için.',
      outcomes: [
        'İş riski ve uygulama maliyetiyle ilişkilendirilmiş öncelikli bir güvenlik yol haritası.',
        'Kimlik doğrulama, yetkilendirme, veri sızıntısı, başlıklar ve kötüye kullanım kontrolleri için somut düzeltmeler.',
        'Müşterilere, iş ortaklarına ve denetçilere açıklanabilir daha güçlü bir güvenlik duruşu.',
      ],
      deliverables: [
        'Mimari ve tehdit modeli incelemesi',
        'Risk öncelikli bulgular ve düzeltme notları',
        'Güvenlik başlıkları, DNS ve e-posta kimlik doğrulama incelemesi',
        'Üretim sistemleri için yayına hazırlık kontrol listesi',
        'Kritik düzeltmeler için uygulama desteği',
      ],
      process: [
        {
          title: 'Değerlendir',
          description:
            'Canlı yüzeyi, depo yapısını, kimlik akışlarını, API sınırlarını, DNS’i ve dağıtım platformunu inceleriz.',
        },
        {
          title: 'Önceliklendir',
          description:
            'Mühendislik zamanının gerçek riski değiştiren işlere gitmesi için acil açıklıkları güçlendirme çalışmalarından ayırırız.',
        },
        {
          title: 'Güçlendir',
          description:
            'Düzeltmeleri uygular veya yönlendirir, ardından CI içinde kalabilecek tekrarlanabilir kontrollerle doğrularız.',
        },
      ],
      proofPoints: [
        'security.txt açıklama iş akışı',
        'SPF, DKIM ve DMARC hizalaması',
        'Katı güvenlik başlıkları ve statik başlıklarda wildcard CORS bulunmaması',
      ],
    },
    de: {
      title: 'Cybersecurity-Beratung für Webplattformen',
      shortTitle: 'Cybersecurity-Beratung',
      description:
        'Praxisnahe Cybersecurity-Beratung für Webanwendungen, APIs, Cloud-Edges und öffentlich erreichbare Geschäftssysteme.',
      keywords:
        'Cybersecurity Beratung, Web Application Security Consulting, API Security Consulting, Cloud Security Consultant',
      serviceType: 'Cybersecurity-Beratung',
      intent:
        'Für Teams, die vor Launch, Skalierung oder Öffnung eines neuen Websystems einen klaren Sicherheitsplan brauchen.',
      outcomes: [
        'Eine priorisierte Security-Roadmap, die Geschäftsrisiko und Implementierungsaufwand verbindet.',
        'Konkrete Maßnahmen für Authentifizierung, Autorisierung, Datenexposition, Header und Abuse Controls.',
        'Eine Sicherheitslage, die Kunden, Partnern und Auditoren nachvollziehbar erklärt werden kann.',
      ],
      deliverables: [
        'Architektur- und Threat-Model-Review',
        'Risikogewichtete Findings mit Remediation-Hinweisen',
        'Review von Security Headers, DNS und E-Mail-Authentifizierung',
        'Launch-Readiness-Checkliste für Produktionssysteme',
        'Umsetzungsbegleitung für kritische Fixes',
      ],
      process: [
        {
          title: 'Bewerten',
          description:
            'Wir prüfen Live-Oberfläche, Repository-Struktur, Auth-Flows, API-Grenzen, DNS und Deployment-Plattform.',
        },
        {
          title: 'Priorisieren',
          description:
            'Wir trennen akute Exposition von Härtungsarbeit, damit Engineering-Zeit dort wirkt, wo Risiko sinkt.',
        },
        {
          title: 'Härten',
          description:
            'Wir implementieren oder begleiten Fixes und verifizieren sie mit wiederholbaren Checks, die in CI bleiben können.',
        },
      ],
      proofPoints: [
        'security.txt Disclosure-Workflow',
        'SPF-, DKIM- und DMARC-Ausrichtung',
        'Strikte Security Headers und keine Wildcard-CORS-Regel in statischen Headers',
      ],
    },
    ja: {
      title: 'Webプラットフォーム向けサイバーセキュリティコンサルティング',
      shortTitle: 'サイバーセキュリティ相談',
      description:
        'Webアプリケーション、API、クラウドエッジ、公開業務システム向けの実践的なサイバーセキュリティ支援。',
      keywords:
        'サイバーセキュリティコンサルティング, Webアプリケーションセキュリティ, APIセキュリティ, クラウドセキュリティ',
      serviceType: 'サイバーセキュリティコンサルティング',
      intent:
        '新しいWebシステムの公開、拡張、外部公開の前に、明確なセキュリティ計画が必要なチーム向け。',
      outcomes: [
        '事業リスクと実装コストに結び付いた優先順位付きのセキュリティロードマップ。',
        '認証、認可、データ露出、ヘッダー、悪用対策に対する具体的な修正。',
        '顧客、パートナー、監査担当者に説明できる、より明確なセキュリティ姿勢。',
      ],
      deliverables: [
        'アーキテクチャと脅威モデルのレビュー',
        'リスク順に整理した指摘と修正メモ',
        'セキュリティヘッダー、DNS、メール認証のレビュー',
        '本番公開前の準備チェックリスト',
        '重要修正に対する実装支援',
      ],
      process: [
        {
          title: '評価',
          description:
            '公開面、リポジトリ構造、認証フロー、API境界、DNS、デプロイ基盤を確認します。',
        },
        {
          title: '優先順位付け',
          description:
            '緊急性の高い露出と長期的な強化作業を分け、リスク低減に直結する作業へ集中します。',
        },
        {
          title: '強化',
          description:
            '修正を実装または支援し、CIに残せる再現可能なチェックで検証します。',
        },
      ],
      proofPoints: [
        'security.txtによる脆弱性報告フロー',
        'SPF、DKIM、DMARCの整合',
        '厳格なセキュリティヘッダーと静的ヘッダーでのwildcard CORS排除',
      ],
    },
    'zh-CN': {
      title: '面向 Web 平台的网络安全咨询',
      shortTitle: '网络安全咨询',
      description:
        '为 Web 应用、API、云边缘和面向公网的业务系统提供务实的网络安全咨询。',
      keywords:
        '网络安全咨询, Web 应用安全咨询, API 安全咨询, 云安全顾问',
      serviceType: '网络安全咨询',
      intent:
        '适用于在发布、扩展或开放新 Web 系统之前需要清晰安全计划的团队。',
      outcomes: [
        '与业务风险和实施成本直接关联的优先级安全路线图。',
        '针对认证、授权、数据暴露、响应头和滥用控制的具体修复建议。',
        '能够向客户、合作伙伴和审计方解释的更成熟安全姿态。',
      ],
      deliverables: [
        '架构与威胁建模评审',
        '按风险排序的发现与修复说明',
        '安全响应头、DNS 和邮件认证评审',
        '生产系统上线准备清单',
        '关键修复的后续实施支持',
      ],
      process: [
        {
          title: '评估',
          description:
            '审查线上暴露面、代码库结构、认证流程、API 边界、DNS 和部署平台。',
        },
        {
          title: '排序',
          description:
            '区分紧急暴露与加固工作，让工程时间投入到真正改变风险的位置。',
        },
        {
          title: '加固',
          description:
            '实施或指导修复，并用可重复的检查进行验证，使其可以保留在 CI 中。',
        },
      ],
      proofPoints: [
        'security.txt 披露工作流',
        'SPF、DKIM 与 DMARC 对齐',
        '严格安全响应头，静态响应头中无 wildcard CORS 策略',
      ],
    },
    es: {
      title: 'Consultoría de ciberseguridad para plataformas web',
      shortTitle: 'Consultoría de ciberseguridad',
      description:
        'Consultoría práctica de ciberseguridad para aplicaciones web, APIs, edge cloud y sistemas de negocio expuestos públicamente.',
      keywords:
        'consultoría de ciberseguridad, seguridad de aplicaciones web, seguridad API, consultor de seguridad cloud',
      serviceType: 'Consultoría de ciberseguridad',
      intent:
        'Para equipos que necesitan un plan de seguridad claro antes de lanzar, escalar o exponer un nuevo sistema web.',
      outcomes: [
        'Una hoja de ruta priorizada que conecta riesgo de negocio y coste de implementación.',
        'Correcciones concretas para autenticación, autorización, exposición de datos, cabeceras y controles antiabuso.',
        'Una postura de seguridad más clara y defendible ante clientes, socios y auditores.',
      ],
      deliverables: [
        'Revisión de arquitectura y modelo de amenazas',
        'Hallazgos priorizados por riesgo con notas de remediación',
        'Revisión de cabeceras de seguridad, DNS y autenticación de correo',
        'Checklist de preparación para producción',
        'Soporte de implementación para correcciones críticas',
      ],
      process: [
        {
          title: 'Evaluar',
          description:
            'Revisamos la superficie activa, estructura del repositorio, flujos de autenticación, límites de API, DNS y plataforma de despliegue.',
        },
        {
          title: 'Priorizar',
          description:
            'Separamos exposición urgente de trabajo de endurecimiento para invertir ingeniería donde realmente reduce riesgo.',
        },
        {
          title: 'Endurecer',
          description:
            'Implementamos o guiamos correcciones y las verificamos con controles repetibles que pueden quedarse en CI.',
        },
      ],
      proofPoints: [
        'Flujo de divulgación con security.txt',
        'Alineación SPF, DKIM y DMARC',
        'Cabeceras estrictas y sin wildcard CORS en cabeceras estáticas',
      ],
    },
    fr: {
      title: 'Conseil en cybersécurité pour plateformes web',
      shortTitle: 'Conseil cybersécurité',
      description:
        'Conseil pragmatique en cybersécurité pour applications web, API, edge cloud et systèmes métier exposés publiquement.',
      keywords:
        'conseil cybersécurité, sécurité applications web, sécurité API, consultant sécurité cloud',
      serviceType: 'Conseil en cybersécurité',
      intent:
        'Pour les équipes qui ont besoin d’un plan de sécurité clair avant de lancer, dimensionner ou exposer un nouveau système web.',
      outcomes: [
        'Une feuille de route priorisée reliant risque métier et coût d’implémentation.',
        'Des corrections concrètes pour l’authentification, l’autorisation, l’exposition de données, les en-têtes et les contrôles anti-abus.',
        'Une posture de sécurité plus nette, explicable aux clients, partenaires et auditeurs.',
      ],
      deliverables: [
        'Revue d’architecture et de modèle de menace',
        'Constats classés par risque avec notes de remédiation',
        'Revue des en-têtes de sécurité, DNS et authentification e-mail',
        'Checklist de préparation au lancement en production',
        'Support d’implémentation pour les corrections critiques',
      ],
      process: [
        {
          title: 'Évaluer',
          description:
            'Nous examinons la surface exposée, la structure du dépôt, les flux d’authentification, les frontières API, le DNS et la plateforme de déploiement.',
        },
        {
          title: 'Prioriser',
          description:
            'Nous séparons l’exposition urgente du durcissement afin que l’effort d’ingénierie réduise réellement le risque.',
        },
        {
          title: 'Durcir',
          description:
            'Nous implémentons ou guidons les corrections, puis les vérifions avec des contrôles répétables pouvant rester dans la CI.',
        },
      ],
      proofPoints: [
        'Workflow de divulgation security.txt',
        'Alignement SPF, DKIM et DMARC',
        'En-têtes de sécurité stricts et absence de wildcard CORS dans les en-têtes statiques',
      ],
    },
    ko: {
      title: '웹 플랫폼을 위한 사이버보안 컨설팅',
      shortTitle: '사이버보안 컨설팅',
      description:
        '웹 애플리케이션, API, 클라우드 엣지, 공개 비즈니스 시스템을 위한 실무 중심 사이버보안 컨설팅.',
      keywords:
        '사이버보안 컨설팅, 웹 애플리케이션 보안 컨설팅, API 보안 컨설팅, 클라우드 보안 컨설턴트',
      serviceType: '사이버보안 컨설팅',
      intent:
        '새 웹 시스템을 출시, 확장 또는 외부에 노출하기 전에 명확한 보안 계획이 필요한 팀을 위한 서비스입니다.',
      outcomes: [
        '비즈니스 위험과 구현 비용에 연결된 우선순위 보안 로드맵.',
        '인증, 권한 부여, 데이터 노출, 헤더, 남용 방지에 대한 구체적인 수정안.',
        '고객, 파트너, 감사자에게 설명할 수 있는 더 명확한 보안 태세.',
      ],
      deliverables: [
        '아키텍처 및 위협 모델 검토',
        '위험도 기반 발견 사항과 개선 메모',
        '보안 헤더, DNS, 이메일 인증 검토',
        '운영 시스템 출시 준비 체크리스트',
        '중요 수정 사항 구현 지원',
      ],
      process: [
        {
          title: '평가',
          description:
            '라이브 표면, 저장소 구조, 인증 흐름, API 경계, DNS, 배포 플랫폼을 검토합니다.',
        },
        {
          title: '우선순위화',
          description:
            '긴급 노출과 하드닝 작업을 구분해 엔지니어링 시간이 실제 위험을 줄이는 곳에 쓰이게 합니다.',
        },
        {
          title: '하드닝',
          description:
            '수정을 구현하거나 안내하고, CI에 남길 수 있는 반복 가능한 검사로 검증합니다.',
        },
      ],
      proofPoints: [
        'security.txt 공개 워크플로',
        'SPF, DKIM, DMARC 정렬',
        '엄격한 보안 헤더와 정적 헤더의 wildcard CORS 제거',
      ],
    },
  },
  'secure-web-development': {
    tr: {
      title: 'Güvenli Web Geliştirme Hizmetleri',
      shortTitle: 'Güvenli Web Geliştirme',
      description:
        'Üretim kalitesinde web uygulamalarına ihtiyaç duyan ekipler için güvenli React, TypeScript ve API geliştirme.',
      keywords:
        'güvenli web geliştirme, güvenli React geliştirme, güvenli TypeScript geliştirme, üretim web uygulama güvenliği',
      serviceType: 'Güvenli web geliştirme',
      intent:
        'Web ürününü en baştan güvenlik, performans ve sürdürülebilirlik ile inşa etmek isteyen kurucular ve ekipler için.',
      outcomes: [
        'Net güven sinyalleri, güçlü metadata ve disiplinli üretim dağıtımı olan hızlı bir web uygulaması.',
        'Yaygın injection, kötüye kullanım ve veri sızıntısı risklerini azaltan frontend/backend sınırları.',
        'Gelecekteki mühendislerin anlayabileceği, test edebileceği ve genişletebileceği bir kod tabanı.',
      ],
      deliverables: [
        'React ve TypeScript uygulama geliştirme',
        'Güvenlik bilinciyle tasarlanmış iletişim, lead ve hesap iş akışları',
        'SEO, erişilebilirlik ve structured data uygulaması',
        'Tip güvenliği, testler, build ve bağımlılık riski için CI kontrolleri',
        'Cloudflare Pages, Vercel veya benzeri platformlar için dağıtım desteği',
      ],
      process: [
        { title: 'Şekillendir', description: 'Ürün yüzeyini, kritik dönüşüm yollarını, güven gereksinimlerini ve yayın kısıtlarını netleştiririz.' },
        { title: 'İnşa et', description: 'Uygulamayı küçük ve incelenebilir değişikliklerle, güvenlik ve erişilebilirlik kontrolleri dahil şekilde yayınlarız.' },
        { title: 'Doğrula', description: 'Herkese açık yayın öncesinde build, rota, metadata ve tarayıcı kontrollerini çalıştırırız.' },
      ],
      proofPoints: [
        'Sunucu tarafında prerender edilmiş sayfalar',
        'Canonical ve hreflang metadata',
        'Şirket e-posta aliaslarına yönlenen iletişim iş akışları',
      ],
    },
    de: {
      title: 'Sichere Webentwicklung',
      shortTitle: 'Sichere Webentwicklung',
      description:
        'Sichere React-, TypeScript- und API-Entwicklung für Teams, die produktionsreife Webanwendungen benötigen.',
      keywords:
        'sichere Webentwicklung, sichere React Entwicklung, sichere TypeScript Entwicklung, Web Application Security',
      serviceType: 'Sichere Webentwicklung',
      intent:
        'Für Gründer und Teams, die ein Webprodukt von Beginn an mit Sicherheit, Performance und Wartbarkeit bauen wollen.',
      outcomes: [
        'Eine schnelle Webanwendung mit klaren Trust-Signalen, sauberer Metadata und disziplinierter Produktion.',
        'Frontend- und Backend-Grenzen, die Injection-, Abuse- und Data-Leak-Risiken reduzieren.',
        'Eine Codebase, die künftige Engineers verstehen, testen und erweitern können.',
      ],
      deliverables: [
        'React- und TypeScript-Anwendungsentwicklung',
        'Security-aware Contact-, Lead- und Account-Workflows',
        'SEO-, Accessibility- und Structured-Data-Implementierung',
        'CI-Checks für Types, Tests, Build und Dependency Risk',
        'Deployment-Support für Cloudflare Pages, Vercel oder ähnliche Plattformen',
      ],
      process: [
        { title: 'Formen', description: 'Wir definieren Produktoberfläche, kritische Conversion-Pfade, Trust-Anforderungen und Launch-Grenzen.' },
        { title: 'Bauen', description: 'Wir liefern in kleinen, reviewbaren Änderungen inklusive Security- und Accessibility-Checks.' },
        { title: 'Verifizieren', description: 'Vor dem Public Release prüfen wir Build, Routen, Metadata und Browser-Verhalten.' },
      ],
      proofPoints: [
        'Serverseitig prerenderte Seiten',
        'Canonical- und hreflang-Metadaten',
        'Kontakt-Workflows mit Routing auf Unternehmens-Mailaliases',
      ],
    },
    ja: {
      title: 'セキュアWeb開発サービス',
      shortTitle: 'セキュアWeb開発',
      description:
        '本番品質のWebアプリケーションが必要なチーム向けの、セキュアなReact、TypeScript、API開発。',
      keywords:
        'セキュアWeb開発, セキュアReact開発, セキュアTypeScript開発, Webアプリケーションセキュリティ',
      serviceType: 'セキュアWeb開発',
      intent:
        'セキュリティ、性能、保守性を最初から組み込んだWebプロダクトを必要とする創業者やチーム向け。',
      outcomes: [
        '明確な信頼シグナル、強いメタデータ、規律ある本番デプロイを備えた高速なWebアプリ。',
        '一般的なインジェクション、悪用、データ漏えいリスクを抑えるフロントエンド/バックエンド境界。',
        '将来のエンジニアが理解し、テストし、拡張できるコードベース。',
      ],
      deliverables: [
        'ReactとTypeScriptによるアプリケーション開発',
        'セキュリティを考慮した問い合わせ、リード、アカウントワークフロー',
        'SEO、アクセシビリティ、構造化データの実装',
        '型安全性、テスト、ビルド、依存関係リスクのCIチェック',
        'Cloudflare Pages、Vercelなどへのデプロイ支援',
      ],
      process: [
        { title: '設計', description: 'プロダクト面、重要なコンバージョン経路、信頼要件、公開制約を定義します。' },
        { title: '構築', description: 'セキュリティとアクセシビリティのチェックを含め、小さくレビューしやすい変更で出荷します。' },
        { title: '検証', description: '公開前にビルド、ルート、メタデータ、ブラウザ上の挙動を検証します。' },
      ],
      proofPoints: [
        'サーバーサイドでプリレンダーされたページ',
        'canonicalとhreflangメタデータ',
        '会社メールエイリアスへルーティングされる問い合わせフロー',
      ],
    },
    'zh-CN': {
      title: '安全 Web 开发服务',
      shortTitle: '安全 Web 开发',
      description:
        '为需要生产级 Web 应用的团队提供安全的 React、TypeScript 与 API 开发。',
      keywords:
        '安全 Web 开发, 安全 React 开发, 安全 TypeScript 开发, 生产级 Web 应用安全',
      serviceType: '安全 Web 开发',
      intent:
        '适用于希望从一开始就把安全、性能和可维护性纳入 Web 产品的创始人和团队。',
      outcomes: [
        '具备清晰信任信号、强元数据和规范生产部署流程的高速 Web 应用。',
        '降低常见注入、滥用和数据泄漏风险的前后端边界。',
        '未来工程师可以理解、测试并扩展的代码库。',
      ],
      deliverables: [
        'React 与 TypeScript 应用开发',
        '具备安全意识的联系、线索和账户工作流',
        'SEO、可访问性与结构化数据实现',
        '类型安全、测试、构建和依赖风险的 CI 检查',
        'Cloudflare Pages、Vercel 或类似平台的部署支持',
      ],
      process: [
        { title: '定义', description: '明确产品表面、关键转化路径、信任要求和上线约束。' },
        { title: '构建', description: '以小而可审查的变更交付应用，并纳入安全与可访问性检查。' },
        { title: '验证', description: '公开发布前运行构建、路由、元数据和浏览器检查。' },
      ],
      proofPoints: [
        '服务端预渲染页面',
        'Canonical 与 hreflang 元数据',
        '路由到公司邮箱别名的联系工作流',
      ],
    },
    es: {
      title: 'Servicios de desarrollo web seguro',
      shortTitle: 'Desarrollo web seguro',
      description:
        'Desarrollo seguro en React, TypeScript y APIs para equipos que necesitan aplicaciones web listas para producción.',
      keywords:
        'desarrollo web seguro, desarrollo React seguro, desarrollo TypeScript seguro, seguridad web en producción',
      serviceType: 'Desarrollo web seguro',
      intent:
        'Para fundadores y equipos que necesitan construir un producto web con seguridad, rendimiento y mantenibilidad desde el inicio.',
      outcomes: [
        'Una aplicación rápida con señales claras de confianza, metadata sólida y disciplina de despliegue.',
        'Límites frontend/backend que reducen riesgos de inyección, abuso y fuga de datos.',
        'Una base de código que futuros ingenieros pueden entender, probar y extender.',
      ],
      deliverables: [
        'Desarrollo de aplicaciones React y TypeScript',
        'Flujos de contacto, lead y cuenta con criterio de seguridad',
        'Implementación de SEO, accesibilidad y datos estructurados',
        'Checks CI para tipos, tests, build y riesgo de dependencias',
        'Soporte de despliegue en Cloudflare Pages, Vercel o plataformas similares',
      ],
      process: [
        { title: 'Definir', description: 'Definimos superficie de producto, rutas críticas de conversión, requisitos de confianza y restricciones de lanzamiento.' },
        { title: 'Construir', description: 'Entregamos en cambios pequeños y revisables con controles de seguridad y accesibilidad incluidos.' },
        { title: 'Verificar', description: 'Ejecutamos checks de build, rutas, metadata y navegador antes del lanzamiento público.' },
      ],
      proofPoints: [
        'Páginas prerenderizadas en servidor',
        'Metadata canonical y hreflang',
        'Flujos de contacto enrutados a alias corporativos',
      ],
    },
    fr: {
      title: 'Services de développement web sécurisé',
      shortTitle: 'Développement web sécurisé',
      description:
        'Développement sécurisé React, TypeScript et API pour les équipes qui ont besoin d’applications web prêtes pour la production.',
      keywords:
        'développement web sécurisé, développement React sécurisé, développement TypeScript sécurisé, sécurité application web',
      serviceType: 'Développement web sécurisé',
      intent:
        'Pour les fondateurs et équipes qui veulent construire un produit web avec sécurité, performance et maintenabilité dès le départ.',
      outcomes: [
        'Une application rapide avec signaux de confiance clairs, métadonnées solides et discipline de déploiement.',
        'Des frontières frontend/backend qui réduisent les risques d’injection, d’abus et de fuite de données.',
        'Une base de code que les futurs ingénieurs peuvent comprendre, tester et étendre.',
      ],
      deliverables: [
        'Développement d’applications React et TypeScript',
        'Workflows contact, lead et compte conçus avec une logique de sécurité',
        'Implémentation SEO, accessibilité et données structurées',
        'Contrôles CI pour typage, tests, build et risque dépendances',
        'Support de déploiement pour Cloudflare Pages, Vercel ou plateformes similaires',
      ],
      process: [
        { title: 'Cadrer', description: 'Nous définissons la surface produit, les parcours de conversion critiques, les exigences de confiance et les contraintes de lancement.' },
        { title: 'Construire', description: 'Nous livrons par changements petits et vérifiables, avec contrôles de sécurité et d’accessibilité.' },
        { title: 'Vérifier', description: 'Nous lançons les contrôles de build, routes, métadonnées et navigateur avant la publication.' },
      ],
      proofPoints: [
        'Pages pré-rendues côté serveur',
        'Métadonnées canonical et hreflang',
        'Workflows de contact routés vers des alias e-mail d’entreprise',
      ],
    },
    ko: {
      title: '안전한 웹 개발 서비스',
      shortTitle: '안전한 웹 개발',
      description:
        '프로덕션급 웹 애플리케이션이 필요한 팀을 위한 안전한 React, TypeScript, API 개발.',
      keywords:
        '안전한 웹 개발, 안전한 React 개발, 안전한 TypeScript 개발, 프로덕션 웹 애플리케이션 보안',
      serviceType: '안전한 웹 개발',
      intent:
        '보안, 성능, 유지보수성을 처음부터 갖춘 웹 제품이 필요한 창업자와 팀을 위한 서비스입니다.',
      outcomes: [
        '명확한 신뢰 신호, 강한 메타데이터, 안정적인 운영 배포 체계를 갖춘 빠른 웹 애플리케이션.',
        '일반적인 인젝션, 남용, 데이터 누출 위험을 줄이는 프론트엔드/백엔드 경계.',
        '미래의 엔지니어가 이해하고 테스트하며 확장할 수 있는 코드베이스.',
      ],
      deliverables: [
        'React 및 TypeScript 애플리케이션 개발',
        '보안을 고려한 문의, 리드, 계정 워크플로',
        'SEO, 접근성, 구조화 데이터 구현',
        '타입 안전성, 테스트, 빌드, 의존성 위험에 대한 CI 검사',
        'Cloudflare Pages, Vercel 또는 유사 플랫폼 배포 지원',
      ],
      process: [
        { title: '정의', description: '제품 표면, 핵심 전환 경로, 신뢰 요구사항, 출시 제약을 정의합니다.' },
        { title: '구축', description: '보안과 접근성 검사를 포함해 작고 검토 가능한 변경으로 애플리케이션을 제공합니다.' },
        { title: '검증', description: '공개 출시 전에 빌드, 라우트, 메타데이터, 브라우저 검사를 수행합니다.' },
      ],
      proofPoints: [
        '서버 사이드 프리렌더링 페이지',
        'canonical 및 hreflang 메타데이터',
        '회사 이메일 별칭으로 라우팅되는 문의 워크플로',
      ],
    },
  },
  'cloudflare-security-hardening': {
    tr: {
      title: 'Cloudflare Güvenlik Güçlendirmesi',
      shortTitle: 'Cloudflare Güçlendirme',
      description:
        'Web siteleri, DNS, e-posta kimlik doğrulama, başlıklar ve edge yapılandırması için Cloudflare güvenlik güçlendirmesi.',
      keywords:
        'Cloudflare güvenlik güçlendirme, Cloudflare Pages güvenliği, Cloudflare DNS güvenliği, web sitesi güvenlik başlıkları',
      serviceType: 'Cloudflare güvenlik güçlendirmesi',
      intent:
        'Cloudflare kullanan ve daha sıkı başlıklar, temiz DNS, güvenli edge kuralları ve daha iyi yayın hijyeni isteyen siteler için.',
      outcomes: [
        'Yanlışlıkla oluşan açıklıkları azaltan daha savunulabilir bir Cloudflare yapılandırması.',
        'Spoofing ve marka kötüye kullanım riskini azaltan DNS ve e-posta kayıtları.',
        'Geniş varsayımlara değil uygulamaya göre ayarlanmış başlık ve cache davranışı.',
      ],
      deliverables: [
        'DNS ve proxy yapılandırma incelemesi',
        'Statik ve dinamik yanıtlar için güvenlik başlığı politikası',
        'SPF, DKIM, DMARC ve raporlama posta kutusu doğrulaması',
        'Redirect ve canonical URL incelemesi',
        'Dağıtım ve rollback kontrol listesi',
      ],
      process: [
        { title: 'Envanter', description: 'Aktif DNS kayıtlarını, proxied rotaları, yönlendirmeleri, başlıkları ve dağıtım çıktılarını haritalarız.' },
        { title: 'Sıkılaştır', description: 'Riski azaltmak için gereken en küçük değişikliklerle kayıtları, başlıkları ve edge kurallarını ayarlarız.' },
        { title: 'Doğrula', description: 'Canlı yanıtları doğrular ve gelecekteki değişiklikler için kısa bir operasyon kaydı çıkarırız.' },
      ],
      proofPoints: [
        'Cloudflare Pages başlık politikası',
        'Robots ve sitemap yayını',
        'DMARC raporlama posta kutusu desteği',
      ],
    },
    de: {
      title: 'Cloudflare Security Hardening',
      shortTitle: 'Cloudflare Hardening',
      description:
        'Cloudflare-Härtung für Websites, DNS, E-Mail-Authentifizierung, Header und Edge-Konfiguration.',
      keywords:
        'Cloudflare Security Hardening, Cloudflare Pages Security, Cloudflare DNS Security, Website Security Headers',
      serviceType: 'Cloudflare Security Hardening',
      intent:
        'Für Websites auf Cloudflare, die strengere Header, saubereres DNS, sicherere Edge-Regeln und bessere Launch-Hygiene brauchen.',
      outcomes: [
        'Eine besser verteidigbare Cloudflare-Konfiguration mit weniger unbeabsichtigten Expositionen.',
        'DNS- und E-Mail-Records, die Spoofing- und Markenmissbrauchsrisiko reduzieren.',
        'Header- und Cache-Verhalten, das zur Anwendung passt statt zu breiten Defaults.',
      ],
      deliverables: [
        'Review von DNS- und Proxy-Konfiguration',
        'Security-Header-Policy für statische und dynamische Antworten',
        'SPF-, DKIM-, DMARC- und Reporting-Mailbox-Verifizierung',
        'Review von Redirects und Canonical URLs',
        'Deployment- und Rollback-Checkliste',
      ],
      process: [
        { title: 'Inventarisieren', description: 'Wir kartieren aktive DNS-Records, proxied Routes, Redirects, Header und Deployment-Artefakte.' },
        { title: 'Straffen', description: 'Wir passen Records, Header und Edge-Regeln mit den kleinsten risikoreduzierenden Änderungen an.' },
        { title: 'Bestätigen', description: 'Wir verifizieren Live-Antworten und dokumentieren eine kurze Betriebsreferenz für spätere Änderungen.' },
      ],
      proofPoints: [
        'Cloudflare Pages Header-Policy',
        'Veröffentlichung von robots.txt und Sitemap',
        'DMARC-Reporting-Mailbox-Support',
      ],
    },
    ja: {
      title: 'Cloudflareセキュリティ強化',
      shortTitle: 'Cloudflare強化',
      description:
        'Webサイト、DNS、メール認証、ヘッダー、エッジ設定のためのCloudflareセキュリティ強化。',
      keywords:
        'Cloudflareセキュリティ強化, Cloudflare Pagesセキュリティ, Cloudflare DNSセキュリティ, Webサイトセキュリティヘッダー',
      serviceType: 'Cloudflareセキュリティ強化',
      intent:
        'Cloudflareを利用中で、より厳格なヘッダー、整理されたDNS、安全なエッジルール、公開前の衛生管理が必要なサイト向け。',
      outcomes: [
        '偶発的な露出経路を減らした、より防御しやすいCloudflare構成。',
        'なりすましとブランド悪用リスクを下げるDNSおよびメールレコード。',
        '広いデフォルトではなく、アプリケーションに合わせたヘッダーとキャッシュ挙動。',
      ],
      deliverables: [
        'DNSとプロキシ設定のレビュー',
        '静的/動的レスポンス向けセキュリティヘッダーポリシー',
        'SPF、DKIM、DMARC、レポート用メールボックスの確認',
        'リダイレクトとcanonical URLのレビュー',
        'デプロイとロールバックのチェックリスト',
      ],
      process: [
        { title: '棚卸し', description: '有効なDNSレコード、プロキシされたルート、リダイレクト、ヘッダー、デプロイ成果物を整理します。' },
        { title: '強化', description: 'リスクを下げるために必要な最小限の変更で、レコード、ヘッダー、エッジルールを調整します。' },
        { title: '確認', description: '本番レスポンスを検証し、将来の変更に使える短い運用記録を残します。' },
      ],
      proofPoints: [
        'Cloudflare Pagesヘッダーポリシー',
        'robots.txtとサイトマップの公開',
        'DMARCレポート用メールボックス対応',
      ],
    },
    'zh-CN': {
      title: 'Cloudflare 安全加固',
      shortTitle: 'Cloudflare 加固',
      description:
        '面向网站、DNS、邮件认证、响应头和边缘配置的 Cloudflare 安全加固。',
      keywords:
        'Cloudflare 安全加固, Cloudflare Pages 安全, Cloudflare DNS 安全, 网站安全响应头',
      serviceType: 'Cloudflare 安全加固',
      intent:
        '适用于已经使用 Cloudflare、但需要更严格响应头、更清晰 DNS、更安全边缘规则和更好上线卫生的站点。',
      outcomes: [
        '减少意外暴露路径、更加可防御的 Cloudflare 配置。',
        '降低伪造邮件和品牌滥用风险的 DNS 与邮件记录。',
        '与应用匹配的响应头和缓存行为，而不是依赖宽泛默认值。',
      ],
      deliverables: [
        'DNS 与代理配置评审',
        '静态和动态响应的安全响应头策略',
        'SPF、DKIM、DMARC 与报告邮箱验证',
        '重定向与 canonical URL 评审',
        '部署与回滚清单',
      ],
      process: [
        { title: '盘点', description: '梳理活跃 DNS 记录、代理路由、重定向、响应头和部署输出。' },
        { title: '收紧', description: '用最小但有效的变更调整记录、响应头和边缘规则以降低风险。' },
        { title: '确认', description: '验证线上响应，并保留简短的操作记录以支持未来变更。' },
      ],
      proofPoints: [
        'Cloudflare Pages 响应头策略',
        'Robots 与 sitemap 发布',
        'DMARC 报告邮箱支持',
      ],
    },
    es: {
      title: 'Endurecimiento de seguridad en Cloudflare',
      shortTitle: 'Cloudflare Hardening',
      description:
        'Endurecimiento de Cloudflare para sitios web, DNS, autenticación de correo, cabeceras y configuración edge.',
      keywords:
        'Cloudflare security hardening, seguridad Cloudflare Pages, seguridad DNS Cloudflare, cabeceras de seguridad web',
      serviceType: 'Endurecimiento de seguridad Cloudflare',
      intent:
        'Para sitios que ya usan Cloudflare y necesitan cabeceras más estrictas, DNS más limpio, reglas edge más seguras y mejor higiene de lanzamiento.',
      outcomes: [
        'Una configuración Cloudflare más defendible con menos rutas de exposición accidental.',
        'Registros DNS y de correo que reducen spoofing y abuso de marca.',
        'Cabeceras y caché ajustadas a la aplicación, no a valores por defecto demasiado amplios.',
      ],
      deliverables: [
        'Revisión de DNS y configuración proxy',
        'Política de cabeceras para respuestas estáticas y dinámicas',
        'Verificación de SPF, DKIM, DMARC y mailbox de reportes',
        'Revisión de redirects y URL canonical',
        'Checklist de despliegue y rollback',
      ],
      process: [
        { title: 'Inventariar', description: 'Mapeamos registros DNS activos, rutas proxied, redirects, cabeceras y salidas de despliegue.' },
        { title: 'Ajustar', description: 'Ajustamos registros, cabeceras y reglas edge con los cambios mínimos necesarios para reducir riesgo.' },
        { title: 'Confirmar', description: 'Verificamos respuestas en vivo y capturamos un registro operativo breve para cambios futuros.' },
      ],
      proofPoints: [
        'Política de cabeceras en Cloudflare Pages',
        'Publicación de robots y sitemap',
        'Soporte de mailbox para reportes DMARC',
      ],
    },
    fr: {
      title: 'Durcissement de sécurité Cloudflare',
      shortTitle: 'Durcissement Cloudflare',
      description:
        'Durcissement Cloudflare pour sites web, DNS, authentification e-mail, en-têtes et configuration edge.',
      keywords:
        'durcissement Cloudflare, sécurité Cloudflare Pages, sécurité DNS Cloudflare, en-têtes de sécurité web',
      serviceType: 'Durcissement de sécurité Cloudflare',
      intent:
        'Pour les sites déjà sur Cloudflare qui nécessitent des en-têtes plus stricts, un DNS plus propre, des règles edge plus sûres et une meilleure hygiène de lancement.',
      outcomes: [
        'Une configuration Cloudflare plus défendable avec moins de chemins d’exposition accidentelle.',
        'Des enregistrements DNS et e-mail qui réduisent le spoofing et l’abus de marque.',
        'Un comportement d’en-têtes et de cache aligné sur l’application, pas sur des valeurs par défaut trop larges.',
      ],
      deliverables: [
        'Revue de configuration DNS et proxy',
        'Politique d’en-têtes de sécurité pour réponses statiques et dynamiques',
        'Vérification SPF, DKIM, DMARC et boîte de reporting',
        'Revue des redirections et URL canonical',
        'Checklist de déploiement et rollback',
      ],
      process: [
        { title: 'Inventorier', description: 'Nous cartographions les DNS actifs, routes proxifiées, redirections, en-têtes et artefacts de déploiement.' },
        { title: 'Resserrer', description: 'Nous ajustons records, en-têtes et règles edge avec les plus petits changements utiles pour réduire le risque.' },
        { title: 'Confirmer', description: 'Nous vérifions les réponses live et conservons une trace opérationnelle courte pour les changements futurs.' },
      ],
      proofPoints: [
        'Politique d’en-têtes Cloudflare Pages',
        'Publication robots et sitemap',
        'Support de boîte de reporting DMARC',
      ],
    },
    ko: {
      title: 'Cloudflare 보안 하드닝',
      shortTitle: 'Cloudflare 하드닝',
      description:
        '웹사이트, DNS, 이메일 인증, 헤더, 엣지 구성을 위한 Cloudflare 보안 하드닝.',
      keywords:
        'Cloudflare 보안 하드닝, Cloudflare Pages 보안, Cloudflare DNS 보안, 웹사이트 보안 헤더',
      serviceType: 'Cloudflare 보안 하드닝',
      intent:
        'Cloudflare를 이미 사용하며 더 엄격한 헤더, 정리된 DNS, 안전한 엣지 규칙, 나은 출시 위생이 필요한 사이트를 위한 서비스입니다.',
      outcomes: [
        '우발적 노출 경로가 줄어든 더 방어 가능한 Cloudflare 구성.',
        '스푸핑과 브랜드 남용 위험을 낮추는 DNS 및 이메일 레코드.',
        '넓은 기본값이 아니라 애플리케이션에 맞는 헤더와 캐시 동작.',
      ],
      deliverables: [
        'DNS 및 프록시 구성 검토',
        '정적/동적 응답을 위한 보안 헤더 정책',
        'SPF, DKIM, DMARC 및 보고 메일함 검증',
        '리디렉션과 canonical URL 검토',
        '배포 및 롤백 체크리스트',
      ],
      process: [
        { title: '인벤토리', description: '활성 DNS 레코드, 프록시 라우트, 리디렉션, 헤더, 배포 산출물을 매핑합니다.' },
        { title: '강화', description: '위험을 줄이는 데 필요한 최소 변경으로 레코드, 헤더, 엣지 규칙을 조정합니다.' },
        { title: '확인', description: '라이브 응답을 검증하고 향후 변경을 위한 짧은 운영 기록을 남깁니다.' },
      ],
      proofPoints: [
        'Cloudflare Pages 헤더 정책',
        'robots 및 sitemap 게시',
        'DMARC 보고 메일함 지원',
      ],
    },
  },
  'react-security-audit': {
    tr: {
      title: 'React Güvenlik Denetimi',
      shortTitle: 'React Güvenlik Denetimi',
      description:
        'Frontend kod tabanları, iletişim formları, routing, metadata, bağımlılık riski ve istemci tarafı açıklıkları için React güvenlik denetimleri.',
      keywords:
        'React güvenlik denetimi, frontend güvenlik denetimi, TypeScript güvenlik incelemesi, web uygulama güvenlik denetimi',
      serviceType: 'React güvenlik denetimi',
      intent:
        'Halihazırda React uygulaması olan ve lansman ya da yatırımcı/müşteri incelemesi öncesi odaklı bir değerlendirme isteyen ekipler için.',
      outcomes: [
        'Mühendisliğin doğrudan görevlere dönüştürebileceği kısa ve uygulanabilir bir denetim raporu.',
        'Açıkta kalan secret, güvensiz render, zayıf form kontrolü ve routing hatalarından kaynaklanan riskin azalması.',
        'Test edilmiş metadata, erişilebilirlik ve görünür güven sayfalarıyla daha güçlü güvenilirlik.',
      ],
      deliverables: [
        'İstemci tarafı kod ve rota incelemesi',
        'Bağımlılık ve build yapılandırması incelemesi',
        'Form kötüye kullanımı ve bot kontrolü incelemesi',
        'SEO ve structured data sağlama kontrolü',
        'Risk öncelikli düzeltme planı',
      ],
      process: [
        { title: 'İncele', description: 'Kod tabanını, dağıtım yapılandırmasını ve canlı davranışı kullanıcı kontrollü verilere odaklanarak okuruz.' },
        { title: 'Test et', description: 'Mevcut kontrolleri çalıştırır, pahalıya mal olacak hatalar için odaklı assertion’lar ekleriz.' },
        { title: 'Raporla', description: 'Düzeltmeleri dosya, URL ve doğrulama adımlarıyla birlikte öncelik sırasına göre dokümante ederiz.' },
      ],
      proofPoints: [
        'TypeScript no-emit kontrolleri',
        'Vitest rota ve utility testleri',
        'Kritik sayfalar için tarayıcı doğrulaması',
      ],
    },
    de: {
      title: 'React Security Audit',
      shortTitle: 'React Security Audit',
      description:
        'React-Sicherheitsaudits für Frontend-Codebases, Kontaktformulare, Routing, Metadata, Dependency Risk und Client-Side Exposure.',
      keywords:
        'React Security Audit, Frontend Security Audit, TypeScript Security Review, Web Application Security Audit',
      serviceType: 'React Security Audit',
      intent:
        'Für Teams mit bestehender React-Anwendung, die vor Launch oder Investor-/Kundenprüfung ein fokussiertes Review brauchen.',
      outcomes: [
        'Ein kurzer, umsetzbarer Auditbericht, den Engineering direkt in Tickets übersetzen kann.',
        'Reduziertes Risiko durch exposed Secrets, unsicheres Rendering, schwache Form Controls und Routing-Fehler.',
        'Mehr Glaubwürdigkeit durch getestete Metadata, Accessibility und sichtbare Trust-Seiten.',
      ],
      deliverables: [
        'Clientseitiger Code- und Routenreview',
        'Dependency- und Build-Konfigurationsreview',
        'Review von Form Abuse und Bot Controls',
        'SEO- und Structured-Data-Sanity-Check',
        'Risikogewichteter Remediation-Plan',
      ],
      process: [
        { title: 'Review', description: 'Wir lesen Codebase, Deployment-Konfiguration und Live-Verhalten mit Fokus auf nutzergesteuerte Daten.' },
        { title: 'Testen', description: 'Wir führen vorhandene Checks aus und ergänzen fokussierte Assertions für teure Fehlerfälle.' },
        { title: 'Berichten', description: 'Wir dokumentieren Fixes priorisiert mit konkreten Dateien, URLs und Verifikationsschritten.' },
      ],
      proofPoints: [
        'TypeScript no-emit Checks',
        'Vitest Routen- und Utility-Tests',
        'Browser-Verifizierung kritischer Seiten',
      ],
    },
    ja: {
      title: 'Reactセキュリティ監査',
      shortTitle: 'Reactセキュリティ監査',
      description:
        'フロントエンドコードベース、問い合わせフォーム、ルーティング、メタデータ、依存関係リスク、クライアント側露出を対象にしたReactセキュリティ監査。',
      keywords:
        'Reactセキュリティ監査, フロントエンドセキュリティ監査, TypeScriptセキュリティレビュー, Webアプリケーションセキュリティ監査',
      serviceType: 'Reactセキュリティ監査',
      intent:
        '既存のReactアプリケーションを持ち、公開前または投資家/顧客レビュー前に焦点を絞った確認が必要なチーム向け。',
      outcomes: [
        'エンジニアリングがチケット化しやすい、短く実行可能な監査レポート。',
        '露出したsecret、安全でないレンダリング、弱いフォーム制御、ルーティングミスによるリスクの低減。',
        '検証済みのメタデータ、アクセシビリティ、信頼ページによる信用度の向上。',
      ],
      deliverables: [
        'クライアント側コードとルートのレビュー',
        '依存関係とビルド設定のレビュー',
        'フォーム悪用とbot対策のレビュー',
        'SEOと構造化データの健全性チェック',
        'リスク順の修正計画',
      ],
      process: [
        { title: 'レビュー', description: 'ユーザー制御データに注意しながら、コードベース、デプロイ設定、ライブ挙動を確認します。' },
        { title: 'テスト', description: '既存チェックを実行し、失敗コストが高い箇所に焦点を絞った検証を追加します。' },
        { title: '報告', description: '修正を優先順に、対象ファイル、URL、検証手順とともに文書化します。' },
      ],
      proofPoints: [
        'TypeScript no-emitチェック',
        'Vitestによるルートとユーティリティのテスト',
        '主要ページのブラウザ検証',
      ],
    },
    'zh-CN': {
      title: 'React 安全审计',
      shortTitle: 'React 安全审计',
      description:
        '面向前端代码库、联系表单、路由、元数据、依赖风险和客户端暴露的 React 安全审计。',
      keywords:
        'React 安全审计, 前端安全审计, TypeScript 安全评审, Web 应用安全审计',
      serviceType: 'React 安全审计',
      intent:
        '适用于已经拥有 React 应用、并希望在上线或投资人/客户评审前进行聚焦审查的团队。',
      outcomes: [
        '工程团队可以直接转化为任务的简短可执行审计报告。',
        '降低暴露 secret、不安全渲染、薄弱表单控制和路由错误带来的风险。',
        '通过已测试元数据、可访问性和可见信任页面提升可信度。',
      ],
      deliverables: [
        '客户端代码与路由评审',
        '依赖与构建配置评审',
        '表单滥用与 bot 控制评审',
        'SEO 与结构化数据健全性检查',
        '按风险排序的修复计划',
      ],
      process: [
        { title: '审查', description: '围绕用户可控数据阅读代码库、部署配置和线上行为。' },
        { title: '测试', description: '运行现有检查，并在高代价失败点补充聚焦断言。' },
        { title: '报告', description: '按优先级记录修复项，包括具体文件、URL 和验证步骤。' },
      ],
      proofPoints: [
        'TypeScript no-emit 检查',
        'Vitest 路由与工具测试',
        '关键页面浏览器验证',
      ],
    },
    es: {
      title: 'Auditoría de seguridad React',
      shortTitle: 'Auditoría React',
      description:
        'Auditorías de seguridad React para frontends, formularios de contacto, routing, metadata, dependencias y exposición del cliente.',
      keywords:
        'auditoría seguridad React, auditoría seguridad frontend, revisión seguridad TypeScript, auditoría seguridad web',
      serviceType: 'Auditoría de seguridad React',
      intent:
        'Para equipos que ya tienen una aplicación React y necesitan una revisión enfocada antes de lanzamiento o evaluación de clientes/inversores.',
      outcomes: [
        'Un informe corto y accionable que ingeniería puede convertir en tickets.',
        'Menor riesgo por secretos expuestos, render inseguro, formularios débiles y errores de routing.',
        'Mayor credibilidad mediante metadata, accesibilidad y páginas de confianza verificadas.',
      ],
      deliverables: [
        'Revisión de código cliente y rutas',
        'Revisión de dependencias y configuración de build',
        'Revisión de abuso de formularios y controles bot',
        'Check de SEO y datos estructurados',
        'Plan de remediación priorizado por riesgo',
      ],
      process: [
        { title: 'Revisar', description: 'Leemos código, configuración de despliegue y comportamiento en vivo con foco en datos controlados por usuarios.' },
        { title: 'Probar', description: 'Ejecutamos checks existentes y añadimos assertions enfocadas donde un fallo sería costoso.' },
        { title: 'Reportar', description: 'Documentamos correcciones por prioridad, con archivos, URLs y pasos de verificación.' },
      ],
      proofPoints: [
        'Checks TypeScript no-emit',
        'Tests Vitest para rutas y utilidades',
        'Verificación de navegador en páginas clave',
      ],
    },
    fr: {
      title: 'Audit de sécurité React',
      shortTitle: 'Audit sécurité React',
      description:
        'Audits de sécurité React pour codebases frontend, formulaires, routing, métadonnées, dépendances et exposition côté client.',
      keywords:
        'audit sécurité React, audit sécurité frontend, revue sécurité TypeScript, audit sécurité application web',
      serviceType: 'Audit de sécurité React',
      intent:
        'Pour les équipes qui ont déjà une application React et veulent une revue ciblée avant lancement ou revue client/investisseur.',
      outcomes: [
        'Un rapport court et actionnable que l’ingénierie peut transformer en tickets.',
        'Réduction du risque lié aux secrets exposés, rendu non sûr, contrôles de formulaire faibles et erreurs de routing.',
        'Crédibilité renforcée grâce aux métadonnées, à l’accessibilité et aux pages de confiance vérifiées.',
      ],
      deliverables: [
        'Revue du code client et des routes',
        'Revue des dépendances et de la configuration build',
        'Revue des abus de formulaire et contrôles bot',
        'Vérification SEO et données structurées',
        'Plan de remédiation classé par risque',
      ],
      process: [
        { title: 'Revoir', description: 'Nous lisons la codebase, la configuration de déploiement et le comportement live avec attention aux données contrôlées par l’utilisateur.' },
        { title: 'Tester', description: 'Nous lançons les contrôles existants et ajoutons des assertions ciblées là où une erreur coûterait cher.' },
        { title: 'Rapporter', description: 'Nous documentons les corrections par priorité avec fichiers, URLs et étapes de vérification.' },
      ],
      proofPoints: [
        'Contrôles TypeScript no-emit',
        'Tests Vitest de routes et utilitaires',
        'Vérification navigateur des pages clés',
      ],
    },
    ko: {
      title: 'React 보안 감사',
      shortTitle: 'React 보안 감사',
      description:
        '프론트엔드 코드베이스, 문의 폼, 라우팅, 메타데이터, 의존성 위험, 클라이언트 노출을 위한 React 보안 감사.',
      keywords:
        'React 보안 감사, 프론트엔드 보안 감사, TypeScript 보안 검토, 웹 애플리케이션 보안 감사',
      serviceType: 'React 보안 감사',
      intent:
        '이미 React 애플리케이션을 보유하고 있으며 출시 전 또는 투자자/고객 검토 전에 집중 리뷰가 필요한 팀을 위한 서비스입니다.',
      outcomes: [
        '엔지니어링이 바로 티켓으로 전환할 수 있는 짧고 실행 가능한 감사 보고서.',
        '노출된 secret, 안전하지 않은 렌더링, 약한 폼 제어, 라우팅 실수로 인한 위험 감소.',
        '검증된 메타데이터, 접근성, 신뢰 페이지를 통한 신뢰도 향상.',
      ],
      deliverables: [
        '클라이언트 코드 및 라우트 검토',
        '의존성 및 빌드 설정 검토',
        '폼 남용 및 봇 제어 검토',
        'SEO 및 구조화 데이터 점검',
        '위험도 기반 개선 계획',
      ],
      process: [
        { title: '검토', description: '사용자 제어 데이터에 주의하며 코드베이스, 배포 구성, 라이브 동작을 읽습니다.' },
        { title: '테스트', description: '기존 검사를 실행하고 실패 비용이 큰 부분에 집중 assertion을 추가합니다.' },
        { title: '보고', description: '파일, URL, 검증 단계와 함께 수정 사항을 우선순위대로 문서화합니다.' },
      ],
      proofPoints: [
        'TypeScript no-emit 검사',
        'Vitest 라우트 및 유틸리티 테스트',
        '핵심 페이지 브라우저 검증',
      ],
    },
  },
  'backend-api-hardening': {
    tr: {
      title: 'Backend API Güçlendirmesi',
      shortTitle: 'Backend API Güçlendirmesi',
      description:
        'Kimlik doğrulama, yetkilendirme, doğrulama, rate limit, loglama ve dağıtım hazırlığı için backend ve API güçlendirmesi.',
      keywords:
        'backend API güçlendirme, API güvenliği, backend güvenlik incelemesi, Node API güvenliği, bulut API güvenliği',
      serviceType: 'Backend API güçlendirmesi',
      intent:
        'Müşterilere, iş ortaklarına, panellere veya herkese açık iletişim iş akışlarına API açan ekipler için.',
      outcomes: [
        'Daha net yetkilendirme sınırlarına ve daha güvenli input işleme mantığına sahip API rotaları.',
        'İletişim, lead, giriş ve operasyonel endpointleri koruyan kötüye kullanım kontrolleri.',
        'Gelecekteki regresyonları yakalamayı kolaylaştıran operasyonel kontroller.',
      ],
      deliverables: [
        'API rota ve veri akışı incelemesi',
        'Kimlik doğrulama ve yetkilendirme sınırı incelemesi',
        'Validation, rate limit ve abuse-control yönlendirmesi',
        'Loglama ve incident-readiness kontrol listesi',
        'Kritik rotalar için CI uyumlu regresyon kontrolleri',
      ],
      process: [
        { title: 'Haritala', description: 'Public rotaları, ayrıcalıklı rotaları, dış entegrasyonları ve veri yollarını belirleriz.' },
        { title: 'Azalt', description: 'Gereksiz açıklıkları kaldırır ve kötüye kullanılma ihtimali en yüksek rotalara kontrol ekleriz.' },
        { title: 'İzle', description: 'Lansman sonrası sorunların görünür olması için pratik loglama ve doğrulama ekleriz.' },
      ],
      proofPoints: [
        'İletişim endpoint doğrulaması',
        'Destek ve güvenlik için e-posta alias yönlendirmesi',
        'Güvenlik odaklı lansman kontrol listesi',
      ],
    },
    de: {
      title: 'Backend API Hardening',
      shortTitle: 'Backend API Hardening',
      description:
        'Backend- und API-Härtung für Authentifizierung, Autorisierung, Validierung, Rate Limits, Logging und Deployment-Readiness.',
      keywords:
        'Backend API Hardening, API Security, Backend Security Review, Node API Security, Cloud API Hardening',
      serviceType: 'Backend API Hardening',
      intent:
        'Für Teams, die APIs für Kunden, Partnerintegrationen, Dashboards oder öffentliche Kontakt-Workflows öffnen.',
      outcomes: [
        'API-Routen mit klareren Autorisierungsgrenzen und sichererem Input Handling.',
        'Abuse Controls zum Schutz von Kontakt-, Lead-, Login- und operativen Endpunkten.',
        'Operative Checks, die spätere Regressionen leichter sichtbar machen.',
      ],
      deliverables: [
        'Review von API-Routen und Datenflüssen',
        'Review von Authentifizierungs- und Autorisierungsgrenzen',
        'Guidance zu Validierung, Rate Limiting und Abuse Controls',
        'Logging- und Incident-Readiness-Checkliste',
        'CI-freundliche Regression-Checks für kritische Routen',
      ],
      process: [
        { title: 'Kartieren', description: 'Wir identifizieren öffentliche Routen, privilegierte Routen, externe Integrationen und Datenpfade.' },
        { title: 'Reduzieren', description: 'Wir entfernen vermeidbare Exposition und setzen Kontrollen um die am ehesten missbrauchbaren Routen.' },
        { title: 'Überwachen', description: 'Wir ergänzen praktisches Logging und Verifikation, damit Probleme nach Launch sichtbar sind.' },
      ],
      proofPoints: [
        'Kontakt-Endpunkt-Verifikation',
        'E-Mail-Alias-Routing für Support und Security',
        'Security-fokussierte Launch-Checkliste',
      ],
    },
    ja: {
      title: 'Backend API強化',
      shortTitle: 'Backend API強化',
      description:
        '認証、認可、バリデーション、レート制限、ログ、本番準備のためのBackend/API強化。',
      keywords:
        'Backend API強化, APIセキュリティ, Backendセキュリティレビュー, Node APIセキュリティ, クラウドAPI強化',
      serviceType: 'Backend API強化',
      intent:
        '顧客、パートナー連携、ダッシュボード、公開問い合わせフローへAPIを公開するチーム向け。',
      outcomes: [
        '認可境界が明確で、入力処理がより安全なAPIルート。',
        '問い合わせ、リード、ログイン、運用エンドポイントを守る悪用対策。',
        '将来のリグレッションを検出しやすくする運用チェック。',
      ],
      deliverables: [
        'APIルートとデータフローのレビュー',
        '認証/認可境界のレビュー',
        'バリデーション、レート制限、悪用対策の指針',
        'ログとインシデント準備チェックリスト',
        '重要ルート向けCI対応リグレッションチェック',
      ],
      process: [
        { title: '把握', description: '公開ルート、特権ルート、外部連携、データ経路を特定します。' },
        { title: '削減', description: '避けられる露出を減らし、悪用されやすいルートに制御を追加します。' },
        { title: '監視', description: '公開後の問題を見える化するため、実用的なログと検証を追加します。' },
      ],
      proofPoints: [
        '問い合わせエンドポイント検証',
        'サポートとセキュリティ向けメールエイリアスルーティング',
        'セキュリティ重視の公開チェックリスト',
      ],
    },
    'zh-CN': {
      title: 'Backend API 加固',
      shortTitle: 'Backend API 加固',
      description:
        '面向认证、授权、校验、限流、日志和部署准备的后端与 API 加固。',
      keywords:
        'Backend API 加固, API 安全, 后端安全评审, Node API 安全, 云 API 加固',
      serviceType: 'Backend API 加固',
      intent:
        '适用于向客户、合作伙伴集成、控制台或公开联系工作流开放 API 的团队。',
      outcomes: [
        '拥有更清晰授权边界和更安全输入处理的 API 路由。',
        '保护联系、线索、登录和运营端点的滥用控制。',
        '让未来回归问题更容易被捕获的运营检查。',
      ],
      deliverables: [
        'API 路由与数据流评审',
        '认证与授权边界评审',
        '校验、限流与滥用控制指导',
        '日志与事件准备清单',
        '关键路由的 CI 友好回归检查',
      ],
      process: [
        { title: '映射', description: '识别公开路由、特权路由、外部集成和数据路径。' },
        { title: '减少', description: '移除可避免暴露，并为最可能被滥用的路由增加控制。' },
        { title: '监控', description: '加入实用日志与验证，让上线后的问题可见。' },
      ],
      proofPoints: [
        '联系端点验证',
        '支持与安全邮箱别名路由',
        '安全导向上线清单',
      ],
    },
    es: {
      title: 'Endurecimiento de Backend API',
      shortTitle: 'Backend API Hardening',
      description:
        'Endurecimiento de backend y APIs para autenticación, autorización, validación, rate limits, logging y preparación de despliegue.',
      keywords:
        'endurecimiento backend API, seguridad API, revisión seguridad backend, seguridad Node API, hardening API cloud',
      serviceType: 'Endurecimiento Backend API',
      intent:
        'Para equipos que exponen APIs a clientes, integraciones, dashboards o flujos públicos de contacto.',
      outcomes: [
        'Rutas API con límites de autorización más claros y manejo de input más seguro.',
        'Controles antiabuso para proteger endpoints de contacto, leads, login y operación.',
        'Checks operativos que facilitan detectar regresiones futuras.',
      ],
      deliverables: [
        'Revisión de rutas API y flujos de datos',
        'Revisión de límites de autenticación y autorización',
        'Guía de validación, rate limiting y controles antiabuso',
        'Checklist de logging y preparación ante incidentes',
        'Checks de regresión compatibles con CI para rutas críticas',
      ],
      process: [
        { title: 'Mapear', description: 'Identificamos rutas públicas, rutas privilegiadas, integraciones externas y caminos de datos.' },
        { title: 'Reducir', description: 'Eliminamos exposición evitable y añadimos controles alrededor de las rutas con mayor probabilidad de abuso.' },
        { title: 'Monitorizar', description: 'Añadimos logging y verificación práctica para que los problemas sean visibles tras el lanzamiento.' },
      ],
      proofPoints: [
        'Verificación de endpoint de contacto',
        'Routing de alias de correo para soporte y seguridad',
        'Checklist de lanzamiento centrada en seguridad',
      ],
    },
    fr: {
      title: 'Durcissement Backend API',
      shortTitle: 'Durcissement Backend API',
      description:
        'Durcissement backend et API pour authentification, autorisation, validation, rate limits, logs et préparation au déploiement.',
      keywords:
        'durcissement backend API, sécurité API, revue sécurité backend, sécurité Node API, durcissement API cloud',
      serviceType: 'Durcissement Backend API',
      intent:
        'Pour les équipes exposant des API à des clients, intégrations partenaires, dashboards ou workflows publics de contact.',
      outcomes: [
        'Des routes API avec frontières d’autorisation plus claires et traitement des entrées plus sûr.',
        'Des contrôles anti-abus protégeant contact, lead, login et endpoints opérationnels.',
        'Des contrôles opérationnels qui rendent les futures régressions plus faciles à détecter.',
      ],
      deliverables: [
        'Revue des routes API et flux de données',
        'Revue des frontières d’authentification et d’autorisation',
        'Guidance validation, rate limiting et contrôles anti-abus',
        'Checklist logs et préparation incident',
        'Contrôles de régression compatibles CI pour routes critiques',
      ],
      process: [
        { title: 'Cartographier', description: 'Nous identifions routes publiques, routes privilégiées, intégrations externes et chemins de données.' },
        { title: 'Réduire', description: 'Nous supprimons l’exposition évitable et ajoutons des contrôles autour des routes les plus exposées aux abus.' },
        { title: 'Surveiller', description: 'Nous ajoutons logs et vérifications pratiques pour rendre les problèmes visibles après lancement.' },
      ],
      proofPoints: [
        'Vérification de l’endpoint contact',
        'Routage des alias e-mail support et sécurité',
        'Checklist de lancement orientée sécurité',
      ],
    },
    ko: {
      title: 'Backend API 하드닝',
      shortTitle: 'Backend API 하드닝',
      description:
        '인증, 권한 부여, 검증, rate limit, 로깅, 배포 준비를 위한 백엔드 및 API 하드닝.',
      keywords:
        'Backend API 하드닝, API 보안, 백엔드 보안 검토, Node API 보안, 클라우드 API 하드닝',
      serviceType: 'Backend API 하드닝',
      intent:
        '고객, 파트너 통합, 대시보드 또는 공개 문의 워크플로에 API를 노출하는 팀을 위한 서비스입니다.',
      outcomes: [
        '더 명확한 권한 경계와 더 안전한 입력 처리를 갖춘 API 라우트.',
        '문의, 리드, 로그인, 운영 엔드포인트를 보호하는 남용 방지 제어.',
        '미래 회귀를 더 쉽게 잡아내는 운영 검사.',
      ],
      deliverables: [
        'API 라우트 및 데이터 흐름 검토',
        '인증 및 권한 경계 검토',
        '검증, rate limiting, abuse-control 지침',
        '로깅 및 incident-readiness 체크리스트',
        '핵심 라우트용 CI 친화 회귀 검사',
      ],
      process: [
        { title: '매핑', description: '공개 라우트, 권한 라우트, 외부 통합, 데이터 경로를 식별합니다.' },
        { title: '축소', description: '피할 수 있는 노출을 제거하고 남용 가능성이 높은 라우트 주변에 제어를 추가합니다.' },
        { title: '모니터링', description: '출시 후 문제가 보이도록 실용적인 로깅과 검증을 추가합니다.' },
      ],
      proofPoints: [
        '문의 엔드포인트 검증',
        '지원 및 보안 이메일 별칭 라우팅',
        '보안 중심 출시 체크리스트',
      ],
    },
  },
};
