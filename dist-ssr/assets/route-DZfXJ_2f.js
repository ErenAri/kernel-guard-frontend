//#region src/i18n/route.ts
var SUPPORTED_LANGUAGES = [
	"tr",
	"en",
	"de",
	"ja",
	"zh-CN",
	"es",
	"fr",
	"ko"
];
var LANGUAGE_PREFERENCE_STORAGE_KEY = "kg_language_preference";
var LANGUAGE_PREFIXES = {
	tr: "",
	en: "/en",
	de: "/de",
	ja: "/ja",
	"zh-CN": "/zh-cn",
	es: "/es",
	fr: "/fr",
	ko: "/ko"
};
var LANGUAGE_HREFLANGS = {
	tr: "tr",
	en: "en",
	de: "de",
	ja: "ja",
	"zh-CN": "zh-CN",
	es: "es",
	fr: "fr",
	ko: "ko"
};
var LANGUAGE_LABELS = {
	tr: "TR",
	en: "EN",
	de: "DE",
	ja: "JA",
	"zh-CN": "ZH",
	es: "ES",
	fr: "FR",
	ko: "KO"
};
var PREFIX_LANGUAGE_ENTRIES = Object.entries(LANGUAGE_PREFIXES).filter(([, prefix]) => prefix).sort((a, b) => b[1].length - a[1].length);
function stripLanguagePrefix(pathname) {
	for (const [, prefix] of PREFIX_LANGUAGE_ENTRIES) {
		if (pathname === prefix) return "/";
		if (pathname.startsWith(`${prefix}/`)) {
			const rest = pathname.slice(prefix.length);
			return rest === "" ? "/" : rest;
		}
	}
	return pathname;
}
function localizePath(path, lang) {
	const stripped = stripLanguagePrefix(path);
	const prefix = LANGUAGE_PREFIXES[lang];
	if (!prefix) return stripped;
	if (stripped === "/") return `${prefix}/`;
	return `${prefix}${stripped.startsWith("/") ? "" : "/"}${stripped}`;
}
function setStoredLanguagePreference(language) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(LANGUAGE_PREFERENCE_STORAGE_KEY, language);
	} catch {}
}
//#endregion
export { setStoredLanguagePreference as a, localizePath as i, LANGUAGE_LABELS as n, stripLanguagePrefix as o, SUPPORTED_LANGUAGES as r, LANGUAGE_HREFLANGS as t };
