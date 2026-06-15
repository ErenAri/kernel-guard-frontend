import type { Language } from '../context/LanguageContext';

type MonthNames = Record<Language, string[]>;

const shortMonths: MonthNames = {
  tr: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  de: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
  ja: [],
  'zh-CN': [],
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  fr: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  ko: [],
};

const longMonths: MonthNames = {
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  ja: [],
  'zh-CN': [],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  ko: [],
};

export function formatLocalizedDate(date: string, language: Language, variant: 'short' | 'long' = 'long'): string {
  const [year, month, day] = date.split('-');
  const monthIndex = Number(month) - 1;
  const dayNumber = Number(day);
  const monthNumber = Number(month);

  if (language === 'ja') return `${year}年${monthNumber}月${dayNumber}日`;
  if (language === 'zh-CN') return `${year}年${monthNumber}月${dayNumber}日`;
  if (language === 'ko') return `${year}. ${monthNumber}. ${dayNumber}.`;

  const months = variant === 'short' ? shortMonths[language] : longMonths[language];
  const monthName = months[monthIndex] ?? month;

  if (language === 'en') return `${monthName} ${dayNumber}, ${year}`;
  if (language === 'de') return `${dayNumber}. ${monthName} ${year}`;

  return `${dayNumber} ${monthName} ${year}`;
}

