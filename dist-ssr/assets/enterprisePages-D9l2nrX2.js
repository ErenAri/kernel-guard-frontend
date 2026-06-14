import { n as SITE_EMAILS } from "./site-BXg7CYE6.js";
//#region src/data/enterprisePages.ts
var english = {
	links: {
		security: "Security",
		engineering: "Engineering",
		status: "Status",
		changelog: "Changelog"
	},
	pages: {
		security: {
			seoTitle: "Security Program | Kernel Guard",
			seoDescription: "Kernel Guard security posture, platform controls, vulnerability disclosure policy, dependency scanning, and reporting channels.",
			badge: "SECURITY // CONTROLS",
			title: "Security Program",
			description: "A public summary of the controls and reporting process we use to keep the website, admin workflow, and open-source delivery pipeline defensible.",
			facts: [
				{
					label: "Dependency audit",
					value: "0",
					detail: "Known npm vulnerabilities after production audit."
				},
				{
					label: "Admin backend",
					value: "Cloudflare",
					detail: "Pages Function with origin-aware CORS and optional Turnstile."
				},
				{
					label: "Disclosure",
					value: "security.txt",
					detail: "Security contact published under /.well-known/security.txt."
				}
			],
			sections: [
				{
					title: "Application controls",
					body: "The public site is statically prerendered and served through Cloudflare Pages. The admin API is isolated as a server-side Pages Function.",
					items: [
						"Content Security Policy, HSTS, and frame protection",
						"Origin-aware admin API route",
						"No client-side GitHub token exposure"
					]
				},
				{
					title: "Admin hardening",
					body: "Administrative writes are authenticated server-side before GitHub content updates are allowed.",
					items: [
						"Constant-time credential comparison",
						"Optional Turnstile verification",
						"Short-lived session token support"
					]
				},
				{
					title: "Vulnerability disclosure",
					body: "Security reports should be sent directly to the maintainers with reproduction steps, affected URLs, impact, and any safe proof of concept.",
					items: [
						`Email: ${SITE_EMAILS.security}`,
						"Acknowledgement target: 2 business days",
						"No public exploit disclosure before triage"
					]
				},
				{
					title: "Research rules",
					body: "Good-faith research is welcome when it avoids harm to users, data, infrastructure, and service availability.",
					items: [
						"Do not access, modify, or exfiltrate data that is not yours",
						"Do not use phishing, social engineering, spam, or denial-of-service testing",
						"Use GitHub issues only for non-sensitive bugs"
					]
				},
				{
					title: "Out of scope",
					body: "Reports need a realistic security impact. Low-risk findings without exploitability may be closed without remediation.",
					items: [
						"Missing best-practice headers without a working exploit",
						"Scanner-only findings with no reproducible impact",
						"Issues in third-party services outside Kernel Guard control"
					]
				}
			]
		},
		engineering: {
			seoTitle: "Engineering Standards | Kernel Guard",
			seoDescription: "Kernel Guard engineering standards for accessibility, performance, localization, CI, and measured evidence.",
			badge: "ENGINEERING // STANDARDS",
			title: "Engineering Standards",
			description: "The operating model behind the public website: measurable quality, accessible interfaces, localized content, and repeatable delivery.",
			facts: [
				{
					label: "Languages",
					value: "8",
					detail: "Localized UI paths with hreflang alternates."
				},
				{
					label: "Prerender",
					value: "Static",
					detail: "SEO-critical routes generated at build time."
				},
				{
					label: "Quality gates",
					value: "CI",
					detail: "Typecheck, audit, build, and Lighthouse checks."
				}
			],
			sections: [
				{
					title: "Design discipline",
					body: "The interface favors restrained enterprise patterns: clear hierarchy, low decoration, measurable proof, and predictable navigation.",
					items: [
						"WCAG-oriented color and control states",
						"Stable route structure",
						"Evidence cards tied to actual repository and build data"
					]
				},
				{
					title: "Delivery discipline",
					body: "Each release should be reproducible through the same commands used in CI.",
					items: [
						"npm audit gate",
						"TypeScript no-emit check",
						"Cloudflare Pages Functions build validation"
					]
				},
				{
					title: "Internationalization",
					body: "Localized URLs are first-class pages, not query parameters.",
					items: [
						"Self-canonical localized pages",
						"hreflang alternates",
						"Localized project descriptions"
					]
				}
			]
		},
		status: {
			seoTitle: "Service Status | Kernel Guard",
			seoDescription: "Current service posture for Kernel Guard website, contact form, admin API, and static delivery.",
			badge: "STATUS // LIVE",
			title: "Service Status",
			description: "A compact operational view of the public web surface and supporting endpoints.",
			facts: [
				{
					label: "Website",
					value: "Online",
					detail: "Cloudflare Pages static delivery."
				},
				{
					label: "Admin API",
					value: "Protected",
					detail: "Server-side GitHub bridge."
				},
				{
					label: "Contact",
					value: "Active",
					detail: "Web3Forms-backed contact flow."
				}
			],
			sections: [
				{
					title: "Public website",
					body: "Static pages are prerendered and served through Cloudflare for predictable availability and low operational surface.",
					items: [
						"Home and language routes",
						"Project and service pages",
						"Sitemap and robots.txt"
					]
				},
				{
					title: "Administrative surface",
					body: "The admin panel is intentionally separate from public content delivery and uses a server-side write bridge.",
					items: [
						"No public write token",
						"Credential-gated content updates",
						"Optional Turnstile challenge"
					]
				},
				{
					title: "Monitoring practice",
					body: "Status is validated through direct HTTP checks, Lighthouse runs, and build-time prerender reports.",
					items: [
						"200 checks on live domain",
						"Lighthouse accessibility and performance checks",
						"npm audit verification"
					]
				}
			]
		},
		changelog: {
			seoTitle: "Changelog | Kernel Guard",
			seoDescription: "Public changelog for Kernel Guard website security, localization, performance, and delivery changes.",
			badge: "CHANGELOG // RELEASES",
			title: "Changelog",
			description: "A transparent record of meaningful website changes that affect trust, performance, localization, or operations.",
			facts: [
				{
					label: "Latest",
					value: "2026-06-01",
					detail: "Enterprise hardening and language expansion."
				},
				{
					label: "Deploy",
					value: "Cloudflare",
					detail: "CLI-backed Pages deployments."
				},
				{
					label: "Audit",
					value: "0",
					detail: "Known npm vulnerabilities at release time."
				}
			],
			sections: [
				{
					title: "2026-06-01",
					body: "Enterprise readiness package for the public website.",
					items: [
						"Security headers and admin hardening",
						"French, Spanish, and Korean language support",
						"Security, engineering, status, and changelog pages"
					]
				},
				{
					title: "2026-05-31",
					body: "Measured proof and Cloudflare migration package.",
					items: [
						"Cloudflare Pages Function for admin API",
						"Public GitHub evidence cards",
						"Accessibility and contrast fixes"
					]
				},
				{
					title: "Quality policy",
					body: "Only meaningful technical and trust-impacting changes are listed here.",
					items: [
						"Security posture",
						"Performance metrics",
						"Localization coverage"
					]
				}
			]
		}
	}
};
var enterprisePages = {
	en: english,
	tr: {
		links: {
			security: "Güvenlik",
			engineering: "Mühendislik",
			status: "Durum",
			changelog: "Değişiklikler"
		},
		pages: {
			security: {
				...english.pages.security,
				seoTitle: "Güvenlik Programı | Kernel Guard",
				seoDescription: "Kernel Guard güvenlik kontrolleri, admin koruması, bağımlılık taraması ve bildirim kanalları.",
				badge: "GÜVENLİK // KONTROLLER",
				title: "Güvenlik Programı",
				description: "Web sitesi, admin akışı ve açık kaynak teslimat hattını savunulabilir tutmak için kullandığımız kontrollerin özeti."
			},
			engineering: {
				...english.pages.engineering,
				seoTitle: "Mühendislik Standartları | Kernel Guard",
				seoDescription: "Erişilebilirlik, performans, lokalizasyon, CI ve ölçülebilir kanıt standartları.",
				badge: "MÜHENDİSLİK // STANDARTLAR",
				title: "Mühendislik Standartları",
				description: "Ölçülebilir kalite, erişilebilir arayüzler, lokalize içerik ve tekrar edilebilir teslimat modeli."
			},
			status: {
				...english.pages.status,
				seoTitle: "Servis Durumu | Kernel Guard",
				seoDescription: "Kernel Guard web sitesi, iletişim formu, admin API ve statik teslimat durumu.",
				badge: "DURUM // CANLI",
				title: "Servis Durumu",
				description: "Public web yüzeyi ve destekleyen endpointler için kısa operasyonel görünüm."
			},
			changelog: {
				...english.pages.changelog,
				seoTitle: "Değişiklik Günlüğü | Kernel Guard",
				seoDescription: "Kernel Guard web sitesi güvenlik, lokalizasyon, performans ve teslimat değişiklikleri.",
				badge: "CHANGELOG // SÜRÜMLER",
				title: "Değişiklik Günlüğü",
				description: "Güven, performans, lokalizasyon veya operasyonu etkileyen anlamlı değişikliklerin kaydı."
			}
		}
	},
	de: {
		links: {
			security: "Sicherheit",
			engineering: "Engineering",
			status: "Status",
			changelog: "Changelog"
		},
		pages: english.pages
	},
	ja: {
		links: {
			security: "セキュリティ",
			engineering: "エンジニアリング",
			status: "ステータス",
			changelog: "変更履歴"
		},
		pages: english.pages
	},
	"zh-CN": {
		links: {
			security: "安全",
			engineering: "工程",
			status: "状态",
			changelog: "更新日志"
		},
		pages: english.pages
	},
	es: {
		links: {
			security: "Seguridad",
			engineering: "Ingeniería",
			status: "Estado",
			changelog: "Cambios"
		},
		pages: english.pages
	},
	fr: {
		links: {
			security: "Sécurité",
			engineering: "Ingénierie",
			status: "Statut",
			changelog: "Changelog"
		},
		pages: english.pages
	},
	ko: {
		links: {
			security: "보안",
			engineering: "엔지니어링",
			status: "상태",
			changelog: "변경 내역"
		},
		pages: english.pages
	}
};
//#endregion
export { enterprisePages as t };
