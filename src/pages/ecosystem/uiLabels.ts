import type { Language } from '../../context/LanguageContext';

export interface EcosystemUiLabels {
  flow: string;
  claims: string;
  overviewKeywords: string;
  overviewImageAlt: string;
  detailSeoSuffix: string;
  detailKeywords: string;
  detailImageAlt: string;
}

export const ecosystemUiLabels: Record<Language, EcosystemUiLabels> = {
  en: {
    flow: 'FLOW',
    claims: 'CLAIMS',
    overviewKeywords: 'Kernel Guard ecosystem, upstream integrations, cybersecurity infrastructure, Falco, Inspektor Gadget, BPFCompat',
    overviewImageAlt: 'Kernel Guard upstream cybersecurity integrations',
    detailSeoSuffix: 'Upstream Integration',
    detailKeywords: 'upstream integration, cybersecurity infrastructure, eBPF compatibility, public evidence',
    detailImageAlt: 'upstream integration and public evidence',
  },
  tr: {
    flow: 'AKIŞ',
    claims: 'İDDİA SINIRLARI',
    overviewKeywords: 'Kernel Guard ekosistemi, upstream entegrasyonlar, siber güvenlik altyapısı, Falco, Inspektor Gadget, BPFCompat',
    overviewImageAlt: 'Kernel Guard upstream siber güvenlik entegrasyonları',
    detailSeoSuffix: 'Upstream Entegrasyonu',
    detailKeywords: 'upstream entegrasyon, siber güvenlik altyapısı, eBPF uyumluluğu, kamuya açık kanıt',
    detailImageAlt: 'upstream entegrasyonu ve kamuya açık kanıt',
  },
  de: {
    flow: 'WIRKUNGSKETTE',
    claims: 'AUSSAGEGRENZEN',
    overviewKeywords: 'Kernel Guard Ökosystem, Upstream-Integrationen, Cybersecurity-Infrastruktur, Falco, Inspektor Gadget, BPFCompat',
    overviewImageAlt: 'Kernel Guard Upstream-Integrationen im Cybersecurity-Ökosystem',
    detailSeoSuffix: 'Upstream-Integration',
    detailKeywords: 'Upstream-Integration, Cybersecurity-Infrastruktur, eBPF-Kompatibilität, öffentliche Evidenz',
    detailImageAlt: 'Upstream-Integration und öffentliche Evidenz',
  },
  ja: {
    flow: '影響の流れ',
    claims: '表現上の境界',
    overviewKeywords: 'Kernel Guard エコシステム, upstream 統合, サイバーセキュリティ基盤, Falco, Inspektor Gadget, BPFCompat',
    overviewImageAlt: 'Kernel Guard の upstream サイバーセキュリティ統合',
    detailSeoSuffix: 'Upstream 統合',
    detailKeywords: 'upstream 統合, サイバーセキュリティ基盤, eBPF 互換性, 公開証拠',
    detailImageAlt: 'upstream 統合と公開証拠',
  },
  'zh-CN': {
    flow: '影响路径',
    claims: '声明边界',
    overviewKeywords: 'Kernel Guard 生态系统, upstream 集成, 网络安全基础设施, Falco, Inspektor Gadget, BPFCompat',
    overviewImageAlt: 'Kernel Guard upstream 网络安全集成',
    detailSeoSuffix: 'Upstream 集成',
    detailKeywords: 'upstream 集成, 网络安全基础设施, eBPF 兼容性, 公开证据',
    detailImageAlt: 'upstream 集成与公开证据',
  },
  es: {
    flow: 'FLUJO',
    claims: 'LÍMITES DE LAS AFIRMACIONES',
    overviewKeywords: 'ecosistema Kernel Guard, integraciones upstream, infraestructura de ciberseguridad, Falco, Inspektor Gadget, BPFCompat',
    overviewImageAlt: 'Integraciones upstream de ciberseguridad de Kernel Guard',
    detailSeoSuffix: 'Integración Upstream',
    detailKeywords: 'integración upstream, infraestructura de ciberseguridad, compatibilidad eBPF, evidencia pública',
    detailImageAlt: 'integración upstream y evidencia pública',
  },
  fr: {
    flow: 'FLUX',
    claims: 'LIMITES DES AFFIRMATIONS',
    overviewKeywords: 'écosystème Kernel Guard, intégrations upstream, infrastructure de cybersécurité, Falco, Inspektor Gadget, BPFCompat',
    overviewImageAlt: 'Intégrations upstream de cybersécurité de Kernel Guard',
    detailSeoSuffix: 'Intégration Upstream',
    detailKeywords: 'intégration upstream, infrastructure de cybersécurité, compatibilité eBPF, preuve publique',
    detailImageAlt: 'intégration upstream et preuve publique',
  },
  ko: {
    flow: '영향 흐름',
    claims: '주장 범위',
    overviewKeywords: 'Kernel Guard 에코시스템, upstream 통합, 사이버보안 인프라, Falco, Inspektor Gadget, BPFCompat',
    overviewImageAlt: 'Kernel Guard upstream 사이버보안 통합',
    detailSeoSuffix: 'Upstream 통합',
    detailKeywords: 'upstream 통합, 사이버보안 인프라, eBPF 호환성, 공개 증거',
    detailImageAlt: 'upstream 통합 및 공개 증거',
  },
};