export const articleIndexCopy: Record<Language, {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  badge: string;
  title: string;
  description: string;
  minRead: string;
  readArticle: string;
  relatedServices: string;
}> = {
  tr: {
    seoTitle: 'Güvenlik Mühendisliği Makaleleri | Kernel Guard',
    seoDescription:
      'Web güvenliği, Cloudflare güçlendirme, Google Workspace e-posta kimlik doğrulama, React abuse kontrolleri ve eBPF uyumluluğu üzerine pratik güvenlik mühendisliği notları.',
    seoKeywords:
      'güvenlik mühendisliği makaleleri, web güvenliği, Cloudflare güçlendirme, React güvenliği, DMARC kurulumu, eBPF uyumluluğu',
    badge: 'Saha Notları',
    title: 'Production web ekipleri için güvenlik mühendisliği makaleleri.',
    description:
      'Kernel Guard’ın teslim ettiği işle aynı çizgide, uygulama odaklı yazılar: güvenli web uygulamaları, güçlendirilmiş altyapı, şirket seviyesinde e-posta güveni ve tekrarlanabilir kanıt.',
    minRead: 'dk okuma',
    readArticle: 'Makaleyi oku',
    relatedServices: 'İlgili Hizmetler',
  },
  en: {
    seoTitle: 'Security Engineering Articles | Kernel Guard',
    seoDescription:
      'Practical security engineering notes on web security, Cloudflare hardening, Google Workspace email authentication, React abuse controls, and eBPF compatibility.',
    seoKeywords:
      'security engineering articles, web security, Cloudflare hardening, React security, DMARC setup, eBPF compatibility',
    badge: 'Field Notes',
    title: 'Security engineering articles for production web teams.',
    description:
      'Practical, implementation-focused writing that supports the same work Kernel Guard ships: secure web apps, hardened infrastructure, company-grade email trust, and repeatable evidence.',
    minRead: 'min read',
    readArticle: 'Read article',
    relatedServices: 'Related Services',
  },
  de: {
    seoTitle: 'Security-Engineering-Artikel | Kernel Guard',
    seoDescription:
      'Praxisnahe Security-Engineering-Notizen zu Websicherheit, Cloudflare-Hardening, Google-Workspace-E-Mail-Authentifizierung, React-Abuse-Controls und eBPF-Kompatibilität.',
    seoKeywords:
      'Security Engineering Artikel, Websicherheit, Cloudflare Hardening, React Sicherheit, DMARC Setup, eBPF Kompatibilität',
    badge: 'Praxisnotizen',
    title: 'Security-Engineering-Artikel für produktive Webteams.',
    description:
      'Umsetzungsorientierte Texte zu derselben Arbeit, die Kernel Guard liefert: sichere Webapps, gehärtete Infrastruktur, E-Mail-Vertrauen auf Unternehmensniveau und wiederholbare Evidence.',
    minRead: 'Min. Lesezeit',
    readArticle: 'Artikel lesen',
    relatedServices: 'Verwandte Leistungen',
  },
  ja: {
    seoTitle: 'セキュリティエンジニアリング記事 | Kernel Guard',
    seoDescription:
      'Web セキュリティ、Cloudflare 強化、Google Workspace メール認証、React の悪用対策、eBPF 互換性に関する実践的なセキュリティエンジニアリングノート。',
    seoKeywords:
      'セキュリティエンジニアリング記事, Web セキュリティ, Cloudflare 強化, React セキュリティ, DMARC 設定, eBPF 互換性',
    badge: 'フィールドノート',
    title: '本番 Web チームのためのセキュリティエンジニアリング記事。',
    description:
      'Kernel Guard が実際に提供する仕事と直結した実装重視の記事です。安全な Web アプリ、強化されたインフラ、企業レベルのメール信頼性、再現可能な evidence を扱います。',
    minRead: '分で読めます',
    readArticle: '記事を読む',
    relatedServices: '関連サービス',
  },
  'zh-CN': {
    seoTitle: '安全工程文章 | Kernel Guard',
    seoDescription:
      '关于 Web 安全、Cloudflare 加固、Google Workspace 邮件认证、React 滥用控制和 eBPF 兼容性的实用安全工程笔记。',
    seoKeywords:
      '安全工程文章, Web 安全, Cloudflare 加固, React 安全, DMARC 配置, eBPF 兼容性',
    badge: '实战笔记',
    title: '面向生产 Web 团队的安全工程文章。',
    description:
      '以实现为中心的实用内容，支撑 Kernel Guard 交付的同类工作：安全 Web 应用、加固基础设施、公司级邮件信任和可重复证据。',
    minRead: '分钟阅读',
    readArticle: '阅读文章',
    relatedServices: '相关服务',
  },
  es: {
    seoTitle: 'Artículos de ingeniería de seguridad | Kernel Guard',
    seoDescription:
      'Notas prácticas de ingeniería de seguridad sobre seguridad web, hardening de Cloudflare, autenticación de correo en Google Workspace, controles antiabuso en React y compatibilidad eBPF.',
    seoKeywords:
      'artículos de ingeniería de seguridad, seguridad web, hardening Cloudflare, seguridad React, configuración DMARC, compatibilidad eBPF',
    badge: 'Notas de campo',
    title: 'Artículos de ingeniería de seguridad para equipos web en producción.',
    description:
      'Contenido práctico y centrado en implementación que apoya el mismo trabajo que entrega Kernel Guard: apps web seguras, infraestructura endurecida, confianza de correo de nivel empresa y evidencia repetible.',
    minRead: 'min de lectura',
    readArticle: 'Leer artículo',
    relatedServices: 'Servicios relacionados',
  },
  fr: {
    seoTitle: 'Articles d’ingénierie sécurité | Kernel Guard',
    seoDescription:
      'Notes pratiques d’ingénierie sécurité sur la sécurité web, le durcissement Cloudflare, l’authentification e-mail Google Workspace, les contrôles anti-abus React et la compatibilité eBPF.',
    seoKeywords:
      'articles ingénierie sécurité, sécurité web, durcissement Cloudflare, sécurité React, configuration DMARC, compatibilité eBPF',
    badge: 'Notes de terrain',
    title: 'Articles d’ingénierie sécurité pour équipes web en production.',
    description:
      'Des contenus pratiques orientés implémentation, alignés avec le travail livré par Kernel Guard : applications web sécurisées, infrastructure durcie, confiance e-mail de niveau entreprise et preuves répétables.',
    minRead: 'min de lecture',
    readArticle: 'Lire l’article',
    relatedServices: 'Services liés',
  },
  ko: {
    seoTitle: '보안 엔지니어링 아티클 | Kernel Guard',
    seoDescription:
      '웹 보안, Cloudflare 하드닝, Google Workspace 이메일 인증, React 남용 제어, eBPF 호환성에 대한 실용적인 보안 엔지니어링 노트입니다.',
    seoKeywords:
      '보안 엔지니어링 아티클, 웹 보안, Cloudflare 하드닝, React 보안, DMARC 설정, eBPF 호환성',
    badge: '현장 노트',
    title: '프로덕션 웹 팀을 위한 보안 엔지니어링 아티클.',
    description:
      'Kernel Guard가 제공하는 실제 작업과 맞닿아 있는 구현 중심 글입니다. 안전한 웹 앱, 하드닝된 인프라, 회사급 이메일 신뢰, 반복 가능한 evidence를 다룹니다.',
    minRead: '분 읽기',
    readArticle: '아티클 읽기',
    relatedServices: '관련 서비스',
  },
};

