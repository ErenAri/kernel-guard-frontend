import { n as __exportAll, t as require_dist } from "./dist-BkMweq9c.js";
import { t as SEO } from "./SEO-DqfPHW4s.js";
import { c as useLanguage } from "./site-BXg7CYE6.js";
import { t as ArrowLeft } from "./arrow-left-Cv3pMF22.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/NotFound.tsx
var NotFound_exports = /* @__PURE__ */ __exportAll({ default: () => NotFound });
var import_dist = require_dist();
function NotFound() {
	const { language } = useLanguage();
	const copy = language === "tr" ? {
		title: "Sayfa Bulunamadi | Kernel Guard",
		description: "Istediginiz sayfa mevcut degil veya tasinmis olabilir.",
		headline: "404_SAYFA_BULUNAMADI",
		body: "Aradiginiz sayfa mevcut degil veya URL degismis olabilir.",
		backLabel: "Ana Sayfaya Don"
	} : {
		title: "Page Not Found | Kernel Guard",
		description: "The requested page does not exist or may have moved.",
		headline: "404_PAGE_NOT_FOUND",
		body: "The requested page does not exist or the URL may have changed.",
		backLabel: "Back to Home"
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-20 flex items-center justify-center",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: copy.title,
			description: copy.description,
			path: "/not-found/",
			noIndex: true
		}), /* @__PURE__ */ jsxs("div", {
			className: "text-center max-w-xl px-6",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl md:text-3xl font-mono text-foreground mb-4",
					children: copy.headline
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-foreground/70 mb-8 leading-relaxed",
					children: copy.body
				}),
				/* @__PURE__ */ jsxs(import_dist.Link, {
					to: "/",
					className: "inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground hover:bg-surface transition-colors",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), copy.backLabel]
				})
			]
		})]
	});
}
//#endregion
export { NotFound_exports as n, NotFound as t };
