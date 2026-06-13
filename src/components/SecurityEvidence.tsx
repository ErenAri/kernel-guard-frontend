/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Measured security evidence: the actual security headers enforced at the edge
 * (Cloudflare), plus a link for visitors to verify the grade themselves.
 * "Evidence over claims" — we show the live policy, not a promise.
 */

import { ShieldCheck, ExternalLink } from 'lucide-react';
import { useLanguage, type Language } from '../context/LanguageContext';

const VERIFY_URL =
  'https://securityheaders.com/?q=https%3A%2F%2Fwww.kernelguard.net&followRedirects=on';

// Real values from public/_headers — literal tokens, not translated.
const POLICY_TOKENS = [
  'HSTS · 1y · includeSubDomains · preload',
  "CSP · script-src 'self' (no inline) · object-src 'none' · frame-ancestors 'none'",
  'X-Frame-Options: DENY',
  'X-Content-Type-Options: nosniff',
  'Referrer-Policy: strict-origin-when-cross-origin',
  'Permissions-Policy · ~20 features denied',
];

interface SecStrings {
  eyebrow: string; heading: string; subline: string;
  labels: string[]; verify: string; note: string;
}

const CONTENT: Record<Language, SecStrings> = {
  en: {
    eyebrow: 'Security', heading: 'Hardened at the edge.',
    subline: 'Every response ships strict security headers — enforced by Cloudflare on the production domain, not just promised in a policy.',
    labels: ['Transport security', 'Content Security Policy', 'Clickjacking', 'MIME sniffing', 'Referrer', 'Browser features'],
    verify: 'Verify it yourself', note: 'Live response headers, measured on the production domain.',
  },
  tr: {
    eyebrow: 'Güvenlik', heading: 'Uçta sertleştirildi.',
    subline: 'Her yanıt katı güvenlik başlıkları gönderir — bir politikada vaat edilmekle kalmaz, üretim alanında Cloudflare tarafından uygulanır.',
    labels: ['Taşıma güvenliği', 'İçerik Güvenlik Politikası', 'Tıklama hırsızlığı', 'MIME koklama', 'Yönlendiren', 'Tarayıcı özellikleri'],
    verify: 'Kendiniz doğrulayın', note: 'Üretim alanında ölçülen canlı yanıt başlıkları.',
  },
  de: {
    eyebrow: 'Sicherheit', heading: 'Am Edge gehärtet.',
    subline: 'Jede Antwort liefert strenge Security-Header — von Cloudflare auf der Produktionsdomain durchgesetzt, nicht nur in einer Richtlinie versprochen.',
    labels: ['Transportsicherheit', 'Content-Security-Policy', 'Clickjacking', 'MIME-Sniffing', 'Referrer', 'Browser-Funktionen'],
    verify: 'Selbst überprüfen', note: 'Live-Response-Header, auf der Produktionsdomain gemessen.',
  },
  es: {
    eyebrow: 'Seguridad', heading: 'Reforzado en el edge.',
    subline: 'Cada respuesta envía cabeceras de seguridad estrictas — aplicadas por Cloudflare en el dominio de producción, no solo prometidas en una política.',
    labels: ['Seguridad de transporte', 'Política de seguridad de contenido', 'Clickjacking', 'Sniffing de MIME', 'Referente', 'Funciones del navegador'],
    verify: 'Verifícalo tú mismo', note: 'Cabeceras de respuesta en vivo, medidas en el dominio de producción.',
  },
  fr: {
    eyebrow: 'Sécurité', heading: 'Renforcé en périphérie.',
    subline: 'Chaque réponse envoie des en-têtes de sécurité stricts — appliqués par Cloudflare sur le domaine de production, pas seulement promis dans une politique.',
    labels: ['Sécurité du transport', 'Politique de sécurité du contenu', 'Détournement de clic', 'Sniffing MIME', 'Référent', 'Fonctions du navigateur'],
    verify: 'Vérifiez par vous-même', note: 'En-têtes de réponse en direct, mesurés sur le domaine de production.',
  },
  ja: {
    eyebrow: 'セキュリティ', heading: 'エッジで堅牢化。',
    subline: 'すべてのレスポンスは厳格なセキュリティヘッダーを送出します — ポリシー文書での約束ではなく、本番ドメインで Cloudflare により強制されます。',
    labels: ['転送のセキュリティ', 'コンテンツセキュリティポリシー', 'クリックジャッキング', 'MIME スニッフィング', 'リファラー', 'ブラウザ機能'],
    verify: '自分で検証する', note: '本番ドメインで測定した実際のレスポンスヘッダー。',
  },
  'zh-CN': {
    eyebrow: '安全', heading: '在边缘加固。',
    subline: '每个响应都发送严格的安全标头——由 Cloudflare 在生产域上强制执行，而不仅仅是写在策略里。',
    labels: ['传输安全', '内容安全策略', '点击劫持', 'MIME 嗅探', '来源引用', '浏览器功能'],
    verify: '自行验证', note: '在生产域上测量的实时响应标头。',
  },
  ko: {
    eyebrow: '보안', heading: '엣지에서 강화.',
    subline: '모든 응답은 엄격한 보안 헤더를 전송합니다 — 정책 문서의 약속이 아니라, 운영 도메인에서 Cloudflare가 실제로 적용합니다.',
    labels: ['전송 보안', '콘텐츠 보안 정책', '클릭재킹', 'MIME 스니핑', '리퍼러', '브라우저 기능'],
    verify: '직접 확인하기', note: '운영 도메인에서 측정한 실시간 응답 헤더.',
  },
};

export default function SecurityEvidence() {
  const { language } = useLanguage();
  const t = CONTENT[language] ?? CONTENT.en;

  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/55">
            <span className="text-signature">// </span>{t.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-5">{t.heading}</h2>
        <p className="text-lg font-light text-foreground/70 max-w-2xl mb-10 leading-relaxed">{t.subline}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {POLICY_TOKENS.map((token, i) => (
            <div key={token} className="bg-background p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-foreground/50 mb-2">{t.labels[i]}</div>
              <div className="text-sm font-mono text-foreground break-words">{token}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
          <a
            href={VERIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between px-6 py-4 kg-action-primary w-full sm:w-72"
          >
            <span className="font-medium">{t.verify}</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <p className="mt-4 text-xs font-mono text-foreground/50 normal-case">{t.note}</p>
      </div>
    </section>
  );
}