export const articleDetailCopy: Record<Language, {
  articles: string;
  updated: string;
  minRead: string;
  keyPoints: string;
  references: string;
  tags: string;
  services: string;
}> = {
  tr: { articles: 'Makaleler', updated: 'Güncellendi', minRead: 'dk okuma', keyPoints: 'Öne Çıkanlar', references: 'Kaynaklar', tags: 'Etiketler', services: 'Hizmetler' },
  en: { articles: 'Articles', updated: 'Updated', minRead: 'min read', keyPoints: 'Key Points', references: 'References', tags: 'Tags', services: 'Services' },
  de: { articles: 'Artikel', updated: 'Aktualisiert', minRead: 'Min. Lesezeit', keyPoints: 'Kernpunkte', references: 'Referenzen', tags: 'Tags', services: 'Leistungen' },
  ja: { articles: '記事', updated: '更新日', minRead: '分で読めます', keyPoints: '要点', references: '参考資料', tags: 'タグ', services: 'サービス' },
  'zh-CN': { articles: '文章', updated: '更新于', minRead: '分钟阅读', keyPoints: '要点', references: '参考资料', tags: '标签', services: '服务' },
  es: { articles: 'Artículos', updated: 'Actualizado', minRead: 'min de lectura', keyPoints: 'Puntos clave', references: 'Referencias', tags: 'Etiquetas', services: 'Servicios' },
  fr: { articles: 'Articles', updated: 'Mis à jour', minRead: 'min de lecture', keyPoints: 'Points clés', references: 'Références', tags: 'Tags', services: 'Services' },
  ko: { articles: '아티클', updated: '업데이트', minRead: '분 읽기', keyPoints: '핵심 포인트', references: '참고 자료', tags: '태그', services: '서비스' },
};

export const serviceLandingCopy: Record<Language, {
  badge: string;
  bestFit: string;
  discussService: string;
  outcomes: string;
  outcomesDescription: string;
  deliverables: string;
  deliverablesDescription: string;
  process: string;
  processDescription: string;
  evidence: string;
  evidenceDescription: string;
  relatedReading: string;
  relatedReadingDescription: string;
  minRead: string;
  ctaTitle: string;
  ctaDescription: string;
  emailSales: string;
}> = {
  tr: {
    badge: 'Şirket Seviyesinde Güvenlik',
    bestFit: 'En Uygun Kullanım',
    discussService: 'Bu hizmeti konuşalım',
    outcomes: 'Sonuçlar',
    outcomesDescription: 'Çalışma; gönderilebilir, doğrulanabilir ve açıklanabilir pratik iyileştirmeler etrafında kapsamlandırılır.',
    deliverables: 'Teslimatlar',
    deliverablesDescription: 'Çalışma tamamlandıktan sonra ekibinizin kullanabileceği somut çıktılar üretir.',
    process: 'Süreç',
    processDescription: 'Az sayıda odaklı aşama, çalışmayı anlaşılır ve ölçülebilir tutar.',
    evidence: 'Kanıt',
    evidenceDescription: 'En güçlü güven sinyalleri spesifik, doğrulanabilir ve uygulamaya yakın olanlardır.',
    relatedReading: 'İlgili Okuma',
    relatedReadingDescription: 'Bu çalışmanın arkasındaki mühendislik kararlarını açıklayan destekleyici notlar.',
    minRead: 'dk okuma',
    ctaTitle: 'Bu seviyede güçlendirmeye mi ihtiyacınız var?',
    ctaDescription: 'Mevcut siteyi, repoyu veya launch bağlamını gönderin; Kernel Guard en net sonraki adımla yanıt verir.',
    emailSales: 'Sales ekibine yaz',
  },
  en: {
    badge: 'Company-Grade Security',
    bestFit: 'Best Fit',
    discussService: 'Discuss this service',
    outcomes: 'Outcomes',
    outcomesDescription: 'The work is scoped around practical improvements that can be shipped, verified, and explained.',
    deliverables: 'Deliverables',
    deliverablesDescription: 'The engagement produces artifacts your team can use after the work is complete.',
    process: 'Process',
    processDescription: 'A small number of focused stages keeps the work understandable and measurable.',
    evidence: 'Evidence',
    evidenceDescription: 'The strongest trust signals are specific, verifiable, and close to the implementation.',
    relatedReading: 'Related Reading',
    relatedReadingDescription: 'Supporting notes that explain the engineering decisions behind this work.',
    minRead: 'min read',
    ctaTitle: 'Need this level of hardening?',
    ctaDescription: 'Send the current site, repository, or launch context and Kernel Guard will respond with the cleanest next step.',
    emailSales: 'Email sales',
  },
  de: {
    badge: 'Security auf Unternehmensniveau',
    bestFit: 'Am besten geeignet',
    discussService: 'Leistung besprechen',
    outcomes: 'Ergebnisse',
    outcomesDescription: 'Die Arbeit wird um praktische Verbesserungen herum geschnitten, die ausgeliefert, verifiziert und erklärt werden können.',
    deliverables: 'Liefergegenstände',
    deliverablesDescription: 'Das Engagement erzeugt Artefakte, die Ihr Team nach Abschluss weiter nutzen kann.',
    process: 'Prozess',
    processDescription: 'Wenige fokussierte Phasen halten die Arbeit verständlich und messbar.',
    evidence: 'Evidence',
    evidenceDescription: 'Die stärksten Vertrauenssignale sind konkret, überprüfbar und nah an der Implementierung.',
    relatedReading: 'Weiterführende Artikel',
    relatedReadingDescription: 'Begleitende Notizen, die die Engineering-Entscheidungen hinter dieser Arbeit erklären.',
    minRead: 'Min. Lesezeit',
    ctaTitle: 'Brauchen Sie dieses Hardening-Niveau?',
    ctaDescription: 'Senden Sie aktuelle Website, Repository oder Launch-Kontext; Kernel Guard antwortet mit dem klarsten nächsten Schritt.',
    emailSales: 'Sales kontaktieren',
  },
  ja: {
    badge: '企業レベルのセキュリティ',
    bestFit: '適したケース',
    discussService: 'このサービスを相談する',
    outcomes: '成果',
    outcomesDescription: '出荷でき、検証でき、説明できる実務的な改善を中心にスコープを定義します。',
    deliverables: '納品物',
    deliverablesDescription: '作業完了後もチームが使える artifact を提供します。',
    process: 'プロセス',
    processDescription: '少数の集中したステージで、作業を理解しやすく測定可能に保ちます。',
    evidence: 'Evidence',
    evidenceDescription: '最も強い信頼シグナルは、具体的で検証可能で実装に近いものです。',
    relatedReading: '関連する記事',
    relatedReadingDescription: 'この作業の背後にある engineering decision を説明する補足ノートです。',
    minRead: '分で読めます',
    ctaTitle: 'このレベルの強化が必要ですか？',
    ctaDescription: '現在のサイト、リポジトリ、または launch context を送ってください。Kernel Guard が最も明確な次の一手を返します。',
    emailSales: 'sales にメールする',
  },
  'zh-CN': {
    badge: '公司级安全',
    bestFit: '最适合',
    discussService: '讨论此服务',
    outcomes: '结果',
    outcomesDescription: '工作范围围绕可以交付、验证和解释的实际改进展开。',
    deliverables: '交付物',
    deliverablesDescription: '项目会产出团队在工作完成后仍可使用的材料。',
    process: '流程',
    processDescription: '少量聚焦阶段让工作保持可理解、可衡量。',
    evidence: '证据',
    evidenceDescription: '最强的信任信号是具体、可验证且贴近实现的内容。',
    relatedReading: '相关阅读',
    relatedReadingDescription: '解释此项工作背后工程决策的支持性笔记。',
    minRead: '分钟阅读',
    ctaTitle: '需要这种级别的加固吗？',
    ctaDescription: '发送当前站点、代码库或上线背景，Kernel Guard 会给出最清晰的下一步。',
    emailSales: '联系销售',
  },
  es: {
    badge: 'Seguridad de nivel empresa',
    bestFit: 'Mejor encaje',
    discussService: 'Hablar de este servicio',
    outcomes: 'Resultados',
    outcomesDescription: 'El trabajo se acota alrededor de mejoras prácticas que pueden enviarse, verificarse y explicarse.',
    deliverables: 'Entregables',
    deliverablesDescription: 'El engagement produce artefactos que su equipo puede usar después de completar el trabajo.',
    process: 'Proceso',
    processDescription: 'Un número reducido de etapas enfocadas mantiene el trabajo comprensible y medible.',
    evidence: 'Evidencia',
    evidenceDescription: 'Las señales de confianza más fuertes son específicas, verificables y cercanas a la implementación.',
    relatedReading: 'Lecturas relacionadas',
    relatedReadingDescription: 'Notas de apoyo que explican las decisiones de ingeniería detrás de este trabajo.',
    minRead: 'min de lectura',
    ctaTitle: '¿Necesita este nivel de hardening?',
    ctaDescription: 'Envíe el sitio actual, repositorio o contexto de lanzamiento y Kernel Guard responderá con el siguiente paso más claro.',
    emailSales: 'Escribir a ventas',
  },
  fr: {
    badge: 'Sécurité de niveau entreprise',
    bestFit: 'Cas idéal',
    discussService: 'Discuter de ce service',
    outcomes: 'Résultats',
    outcomesDescription: 'Le travail est cadré autour d’améliorations pratiques pouvant être livrées, vérifiées et expliquées.',
    deliverables: 'Livrables',
    deliverablesDescription: 'La mission produit des artefacts que votre équipe peut utiliser après la fin du travail.',
    process: 'Processus',
    processDescription: 'Un petit nombre d’étapes ciblées garde le travail compréhensible et mesurable.',
    evidence: 'Preuves',
    evidenceDescription: 'Les signaux de confiance les plus forts sont précis, vérifiables et proches de l’implémentation.',
    relatedReading: 'Lectures liées',
    relatedReadingDescription: 'Notes complémentaires expliquant les décisions d’ingénierie derrière ce travail.',
    minRead: 'min de lecture',
    ctaTitle: 'Besoin de ce niveau de durcissement ?',
    ctaDescription: 'Envoyez le site actuel, le dépôt ou le contexte de lancement et Kernel Guard répondra avec l’étape suivante la plus claire.',
    emailSales: 'Écrire à sales',
  },
  ko: {
    badge: '회사급 보안',
    bestFit: '적합한 경우',
    discussService: '이 서비스 논의하기',
    outcomes: '결과',
    outcomesDescription: '작업은 배포, 검증, 설명이 가능한 실질적 개선을 중심으로 범위를 정합니다.',
    deliverables: '산출물',
    deliverablesDescription: '작업 완료 후에도 팀이 사용할 수 있는 artifact를 제공합니다.',
    process: '프로세스',
    processDescription: '소수의 집중 단계로 작업을 이해 가능하고 측정 가능하게 유지합니다.',
    evidence: 'Evidence',
    evidenceDescription: '가장 강한 신뢰 신호는 구체적이고 검증 가능하며 구현에 가까운 것입니다.',
    relatedReading: '관련 글',
    relatedReadingDescription: '이 작업 뒤의 engineering decision을 설명하는 보조 노트입니다.',
    minRead: '분 읽기',
    ctaTitle: '이 수준의 하드닝이 필요하신가요?',
    ctaDescription: '현재 사이트, 저장소 또는 launch context를 보내면 Kernel Guard가 가장 명확한 다음 단계를 답변합니다.',
    emailSales: 'sales에 이메일',
  },
};

export const homeGrowthCopy: Record<Language, {
  badge: string;
  title: string;
  description: string;
  minRead: string;
  readArticle: string;
  viewAllArticles: string;
}> = {
  tr: {
    badge: 'Büyüme İçeriği',
    title: 'Gerçek hizmetlerle bağlantılı pratik güvenlik içeriği.',
    description: 'Makaleler arama sorularını yanıtlar. Hizmet sayfaları bu ilgiyi uygulama desteğine ihtiyaç duyan ekipler için net sonraki adımlara dönüştürür.',
    minRead: 'dk okuma',
    readArticle: 'Makaleyi oku',
    viewAllArticles: 'Tüm makaleleri gör',
  },
  en: {
    badge: 'Growth Content',
    title: 'Practical security content tied to real services.',
    description: 'Articles answer search questions. Service pages turn that attention into clear next steps for teams that need implementation help.',
    minRead: 'min read',
    readArticle: 'Read article',
    viewAllArticles: 'View all articles',
  },
  de: {
    badge: 'Growth Content',
    title: 'Praktische Security-Inhalte, verbunden mit echten Leistungen.',
    description: 'Artikel beantworten Suchfragen. Leistungsseiten verwandeln diese Aufmerksamkeit in klare nächste Schritte für Teams, die Umsetzungshilfe brauchen.',
    minRead: 'Min. Lesezeit',
    readArticle: 'Artikel lesen',
    viewAllArticles: 'Alle Artikel ansehen',
  },
  ja: {
    badge: '成長コンテンツ',
    title: '実際のサービスにつながる実践的なセキュリティコンテンツ。',
    description: '記事は検索上の問いに答え、サービスページはその関心を実装支援が必要なチームの明確な次の一手へつなげます。',
    minRead: '分で読めます',
    readArticle: '記事を読む',
    viewAllArticles: 'すべての記事を見る',
  },
  'zh-CN': {
    badge: '增长内容',
    title: '与真实服务相连接的实用安全内容。',
    description: '文章回答搜索问题。服务页面把这种关注转化为面向需要实现支持团队的清晰下一步。',
    minRead: '分钟阅读',
    readArticle: '阅读文章',
    viewAllArticles: '查看所有文章',
  },
  es: {
    badge: 'Contenido de crecimiento',
    title: 'Contenido práctico de seguridad conectado con servicios reales.',
    description: 'Los artículos responden preguntas de búsqueda. Las páginas de servicio convierten esa atención en próximos pasos claros para equipos que necesitan ayuda de implementación.',
    minRead: 'min de lectura',
    readArticle: 'Leer artículo',
    viewAllArticles: 'Ver todos los artículos',
  },
  fr: {
    badge: 'Contenu de croissance',
    title: 'Contenu sécurité pratique relié à de vrais services.',
    description: 'Les articles répondent aux questions de recherche. Les pages service transforment cette attention en étapes claires pour les équipes qui ont besoin d’aide à l’implémentation.',
    minRead: 'min de lecture',
    readArticle: 'Lire l’article',
    viewAllArticles: 'Voir tous les articles',
  },
  ko: {
    badge: '성장 콘텐츠',
    title: '실제 서비스와 연결된 실용적인 보안 콘텐츠.',
    description: '아티클은 검색 질문에 답합니다. 서비스 페이지는 그 관심을 구현 도움이 필요한 팀의 명확한 다음 단계로 전환합니다.',
    minRead: '분 읽기',
    readArticle: '아티클 읽기',
    viewAllArticles: '모든 아티클 보기',
  },
};

export const servicesGrowthCopy: Record<Language, {
  badge: string;
  title: string;
  description: string;
  viewService: string;
}> = {
  tr: {
    badge: 'Arama Odaklı Hizmetler',
    title: 'Güvenlik bilinci yüksek ekipler için odaklı çalışmalar.',
    description: 'Bu sayfalar yaygın satın alma niyetini somut sonuçlar, teslimatlar ve kanıt noktalarıyla eşler.',
    viewService: 'Hizmeti gör',
  },
  en: {
    badge: 'Search-Focused Services',
    title: 'Focused engagements for security-minded teams.',
    description: 'These pages map common buying intent to concrete outcomes, deliverables, and proof points.',
    viewService: 'View service',
  },
  de: {
    badge: 'Suchorientierte Leistungen',
    title: 'Fokussierte Engagements für security-bewusste Teams.',
    description: 'Diese Seiten verbinden typische Kaufabsicht mit konkreten Ergebnissen, Liefergegenständen und Proof Points.',
    viewService: 'Leistung ansehen',
  },
  ja: {
    badge: '検索意図に合わせたサービス',
    title: 'セキュリティ意識の高いチーム向けの集中支援。',
    description: 'これらのページは一般的な購入意図を、具体的な成果、納品物、proof point に結び付けます。',
    viewService: 'サービスを見る',
  },
  'zh-CN': {
    badge: '搜索意图服务',
    title: '面向安全意识团队的聚焦项目。',
    description: '这些页面把常见购买意图映射到具体结果、交付物和证据点。',
    viewService: '查看服务',
  },
  es: {
    badge: 'Servicios orientados a búsqueda',
    title: 'Engagements enfocados para equipos con mentalidad de seguridad.',
    description: 'Estas páginas conectan intención de compra común con resultados, entregables y puntos de prueba concretos.',
    viewService: 'Ver servicio',
  },
  fr: {
    badge: 'Services orientés recherche',
    title: 'Missions ciblées pour équipes attentives à la sécurité.',
    description: 'Ces pages relient les intentions d’achat courantes à des résultats, livrables et preuves concrets.',
    viewService: 'Voir le service',
  },
  ko: {
    badge: '검색 중심 서비스',
    title: '보안 의식이 높은 팀을 위한 집중형 작업.',
    description: '이 페이지들은 일반적인 구매 의도를 구체적인 결과, 산출물, proof point와 연결합니다.',
    viewService: '서비스 보기',
  },
};

export const footerGrowthCopy: Record<Language, { articles: string }> = {
  tr: { articles: 'Makaleler' },
  en: { articles: 'Articles' },
  de: { articles: 'Artikel' },
  ja: { articles: '記事' },
  'zh-CN': { articles: '文章' },
  es: { articles: 'Artículos' },
  fr: { articles: 'Articles' },
  ko: { articles: '아티클' },
};
