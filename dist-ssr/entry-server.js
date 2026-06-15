import { n as __exportAll, t as require_dist } from "./assets/dist-BkMweq9c.js";
import { a as getLocalizedGrowthServicePage, c as articles, d as HelmetProvider, i as buildSoftwareSourceCodeSchema, l as getLocalizedArticle, n as buildArticleSchema, o as growthServicePages, r as buildServiceSchema, s as localizeGrowthServicePage, t as SEO, u as localizeArticle } from "./assets/SEO-C7FngH91.js";
import { a as normalizeCanonicalPath, c as useLanguage, i as mailto, n as SITE_EMAILS, s as LanguageProvider } from "./assets/site-BXg7CYE6.js";
import { t as createLucideIcon } from "./assets/createLucideIcon-d-ZGlwaX.js";
import { t as ArrowLeft } from "./assets/arrow-left-Cv3pMF22.js";
import { t as CircleCheck } from "./assets/circle-check--45ff-zp.js";
import { a as setStoredLanguagePreference, i as localizePath, n as LANGUAGE_LABELS, r as SUPPORTED_LANGUAGES } from "./assets/route-DZfXJ_2f.js";
import { t as enterprisePages } from "./assets/enterprisePages-D9l2nrX2.js";
import { t as NotFound } from "./assets/NotFound-6_2-_4MJ.js";
import { renderToString } from "react-dom/server";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/context/ThemeContext.tsx
var import_dist = require_dist();
var ThemeContext = createContext(void 0);
function readInitialTheme() {
	if (typeof window === "undefined") return "dark";
	try {
		const savedTheme = window.localStorage.getItem("theme");
		if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
	} catch {}
	if (typeof window.matchMedia === "function") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	return "dark";
}
function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("dark");
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setTheme(readInitialTheme());
		setHasMounted(true);
	}, []);
	useEffect(() => {
		if (!hasMounted) return;
		if (typeof window === "undefined") return;
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");
		root.classList.add(theme);
		try {
			window.localStorage.setItem("theme", theme);
		} catch {}
	}, [hasMounted, theme]);
	const toggleTheme = () => {
		setTheme((prev) => prev === "light" ? "dark" : "light");
	};
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme
		},
		children
	});
}
function useTheme() {
	const context = useContext(ThemeContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
//#endregion
//#region src/components/CanonicalPathRedirect.tsx
var FILE_LIKE_PATH = /\.[a-z0-9]+$/i;
function CanonicalPathRedirect() {
	const location = (0, import_dist.useLocation)();
	if (FILE_LIKE_PATH.test(location.pathname)) return null;
	const normalizedPathname = normalizeCanonicalPath(location.pathname);
	if (normalizedPathname === location.pathname) return null;
	return /* @__PURE__ */ jsx(import_dist.Navigate, {
		to: `${normalizedPathname}${location.search}${location.hash}`,
		replace: true
	});
}
//#endregion
//#region src/components/ScrollToTop.tsx
function ScrollToTop() {
	const { pathname } = (0, import_dist.useLocation)();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Box = createLucideIcon("box", [
	["path", {
		d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
		key: "hh9hay"
	}],
	["path", {
		d: "m3.3 7 8.7 5 8.7-5",
		key: "g66t2b"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var BriefcaseBusiness = createLucideIcon("briefcase-business", [
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
		key: "1ksdt3"
	}],
	["path", {
		d: "M22 13a18.15 18.15 0 0 1-20 0",
		key: "12hx5q"
	}],
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "6",
		rx: "2",
		key: "i6l2r4"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarDays = createLucideIcon("calendar-days", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M16 14h.01",
		key: "1gbofw"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M16 18h.01",
		key: "kzsmim"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock = createLucideIcon("clock", [["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Cloud = createLucideIcon("cloud", [["path", {
	d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
	key: "p7xjir"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Code = createLucideIcon("code", [["path", {
	d: "m16 18 6-6-6-6",
	key: "eg8j8"
}], ["path", {
	d: "m8 6-6 6 6 6",
	key: "ppft3o"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Database = createLucideIcon("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Earth = createLucideIcon("earth", [
	["path", {
		d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
		key: "1djwo0"
	}],
	["path", {
		d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
		key: "1tzkfa"
	}],
	["path", {
		d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
		key: "14pb5j"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileText = createLucideIcon("file-text", [
	["path", {
		d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
		key: "1rqfz7"
	}],
	["path", {
		d: "M14 2v4a2 2 0 0 0 2 2h4",
		key: "tnqrlb"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Gauge = createLucideIcon("gauge", [["path", {
	d: "m12 14 4-4",
	key: "9kzdfg"
}], ["path", {
	d: "M3.34 19a10 10 0 1 1 17.32 0",
	key: "19p75a"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var GitBranch = createLucideIcon("git-branch", [
	["line", {
		x1: "6",
		x2: "6",
		y1: "3",
		y2: "15",
		key: "17qcm7"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}],
	["path", {
		d: "M18 9a9 9 0 0 1-9 9",
		key: "n2h4wq"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var GitMerge = createLucideIcon("git-merge", [
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M6 21V9a9 9 0 0 0 9 9",
		key: "7kw0sc"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Github = createLucideIcon("github", [["path", {
	d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
	key: "tonef"
}], ["path", {
	d: "M9 18c-4.51 2-5-2-7-2",
	key: "9comsn"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Globe = createLucideIcon("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LifeBuoy = createLucideIcon("life-buoy", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m4.93 4.93 4.24 4.24",
		key: "1ymg45"
	}],
	["path", {
		d: "m14.83 9.17 4.24-4.24",
		key: "1cb5xl"
	}],
	["path", {
		d: "m14.83 14.83 4.24 4.24",
		key: "q42g0n"
	}],
	["path", {
		d: "m9.17 14.83-4.24 4.24",
		key: "bqpfvv"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LockKeyhole = createLucideIcon("lock-keyhole", [
	["circle", {
		cx: "12",
		cy: "16",
		r: "1",
		key: "1au0dj"
	}],
	["rect", {
		x: "3",
		y: "10",
		width: "18",
		height: "12",
		rx: "2",
		key: "6s8ecr"
	}],
	["path", {
		d: "M7 10V7a5 5 0 0 1 10 0v3",
		key: "1pqi11"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lock = createLucideIcon("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Moon = createLucideIcon("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PanelsTopLeft = createLucideIcon("panels-top-left", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M9 21V9",
		key: "1oto5p"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Server = createLucideIcon("server", [
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "2",
		rx: "2",
		ry: "2",
		key: "ngkwjq"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		ry: "2",
		key: "iecqi9"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "6",
		y2: "6",
		key: "16zg32"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "18",
		y2: "18",
		key: "nzw8ys"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Shield = createLucideIcon("shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sun = createLucideIcon("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Tags = createLucideIcon("tags", [
	["path", {
		d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",
		key: "16rjxf"
	}],
	["path", {
		d: "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",
		key: "178nd4"
	}],
	["circle", {
		cx: "10.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor",
		key: "12ikhr"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Target = createLucideIcon("target", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Terminal = createLucideIcon("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var User = createLucideIcon("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]);
//#endregion
//#region src/routes/pageLoaders.ts
var CONSTRAINED_CONNECTION_TYPES = new Set(["slow-2g", "2g"]);
function cacheLoader(loader) {
	let pending = null;
	let resolved = null;
	const cachedLoader = () => {
		if (resolved) return Promise.resolve(resolved);
		if (!pending) pending = loader().then((module) => {
			resolved = module;
			return module;
		});
		return pending;
	};
	cachedLoader.getResolved = () => resolved;
	return cachedLoader;
}
function canPrefetchRoute() {
	if (typeof navigator === "undefined") return false;
	const connection = navigator.connection;
	if (!connection) return true;
	if (connection.saveData) return false;
	return !CONSTRAINED_CONNECTION_TYPES.has(connection.effectiveType ?? "");
}
cacheLoader(() => Promise.resolve().then(() => Layout_exports));
var loadHome = cacheLoader(() => Promise.resolve().then(() => Home_exports));
var loadProjects = cacheLoader(() => Promise.resolve().then(() => Projects_exports));
var loadProjectDetails = cacheLoader(() => Promise.resolve().then(() => ProjectDetails_exports));
var loadCompletedProjects = cacheLoader(() => Promise.resolve().then(() => CompletedProjects_exports));
var loadCompletedProjectDetails = cacheLoader(() => Promise.resolve().then(() => CompletedProjectDetails_exports));
var loadSecureFrontend = cacheLoader(() => Promise.resolve().then(() => SecureFrontend_exports));
var loadHardenedBackend = cacheLoader(() => Promise.resolve().then(() => HardenedBackend_exports));
var loadDataProtection = cacheLoader(() => Promise.resolve().then(() => DataProtection_exports));
var loadHighPerformance = cacheLoader(() => Promise.resolve().then(() => HighPerformance_exports));
var loadServices = cacheLoader(() => Promise.resolve().then(() => Services_exports));
var loadServiceLandingPage = cacheLoader(() => Promise.resolve().then(() => ServiceLandingPage_exports));
var loadArticles = cacheLoader(() => Promise.resolve().then(() => Articles_exports));
var loadArticlePage = cacheLoader(() => Promise.resolve().then(() => ArticlePage_exports));
var loadSecurity = cacheLoader(() => Promise.resolve().then(() => Security_exports));
var loadEngineering = cacheLoader(() => Promise.resolve().then(() => Engineering_exports));
var loadStatus = cacheLoader(() => Promise.resolve().then(() => Status_exports));
var loadChangelog = cacheLoader(() => Promise.resolve().then(() => Changelog_exports));
var loadTerms = cacheLoader(() => Promise.resolve().then(() => Terms_exports));
var loadPrivacy = cacheLoader(() => Promise.resolve().then(() => Privacy_exports));
var loadCookies = cacheLoader(() => Promise.resolve().then(() => Cookies_exports));
var loadContact = cacheLoader(() => Promise.resolve().then(() => Contact_exports));
var loadNotFound = cacheLoader(() => import("./assets/NotFound-6_2-_4MJ.js").then((n) => n.n));
cacheLoader(() => import("./assets/AdminLayout-BJbG05wc.js"));
cacheLoader(() => import("./assets/AdminDashboard-BuvufPq5.js"));
cacheLoader(() => import("./assets/ProjectEditor-8KqCFibY.js"));
var prefetchers = {
	home: loadHome,
	projects: loadProjects,
	projectDetails: loadProjectDetails,
	completedProjects: loadCompletedProjects,
	completedProjectDetails: loadCompletedProjectDetails,
	services: loadServices,
	serviceLandingPage: loadServiceLandingPage,
	articles: loadArticles,
	articlePage: loadArticlePage,
	security: loadSecurity,
	engineering: loadEngineering,
	status: loadStatus,
	changelog: loadChangelog,
	secureFrontend: loadSecureFrontend,
	hardenedBackend: loadHardenedBackend,
	dataProtection: loadDataProtection,
	highPerformance: loadHighPerformance,
	terms: loadTerms,
	privacy: loadPrivacy,
	cookies: loadCookies,
	contact: loadContact,
	notFound: loadNotFound
};
function prefetchRoute(route) {
	if (!canPrefetchRoute()) return;
	prefetchers[route]();
}
function prefetchRoutes(routes) {
	for (const route of routes) prefetchRoute(route);
}
//#endregion
//#region src/components/Logo.tsx
function Logo({ className = "", dark = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `flex flex-col items-center justify-center leading-none ${className}`,
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "font-['Michroma'] font-bold text-[1.35rem] tracking-[0.35em] uppercase ml-3",
				style: {
					color: dark ? "#ffffff" : "var(--logo-text)",
					textShadow: dark ? "none" : "var(--logo-shadow)"
				},
				children: "Kernel"
			}),
			/* @__PURE__ */ jsx("span", {
				className: "font-['Michroma'] font-bold text-[2.75rem] tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-[#0047b3] via-[#0066cc] to-[#00aaff] uppercase mt-1",
				style: { textShadow: "0.5px 0.5px 0px rgba(0, 102, 204, 0.2)" },
				children: "Guard"
			}),
			/* @__PURE__ */ jsx("div", { className: "h-[2px] w-[98%] bg-gradient-to-r from-transparent via-[#0066cc] to-transparent mt-2 opacity-80" })
		]
	});
}
//#endregion
//#region src/components/ThemeToggle.tsx
function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return /* @__PURE__ */ jsx("button", {
		onClick: toggleTheme,
		className: "relative inline-flex items-center justify-center w-10 h-10 overflow-hidden border border-border bg-background text-foreground hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
		"aria-label": "Toggle theme",
		title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex items-center justify-center w-full h-full",
			children: [/* @__PURE__ */ jsx(Sun, { className: `absolute w-5 h-5 transition-all duration-500 ease-in-out ${theme === "dark" ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}` }), /* @__PURE__ */ jsx(Moon, { className: `absolute w-5 h-5 transition-all duration-500 ease-in-out ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}` })]
		})
	});
}
//#endregion
//#region src/components/Navbar.tsx
var LANGUAGE_NAMES = {
	tr: "Turkish",
	en: "English",
	de: "German",
	ja: "Japanese",
	"zh-CN": "Chinese",
	es: "Spanish",
	fr: "French",
	ko: "Korean"
};
function LanguageSwitcher({ language, onChange, compact = false }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const containerRef = useRef(null);
	useEffect(() => {
		if (!isExpanded) return;
		const handlePointerDown = (event) => {
			if (!containerRef.current?.contains(event.target)) setIsExpanded(false);
		};
		const handleKeyDown = (event) => {
			if (event.key === "Escape") setIsExpanded(false);
		};
		document.addEventListener("pointerdown", handlePointerDown);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isExpanded]);
	const selectLanguage = (nextLanguage) => {
		setIsExpanded(false);
		if (nextLanguage !== language) onChange(nextLanguage);
	};
	return /* @__PURE__ */ jsxs("div", {
		ref: containerRef,
		className: "relative",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: () => setIsExpanded((value) => !value),
			"aria-haspopup": "listbox",
			"aria-expanded": isExpanded,
			"aria-label": "Select language",
			className: `inline-flex h-10 items-center justify-center gap-2 border border-border bg-background text-foreground transition-colors hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50 ${compact ? "w-20 px-2" : "min-w-[104px] px-3"}`,
			children: [
				/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 shrink-0" }),
				/* @__PURE__ */ jsx("span", {
					className: "font-mono text-sm font-medium uppercase leading-none",
					children: LANGUAGE_LABELS[language]
				}),
				/* @__PURE__ */ jsx(ChevronDown, { className: `h-4 w-4 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}` })
			]
		}), isExpanded && /* @__PURE__ */ jsx("div", {
			role: "listbox",
			"aria-label": "Languages",
			className: `absolute right-0 top-12 z-50 w-44 overflow-hidden border border-border bg-background shadow-xl shadow-black/10 ring-1 ring-black/5 dark:shadow-black/30 ${compact ? "right-0" : ""}`,
			children: SUPPORTED_LANGUAGES.map((lang) => {
				const isSelected = lang === language;
				return /* @__PURE__ */ jsxs("button", {
					type: "button",
					role: "option",
					"aria-selected": isSelected,
					onClick: () => selectLanguage(lang),
					className: `flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition-colors ${isSelected ? "kg-action-primary" : "bg-background text-foreground hover:bg-surface"}`,
					children: [/* @__PURE__ */ jsxs("span", {
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: "w-8 shrink-0 font-mono text-sm font-semibold uppercase",
							children: LANGUAGE_LABELS[lang]
						}), /* @__PURE__ */ jsx("span", {
							className: "truncate text-sm",
							children: LANGUAGE_NAMES[lang]
						})]
					}), isSelected && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 shrink-0" })]
				}, lang);
			})
		})]
	});
}
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = (0, import_dist.useLocation)();
	const navigate = (0, import_dist.useNavigate)();
	const { language, t } = useLanguage();
	const normalizeNavPath = (path) => {
		if (path === "/") return "/";
		return path.endsWith("/") ? path.slice(0, -1) : path;
	};
	const navLinks = [
		{
			name: t.nav.home,
			path: "/",
			prefetch: ["home"]
		},
		{
			name: t.nav.services,
			path: "/services/",
			prefetch: [
				"services",
				"secureFrontend",
				"hardenedBackend",
				"dataProtection",
				"highPerformance"
			]
		},
		{
			name: t.nav.openSource,
			path: "/projects/",
			prefetch: ["projects", "projectDetails"]
		},
		{
			name: t.nav.completedProjects,
			path: "/completed-projects/",
			prefetch: ["completedProjects", "completedProjectDetails"]
		},
		{
			name: t.nav.contact,
			path: "/contact/",
			prefetch: ["contact"]
		}
	].map((link) => ({
		...link,
		path: localizePath(link.path, language)
	}));
	const isActive = (path) => normalizeNavPath(location.pathname) === normalizeNavPath(path);
	const handleLanguageChange = (nextLanguage) => {
		setStoredLanguagePreference(nextLanguage);
		navigate(localizePath(location.pathname, nextLanguage));
	};
	const handleLinkIntent = (routes) => {
		prefetchRoutes(routes);
	};
	return /* @__PURE__ */ jsxs("nav", {
		className: "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50",
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between h-16",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex items-center",
						children: /* @__PURE__ */ jsx(import_dist.Link, {
							to: localizePath("/", language),
							className: "flex items-center group hover:opacity-90 transition-opacity",
							children: /* @__PURE__ */ jsx(Logo, { className: "scale-[0.55] origin-left" })
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:block",
						children: /* @__PURE__ */ jsxs("div", {
							className: "ml-10 flex items-center h-full",
							children: [
								navLinks.map((link) => /* @__PURE__ */ jsx(import_dist.Link, {
									to: link.path,
									onPointerEnter: () => handleLinkIntent(link.prefetch),
									onFocus: () => handleLinkIntent(link.prefetch),
									className: `px-4 h-14 flex items-center text-sm transition-colors border-b-2 ${isActive(link.path) ? "border-primary text-primary font-medium" : "border-transparent text-foreground hover:bg-surface"}`,
									children: link.name
								}, link.name)),
								/* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border mx-4" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://github.com/Kernel-Guard",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-foreground hover:text-primary transition-colors px-3 py-2 text-sm",
									children: t.nav.github
								}),
								/* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border mx-2" }),
								/* @__PURE__ */ jsx(LanguageSwitcher, {
									language,
									onChange: handleLanguageChange
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "ml-2 flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(ThemeToggle, {}), /* @__PURE__ */ jsx(import_dist.Link, {
										to: "/admin",
										className: "inline-flex items-center justify-center w-10 h-10 border border-border bg-background text-foreground hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
										title: "Admin Login",
										children: /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5" })
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:hidden flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsx(ThemeToggle, {}),
							/* @__PURE__ */ jsx(import_dist.Link, {
								to: "/admin",
								className: "inline-flex items-center justify-center w-10 h-10 border border-border bg-background text-foreground hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
								title: "Admin Login",
								children: /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ jsx(LanguageSwitcher, {
								language,
								onChange: handleLanguageChange,
								compact: true
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => setIsOpen(!isOpen),
								"aria-label": isOpen ? "Close navigation menu" : "Open navigation menu",
								"aria-expanded": isOpen,
								"aria-controls": "mobile-navigation",
								className: "inline-flex items-center justify-center p-2 text-foreground hover:bg-surface focus:outline-none",
								children: isOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
							})
						]
					})
				]
			})
		}), isOpen && /* @__PURE__ */ jsx("div", {
			id: "mobile-navigation",
			className: "md:hidden bg-background border-b border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
				children: [navLinks.map((link) => /* @__PURE__ */ jsx(import_dist.Link, {
					to: link.path,
					onPointerEnter: () => handleLinkIntent(link.prefetch),
					onFocus: () => handleLinkIntent(link.prefetch),
					onClick: () => setIsOpen(false),
					className: `block px-3 py-3 text-base ${isActive(link.path) ? "text-primary bg-surface border-l-4 border-primary" : "text-foreground hover:bg-surface border-l-4 border-transparent"}`,
					children: link.name
				}, link.name)), /* @__PURE__ */ jsx("a", {
					href: "https://github.com/Kernel-Guard",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "block px-3 py-3 text-base text-foreground hover:bg-surface border-l-4 border-transparent",
					children: t.nav.github
				})]
			})
		})]
	});
}
//#endregion
//#region src/i18n/growthContent.ts
var shortMonths = {
	tr: [
		"Oca",
		"Şub",
		"Mar",
		"Nis",
		"May",
		"Haz",
		"Tem",
		"Ağu",
		"Eyl",
		"Eki",
		"Kas",
		"Ara"
	],
	en: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	de: [
		"Jan.",
		"Feb.",
		"März",
		"Apr.",
		"Mai",
		"Juni",
		"Juli",
		"Aug.",
		"Sep.",
		"Okt.",
		"Nov.",
		"Dez."
	],
	ja: [],
	"zh-CN": [],
	es: [
		"ene",
		"feb",
		"mar",
		"abr",
		"may",
		"jun",
		"jul",
		"ago",
		"sep",
		"oct",
		"nov",
		"dic"
	],
	fr: [
		"janv.",
		"févr.",
		"mars",
		"avr.",
		"mai",
		"juin",
		"juil.",
		"août",
		"sept.",
		"oct.",
		"nov.",
		"déc."
	],
	ko: []
};
var longMonths = {
	tr: [
		"Ocak",
		"Şubat",
		"Mart",
		"Nisan",
		"Mayıs",
		"Haziran",
		"Temmuz",
		"Ağustos",
		"Eylül",
		"Ekim",
		"Kasım",
		"Aralık"
	],
	en: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	de: [
		"Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember"
	],
	ja: [],
	"zh-CN": [],
	es: [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre"
	],
	fr: [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre"
	],
	ko: []
};
function formatLocalizedDate(date, language, variant = "long") {
	const [year, month, day] = date.split("-");
	const monthIndex = Number(month) - 1;
	const dayNumber = Number(day);
	const monthNumber = Number(month);
	if (language === "ja") return `${year}年${monthNumber}月${dayNumber}日`;
	if (language === "zh-CN") return `${year}年${monthNumber}月${dayNumber}日`;
	if (language === "ko") return `${year}. ${monthNumber}. ${dayNumber}.`;
	const monthName = (variant === "short" ? shortMonths[language] : longMonths[language])[monthIndex] ?? month;
	if (language === "en") return `${monthName} ${dayNumber}, ${year}`;
	if (language === "de") return `${dayNumber}. ${monthName} ${year}`;
	return `${dayNumber} ${monthName} ${year}`;
}
var articleIndexCopy = {
	tr: {
		seoTitle: "Güvenlik Mühendisliği Makaleleri | Kernel Guard",
		seoDescription: "Web güvenliği, Cloudflare güçlendirme, Google Workspace e-posta kimlik doğrulama, React abuse kontrolleri ve eBPF uyumluluğu üzerine pratik güvenlik mühendisliği notları.",
		seoKeywords: "güvenlik mühendisliği makaleleri, web güvenliği, Cloudflare güçlendirme, React güvenliği, DMARC kurulumu, eBPF uyumluluğu",
		badge: "Saha Notları",
		title: "Production web ekipleri için güvenlik mühendisliği makaleleri.",
		description: "Kernel Guard’ın teslim ettiği işle aynı çizgide, uygulama odaklı yazılar: güvenli web uygulamaları, güçlendirilmiş altyapı, şirket seviyesinde e-posta güveni ve tekrarlanabilir kanıt.",
		minRead: "dk okuma",
		readArticle: "Makaleyi oku",
		relatedServices: "İlgili Hizmetler"
	},
	en: {
		seoTitle: "Security Engineering Articles | Kernel Guard",
		seoDescription: "Practical security engineering notes on web security, Cloudflare hardening, Google Workspace email authentication, React abuse controls, and eBPF compatibility.",
		seoKeywords: "security engineering articles, web security, Cloudflare hardening, React security, DMARC setup, eBPF compatibility",
		badge: "Field Notes",
		title: "Security engineering articles for production web teams.",
		description: "Practical, implementation-focused writing that supports the same work Kernel Guard ships: secure web apps, hardened infrastructure, company-grade email trust, and repeatable evidence.",
		minRead: "min read",
		readArticle: "Read article",
		relatedServices: "Related Services"
	},
	de: {
		seoTitle: "Security-Engineering-Artikel | Kernel Guard",
		seoDescription: "Praxisnahe Security-Engineering-Notizen zu Websicherheit, Cloudflare-Hardening, Google-Workspace-E-Mail-Authentifizierung, React-Abuse-Controls und eBPF-Kompatibilität.",
		seoKeywords: "Security Engineering Artikel, Websicherheit, Cloudflare Hardening, React Sicherheit, DMARC Setup, eBPF Kompatibilität",
		badge: "Praxisnotizen",
		title: "Security-Engineering-Artikel für produktive Webteams.",
		description: "Umsetzungsorientierte Texte zu derselben Arbeit, die Kernel Guard liefert: sichere Webapps, gehärtete Infrastruktur, E-Mail-Vertrauen auf Unternehmensniveau und wiederholbare Evidence.",
		minRead: "Min. Lesezeit",
		readArticle: "Artikel lesen",
		relatedServices: "Verwandte Leistungen"
	},
	ja: {
		seoTitle: "セキュリティエンジニアリング記事 | Kernel Guard",
		seoDescription: "Web セキュリティ、Cloudflare 強化、Google Workspace メール認証、React の悪用対策、eBPF 互換性に関する実践的なセキュリティエンジニアリングノート。",
		seoKeywords: "セキュリティエンジニアリング記事, Web セキュリティ, Cloudflare 強化, React セキュリティ, DMARC 設定, eBPF 互換性",
		badge: "フィールドノート",
		title: "本番 Web チームのためのセキュリティエンジニアリング記事。",
		description: "Kernel Guard が実際に提供する仕事と直結した実装重視の記事です。安全な Web アプリ、強化されたインフラ、企業レベルのメール信頼性、再現可能な evidence を扱います。",
		minRead: "分で読めます",
		readArticle: "記事を読む",
		relatedServices: "関連サービス"
	},
	"zh-CN": {
		seoTitle: "安全工程文章 | Kernel Guard",
		seoDescription: "关于 Web 安全、Cloudflare 加固、Google Workspace 邮件认证、React 滥用控制和 eBPF 兼容性的实用安全工程笔记。",
		seoKeywords: "安全工程文章, Web 安全, Cloudflare 加固, React 安全, DMARC 配置, eBPF 兼容性",
		badge: "实战笔记",
		title: "面向生产 Web 团队的安全工程文章。",
		description: "以实现为中心的实用内容，支撑 Kernel Guard 交付的同类工作：安全 Web 应用、加固基础设施、公司级邮件信任和可重复证据。",
		minRead: "分钟阅读",
		readArticle: "阅读文章",
		relatedServices: "相关服务"
	},
	es: {
		seoTitle: "Artículos de ingeniería de seguridad | Kernel Guard",
		seoDescription: "Notas prácticas de ingeniería de seguridad sobre seguridad web, hardening de Cloudflare, autenticación de correo en Google Workspace, controles antiabuso en React y compatibilidad eBPF.",
		seoKeywords: "artículos de ingeniería de seguridad, seguridad web, hardening Cloudflare, seguridad React, configuración DMARC, compatibilidad eBPF",
		badge: "Notas de campo",
		title: "Artículos de ingeniería de seguridad para equipos web en producción.",
		description: "Contenido práctico y centrado en implementación que apoya el mismo trabajo que entrega Kernel Guard: apps web seguras, infraestructura endurecida, confianza de correo de nivel empresa y evidencia repetible.",
		minRead: "min de lectura",
		readArticle: "Leer artículo",
		relatedServices: "Servicios relacionados"
	},
	fr: {
		seoTitle: "Articles d’ingénierie sécurité | Kernel Guard",
		seoDescription: "Notes pratiques d’ingénierie sécurité sur la sécurité web, le durcissement Cloudflare, l’authentification e-mail Google Workspace, les contrôles anti-abus React et la compatibilité eBPF.",
		seoKeywords: "articles ingénierie sécurité, sécurité web, durcissement Cloudflare, sécurité React, configuration DMARC, compatibilité eBPF",
		badge: "Notes de terrain",
		title: "Articles d’ingénierie sécurité pour équipes web en production.",
		description: "Des contenus pratiques orientés implémentation, alignés avec le travail livré par Kernel Guard : applications web sécurisées, infrastructure durcie, confiance e-mail de niveau entreprise et preuves répétables.",
		minRead: "min de lecture",
		readArticle: "Lire l’article",
		relatedServices: "Services liés"
	},
	ko: {
		seoTitle: "보안 엔지니어링 아티클 | Kernel Guard",
		seoDescription: "웹 보안, Cloudflare 하드닝, Google Workspace 이메일 인증, React 남용 제어, eBPF 호환성에 대한 실용적인 보안 엔지니어링 노트입니다.",
		seoKeywords: "보안 엔지니어링 아티클, 웹 보안, Cloudflare 하드닝, React 보안, DMARC 설정, eBPF 호환성",
		badge: "현장 노트",
		title: "프로덕션 웹 팀을 위한 보안 엔지니어링 아티클.",
		description: "Kernel Guard가 제공하는 실제 작업과 맞닿아 있는 구현 중심 글입니다. 안전한 웹 앱, 하드닝된 인프라, 회사급 이메일 신뢰, 반복 가능한 evidence를 다룹니다.",
		minRead: "분 읽기",
		readArticle: "아티클 읽기",
		relatedServices: "관련 서비스"
	}
};
var articleDetailCopy = {
	tr: {
		articles: "Makaleler",
		updated: "Güncellendi",
		minRead: "dk okuma",
		keyPoints: "Öne Çıkanlar",
		references: "Kaynaklar",
		tags: "Etiketler",
		services: "Hizmetler"
	},
	en: {
		articles: "Articles",
		updated: "Updated",
		minRead: "min read",
		keyPoints: "Key Points",
		references: "References",
		tags: "Tags",
		services: "Services"
	},
	de: {
		articles: "Artikel",
		updated: "Aktualisiert",
		minRead: "Min. Lesezeit",
		keyPoints: "Kernpunkte",
		references: "Referenzen",
		tags: "Tags",
		services: "Leistungen"
	},
	ja: {
		articles: "記事",
		updated: "更新日",
		minRead: "分で読めます",
		keyPoints: "要点",
		references: "参考資料",
		tags: "タグ",
		services: "サービス"
	},
	"zh-CN": {
		articles: "文章",
		updated: "更新于",
		minRead: "分钟阅读",
		keyPoints: "要点",
		references: "参考资料",
		tags: "标签",
		services: "服务"
	},
	es: {
		articles: "Artículos",
		updated: "Actualizado",
		minRead: "min de lectura",
		keyPoints: "Puntos clave",
		references: "Referencias",
		tags: "Etiquetas",
		services: "Servicios"
	},
	fr: {
		articles: "Articles",
		updated: "Mis à jour",
		minRead: "min de lecture",
		keyPoints: "Points clés",
		references: "Références",
		tags: "Tags",
		services: "Services"
	},
	ko: {
		articles: "아티클",
		updated: "업데이트",
		minRead: "분 읽기",
		keyPoints: "핵심 포인트",
		references: "참고 자료",
		tags: "태그",
		services: "서비스"
	}
};
var serviceLandingCopy = {
	tr: {
		badge: "Şirket Seviyesinde Güvenlik",
		bestFit: "En Uygun Kullanım",
		discussService: "Bu hizmeti konuşalım",
		outcomes: "Sonuçlar",
		outcomesDescription: "Çalışma; gönderilebilir, doğrulanabilir ve açıklanabilir pratik iyileştirmeler etrafında kapsamlandırılır.",
		deliverables: "Teslimatlar",
		deliverablesDescription: "Çalışma tamamlandıktan sonra ekibinizin kullanabileceği somut çıktılar üretir.",
		process: "Süreç",
		processDescription: "Az sayıda odaklı aşama, çalışmayı anlaşılır ve ölçülebilir tutar.",
		evidence: "Kanıt",
		evidenceDescription: "En güçlü güven sinyalleri spesifik, doğrulanabilir ve uygulamaya yakın olanlardır.",
		relatedReading: "İlgili Okuma",
		relatedReadingDescription: "Bu çalışmanın arkasındaki mühendislik kararlarını açıklayan destekleyici notlar.",
		minRead: "dk okuma",
		ctaTitle: "Bu seviyede güçlendirmeye mi ihtiyacınız var?",
		ctaDescription: "Mevcut siteyi, repoyu veya launch bağlamını gönderin; Kernel Guard en net sonraki adımla yanıt verir.",
		emailSales: "Sales ekibine yaz"
	},
	en: {
		badge: "Company-Grade Security",
		bestFit: "Best Fit",
		discussService: "Discuss this service",
		outcomes: "Outcomes",
		outcomesDescription: "The work is scoped around practical improvements that can be shipped, verified, and explained.",
		deliverables: "Deliverables",
		deliverablesDescription: "The engagement produces artifacts your team can use after the work is complete.",
		process: "Process",
		processDescription: "A small number of focused stages keeps the work understandable and measurable.",
		evidence: "Evidence",
		evidenceDescription: "The strongest trust signals are specific, verifiable, and close to the implementation.",
		relatedReading: "Related Reading",
		relatedReadingDescription: "Supporting notes that explain the engineering decisions behind this work.",
		minRead: "min read",
		ctaTitle: "Need this level of hardening?",
		ctaDescription: "Send the current site, repository, or launch context and Kernel Guard will respond with the cleanest next step.",
		emailSales: "Email sales"
	},
	de: {
		badge: "Security auf Unternehmensniveau",
		bestFit: "Am besten geeignet",
		discussService: "Leistung besprechen",
		outcomes: "Ergebnisse",
		outcomesDescription: "Die Arbeit wird um praktische Verbesserungen herum geschnitten, die ausgeliefert, verifiziert und erklärt werden können.",
		deliverables: "Liefergegenstände",
		deliverablesDescription: "Das Engagement erzeugt Artefakte, die Ihr Team nach Abschluss weiter nutzen kann.",
		process: "Prozess",
		processDescription: "Wenige fokussierte Phasen halten die Arbeit verständlich und messbar.",
		evidence: "Evidence",
		evidenceDescription: "Die stärksten Vertrauenssignale sind konkret, überprüfbar und nah an der Implementierung.",
		relatedReading: "Weiterführende Artikel",
		relatedReadingDescription: "Begleitende Notizen, die die Engineering-Entscheidungen hinter dieser Arbeit erklären.",
		minRead: "Min. Lesezeit",
		ctaTitle: "Brauchen Sie dieses Hardening-Niveau?",
		ctaDescription: "Senden Sie aktuelle Website, Repository oder Launch-Kontext; Kernel Guard antwortet mit dem klarsten nächsten Schritt.",
		emailSales: "Sales kontaktieren"
	},
	ja: {
		badge: "企業レベルのセキュリティ",
		bestFit: "適したケース",
		discussService: "このサービスを相談する",
		outcomes: "成果",
		outcomesDescription: "出荷でき、検証でき、説明できる実務的な改善を中心にスコープを定義します。",
		deliverables: "納品物",
		deliverablesDescription: "作業完了後もチームが使える artifact を提供します。",
		process: "プロセス",
		processDescription: "少数の集中したステージで、作業を理解しやすく測定可能に保ちます。",
		evidence: "Evidence",
		evidenceDescription: "最も強い信頼シグナルは、具体的で検証可能で実装に近いものです。",
		relatedReading: "関連する記事",
		relatedReadingDescription: "この作業の背後にある engineering decision を説明する補足ノートです。",
		minRead: "分で読めます",
		ctaTitle: "このレベルの強化が必要ですか？",
		ctaDescription: "現在のサイト、リポジトリ、または launch context を送ってください。Kernel Guard が最も明確な次の一手を返します。",
		emailSales: "sales にメールする"
	},
	"zh-CN": {
		badge: "公司级安全",
		bestFit: "最适合",
		discussService: "讨论此服务",
		outcomes: "结果",
		outcomesDescription: "工作范围围绕可以交付、验证和解释的实际改进展开。",
		deliverables: "交付物",
		deliverablesDescription: "项目会产出团队在工作完成后仍可使用的材料。",
		process: "流程",
		processDescription: "少量聚焦阶段让工作保持可理解、可衡量。",
		evidence: "证据",
		evidenceDescription: "最强的信任信号是具体、可验证且贴近实现的内容。",
		relatedReading: "相关阅读",
		relatedReadingDescription: "解释此项工作背后工程决策的支持性笔记。",
		minRead: "分钟阅读",
		ctaTitle: "需要这种级别的加固吗？",
		ctaDescription: "发送当前站点、代码库或上线背景，Kernel Guard 会给出最清晰的下一步。",
		emailSales: "联系销售"
	},
	es: {
		badge: "Seguridad de nivel empresa",
		bestFit: "Mejor encaje",
		discussService: "Hablar de este servicio",
		outcomes: "Resultados",
		outcomesDescription: "El trabajo se acota alrededor de mejoras prácticas que pueden enviarse, verificarse y explicarse.",
		deliverables: "Entregables",
		deliverablesDescription: "El engagement produce artefactos que su equipo puede usar después de completar el trabajo.",
		process: "Proceso",
		processDescription: "Un número reducido de etapas enfocadas mantiene el trabajo comprensible y medible.",
		evidence: "Evidencia",
		evidenceDescription: "Las señales de confianza más fuertes son específicas, verificables y cercanas a la implementación.",
		relatedReading: "Lecturas relacionadas",
		relatedReadingDescription: "Notas de apoyo que explican las decisiones de ingeniería detrás de este trabajo.",
		minRead: "min de lectura",
		ctaTitle: "¿Necesita este nivel de hardening?",
		ctaDescription: "Envíe el sitio actual, repositorio o contexto de lanzamiento y Kernel Guard responderá con el siguiente paso más claro.",
		emailSales: "Escribir a ventas"
	},
	fr: {
		badge: "Sécurité de niveau entreprise",
		bestFit: "Cas idéal",
		discussService: "Discuter de ce service",
		outcomes: "Résultats",
		outcomesDescription: "Le travail est cadré autour d’améliorations pratiques pouvant être livrées, vérifiées et expliquées.",
		deliverables: "Livrables",
		deliverablesDescription: "La mission produit des artefacts que votre équipe peut utiliser après la fin du travail.",
		process: "Processus",
		processDescription: "Un petit nombre d’étapes ciblées garde le travail compréhensible et mesurable.",
		evidence: "Preuves",
		evidenceDescription: "Les signaux de confiance les plus forts sont précis, vérifiables et proches de l’implémentation.",
		relatedReading: "Lectures liées",
		relatedReadingDescription: "Notes complémentaires expliquant les décisions d’ingénierie derrière ce travail.",
		minRead: "min de lecture",
		ctaTitle: "Besoin de ce niveau de durcissement ?",
		ctaDescription: "Envoyez le site actuel, le dépôt ou le contexte de lancement et Kernel Guard répondra avec l’étape suivante la plus claire.",
		emailSales: "Écrire à sales"
	},
	ko: {
		badge: "회사급 보안",
		bestFit: "적합한 경우",
		discussService: "이 서비스 논의하기",
		outcomes: "결과",
		outcomesDescription: "작업은 배포, 검증, 설명이 가능한 실질적 개선을 중심으로 범위를 정합니다.",
		deliverables: "산출물",
		deliverablesDescription: "작업 완료 후에도 팀이 사용할 수 있는 artifact를 제공합니다.",
		process: "프로세스",
		processDescription: "소수의 집중 단계로 작업을 이해 가능하고 측정 가능하게 유지합니다.",
		evidence: "Evidence",
		evidenceDescription: "가장 강한 신뢰 신호는 구체적이고 검증 가능하며 구현에 가까운 것입니다.",
		relatedReading: "관련 글",
		relatedReadingDescription: "이 작업 뒤의 engineering decision을 설명하는 보조 노트입니다.",
		minRead: "분 읽기",
		ctaTitle: "이 수준의 하드닝이 필요하신가요?",
		ctaDescription: "현재 사이트, 저장소 또는 launch context를 보내면 Kernel Guard가 가장 명확한 다음 단계를 답변합니다.",
		emailSales: "sales에 이메일"
	}
};
var homeGrowthCopy = {
	tr: {
		badge: "Büyüme İçeriği",
		title: "Gerçek hizmetlerle bağlantılı pratik güvenlik içeriği.",
		description: "Makaleler arama sorularını yanıtlar. Hizmet sayfaları bu ilgiyi uygulama desteğine ihtiyaç duyan ekipler için net sonraki adımlara dönüştürür.",
		minRead: "dk okuma",
		readArticle: "Makaleyi oku",
		viewAllArticles: "Tüm makaleleri gör"
	},
	en: {
		badge: "Growth Content",
		title: "Practical security content tied to real services.",
		description: "Articles answer search questions. Service pages turn that attention into clear next steps for teams that need implementation help.",
		minRead: "min read",
		readArticle: "Read article",
		viewAllArticles: "View all articles"
	},
	de: {
		badge: "Growth Content",
		title: "Praktische Security-Inhalte, verbunden mit echten Leistungen.",
		description: "Artikel beantworten Suchfragen. Leistungsseiten verwandeln diese Aufmerksamkeit in klare nächste Schritte für Teams, die Umsetzungshilfe brauchen.",
		minRead: "Min. Lesezeit",
		readArticle: "Artikel lesen",
		viewAllArticles: "Alle Artikel ansehen"
	},
	ja: {
		badge: "成長コンテンツ",
		title: "実際のサービスにつながる実践的なセキュリティコンテンツ。",
		description: "記事は検索上の問いに答え、サービスページはその関心を実装支援が必要なチームの明確な次の一手へつなげます。",
		minRead: "分で読めます",
		readArticle: "記事を読む",
		viewAllArticles: "すべての記事を見る"
	},
	"zh-CN": {
		badge: "增长内容",
		title: "与真实服务相连接的实用安全内容。",
		description: "文章回答搜索问题。服务页面把这种关注转化为面向需要实现支持团队的清晰下一步。",
		minRead: "分钟阅读",
		readArticle: "阅读文章",
		viewAllArticles: "查看所有文章"
	},
	es: {
		badge: "Contenido de crecimiento",
		title: "Contenido práctico de seguridad conectado con servicios reales.",
		description: "Los artículos responden preguntas de búsqueda. Las páginas de servicio convierten esa atención en próximos pasos claros para equipos que necesitan ayuda de implementación.",
		minRead: "min de lectura",
		readArticle: "Leer artículo",
		viewAllArticles: "Ver todos los artículos"
	},
	fr: {
		badge: "Contenu de croissance",
		title: "Contenu sécurité pratique relié à de vrais services.",
		description: "Les articles répondent aux questions de recherche. Les pages service transforment cette attention en étapes claires pour les équipes qui ont besoin d’aide à l’implémentation.",
		minRead: "min de lecture",
		readArticle: "Lire l’article",
		viewAllArticles: "Voir tous les articles"
	},
	ko: {
		badge: "성장 콘텐츠",
		title: "실제 서비스와 연결된 실용적인 보안 콘텐츠.",
		description: "아티클은 검색 질문에 답합니다. 서비스 페이지는 그 관심을 구현 도움이 필요한 팀의 명확한 다음 단계로 전환합니다.",
		minRead: "분 읽기",
		readArticle: "아티클 읽기",
		viewAllArticles: "모든 아티클 보기"
	}
};
var servicesGrowthCopy = {
	tr: {
		badge: "Arama Odaklı Hizmetler",
		title: "Güvenlik bilinci yüksek ekipler için odaklı çalışmalar.",
		description: "Bu sayfalar yaygın satın alma niyetini somut sonuçlar, teslimatlar ve kanıt noktalarıyla eşler.",
		viewService: "Hizmeti gör"
	},
	en: {
		badge: "Search-Focused Services",
		title: "Focused engagements for security-minded teams.",
		description: "These pages map common buying intent to concrete outcomes, deliverables, and proof points.",
		viewService: "View service"
	},
	de: {
		badge: "Suchorientierte Leistungen",
		title: "Fokussierte Engagements für security-bewusste Teams.",
		description: "Diese Seiten verbinden typische Kaufabsicht mit konkreten Ergebnissen, Liefergegenständen und Proof Points.",
		viewService: "Leistung ansehen"
	},
	ja: {
		badge: "検索意図に合わせたサービス",
		title: "セキュリティ意識の高いチーム向けの集中支援。",
		description: "これらのページは一般的な購入意図を、具体的な成果、納品物、proof point に結び付けます。",
		viewService: "サービスを見る"
	},
	"zh-CN": {
		badge: "搜索意图服务",
		title: "面向安全意识团队的聚焦项目。",
		description: "这些页面把常见购买意图映射到具体结果、交付物和证据点。",
		viewService: "查看服务"
	},
	es: {
		badge: "Servicios orientados a búsqueda",
		title: "Engagements enfocados para equipos con mentalidad de seguridad.",
		description: "Estas páginas conectan intención de compra común con resultados, entregables y puntos de prueba concretos.",
		viewService: "Ver servicio"
	},
	fr: {
		badge: "Services orientés recherche",
		title: "Missions ciblées pour équipes attentives à la sécurité.",
		description: "Ces pages relient les intentions d’achat courantes à des résultats, livrables et preuves concrets.",
		viewService: "Voir le service"
	},
	ko: {
		badge: "검색 중심 서비스",
		title: "보안 의식이 높은 팀을 위한 집중형 작업.",
		description: "이 페이지들은 일반적인 구매 의도를 구체적인 결과, 산출물, proof point와 연결합니다.",
		viewService: "서비스 보기"
	}
};
var footerGrowthCopy = {
	tr: { articles: "Makaleler" },
	en: { articles: "Articles" },
	de: { articles: "Artikel" },
	ja: { articles: "記事" },
	"zh-CN": { articles: "文章" },
	es: { articles: "Artículos" },
	fr: { articles: "Articles" },
	ko: { articles: "아티클" }
};
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	const { language, t } = useLanguage();
	const enterpriseLinks = [
		"security",
		"engineering",
		"status",
		"changelog"
	];
	const growthCopy = footerGrowthCopy[language];
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-[var(--color-dark-bg)] text-[var(--color-dark-fg)] mt-auto",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-4 gap-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-2 space-y-6",
						children: [/* @__PURE__ */ jsx(import_dist.Link, {
							to: localizePath("/", language),
							className: "inline-block group hover:opacity-90 transition-opacity",
							children: /* @__PURE__ */ jsx(Logo, {
								dark: true,
								className: "scale-[0.65] origin-left"
							})
						}), /* @__PURE__ */ jsx("p", {
							className: "text-gray-400 text-sm max-w-md leading-relaxed mt-4",
							children: t.footer.desc
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-semibold text-white mb-6 text-sm tracking-wide uppercase",
						children: t.footer.discover
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(import_dist.Link, {
								to: localizePath("/", language),
								className: "text-gray-400 hover:text-white transition-colors text-sm",
								children: t.nav.home
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(import_dist.Link, {
								to: localizePath("/projects/", language),
								onPointerEnter: () => prefetchRoutes(["projects", "projectDetails"]),
								onFocus: () => prefetchRoutes(["projects", "projectDetails"]),
								className: "text-gray-400 hover:text-white transition-colors text-sm",
								children: t.nav.openSource
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(import_dist.Link, {
								to: localizePath("/completed-projects/", language),
								onPointerEnter: () => prefetchRoutes(["completedProjects", "completedProjectDetails"]),
								onFocus: () => prefetchRoutes(["completedProjects", "completedProjectDetails"]),
								className: "text-gray-400 hover:text-white transition-colors text-sm",
								children: t.nav.completedProjects
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(import_dist.Link, {
								to: localizePath("/articles/", language),
								onPointerEnter: () => prefetchRoute("articles"),
								onFocus: () => prefetchRoute("articles"),
								className: "text-gray-400 hover:text-white transition-colors text-sm",
								children: growthCopy.articles
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(import_dist.Link, {
								to: localizePath("/contact/", language),
								onPointerEnter: () => prefetchRoute("contact"),
								onFocus: () => prefetchRoute("contact"),
								className: "text-gray-400 hover:text-white transition-colors text-sm",
								children: t.nav.contact
							}) })
						]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-semibold text-white mb-6 text-sm tracking-wide uppercase",
						children: t.footer.connect
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: mailto(SITE_EMAILS.contact),
							className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }), SITE_EMAILS.contact]
						}) }), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: "https://github.com/Kernel-Guard",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Github, { className: "w-4 h-4" }), t.nav.github]
						}) })]
					})] }),
					/* @__PURE__ */ jsx("div", {
						className: "md:col-span-4 border-t border-gray-800 pt-8",
						children: /* @__PURE__ */ jsx("ul", {
							className: "flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400",
							children: enterpriseLinks.map((key) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(import_dist.Link, {
								to: localizePath(`/${key}/`, language),
								onPointerEnter: () => prefetchRoute(key),
								onFocus: () => prefetchRoute(key),
								className: "hover:text-white transition-colors",
								children: enterprisePages[language].links[key]
							}) }, key))
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-gray-400 text-sm",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						t.footer.rights
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex space-x-6 text-sm text-gray-400",
					children: [
						/* @__PURE__ */ jsx(import_dist.Link, {
							to: localizePath("/terms/", language),
							onPointerEnter: () => prefetchRoute("terms"),
							onFocus: () => prefetchRoute("terms"),
							className: "hover:text-gray-300 transition-colors",
							children: t.footer.terms
						}),
						/* @__PURE__ */ jsx(import_dist.Link, {
							to: localizePath("/privacy/", language),
							onPointerEnter: () => prefetchRoute("privacy"),
							onFocus: () => prefetchRoute("privacy"),
							className: "hover:text-gray-300 transition-colors",
							children: t.footer.privacy
						}),
						/* @__PURE__ */ jsx(import_dist.Link, {
							to: localizePath("/cookies/", language),
							onPointerEnter: () => prefetchRoute("cookies"),
							onFocus: () => prefetchRoute("cookies"),
							className: "hover:text-gray-300 transition-colors",
							children: t.footer.cookies
						}),
						/* @__PURE__ */ jsx("div", { className: "w-px h-4 bg-gray-800 self-center hidden sm:block" }),
						/* @__PURE__ */ jsxs(import_dist.Link, {
							to: "/admin",
							className: "hover:text-white transition-colors flex items-center gap-1.5",
							title: "Admin Login",
							children: [/* @__PURE__ */ jsx(Lock, { className: "w-3.5 h-3.5" }), "Admin"]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/Layout.tsx
var Layout_exports = /* @__PURE__ */ __exportAll({ default: () => Layout });
function Layout() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-grow pt-16",
				children: /* @__PURE__ */ jsx(import_dist.Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
//#region src/components/SecurityTerminal.tsx
var LOG_SEQUENCE = [
	{
		text: "kernel-guard@sys:~$ init_secure_server",
		type: "cmd",
		delay: 800
	},
	{
		text: "[INFO] Initializing zero-trust architecture...",
		type: "info",
		delay: 400
	},
	{
		text: "[INFO] Compiling React application...",
		type: "info",
		delay: 600
	},
	{
		text: "[WARN] Scanning for vulnerabilities...",
		type: "warn",
		delay: 1200
	},
	{
		text: "[OK] XSS Protection: ACTIVE",
		type: "success",
		delay: 200
	},
	{
		text: "[OK] CSRF Tokens: VERIFIED",
		type: "success",
		delay: 200
	},
	{
		text: "[OK] API Endpoints: ENCRYPTED (AES-256)",
		type: "success",
		delay: 200
	},
	{
		text: "[SUCCESS] Build completed securely in 2.4s.",
		type: "success",
		delay: 1e3
	},
	{
		text: "kernel-guard@sys:~$ monitor_traffic",
		type: "cmd",
		delay: 800
	},
	{
		text: "[INFO] Intercepting incoming requests...",
		type: "info",
		delay: 500
	},
	{
		text: "[ERROR] Blocked malicious payload (SQLi attempt)",
		type: "error",
		delay: 300
	},
	{
		text: "[INFO] Validating JWT signatures... OK",
		type: "success",
		delay: 400
	},
	{
		text: "[INFO] System secure. Awaiting input...",
		type: "info",
		delay: 3e3
	}
];
function getLogColor(type) {
	switch (type) {
		case "cmd": return "text-gray-200";
		case "info": return "text-[#78a9ff]";
		case "warn": return "text-[#f1c21b]";
		case "success": return "text-[#42be65]";
		case "error": return "text-[#ff8389]";
		default: return "text-gray-200";
	}
}
function SecurityTerminal() {
	const [visibleLines, setVisibleLines] = useState(0);
	useEffect(() => {
		let timeout;
		if (visibleLines === 0) timeout = setTimeout(() => setVisibleLines(1), 1e3);
		else if (visibleLines > LOG_SEQUENCE.length) timeout = setTimeout(() => setVisibleLines(0), 2e3);
		else {
			const currentLog = LOG_SEQUENCE[visibleLines - 1];
			timeout = setTimeout(() => {
				setVisibleLines((value) => value + 1);
			}, currentLog.delay);
		}
		return () => clearTimeout(timeout);
	}, [visibleLines]);
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full max-w-lg mx-auto rounded-lg overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-2xl shadow-primary/10",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "bg-[#1a1a1a] border-b border-gray-800 px-4 py-3 flex items-center gap-2",
				children: [
					/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500/80" }),
					/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500/80" }),
					/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500/80" }),
					/* @__PURE__ */ jsx("div", {
						className: "ml-4 text-xs font-mono text-gray-400",
						children: "kernel-guard@server:~"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "p-5 font-mono text-sm h-[320px] overflow-y-auto flex flex-col gap-2",
				children: [LOG_SEQUENCE.slice(0, visibleLines).map((log, index) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-2 animate-fade-in",
					children: [log.type === "cmd" && /* @__PURE__ */ jsx("span", {
						className: "text-[#78a9ff] shrink-0 mt-0.5",
						children: ">"
					}), /* @__PURE__ */ jsx("span", {
						className: getLogColor(log.type),
						children: log.text
					})]
				}, index)), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 mt-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[#78a9ff] shrink-0",
						children: ">"
					}), /* @__PURE__ */ jsx("span", { className: "w-2 h-4 bg-gray-300/70 animate-pulse" })]
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` })
		]
	});
}
//#endregion
//#region src/data/engineeringEvidence.ts
var engineeringEvidence = {
	measuredAt: "2026-06-15",
	delivery: {
		prerenderedRoutes: 288,
		indexableUrls: 256,
		supportedLanguages: 8
	},
	lighthouse: {
		desktop: {
			performance: 100,
			accessibility: 100,
			bestPractices: 96,
			seo: 92,
			totalBlockingTime: "0 ms",
			cumulativeLayoutShift: "0.001"
		},
		mobile: {
			performance: 91,
			accessibility: 100,
			bestPractices: 96,
			seo: 92,
			totalBlockingTime: "0 ms",
			cumulativeLayoutShift: "0"
		}
	},
	github: {
		publicRepositories: 7,
		featuredRepositories: 3,
		latestPublicUpdate: "2026-05-29",
		primaryLanguages: [
			"Python",
			"Rust",
			"C++",
			"TypeScript",
			"Go"
		]
	}
};
//#endregion
//#region src/pages/Home.tsx
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => Home });
function Home() {
	const { language, t } = useLanguage();
	const features = [
		{
			icon: /* @__PURE__ */ jsx(PanelsTopLeft, { className: "w-6 h-6 text-primary" }),
			title: t.home.features.frontend.title,
			description: t.home.features.frontend.desc,
			link: localizePath("/services/secure-frontend/", language),
			prefetch: "secureFrontend"
		},
		{
			icon: /* @__PURE__ */ jsx(Server, { className: "w-6 h-6 text-primary" }),
			title: t.home.features.backend.title,
			description: t.home.features.backend.desc,
			link: localizePath("/services/hardened-backend/", language),
			prefetch: "hardenedBackend"
		},
		{
			icon: /* @__PURE__ */ jsx(Database, { className: "w-6 h-6 text-primary" }),
			title: t.home.features.data.title,
			description: t.home.features.data.desc,
			link: localizePath("/services/data-protection/", language),
			prefetch: "dataProtection"
		},
		{
			icon: /* @__PURE__ */ jsx(Zap, { className: "w-6 h-6 text-primary" }),
			title: t.home.features.performance.title,
			description: t.home.features.performance.desc,
			link: localizePath("/services/high-performance/", language),
			prefetch: "highPerformance"
		}
	];
	const proofCards = [
		{
			icon: /* @__PURE__ */ jsx(Gauge, { className: "h-5 w-5" }),
			value: `${engineeringEvidence.lighthouse.desktop.performance}/${engineeringEvidence.lighthouse.desktop.accessibility}`,
			label: t.home.proof.cards.lighthouse.label,
			detail: t.home.proof.cards.lighthouse.detail
		},
		{
			icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5" }),
			value: `${engineeringEvidence.delivery.prerenderedRoutes}`,
			label: t.home.proof.cards.delivery.label,
			detail: t.home.proof.cards.delivery.detail
		},
		{
			icon: /* @__PURE__ */ jsx(GitBranch, { className: "h-5 w-5" }),
			value: `${engineeringEvidence.github.publicRepositories}`,
			label: t.home.proof.cards.openSource.label,
			detail: t.home.proof.cards.openSource.detail
		},
		{
			icon: /* @__PURE__ */ jsx(Earth, { className: "h-5 w-5" }),
			value: `${engineeringEvidence.delivery.supportedLanguages}`,
			label: t.home.proof.cards.languages.label,
			detail: t.home.proof.cards.languages.detail
		}
	];
	const growthCopy = homeGrowthCopy[language];
	const featuredArticles = articles.slice(0, 3).map((article) => localizeArticle(article, language));
	const featuredGrowthServices = growthServicePages.slice(0, 3).map((service) => localizeGrowthServicePage(service, language));
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col bg-background",
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: t.seo.home.title,
				description: t.seo.home.description,
				keywords: t.seo.home.keywords
			}),
			/* @__PURE__ */ jsx("section", {
				className: "kg-dot-grid pt-32 pb-20 md:pt-48 md:pb-32 border-b border-border overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "max-w-4xl relative z-10",
							children: [
								/* @__PURE__ */ jsxs("h1", {
									className: "text-5xl md:text-7xl font-light text-foreground leading-[1.1] mb-8",
									children: [
										t.home.heroTitle1,
										" ",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "font-semibold",
											children: t.home.heroTitle2
										}),
										/* @__PURE__ */ jsx("span", {
											"aria-hidden": "true",
											className: "kg-caret"
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xl md:text-2xl text-foreground mb-12 max-w-2xl leading-relaxed font-light",
									children: t.home.heroDesc
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col sm:flex-row flex-wrap gap-4",
									children: [
										/* @__PURE__ */ jsxs(import_dist.Link, {
											to: localizePath("/projects/", language),
											onPointerEnter: () => prefetchRoutes(["projects", "projectDetails"]),
											onFocus: () => prefetchRoutes(["projects", "projectDetails"]),
											className: "inline-flex items-center justify-between px-6 py-4 kg-action-primary transition-colors w-full sm:w-64",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: t.home.viewArch
											}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })]
										}),
										/* @__PURE__ */ jsxs(import_dist.Link, {
											to: localizePath("/completed-projects/", language),
											onPointerEnter: () => prefetchRoutes(["completedProjects", "completedProjectDetails"]),
											onFocus: () => prefetchRoutes(["completedProjects", "completedProjectDetails"]),
											className: "inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-64",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: t.home.viewCompletedProjects
											}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })]
										}),
										/* @__PURE__ */ jsxs("a", {
											href: "https://github.com/Kernel-Guard",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-64",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: t.home.githubRepo
											}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })]
										})
									]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "hidden lg:flex justify-center items-center relative",
							children: /* @__PURE__ */ jsx(SecurityTerminal, {})
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-surface overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8",
						children: [/* @__PURE__ */ jsx("div", {
							className: "lg:col-span-4",
							children: /* @__PURE__ */ jsx("h2", {
								className: "text-3xl font-light mb-6",
								children: t.home.missionTitle
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-8 space-y-8 text-lg text-foreground leading-relaxed font-light",
							children: [/* @__PURE__ */ jsx("p", { children: t.home.missionP1 }), /* @__PURE__ */ jsx("p", { children: t.home.missionP2 })]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 border-t border-border bg-background",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase",
									children: t.home.proof.badge
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "text-3xl md:text-4xl font-light mb-6",
									children: t.home.proof.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-lg text-foreground/70 font-light leading-relaxed",
									children: t.home.proof.desc
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-8",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: proofCards.map((card) => /* @__PURE__ */ jsxs("div", {
										className: "border border-border bg-surface p-6",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "mb-8 flex items-center justify-between text-primary",
												children: [card.icon, /* @__PURE__ */ jsx("span", {
													className: "font-mono text-xs text-foreground/60",
													children: engineeringEvidence.measuredAt
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "font-mono text-4xl text-foreground mb-3",
												children: card.value
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-base font-medium text-foreground mb-2",
												children: card.label
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-sm leading-relaxed text-foreground/70",
												children: card.detail
											})
										]
									}, card.label))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 border border-border bg-surface p-5 text-sm text-foreground/70",
									children: [
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "font-mono text-foreground",
												children: engineeringEvidence.delivery.indexableUrls
											}),
											" ",
											t.home.proof.summary.indexableUrls
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "font-mono text-foreground",
												children: engineeringEvidence.lighthouse.desktop.totalBlockingTime
											}),
											" ",
											t.home.proof.summary.desktopTbt
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "font-mono text-foreground",
												children: engineeringEvidence.github.latestPublicUpdate
											}),
											" ",
											t.home.proof.summary.latestUpdate
										] })
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-xs text-foreground/50 font-mono",
									children: t.home.proof.footnote
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 border-t border-border bg-surface",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase",
										children: growthCopy.badge
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "text-3xl md:text-4xl font-light mb-6",
										children: growthCopy.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-lg text-foreground/70 font-light leading-relaxed",
										children: growthCopy.description
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4",
								children: featuredGrowthServices.map((service) => /* @__PURE__ */ jsxs(import_dist.Link, {
									to: localizePath(`/services/${service.slug}/`, language),
									onPointerEnter: () => prefetchRoute("serviceLandingPage"),
									onFocus: () => prefetchRoute("serviceLandingPage"),
									className: "group border border-border bg-background p-5 hover:border-primary/50 transition-colors",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-3",
										children: service.shortTitle
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm leading-relaxed text-foreground/65",
										children: service.description
									})]
								}, service.slug))
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-4",
							children: featuredArticles.map((article) => /* @__PURE__ */ jsxs(import_dist.Link, {
								to: localizePath(`/articles/${article.slug}/`, language),
								onPointerEnter: () => prefetchRoute("articlePage"),
								onFocus: () => prefetchRoute("articlePage"),
								className: "group border border-border bg-background p-6 hover:border-primary/50 transition-colors",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "text-xs font-mono uppercase tracking-widest text-foreground/55 mb-5",
										children: [
											article.readingMinutes,
											" ",
											growthCopy.minRead
										]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-light text-foreground group-hover:text-primary transition-colors mb-4",
										children: article.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm leading-relaxed text-foreground/65 mb-6",
										children: article.description
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-2 text-sm font-medium text-primary",
										children: [growthCopy.readArticle, /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							}, article.slug))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8",
							children: /* @__PURE__ */ jsxs(import_dist.Link, {
								to: localizePath("/articles/", language),
								onPointerEnter: () => prefetchRoute("articles"),
								onFocus: () => prefetchRoute("articles"),
								className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors",
								children: [growthCopy.viewAllArticles, /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-24 border-t border-border bg-surface overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-light mb-4",
						children: t.home.techStackTitle
					}), /* @__PURE__ */ jsx("p", {
						className: "text-lg text-foreground/70 font-light max-w-2xl mx-auto",
						children: t.home.techStackDesc
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative w-full flex overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" }),
						/* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex animate-marquee whitespace-nowrap",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex gap-8 px-4 items-center",
								children: [
									"React",
									"TypeScript",
									"Node.js",
									"Rust",
									"Go",
									"Docker",
									"Kubernetes",
									"PostgreSQL",
									"GraphQL",
									"WebAssembly"
								].map((tech, i) => /* @__PURE__ */ jsx("div", {
									className: "px-6 py-3 border border-border bg-background text-foreground font-mono text-lg font-medium shadow-[0_0_15px_rgba(15,98,254,0.1)]",
									children: tech
								}, i))
							}), /* @__PURE__ */ jsx("div", {
								className: "flex gap-8 px-4 items-center",
								children: [
									"React",
									"TypeScript",
									"Node.js",
									"Rust",
									"Go",
									"Docker",
									"Kubernetes",
									"PostgreSQL",
									"GraphQL",
									"WebAssembly"
								].map((tech, i) => /* @__PURE__ */ jsx("div", {
									className: "px-6 py-3 border border-border bg-background text-foreground font-mono text-lg font-medium shadow-[0_0_15px_rgba(15,98,254,0.1)]",
									children: tech
								}, `dup-${i}`))
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 border-t border-border bg-background",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6",
						children: features.map((feature, index) => {
							return /* @__PURE__ */ jsx("div", {
								className: `${index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"}`,
								children: /* @__PURE__ */ jsxs(import_dist.Link, {
									to: feature.link,
									onPointerEnter: () => prefetchRoute(feature.prefetch),
									onFocus: () => prefetchRoute(feature.prefetch),
									className: "group relative block h-full p-8 bg-surface border border-border hover:border-primary/50 transition-colors overflow-hidden",
									children: [/* @__PURE__ */ jsx("div", {
										className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
										children: /* @__PURE__ */ jsx("div", { className: "absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "relative z-10 flex flex-col h-full",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "mb-12",
												children: feature.icon
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-2xl font-medium mb-4",
												children: feature.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-foreground/80 text-base leading-relaxed font-light flex-grow",
												children: feature.description
											}),
											/* @__PURE__ */ jsx("div", {
												className: "mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300",
												children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 text-primary" })
											})
										]
									})]
								})
							}, index);
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 border-t border-border bg-surface",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-light mb-16 max-w-2xl",
						children: t.home.principles.title
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border",
						children: t.home.principles.items.map((item, index) => /* @__PURE__ */ jsxs("div", {
							className: `pt-8 md:pt-0 ${index === 0 ? "md:pr-8" : index === 1 ? "md:px-8" : "md:pl-8"}`,
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xl font-medium text-primary mb-4",
								children: item.title
							}), /* @__PURE__ */ jsx("div", {
								className: "text-base font-light leading-relaxed text-foreground/80",
								children: item.desc
							})]
						}, index))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 border-t border-border bg-background",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-3xl font-light mb-6",
								children: t.home.community.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xl font-light text-foreground/70 mb-10 leading-relaxed",
								children: t.home.community.desc
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "https://github.com/Kernel-Guard",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center px-8 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: t.nav.github
								}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-3" })]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
//#region src/data/projects.ts
var projects = { items: [
	{
		"id": "bpfcompat",
		"title": "bpfcompat",
		"description": {
			"en": "An open-source eBPF compatibility validator: it boots real Linux kernels in disposable VMs, loads your compiled BPF programs inside each one, and gates your CI on an artifact-by-kernel pass/fail matrix.",
			"tr": "Açık kaynaklı bir eBPF uyumluluk doğrulayıcısı: gerçek Linux çekirdeklerini tek kullanımlık sanal makinelerde başlatır, derlenmiş BPF programlarınızı her birinin içinde yükler ve CI'nızı yapıt-çekirdek geçti/kaldı matrisi üzerinden denetler."
		},
		"technicalDetails": {
			"en": "Written in Go with a C/libbpf validator that runs inside each guest. For every kernel profile, bpfcompat boots a disposable QEMU/KVM overlay VM from a cloud image (Ubuntu and Fedora, 5.x–6.x, x86_64 and ARM64), then actually loads and attaches each program — recording BTF status, CO-RE relocations, and capability checks. Results aggregate into a pass/fail matrix, and exit code 2 marks a compatibility regression for CI gating.",
			"tr": "Her konuğun içinde çalışan bir C/libbpf doğrulayıcısıyla birlikte Go ile yazılmıştır. bpfcompat her çekirdek profili için bir bulut imajından tek kullanımlık bir QEMU/KVM örtüşme VM'i başlatır (Ubuntu ve Fedora, 5.x–6.x, x86_64 ve ARM64), ardından her programı gerçekten yükleyip bağlar — BTF durumunu, CO-RE yer değiştirmelerini ve yetenek kontrollerini kaydeder. Sonuçlar bir geçti/kaldı matrisine toplanır ve çıkış kodu 2, CI denetimi için bir uyumluluk gerilemesini işaretler."
		},
		"marketingDetails": {
			"en": "Stop discovering kernel incompatibilities in production. bpfcompat proves your eBPF programs load on every kernel you ship to — in CI, before your users do — with verifiable evidence instead of guesswork.",
			"tr": "Çekirdek uyumsuzluklarını üretimde keşfetmeyi bırakın. bpfcompat, eBPF programlarınızın gönderim yaptığınız her çekirdekte yüklendiğini — kullanıcılarınızdan önce, CI içinde — tahmin yerine doğrulanabilir kanıtlarla kanıtlar."
		},
		"tags": [
			"Go",
			"eBPF",
			"CI/CD",
			"Apache-2.0"
		],
		"github": "https://github.com/Kernel-Guard/bpfcompat",
		"link": "https://bpfcompat-se24-8008b8.swedencentral.cloudapp.azure.com/"
	},
	{
		"id": "cathodex",
		"title": "CathodeX",
		"description": {
			"en": "AI-powered cathode material screening platform using graph neural networks for predicting battery material properties.",
			"tr": "Pil malzemesi özelliklerini tahmin etmek için çizge sinir ağlarını kullanan yapay zeka destekli katot malzemesi tarama platformu.",
			"de": "KI-gestuetzte Plattform zur Pruefung von Kathodenmaterialien, die Graph Neural Networks zur Vorhersage von Batterieeigenschaften nutzt.",
			"ja": "グラフニューラルネットワークを用いて電池材料の特性を予測する、AI搭載のカソード材料スクリーニングプラットフォームです。",
			"zh-CN": "一个由 AI 驱动的正极材料筛选平台，使用图神经网络预测电池材料属性。",
			"es": "Plataforma de cribado de materiales de cátodo impulsada por IA que usa redes neuronales de grafos para predecir propiedades de materiales de baterías.",
			"fr": "Plateforme de criblage de matériaux de cathode assistée par IA, utilisant des réseaux neuronaux de graphes pour prédire les propriétés des matériaux de batteries.",
			"ko": "배터리 소재 특성을 예측하기 위해 그래프 신경망을 사용하는 AI 기반 양극재 스크리닝 플랫폼입니다."
		},
		"technicalDetails": {
			"en": "Built using PyTorch and Graph Neural Networks (GNNs) to model the atomic structure of cathode materials. It leverages high-throughput screening algorithms to predict key battery properties such as energy density and stability.",
			"tr": "Katot malzemelerinin atomik yapısını modellemek için PyTorch ve Çizge Sinir Ağları (GNN'ler) kullanılarak oluşturulmuştur. Enerji yoğunluğu ve kararlılık gibi temel pil özelliklerini tahmin etmek için yüksek verimli tarama algoritmalarından yararlanır.",
			"de": "Entwickelt mit PyTorch und Graph Neural Networks (GNNs), um die atomare Struktur von Kathodenmaterialien zu modellieren. Hochdurchsatz-Screening-Algorithmen prognostizieren zentrale Batterieeigenschaften wie Energiedichte und Stabilitaet.",
			"ja": "PyTorch とグラフニューラルネットワーク（GNN）を用いて、カソード材料の原子構造をモデル化しています。高スループットスクリーニングにより、エネルギー密度や安定性などの主要な電池特性を予測します。",
			"zh-CN": "该平台基于 PyTorch 和图神经网络（GNN）构建，用于建模正极材料的原子结构。它利用高通量筛选算法预测能量密度、稳定性等关键电池属性。",
			"es": "Construida con PyTorch y redes neuronales de grafos (GNN) para modelar la estructura atómica de materiales de cátodo. Usa algoritmos de cribado de alto rendimiento para predecir propiedades clave de baterías como densidad energética y estabilidad.",
			"fr": "Construite avec PyTorch et des réseaux neuronaux de graphes (GNN) pour modéliser la structure atomique des matériaux de cathode. Elle s’appuie sur des algorithmes de criblage à haut débit pour prédire des propriétés clés comme la densité énergétique et la stabilité.",
			"ko": "PyTorch와 그래프 신경망(GNN)을 사용해 양극재의 원자 구조를 모델링합니다. 고처리량 스크리닝 알고리즘으로 에너지 밀도와 안정성 같은 핵심 배터리 특성을 예측합니다."
		},
		"marketingDetails": {
			"en": "Accelerating the future of energy storage. CathodeX reduces the time and cost of battery material discovery by orders of magnitude, empowering researchers to find the next generation of sustainable energy solutions.",
			"tr": "Enerji depolamanın geleceğini hızlandırıyoruz. CathodeX, pil malzemesi keşfinin zamanını ve maliyetini büyük ölçüde azaltarak araştırmacıların yeni nesil sürdürülebilir enerji çözümlerini bulmalarını sağlar.",
			"de": "Beschleunigt die Zukunft der Energiespeicherung. CathodeX senkt Zeit und Kosten der Batteriematerialforschung drastisch und hilft Forschenden, nachhaltige Energieloesungen der naechsten Generation zu finden.",
			"ja": "エネルギー貯蔵の未来を加速します。CathodeX は電池材料探索にかかる時間とコストを大幅に削減し、研究者が次世代の持続可能なエネルギーソリューションを発見できるよう支援します。",
			"zh-CN": "加速储能技术的未来。CathodeX 大幅降低电池材料发现的时间和成本，帮助研究人员寻找下一代可持续能源解决方案。",
			"es": "Acelera el futuro del almacenamiento energético. CathodeX reduce drásticamente el tiempo y el coste del descubrimiento de materiales de batería, ayudando a los investigadores a encontrar soluciones energéticas sostenibles de nueva generación.",
			"fr": "Accélérer l’avenir du stockage d’énergie. CathodeX réduit fortement le temps et le coût de découverte des matériaux de batteries, afin d’aider les chercheurs à identifier les prochaines solutions énergétiques durables.",
			"ko": "에너지 저장의 미래를 앞당깁니다. CathodeX는 배터리 소재 탐색에 드는 시간과 비용을 크게 줄여 연구자가 차세대 지속 가능한 에너지 솔루션을 찾도록 돕습니다."
		},
		"tags": [
			"Python",
			"AI",
			"Graph Neural Networks"
		],
		"github": "https://github.com/Kernel-Guard/CathodeX",
		"link": "https://cathode-screening.vercel.app/",
		"diagram": "graph LR\n    User[User / Chemist] -->|HTTPS| FE(Next.js on Vercel)\n    FE -->|JSON| API(FastAPI on Render)\n    subgraph \"Inference Engine\"\n        API -->|Parse| Pymatgen(Structure Parser)\n        Pymatgen -->|Graph| M1(MACE Member 1)\n        Pymatgen -->|Graph| M2(MACE Member 2)\n        Pymatgen -->|Graph| M3(MACE Member 3)\n        Pymatgen -->|Graph| M4(MACE Member 4)\n        Pymatgen -->|Graph| M5(MACE Member 5)\n    end\n    M1 & M2 & M3 & M4 & M5 -->|Aggregate| Stats[q10 / q50 / q90 + Conformal]\n    Stats -->|Policy| Result[KEEP / MAYBE / KILL]"
	},
	{
		"id": "post-quantum-messaging-app",
		"title": "post-quantum-messaging-app",
		"description": {
			"en": "A secure messaging application implementing post-quantum cryptographic algorithms to ensure future-proof communication.",
			"tr": "Geleceğe dönük iletişimi sağlamak için kuantum sonrası kriptografik algoritmalar uygulayan güvenli bir mesajlaşma uygulaması.",
			"de": "Eine sichere Messaging-Anwendung mit Post-Quantum-Kryptografie, die Kommunikation langfristig schuetzen soll.",
			"ja": "将来にわたって安全な通信を実現するため、ポスト量子暗号アルゴリズムを実装したセキュアメッセージングアプリケーションです。",
			"zh-CN": "一款实现后量子密码算法的安全消息应用，用于保障面向未来的通信安全。",
			"es": "Aplicación de mensajería segura que implementa algoritmos criptográficos poscuánticos para proteger la comunicación a futuro.",
			"fr": "Application de messagerie sécurisée qui implémente des algorithmes cryptographiques post-quantiques pour protéger les communications à long terme.",
			"ko": "미래의 통신 보안을 보장하기 위해 포스트 양자 암호 알고리즘을 구현한 보안 메시징 애플리케이션입니다."
		},
		"technicalDetails": {
			"en": "Implemented in Rust for memory safety and performance. Utilizes NIST-approved post-quantum cryptographic algorithms (like CRYSTALS-Kyber and CRYSTALS-Dilithium) to secure message exchange against attacks from quantum computers.",
			"tr": "Bellek güvenliği ve performans için Rust ile uygulanmıştır. Mesaj alışverişini kuantum bilgisayarlardan gelebilecek saldırılara karşı güvence altına almak için NIST onaylı kuantum sonrası kriptografik algoritmaları (CRYSTALS-Kyber ve CRYSTALS-Dilithium gibi) kullanır.",
			"de": "In Rust umgesetzt, um Speichersicherheit und Performance zu verbinden. Die Anwendung nutzt NIST-standardisierte Post-Quantum-Algorithmen wie CRYSTALS-Kyber und CRYSTALS-Dilithium, um Nachrichtenaustausch gegen Angriffe durch Quantencomputer abzusichern.",
			"ja": "メモリ安全性と性能を重視して Rust で実装されています。CRYSTALS-Kyber や CRYSTALS-Dilithium など、NIST 標準のポスト量子暗号アルゴリズムを用いて、量子コンピュータによる攻撃からメッセージ交換を保護します。",
			"zh-CN": "该应用使用 Rust 实现，以兼顾内存安全与性能。它采用 NIST 标准化的后量子密码算法（如 CRYSTALS-Kyber 和 CRYSTALS-Dilithium），保护消息交换免受量子计算机攻击。",
			"es": "Implementada en Rust para seguridad de memoria y rendimiento. Utiliza algoritmos poscuánticos aprobados por NIST, como CRYSTALS-Kyber y CRYSTALS-Dilithium, para proteger el intercambio de mensajes frente a ataques de computadores cuánticos.",
			"fr": "Implémentée en Rust pour la sûreté mémoire et la performance. Elle utilise des algorithmes post-quantiques approuvés par le NIST, comme CRYSTALS-Kyber et CRYSTALS-Dilithium, afin de protéger l’échange de messages contre les attaques d’ordinateurs quantiques.",
			"ko": "메모리 안전성과 성능을 위해 Rust로 구현되었습니다. CRYSTALS-Kyber와 CRYSTALS-Dilithium 같은 NIST 승인 포스트 양자 암호 알고리즘을 사용해 양자 컴퓨터 공격으로부터 메시지 교환을 보호합니다."
		},
		"marketingDetails": {
			"en": "Future-proof your communications. As quantum computing advances, traditional encryption will become obsolete. Our post-quantum messaging app ensures your sensitive data remains secure against tomorrow's threats, today.",
			"tr": "İletişiminizi geleceğe hazırlayın. Kuantum hesaplama geliştikçe geleneksel şifreleme geçersiz hale gelecektir. Kuantum sonrası mesajlaşma uygulamamız, hassas verilerinizin bugünden yarının tehditlerine karşı güvende kalmasını sağlar.",
			"de": "Machen Sie Ihre Kommunikation zukunftssicher. Mit dem Fortschritt des Quantencomputings wird klassische Verschluesselung unter Druck geraten. Diese Post-Quantum-Messaging-App schuetzt sensible Daten schon heute vor den Risiken von morgen.",
			"ja": "通信を未来に備えます。量子コンピューティングが進化すると、従来の暗号化は通用しなくなる可能性があります。このポスト量子メッセージングアプリは、明日の脅威に対して今日から機密データを保護します。",
			"zh-CN": "让通信面向未来。随着量子计算的发展，传统加密将面临失效风险。我们的后量子消息应用从今天开始保护敏感数据，应对未来威胁。",
			"es": "Prepara tus comunicaciones para el futuro. A medida que avanza la computación cuántica, el cifrado tradicional perderá eficacia. Esta aplicación mantiene los datos sensibles protegidos frente a las amenazas de mañana desde hoy.",
			"fr": "Préparez vos communications pour l’avenir. À mesure que l’informatique quantique progresse, le chiffrement traditionnel sera mis sous pression. Cette application protège dès aujourd’hui les données sensibles contre les menaces de demain.",
			"ko": "커뮤니케이션을 미래에 대비하세요. 양자 컴퓨팅이 발전하면 기존 암호화는 한계에 직면할 수 있습니다. 이 앱은 오늘부터 민감한 데이터를 내일의 위협에 대비해 보호합니다."
		},
		"tags": [
			"Rust",
			"Cryptography",
			"Post-Quantum"
		],
		"github": "https://github.com/Kernel-Guard/post-quantum-messaging-app",
		"diagram": "flowchart LR\n    C[\"CLI / Android / iOS / Web / Desktop\"] -->|HTTP JSON + TLS| S[\"pqmsg-server\"]\n    S -->|Sealed inbox sync / realtime relay| C\n    A[\"Android bridge\"] --> CORE[\"pqmsg-core\"]\n    I[\"iOS bridge\"] --> CORE\n    W[\"Web WASM bridge\"] --> CORE\n    D[\"Desktop wrapper\"] --> W\n    S --> DB[\"PostgreSQL / SQLite\"]\n    S --> RD[\"Redis rate limiter\"]\n    PV[\"ProVerif model\"] -.- V[\"CI verification gate\"]\n    TM[\"Tamarin model\"] -.- V"
	},
	{
		"id": "aegis-bpf",
		"title": "Aegis-BPF",
		"description": {
			"en": "A prototype for enforcing security policies using eBPF (Extended Berkeley Packet Filter) with CO-RE (Compile Once - Run Everywhere) support.",
			"tr": "CO-RE (Bir Kere Derle - Her Yerde Çalıştır) desteğiyle eBPF (Genişletilmiş Berkeley Paket Filtresi) kullanarak güvenlik politikalarını uygulamak için bir prototip.",
			"de": "Ein Prototyp zur Durchsetzung von Sicherheitsrichtlinien mit eBPF und CO-RE-Unterstuetzung (Compile Once - Run Everywhere).",
			"ja": "CO-RE（Compile Once - Run Everywhere）対応の eBPF（Extended Berkeley Packet Filter）を用いて、セキュリティポリシーを適用するためのプロトタイプです。",
			"zh-CN": "一个使用 eBPF（扩展伯克利包过滤器）并支持 CO-RE（一次编译，到处运行）的安全策略执行原型。",
			"es": "Prototipo para aplicar políticas de seguridad con eBPF (Extended Berkeley Packet Filter) y soporte CO-RE (Compile Once - Run Everywhere).",
			"fr": "Prototype d’application de politiques de sécurité avec eBPF (Extended Berkeley Packet Filter) et prise en charge CO-RE (Compile Once - Run Everywhere).",
			"ko": "CO-RE(Compile Once - Run Everywhere)를 지원하는 eBPF(Extended Berkeley Packet Filter) 기반 보안 정책 적용 프로토타입입니다."
		},
		"technicalDetails": {
			"en": "Developed using C++ and eBPF technology. It utilizes CO-RE (Compile Once - Run Everywhere) to ensure portability across different Linux kernel versions without recompilation, providing low-overhead, kernel-level security enforcement.",
			"tr": "C++ ve eBPF teknolojisi kullanılarak geliştirilmiştir. Yeniden derlemeye gerek kalmadan farklı Linux çekirdek sürümlerinde taşınabilirliği sağlamak için CO-RE (Bir Kere Derle - Her Yerde Çalıştır) kullanır ve düşük ek yüklü, çekirdek düzeyinde güvenlik uygulaması sağlar.",
			"de": "Entwickelt mit C++ und eBPF-Technologie. CO-RE sorgt fuer Portabilitaet ueber verschiedene Linux-Kernelversionen hinweg, ohne erneutes Kompilieren zu erfordern, und ermoeglicht Sicherheitsdurchsetzung auf Kernel-Ebene mit geringer Laufzeitbelastung.",
			"ja": "C++ と eBPF 技術で開発されています。CO-RE（Compile Once - Run Everywhere）により、再コンパイルなしで異なる Linux カーネルバージョン間の移植性を確保し、低オーバーヘッドなカーネルレベルのセキュリティ制御を実現します。",
			"zh-CN": "该项目使用 C++ 和 eBPF 技术开发。它通过 CO-RE 在不同 Linux 内核版本之间实现无需重新编译的可移植性，并提供低开销的内核级安全策略执行能力。",
			"es": "Desarrollado con C++ y tecnología eBPF. Utiliza CO-RE para mantener portabilidad entre distintas versiones del kernel Linux sin recompilar, ofreciendo aplicación de políticas de seguridad a nivel de kernel con bajo overhead.",
			"fr": "Développé avec C++ et la technologie eBPF. CO-RE assure la portabilité entre différentes versions du noyau Linux sans recompilation, avec une application des politiques de sécurité au niveau noyau et une faible surcharge.",
			"ko": "C++와 eBPF 기술로 개발되었습니다. CO-RE를 사용해 재컴파일 없이 다양한 Linux 커널 버전에서 이식성을 확보하고, 낮은 오버헤드로 커널 수준 보안 정책을 적용합니다."
		},
		"marketingDetails": {
			"en": "Enterprise-grade security at the kernel level. Aegis provides deep visibility and control over system behavior with zero overhead. Protect your infrastructure from advanced persistent threats with our cutting-edge eBPF technology.",
			"tr": "Çekirdek düzeyinde kurumsal düzeyde güvenlik. Aegis, sıfır ek yük ile sistem davranışı üzerinde derin görünürlük ve kontrol sağlar. En son eBPF teknolojimizle altyapınızı gelişmiş kalıcı tehditlerden koruyun.",
			"de": "Unternehmenssicherheit direkt auf Kernel-Ebene. Aegis bietet tiefe Einblicke und Kontrolle ueber Systemverhalten bei minimaler Belastung. Schuetzen Sie Ihre Infrastruktur mit moderner eBPF-Technologie vor fortgeschrittenen Bedrohungen.",
			"ja": "カーネルレベルでのエンタープライズグレードのセキュリティ。Aegis はシステム挙動に対する深い可視性と制御を、最小限のオーバーヘッドで提供します。先進的な eBPF 技術により、高度な持続的脅威からインフラを保護します。",
			"zh-CN": "内核级企业安全能力。Aegis 以极低开销提供对系统行为的深度可见性与控制，帮助您利用先进的 eBPF 技术保护基础设施免受高级持续性威胁。",
			"es": "Seguridad empresarial en el nivel del kernel. Aegis ofrece visibilidad profunda y control sobre el comportamiento del sistema con una carga mínima. Protege la infraestructura frente a amenazas persistentes avanzadas con tecnología eBPF moderna.",
			"fr": "Sécurité d’entreprise au niveau du noyau. Aegis fournit une visibilité profonde et un contrôle du comportement système avec une surcharge minimale. Protégez l’infrastructure contre les menaces persistantes avancées grâce à eBPF.",
			"ko": "커널 수준의 엔터프라이즈 보안입니다. Aegis는 최소한의 오버헤드로 시스템 동작에 대한 깊은 가시성과 제어를 제공합니다. 최신 eBPF 기술로 고도화된 지속 위협으로부터 인프라를 보호합니다."
		},
		"tags": [
			"C++",
			"C",
			"eBPF",
			"Security",
			"Linux Kernel"
		],
		"github": "https://github.com/Kernel-Guard/Aegis-BPF",
		"diagram": "graph TD\n    subgraph \"AegisBPF User Space\"\n        A[File/Net Deny Rules] --> Z\n        B[Allow Allowlist] --> Z\n        C[Policy + Signing] --> Z\n        D[Metrics + Health] --> Z\n        E[Plugins + Rules] --> Z\n        Z[(Pinned BPF Maps & Ring Buffer)]\n    end\n    subgraph \"Linux Kernel\"\n        Z --- F\n        F[LSM Hooks Enforce/Audit]\n        F --> G[file_open / inode_permission]\n        F --> H[inode_copy_up overlayfs]\n        F --> I[bprm_check + IMA hash]\n        F --> J[socket connect/bind/listen/accept]\n        F --> K[socket sendmsg/recvmsg]\n        L[Tracepoint Fallback]\n        L --> M[openat/exec/fork/exit]\n    end"
	}
] }.items;
//#endregion
//#region src/i18n/text.ts
function localizedText(value, language) {
	return value[language] ?? value.en ?? value.tr ?? "";
}
//#endregion
//#region src/pages/Projects.tsx
var Projects_exports = /* @__PURE__ */ __exportAll({ default: () => Projects });
function Projects() {
	const { language, t } = useLanguage();
	const navigate = (0, import_dist.useNavigate)();
	const projectPath = (id) => `${language === "tr" ? "" : language === "zh-CN" ? "/zh-cn" : `/${language}`}/projects/${id}/`;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: t.seo.projects.title,
			description: t.seo.projects.description,
			keywords: t.seo.projects.keywords,
			path: "/projects/"
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-16 max-w-3xl",
				children: [/* @__PURE__ */ jsxs("h1", {
					className: "text-5xl md:text-6xl font-light mb-6 text-foreground",
					children: [
						t.projects.title1,
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: t.projects.title2
						})
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-foreground text-xl leading-relaxed font-light",
					children: t.projects.desc
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "hidden md:grid grid-cols-12 gap-4 py-4 border-b-2 border-foreground bg-surface text-sm font-semibold text-foreground",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "col-span-3 pl-4",
							children: t.projects.colName
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-5",
							children: t.projects.colDesc
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-3",
							children: t.projects.colTech
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 text-right pr-4",
							children: t.projects.colLinks
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "divide-y divide-border",
					children: projects.map((project) => /* @__PURE__ */ jsxs("div", {
						onClick: () => navigate(projectPath(project.id)),
						className: "group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 hover:bg-surface transition-colors items-start cursor-pointer",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "md:col-span-3 pl-4",
								children: [/* @__PURE__ */ jsx(import_dist.Link, {
									to: projectPath(project.id),
									onClick: (e) => e.stopPropagation(),
									className: "text-lg font-medium text-primary hover:underline flex items-center gap-2",
									children: project.title
								}), /* @__PURE__ */ jsx("p", {
									className: "md:hidden text-sm text-foreground/80 mt-2 font-light",
									children: localizedText(project.description, language)
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "hidden md:block md:col-span-5 text-base text-foreground/80 pr-4 font-light",
								children: localizedText(project.description, language)
							}),
							/* @__PURE__ */ jsx("div", {
								className: "md:col-span-3 flex flex-wrap gap-2 mt-4 md:mt-0",
								children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", {
									className: "px-3 py-1 text-xs bg-border text-foreground",
									children: tag
								}, tag))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "md:col-span-1 flex items-center justify-start md:justify-end gap-4 mt-4 md:mt-0 pr-4",
								children: [project.github && /* @__PURE__ */ jsx("a", {
									href: project.github,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: (e) => e.stopPropagation(),
									className: "text-primary hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium",
									title: t.projectDetails.viewSource,
									"aria-label": `${project.title}: ${t.projectDetails.viewSource}`,
									children: /* @__PURE__ */ jsx(Github, { className: "w-5 h-5" })
								}), project.link && /* @__PURE__ */ jsx("a", {
									href: project.link,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: (e) => e.stopPropagation(),
									className: "text-primary hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium",
									title: t.projectDetails.liveDemo,
									"aria-label": `${project.title}: ${t.projectDetails.liveDemo}`,
									children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })
								})]
							})
						]
					}, project.id))
				})]
			})]
		})]
	});
}
//#endregion
//#region src/data/repositoryEvidence.ts
var repositoryEvidence = {
	cathodex: {
		primaryLanguage: "Python",
		lastPublicUpdate: "2026-04-13",
		trackedIssues: 1,
		repositorySizeKb: 24921,
		languageMix: [
			"Python",
			"TypeScript",
			"HTML",
			"PowerShell",
			"Shell"
		]
	},
	"post-quantum-messaging-app": {
		primaryLanguage: "Rust",
		lastPublicUpdate: "2026-04-16",
		trackedIssues: 0,
		repositorySizeKb: 14381,
		languageMix: [
			"Rust",
			"TypeScript",
			"Kotlin",
			"Python",
			"Swift"
		]
	},
	"aegis-bpf": {
		primaryLanguage: "C++",
		lastPublicUpdate: "2026-05-24",
		trackedIssues: 11,
		repositorySizeKb: 5575,
		languageMix: [
			"C++",
			"Shell",
			"C",
			"Go",
			"Python"
		]
	}
};
//#endregion
//#region src/pages/ProjectDetails.tsx
var ProjectDetails_exports = /* @__PURE__ */ __exportAll({ default: () => ProjectDetails });
var KNOWN_PROGRAMMING_LANGUAGES = new Set([
	"Python",
	"Rust",
	"C++",
	"C",
	"Go",
	"TypeScript",
	"JavaScript",
	"Java",
	"Kotlin",
	"Swift"
]);
function ProjectDetails() {
	const { id } = (0, import_dist.useParams)();
	const { language, t } = useLanguage();
	const project = projects.find((p) => p.id === id);
	if (!project) return /* @__PURE__ */ jsx(import_dist.Navigate, {
		to: "/not-found/",
		replace: true
	});
	const programmingLanguages = project.tags.filter((tag) => KNOWN_PROGRAMMING_LANGUAGES.has(tag));
	const description = localizedText(project.description, language);
	const technicalDetails = localizedText(project.technicalDetails, language);
	const marketingDetails = localizedText(project.marketingDetails, language);
	const repoEvidence = repositoryEvidence[project.id];
	const repositorySize = repoEvidence ? `${(repoEvidence.repositorySizeKb / 1024).toFixed(1)} MB` : null;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${project.title} - Kernel Guard`,
			description,
			path: `/projects/${project.id}/`,
			schema: buildSoftwareSourceCodeSchema({
				name: project.title,
				description,
				path: `/projects/${project.id}/`,
				language,
				codeRepository: project.github,
				programmingLanguage: programmingLanguages.length > 0 ? programmingLanguages : void 0
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(import_dist.Link, {
					to: localizePath("/projects/", language),
					className: "inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-12 font-medium text-sm",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), t.projectDetails.backToProjects]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mb-16",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-4xl md:text-5xl font-light mb-6 text-foreground",
							children: project.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 text-xl leading-relaxed font-light",
							children: description
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-2 mt-8",
							children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", {
								className: "px-3 py-1 text-xs bg-surface border border-border text-foreground",
								children: tag
							}, tag))
						})
					]
				}),
				project.image && /* @__PURE__ */ jsx("div", {
					className: "mb-16 w-full overflow-hidden border border-border",
					children: /* @__PURE__ */ jsx("img", {
						src: project.image,
						alt: project.title,
						className: "w-full h-auto object-cover max-h-[600px]"
					})
				}),
				project.diagram && /* @__PURE__ */ jsxs("div", {
					className: "mb-16 bg-surface p-8 border border-border",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ jsx(GitMerge, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-light",
							children: t.projectDetails.architectureDiagram
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "relative w-full",
						style: { aspectRatio: "4 / 3" },
						children: /* @__PURE__ */ jsx("img", {
							src: `/diagrams/${project.id}.svg`,
							alt: `${project.title} architecture diagram`,
							className: "absolute inset-0 h-full w-full object-contain",
							loading: "lazy",
							decoding: "async"
						})
					})]
				}),
				repoEvidence && /* @__PURE__ */ jsxs("section", {
					className: "mb-16 border border-border bg-surface p-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3 mb-8 md:flex-row md:items-end md:justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-light",
								children: t.projectDetails.repositoryEvidence.title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-foreground/60 font-mono",
								children: t.projectDetails.repositoryEvidence.measuredAt
							})] }), project.github && /* @__PURE__ */ jsxs("a", {
								href: project.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark",
								children: ["GitHub", /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 md:grid-cols-4 gap-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "border border-border bg-background p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs font-mono uppercase text-foreground/50 mb-2",
										children: t.projectDetails.repositoryEvidence.primaryLanguage
									}), /* @__PURE__ */ jsx("div", {
										className: "text-lg font-medium text-foreground",
										children: repoEvidence.primaryLanguage
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "border border-border bg-background p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs font-mono uppercase text-foreground/50 mb-2",
										children: t.projectDetails.repositoryEvidence.lastPublicUpdate
									}), /* @__PURE__ */ jsx("div", {
										className: "text-lg font-medium text-foreground",
										children: repoEvidence.lastPublicUpdate
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "border border-border bg-background p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs font-mono uppercase text-foreground/50 mb-2",
										children: t.projectDetails.repositoryEvidence.trackedIssues
									}), /* @__PURE__ */ jsx("div", {
										className: "text-lg font-medium text-foreground",
										children: repoEvidence.trackedIssues
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "border border-border bg-background p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs font-mono uppercase text-foreground/50 mb-2",
										children: t.projectDetails.repositoryEvidence.repositorySize
									}), /* @__PURE__ */ jsx("div", {
										className: "text-lg font-medium text-foreground",
										children: repositorySize
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs font-mono uppercase text-foreground/50 mb-3",
								children: t.projectDetails.repositoryEvidence.languageMix
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: repoEvidence.languageMix.map((item) => /* @__PURE__ */ jsx("span", {
									className: "border border-border bg-background px-3 py-1 text-xs text-foreground",
									children: item
								}, item))
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-12 mb-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-surface p-8 border border-border",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ jsx(Terminal, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-light",
								children: t.projectDetails.technicalOverview
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light",
							children: technicalDetails
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-surface p-8 border border-border",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-light",
								children: t.projectDetails.marketingOverview
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light",
							children: marketingDetails
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row gap-4 border-t border-border pt-12",
					children: [project.github && /* @__PURE__ */ jsxs("a", {
						href: project.github,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center justify-between px-6 py-4 kg-action-primary transition-colors w-full sm:w-64",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: t.projectDetails.viewSource
						}), /* @__PURE__ */ jsx(Github, { className: "w-5 h-5" })]
					}), project.link && /* @__PURE__ */ jsxs("a", {
						href: project.link,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors w-full sm:w-64",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: t.projectDetails.liveDemo
						}), /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/data/completedProjects.ts
var completedProjects = { items: [
	{
		"id": "ref-atelier",
		"title": "Ref Atelier",
		"description": {
			"en": "Modern corporate portfolio and digital reference showcase platform.",
			"tr": "Modern kurumsal portfolyo ve dijital referans sergileme platformu.",
			"de": "Moderne Unternehmensportfolio- und digitale Referenzplattform.",
			"ja": "モダンな企業ポートフォリオとデジタル実績紹介のためのプラットフォームです。",
			"zh-CN": "现代企业作品集与数字案例展示平台。",
			"es": "Plataforma moderna de portafolio corporativo y muestra de referencias digitales.",
			"fr": "Plateforme moderne de portfolio d’entreprise et de présentation de références numériques.",
			"ko": "현대적인 기업 포트폴리오 및 디지털 레퍼런스 쇼케이스 플랫폼입니다."
		},
		"longDescription": {
			"en": "Ref Atelier is a premium corporate portfolio platform designed to showcase digital references and past projects with an elegant, modern interface. It features a fully responsive design, optimized media loading, and a seamless user experience tailored for creative agencies and corporate entities.",
			"tr": "Ref Atelier, dijital referansları ve geçmiş projeleri zarif ve modern bir arayüzle sergilemek için tasarlanmış premium bir kurumsal portfolyo platformudur. Tamamen duyarlı bir tasarıma, optimize edilmiş medya yüklemesine ve yaratıcı ajanslar ile kurumsal şirketler için özel olarak tasarlanmış kusursuz bir kullanıcı deneyimine sahiptir.",
			"de": "Ref Atelier ist eine hochwertige Unternehmensportfolio-Plattform, die digitale Referenzen und abgeschlossene Projekte in einer eleganten, modernen Oberflaeche praesentiert. Sie bietet responsives Design, optimiertes Medienladen und eine fluessige Nutzererfahrung fuer Kreativagenturen und Unternehmen.",
			"ja": "Ref Atelier は、デジタル実績や過去のプロジェクトを洗練されたモダンなインターフェースで紹介するための、プレミアムな企業ポートフォリオプラットフォームです。完全レスポンシブ設計、最適化されたメディア読み込み、クリエイティブエージェンシーや企業向けのスムーズなユーザー体験を備えています。",
			"zh-CN": "Ref Atelier 是一个高端企业作品集平台，用优雅现代的界面展示数字案例与过往项目。它具备完整响应式设计、优化的媒体加载，以及面向创意机构和企业客户的流畅用户体验。",
			"es": "Ref Atelier es una plataforma premium de portafolio corporativo diseñada para mostrar referencias digitales y proyectos anteriores con una interfaz elegante y moderna. Incluye diseño totalmente responsive, carga multimedia optimizada y una experiencia de usuario fluida para agencias creativas y empresas.",
			"fr": "Ref Atelier est une plateforme premium de portfolio d’entreprise conçue pour présenter des références numériques et des projets passés dans une interface élégante et moderne. Elle offre un design entièrement responsive, un chargement média optimisé et une expérience fluide pour les agences créatives et les entreprises.",
			"ko": "Ref Atelier는 디지털 레퍼런스와 과거 프로젝트를 세련되고 현대적인 인터페이스로 보여주기 위해 설계된 프리미엄 기업 포트폴리오 플랫폼입니다. 완전 반응형 디자인, 최적화된 미디어 로딩, 크리에이티브 에이전시와 기업을 위한 매끄러운 사용자 경험을 제공합니다."
		},
		"url": "https://refatelier.com/index.html",
		"tags": [
			"Corporate",
			"Portfolio",
			"UI/UX"
		],
		"accounts": []
	},
	{
		"id": "dershane-management",
		"title": "Dershane Management",
		"description": {
			"en": "Comprehensive educational institution management system including student tracking and administrative tools.",
			"tr": "Öğrenci takibi ve idari araçları içeren kapsamlı eğitim kurumu (dershane) yönetim sistemi.",
			"de": "Umfassendes Managementsystem fuer Bildungseinrichtungen mit Schuelerverfolgung und Verwaltungstools.",
			"ja": "生徒管理と管理業務ツールを備えた、教育機関向けの包括的な管理システムです。",
			"zh-CN": "面向教育机构的综合管理系统，包含学生跟踪和行政管理工具。",
			"es": "Sistema integral de gestión para instituciones educativas con seguimiento de estudiantes y herramientas administrativas.",
			"fr": "Système complet de gestion d’établissement éducatif avec suivi des élèves et outils administratifs.",
			"ko": "학생 추적과 관리 도구를 포함한 종합 교육기관 관리 시스템입니다."
		},
		"longDescription": {
			"en": "A full-featured management system tailored for educational institutions. It provides tools for student enrollment, attendance tracking, grade management, and administrative reporting. The platform streamlines daily operations and improves communication between staff and students.",
			"tr": "Eğitim kurumları için özel olarak tasarlanmış tam özellikli bir yönetim sistemi. Öğrenci kaydı, yoklama takibi, not yönetimi ve idari raporlama için araçlar sunar. Platform, günlük operasyonları kolaylaştırır ve personel ile öğrenciler arasındaki iletişimi geliştirir.",
			"de": "Ein voll ausgestattetes Managementsystem fuer Bildungseinrichtungen. Es bietet Werkzeuge fuer Einschreibung, Anwesenheitskontrolle, Notenverwaltung und administrative Berichte. Die Plattform vereinfacht den Tagesbetrieb und verbessert die Kommunikation zwischen Mitarbeitenden und Lernenden.",
			"ja": "教育機関向けに設計された多機能な管理システムです。生徒登録、出席管理、成績管理、管理レポート作成のためのツールを提供します。日々の業務を効率化し、スタッフと生徒間のコミュニケーションを改善します。",
			"zh-CN": "一个为教育机构定制的完整管理系统。它提供学生注册、考勤跟踪、成绩管理和行政报告工具，帮助简化日常运营并提升教职员工与学生之间的沟通效率。",
			"es": "Sistema de gestión completo diseñado para instituciones educativas. Ofrece herramientas para inscripción de estudiantes, control de asistencia, gestión de calificaciones e informes administrativos. La plataforma simplifica las operaciones diarias y mejora la comunicación entre personal y estudiantes.",
			"fr": "Système de gestion complet conçu pour les établissements éducatifs. Il fournit des outils pour les inscriptions, le suivi des présences, la gestion des notes et les rapports administratifs. La plateforme simplifie les opérations quotidiennes et améliore la communication entre le personnel et les élèves.",
			"ko": "교육기관을 위해 설계된 완전한 관리 시스템입니다. 학생 등록, 출석 추적, 성적 관리, 행정 보고 도구를 제공하며 일상 운영을 단순화하고 직원과 학생 간 커뮤니케이션을 개선합니다."
		},
		"url": "https://trfont.com/adana/",
		"tags": [
			"Education",
			"Management",
			"SaaS"
		],
		"accounts": [{
			"email": "admin@dershane.com",
			"role": "Admin"
		}]
	},
	{
		"id": "technova-hr",
		"title": "TechNova HR",
		"description": {
			"en": "Enterprise human resources management portal with multi-role employee access.",
			"tr": "Çoklu rol erişimine sahip kurumsal insan kaynakları (İK) yönetim portalı.",
			"de": "Enterprise-HR-Portal mit rollenbasiertem Zugriff fuer Mitarbeitende.",
			"ja": "複数ロールの従業員アクセスに対応した、エンタープライズ向け人事管理ポータルです。",
			"zh-CN": "支持多角色员工访问的企业人力资源管理门户。",
			"es": "Portal empresarial de gestión de recursos humanos con acceso multirol para empleados.",
			"fr": "Portail RH d’entreprise avec accès multi-rôles pour les employés.",
			"ko": "다중 역할 직원 접근을 지원하는 엔터프라이즈 인사 관리 포털입니다."
		},
		"longDescription": {
			"en": "TechNova HR is an enterprise-grade Human Resources management portal. It supports multi-role access control, allowing administrators to manage employee records, leave requests, and performance reviews, while providing employees with a self-service portal to view their data and submit requests.",
			"tr": "TechNova İK, kurumsal düzeyde bir İnsan Kaynakları yönetim portalıdır. Çoklu rol erişim kontrolünü destekleyerek, yöneticilerin çalışan kayıtlarını, izin taleplerini ve performans değerlendirmelerini yönetmesine olanak tanırken, çalışanlara verilerini görüntülemeleri ve talepte bulunmaları için bir self-servis portalı sunar.",
			"de": "TechNova HR ist ein HR-Management-Portal auf Unternehmensniveau. Es unterstuetzt rollenbasierte Zugriffskontrolle, sodass Administratoren Mitarbeiterdaten, Urlaubsantraege und Leistungsbewertungen verwalten koennen, waehrend Mitarbeitende ihre Daten einsehen und Anfragen ueber ein Self-Service-Portal stellen.",
			"ja": "TechNova HR は、エンタープライズグレードの人事管理ポータルです。複数ロールのアクセス制御に対応しており、管理者は従業員情報、休暇申請、評価を管理できます。従業員はセルフサービスポータルから自分のデータを確認し、申請を送信できます。",
			"zh-CN": "TechNova HR 是一个企业级人力资源管理门户。它支持多角色访问控制，使管理员能够管理员工记录、请假申请和绩效评估，同时为员工提供自助门户，用于查看个人数据并提交申请。",
			"es": "TechNova HR es un portal de gestión de Recursos Humanos de nivel empresarial. Admite control de acceso multirol para que los administradores gestionen registros de empleados, solicitudes de permisos y evaluaciones de desempeño, mientras los empleados consultan sus datos y envían solicitudes desde un portal de autoservicio.",
			"fr": "TechNova HR est un portail de gestion des ressources humaines de niveau entreprise. Il prend en charge le contrôle d’accès multi-rôles, permettant aux administrateurs de gérer les dossiers employés, les demandes de congé et les évaluations de performance, tout en offrant aux employés un portail en libre-service.",
			"ko": "TechNova HR은 엔터프라이즈급 인사 관리 포털입니다. 다중 역할 접근 제어를 지원해 관리자가 직원 기록, 휴가 요청, 성과 평가를 관리할 수 있고, 직원은 셀프서비스 포털에서 자신의 데이터를 확인하고 요청을 제출할 수 있습니다."
		},
		"url": "https://trfont.com/%C4%B1k/",
		"tags": [
			"HR",
			"Enterprise",
			"Portal"
		],
		"accounts": [
			{
				"email": "admin@technova.com.tr",
				"role": "Admin"
			},
			{
				"email": "ahmet.yilmaz@technova.com.tr",
				"role": "Employee"
			},
			{
				"email": "zeynep.sahin@technova.com.tr",
				"role": "Employee"
			},
			{
				"email": "ayse.bulut@technova.com.tr",
				"role": "Employee"
			},
			{
				"email": "mehmet.kaya@technova.com.tr",
				"role": "Employee"
			}
		]
	},
	{
		"id": "algo-egitim",
		"title": "Algo Eğitim",
		"description": {
			"en": "Advanced algorithmic education platform and student learning dashboard.",
			"tr": "Gelişmiş algoritmik eğitim platformu ve öğrenci öğrenim paneli.",
			"de": "Fortgeschrittene algorithmische Lernplattform mit Schueler-Dashboard.",
			"ja": "高度なアルゴリズム教育プラットフォームと学習者向けダッシュボードです。",
			"zh-CN": "高级算法教育平台与学生学习仪表板。",
			"es": "Plataforma avanzada de educación algorítmica y panel de aprendizaje para estudiantes.",
			"fr": "Plateforme avancée d’apprentissage algorithmique avec tableau de bord étudiant.",
			"ko": "고급 알고리즘 교육 플랫폼 및 학생 학습 대시보드입니다."
		},
		"longDescription": {
			"en": "Algo Eğitim is an advanced educational platform focused on algorithmic learning and programming. It features a comprehensive student dashboard, progress tracking, and interactive learning modules designed to enhance coding skills and logical thinking.",
			"tr": "Algo Eğitim, algoritmik öğrenme ve programlamaya odaklanan gelişmiş bir eğitim platformudur. Kodlama becerilerini ve mantıksal düşünmeyi geliştirmek için tasarlanmış kapsamlı bir öğrenci paneli, ilerleme takibi ve etkileşimli öğrenme modülleri içerir.",
			"de": "Algo Egitim ist eine fortgeschrittene Bildungsplattform fuer algorithmisches Lernen und Programmierung. Sie bietet ein umfassendes Schueler-Dashboard, Fortschrittsverfolgung und interaktive Lernmodule zur Foerderung von Programmierfaehigkeiten und logischem Denken.",
			"ja": "Algo Egitim は、アルゴリズム学習とプログラミングに焦点を当てた高度な教育プラットフォームです。包括的な学習者ダッシュボード、進捗管理、コーディングスキルと論理的思考を高めるインタラクティブな学習モジュールを備えています。",
			"zh-CN": "Algo Egitim 是一个专注于算法学习和编程的高级教育平台。它包含完整的学生仪表板、进度跟踪和互动学习模块，旨在提升编程能力与逻辑思维。",
			"es": "Algo Eğitim es una plataforma educativa avanzada centrada en el aprendizaje algorítmico y la programación. Incluye un panel integral para estudiantes, seguimiento de progreso y módulos interactivos diseñados para mejorar habilidades de programación y pensamiento lógico.",
			"fr": "Algo Eğitim est une plateforme éducative avancée axée sur l’apprentissage algorithmique et la programmation. Elle comprend un tableau de bord étudiant complet, un suivi de progression et des modules interactifs conçus pour renforcer les compétences de codage et la pensée logique.",
			"ko": "Algo Eğitim은 알고리즘 학습과 프로그래밍에 초점을 맞춘 고급 교육 플랫폼입니다. 종합 학생 대시보드, 진행 상황 추적, 코딩 능력과 논리적 사고를 높이기 위한 인터랙티브 학습 모듈을 제공합니다."
		},
		"url": "https://trfont.com/ada/",
		"tags": [
			"EdTech",
			"Algorithms",
			"Dashboard"
		],
		"accounts": [{
			"email": "admin@example.com",
			"role": "Admin"
		}]
	}
] }.items;
//#endregion
//#region src/pages/CompletedProjects.tsx
var CompletedProjects_exports = /* @__PURE__ */ __exportAll({ default: () => CompletedProjects });
function CompletedProjects() {
	const { language, t } = useLanguage();
	const navigate = (0, import_dist.useNavigate)();
	const projectPath = (id) => localizePath(`/completed-projects/${id}/`, language);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: t.seo.completedProjects.title,
			description: t.seo.completedProjects.description,
			keywords: t.seo.completedProjects.keywords,
			path: "/completed-projects/"
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-16 max-w-3xl",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase",
						children: t.completedProjects.badge
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-5xl md:text-6xl font-light mb-6 text-foreground",
						children: [
							t.completedProjects.title1,
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "font-semibold",
								children: t.completedProjects.title2
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-foreground text-xl leading-relaxed font-light",
						children: t.completedProjects.desc
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "hidden md:grid grid-cols-12 gap-4 py-4 border-b-2 border-foreground bg-surface text-sm font-semibold text-foreground",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "col-span-3 pl-4",
							children: t.completedProjects.colName
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-5",
							children: t.completedProjects.colDesc
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-3",
							children: t.completedProjects.colTags
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 text-right pr-4",
							children: t.completedProjects.colLinks
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "divide-y divide-border",
					children: completedProjects.map((project) => /* @__PURE__ */ jsxs("div", {
						onClick: () => navigate(projectPath(project.id)),
						className: "group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 hover:bg-surface transition-colors items-start cursor-pointer",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "md:col-span-3 pl-4",
								children: [/* @__PURE__ */ jsx(import_dist.Link, {
									to: projectPath(project.id),
									onClick: (e) => e.stopPropagation(),
									className: "text-lg font-medium text-primary hover:underline flex items-center gap-2",
									children: project.title
								}), /* @__PURE__ */ jsx("p", {
									className: "md:hidden text-sm text-foreground/80 mt-2 font-light",
									children: localizedText(project.description, language)
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "hidden md:block md:col-span-5 text-base text-foreground/80 pr-4 font-light",
								children: localizedText(project.description, language)
							}),
							/* @__PURE__ */ jsx("div", {
								className: "md:col-span-3 flex flex-wrap gap-2 mt-4 md:mt-0",
								children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", {
									className: "px-3 py-1 text-xs bg-border text-foreground",
									children: tag
								}, tag))
							}),
							/* @__PURE__ */ jsx("div", {
								className: "md:col-span-1 flex items-center justify-start md:justify-end gap-4 mt-4 md:mt-0 pr-4",
								children: /* @__PURE__ */ jsx("a", {
									href: project.url,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: (e) => e.stopPropagation(),
									className: "text-primary hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium",
									title: t.completedProjects.visit,
									"aria-label": `${project.title}: ${t.completedProjects.visit}`,
									children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })
								})
							})
						]
					}, project.id))
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/CompletedProjectDetails.tsx
var CompletedProjectDetails_exports = /* @__PURE__ */ __exportAll({ default: () => CompletedProjectDetails });
function CompletedProjectDetails() {
	const { id } = (0, import_dist.useParams)();
	const { language, t } = useLanguage();
	const project = completedProjects.find((p) => p.id === id);
	if (!project) return /* @__PURE__ */ jsx(import_dist.Navigate, {
		to: "/not-found/",
		replace: true
	});
	const description = localizedText(project.description, language);
	const longDescription = localizedText(project.longDescription, language);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${project.title} - Kernel Guard`,
			description,
			keywords: `${project.tags.join(", ")}, Kernel Guard, secure web project, case study`,
			path: `/completed-projects/${project.id}/`,
			noIndex: project.accounts.length > 0
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs(import_dist.Link, {
				to: localizePath("/completed-projects/", language),
				className: "inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-wider",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), t.nav.completedProjects]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-2 space-y-12",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-4xl md:text-5xl font-light text-foreground mb-6",
							children: project.title
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-3 mb-8",
							children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", {
								className: "px-3 py-1 text-xs font-mono bg-surface border border-border text-foreground",
								children: tag
							}, tag))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xl text-foreground/80 font-light leading-relaxed",
							children: longDescription
						})
					] }), project.image && /* @__PURE__ */ jsx("div", {
						className: "w-full overflow-hidden border border-border",
						children: /* @__PURE__ */ jsx("img", {
							src: project.image,
							alt: project.title,
							className: "w-full h-auto object-cover max-h-[600px]"
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-surface border border-border p-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-mono text-foreground/50 uppercase tracking-wider mb-6",
							children: t.completedProjects.links
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [project.url && /* @__PURE__ */ jsxs("a", {
								href: project.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-between p-4 kg-action-primary transition-colors group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: t.completedProjects.visit
								}), /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })]
							}), project.github && /* @__PURE__ */ jsxs("a", {
								href: project.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-between p-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: t.projectDetails.viewSource
								}), /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-surface border border-border p-6 text-sm",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-foreground/50 mb-6 uppercase tracking-wider text-xs font-mono",
							children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: t.completedProjects.credentials })]
						}), project.accounts.length === 0 ? /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-foreground/70 italic",
							children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: t.completedProjects.noAccount })]
						}) : /* @__PURE__ */ jsx("div", {
							className: "space-y-4",
							children: project.accounts.map((acc, accIdx) => /* @__PURE__ */ jsxs("div", {
								className: "bg-background border border-border p-4 flex flex-col gap-3 hover:border-primary/50 transition-colors",
								children: [acc.role && /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5 text-xs text-primary uppercase tracking-wider font-mono",
									children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5" }), acc.role]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-foreground/40 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", {
										className: "text-foreground font-mono break-all",
										children: acc.email
									})]
								})]
							}, accIdx))
						})]
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/SecureFrontend.tsx
var SecureFrontend_exports = /* @__PURE__ */ __exportAll({ default: () => SecureFrontend });
function SecureFrontend() {
	const { t, language } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${t.home.features.frontend.title} - Kernel Guard`,
			description: t.home.features.frontend.desc,
			path: "/services/secure-frontend/",
			schema: buildServiceSchema({
				name: t.home.features.frontend.title,
				description: t.home.features.frontend.desc,
				path: "/services/secure-frontend/",
				language,
				serviceType: "Secure Frontend Engineering"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(import_dist.Link, {
					to: "/",
					className: "inline-flex items-center text-sm font-medium text-primary hover:underline mb-8",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back to Home"]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-light mb-6 text-foreground",
					children: t.home.features.frontend.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-foreground/80 font-light leading-relaxed mb-12",
					children: t.home.features.frontend.desc
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-12",
					children: [/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium mb-4",
							children: "Our Approach"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light mb-4",
							children: "At Kernel Guard, we believe that security should never compromise user experience. Our frontend architectures are built using modern frameworks like React, ensuring lightning-fast, responsive interfaces."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light",
							children: "We implement strict Content Security Policies (CSP), sanitize all user inputs to prevent Cross-Site Scripting (XSS), and utilize secure authentication flows to protect client-side state."
						})
					] }), /* @__PURE__ */ jsxs("section", {
						className: "bg-surface p-8 border-l-4 border-primary",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium mb-4",
							children: "Featured Projects"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-medium text-primary mb-2",
								children: "Ref Atelier"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground/80 text-sm font-light",
								children: "A modern corporate portfolio platform showcasing our ability to deliver highly polished, secure, and accessible user interfaces. Built with React and fortified against common web vulnerabilities."
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-medium text-primary mb-2",
								children: "Dershane Management"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground/80 text-sm font-light",
								children: "A comprehensive SaaS platform requiring complex state management and secure role-based UI rendering to ensure students and administrators only see what they are authorized to access."
							})] })]
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/HardenedBackend.tsx
var HardenedBackend_exports = /* @__PURE__ */ __exportAll({ default: () => HardenedBackend });
function HardenedBackend() {
	const { t, language } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${t.home.features.backend.title} - Kernel Guard`,
			description: t.home.features.backend.desc,
			path: "/services/hardened-backend/",
			schema: buildServiceSchema({
				name: t.home.features.backend.title,
				description: t.home.features.backend.desc,
				path: "/services/hardened-backend/",
				language,
				serviceType: "Hardened Backend Architecture"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(import_dist.Link, {
					to: "/",
					className: "inline-flex items-center text-sm font-medium text-primary hover:underline mb-8",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back to Home"]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-light mb-6 text-foreground",
					children: t.home.features.backend.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-foreground/80 font-light leading-relaxed mb-12",
					children: t.home.features.backend.desc
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-12",
					children: [/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium mb-4",
							children: "Our Approach"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light mb-4",
							children: "A secure application requires a fortress-like backend. We design scalable server architectures and APIs strictly adhering to zero-trust principles. Every request is authenticated, authorized, and validated."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light",
							children: "From implementing rate limiting and DDoS protection to utilizing memory-safe languages like Rust and C++ for critical infrastructure, our backends are engineered to withstand sophisticated attacks."
						})
					] }), /* @__PURE__ */ jsxs("section", {
						className: "bg-surface p-8 border-l-4 border-primary",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium mb-4",
							children: "Featured Projects"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-medium text-primary mb-2",
								children: "Aegis BPF CO-RE Enforcement"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground/80 text-sm font-light",
								children: "A cutting-edge prototype developed in C++ using eBPF technology. It provides low-overhead, kernel-level security enforcement, demonstrating our capability to secure systems at the lowest possible level."
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-medium text-primary mb-2",
								children: "TechNova HR Portal"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground/80 text-sm font-light",
								children: "An enterprise human resources management system featuring a hardened backend API with multi-role employee access, ensuring strict data isolation and secure authentication flows."
							})] })]
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/DataProtection.tsx
var DataProtection_exports = /* @__PURE__ */ __exportAll({ default: () => DataProtection });
function DataProtection() {
	const { t, language } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${t.home.features.data.title} - Kernel Guard`,
			description: t.home.features.data.desc,
			path: "/services/data-protection/",
			schema: buildServiceSchema({
				name: t.home.features.data.title,
				description: t.home.features.data.desc,
				path: "/services/data-protection/",
				language,
				serviceType: "Data Protection & Cryptography"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(import_dist.Link, {
					to: "/",
					className: "inline-flex items-center text-sm font-medium text-primary hover:underline mb-8",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back to Home"]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-light mb-6 text-foreground",
					children: t.home.features.data.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-foreground/80 font-light leading-relaxed mb-12",
					children: t.home.features.data.desc
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-12",
					children: [/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium mb-4",
							children: "Our Approach"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light mb-4",
							children: "Data is your most valuable asset. We implement state-of-the-art encryption both at rest and in transit. Our database practices ensure that sensitive user information remains confidential and tamper-proof."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light",
							children: "We go beyond standard encryption by exploring and implementing advanced cryptographic techniques, ensuring that the systems we build today remain secure against the computational threats of tomorrow."
						})
					] }), /* @__PURE__ */ jsxs("section", {
						className: "bg-surface p-8 border-l-4 border-primary",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium mb-4",
							children: "Featured Projects"
						}), /* @__PURE__ */ jsx("div", {
							className: "space-y-6",
							children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-medium text-primary mb-2",
								children: "Post-Quantum Messaging App"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground/80 text-sm font-light",
								children: "A secure messaging application implemented in Rust. It utilizes NIST-approved post-quantum cryptographic algorithms (like CRYSTALS-Kyber) to secure message exchanges against future attacks from quantum computers."
							})] })
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/HighPerformance.tsx
var HighPerformance_exports = /* @__PURE__ */ __exportAll({ default: () => HighPerformance });
function HighPerformance() {
	const { t, language } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${t.home.features.performance.title} - Kernel Guard`,
			description: t.home.features.performance.desc,
			path: "/services/high-performance/",
			schema: buildServiceSchema({
				name: t.home.features.performance.title,
				description: t.home.features.performance.desc,
				path: "/services/high-performance/",
				language,
				serviceType: "High Performance Web Applications"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(import_dist.Link, {
					to: "/",
					className: "inline-flex items-center text-sm font-medium text-primary hover:underline mb-8",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back to Home"]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-light mb-6 text-foreground",
					children: t.home.features.performance.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-foreground/80 font-light leading-relaxed mb-12",
					children: t.home.features.performance.desc
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-12",
					children: [/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium mb-4",
							children: "Our Approach"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light mb-4",
							children: "Security should not come at the cost of speed. We optimize web applications to deliver lightning-fast load times while maintaining rigorous security checks."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed font-light",
							children: "By leveraging efficient algorithms, edge computing, and optimized asset delivery, we ensure that our platforms can handle high-throughput workloads—from complex AI calculations to real-time data processing—without breaking a sweat."
						})
					] }), /* @__PURE__ */ jsxs("section", {
						className: "bg-surface p-8 border-l-4 border-primary",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium mb-4",
							children: "Featured Projects"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-medium text-primary mb-2",
								children: "CathodeX"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground/80 text-sm font-light",
								children: "An AI-powered material screening platform. It leverages high-throughput screening algorithms and Graph Neural Networks (GNNs) in PyTorch to rapidly predict battery material properties, drastically reducing discovery time."
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-medium text-primary mb-2",
								children: "Algo Eğitim"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground/80 text-sm font-light",
								children: "An advanced algorithmic education platform featuring a high-performance student learning dashboard that processes and visualizes complex educational metrics in real-time."
							})] })]
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/Services.tsx
var Services_exports = /* @__PURE__ */ __exportAll({ default: () => Services });
var iconMap = {
	layout: /* @__PURE__ */ jsx(PanelsTopLeft, { className: "w-8 h-8" }),
	shield: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8" }),
	code: /* @__PURE__ */ jsx(Code, { className: "w-8 h-8" }),
	globe: /* @__PURE__ */ jsx(Globe, { className: "w-8 h-8" }),
	box: /* @__PURE__ */ jsx(Box, { className: "w-8 h-8" }),
	lock: /* @__PURE__ */ jsx(Lock, { className: "w-8 h-8" }),
	cloud: /* @__PURE__ */ jsx(Cloud, { className: "w-8 h-8" }),
	server: /* @__PURE__ */ jsx(Server, { className: "w-8 h-8" }),
	database: /* @__PURE__ */ jsx(Database, { className: "w-8 h-8" })
};
function Services() {
	const { language, t } = useLanguage();
	const growthCopy = servicesGrowthCopy[language];
	const localizedGrowthServices = growthServicePages.map((service) => localizeGrowthServicePage(service, language));
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-20",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: t.seo.services.title,
			description: t.seo.services.description,
			keywords: t.seo.services.keywords
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-3xl mx-auto mb-20",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-5xl font-light text-foreground mb-6",
						children: t.servicesPage.title
					}), /* @__PURE__ */ jsx("p", {
						className: "text-lg md:text-xl text-foreground/70 font-light leading-relaxed",
						children: t.servicesPage.subtitle
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20",
					children: t.servicesPage.services.map((service, index) => /* @__PURE__ */ jsxs("div", {
						className: "group relative block h-full p-8 bg-surface border border-border hover:border-primary/50 transition-colors overflow-hidden rounded-sm",
						children: [/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
							children: /* @__PURE__ */ jsx("div", { className: "absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative z-10 flex flex-col h-full",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-8 text-primary",
									children: iconMap[service.icon]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl font-medium mb-4 text-foreground",
									children: service.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-foreground/70 text-base leading-relaxed font-light flex-grow",
									children: service.desc
								})
							]
						})]
					}, index))
				}),
				/* @__PURE__ */ jsx("section", {
					className: "mb-32 border-t border-border pt-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase",
									children: growthCopy.badge
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "text-3xl md:text-4xl font-light mb-5",
									children: growthCopy.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-foreground/70 leading-relaxed",
									children: growthCopy.description
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4",
							children: localizedGrowthServices.map((service) => /* @__PURE__ */ jsxs(import_dist.Link, {
								to: localizePath(`/services/${service.slug}/`, language),
								onPointerEnter: () => prefetchRoute("serviceLandingPage"),
								onFocus: () => prefetchRoute("serviceLandingPage"),
								className: "group border border-border bg-surface p-6 hover:border-primary/50 transition-colors",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-3",
										children: service.shortTitle
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm leading-relaxed text-foreground/70 mb-5",
										children: service.intent
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-2 text-sm font-medium text-primary",
										children: [growthCopy.viewService, /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							}, service.slug))
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative overflow-hidden border border-border bg-surface p-12 md:p-20 text-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 opacity-[0.03] pointer-events-none",
						style: {
							backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
							backgroundSize: "32px 32px"
						}
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative z-10 max-w-2xl mx-auto",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-3xl md:text-4xl font-light mb-6",
								children: t.servicesPage.ctaTitle
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-foreground/70 font-light mb-10",
								children: t.servicesPage.ctaDesc
							}),
							/* @__PURE__ */ jsxs("a", {
								href: mailto(SITE_EMAILS.sales),
								className: "inline-flex items-center justify-between px-8 py-4 kg-action-primary transition-colors w-full sm:w-auto min-w-[200px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: t.servicesPage.ctaButton
								}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-4" })]
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/ServiceLandingPage.tsx
var ServiceLandingPage_exports = /* @__PURE__ */ __exportAll({ default: () => ServiceLandingPage });
function ServiceLandingPage() {
	const { slug } = (0, import_dist.useParams)();
	const { language } = useLanguage();
	const copy = serviceLandingCopy[language];
	const service = getLocalizedGrowthServicePage(slug, language);
	if (!service) return /* @__PURE__ */ jsx(NotFound, {});
	const canonicalPath = localizePath(`/services/${service.slug}/`, language);
	const relatedArticles = service.relatedArticleSlugs.map((articleSlug) => getLocalizedArticle(articleSlug, language)).filter((article) => Boolean(article));
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-20",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${service.title} | Kernel Guard`,
			description: service.description,
			keywords: service.keywords,
			path: canonicalPath,
			schema: buildServiceSchema({
				name: service.title,
				description: service.description,
				path: canonicalPath,
				language,
				serviceType: service.serviceType
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }), copy.badge]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-4xl md:text-6xl font-light leading-tight text-foreground mb-6",
								children: service.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg md:text-xl text-foreground/70 font-light leading-relaxed",
								children: service.description
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4 border border-border bg-surface p-6",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-sm font-mono uppercase tracking-widest text-foreground/60 mb-4",
								children: copy.bestFit
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-foreground/75 leading-relaxed mb-6",
								children: service.intent
							}),
							/* @__PURE__ */ jsxs("a", {
								href: mailto(SITE_EMAILS.sales),
								className: "inline-flex w-full items-center justify-between px-5 py-3 kg-action-primary transition-colors",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: copy.discussService
								}), /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" })]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-light text-foreground mb-4",
							children: copy.outcomes
						}), /* @__PURE__ */ jsx("p", {
							className: "text-foreground/65 leading-relaxed",
							children: copy.outcomesDescription
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4",
						children: service.outcomes.map((outcome) => /* @__PURE__ */ jsxs("div", {
							className: "border border-border bg-surface p-5",
							children: [/* @__PURE__ */ jsx(CircleCheck, { className: "h-5 w-5 text-primary mb-5" }), /* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-foreground/75",
								children: outcome
							})]
						}, outcome))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-light text-foreground mb-4",
							children: copy.deliverables
						}), /* @__PURE__ */ jsx("p", {
							className: "text-foreground/65 leading-relaxed",
							children: copy.deliverablesDescription
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4",
							children: service.deliverables.map((deliverable) => /* @__PURE__ */ jsxs("div", {
								className: "flex gap-3 border-b border-border pb-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mt-2 h-1.5 w-1.5 shrink-0 bg-primary",
									"aria-hidden": "true"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-foreground/80 leading-relaxed",
									children: deliverable
								})]
							}, deliverable))
						})
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-light text-foreground mb-4",
							children: copy.process
						}), /* @__PURE__ */ jsx("p", {
							className: "text-foreground/65 leading-relaxed",
							children: copy.processDescription
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4",
						children: service.process.map((step, index) => /* @__PURE__ */ jsxs("div", {
							className: "border border-border bg-background p-5",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-mono text-sm text-primary mb-5",
									children: String(index + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-medium text-foreground mb-3",
									children: step.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed text-foreground/70",
									children: step.description
								})
							]
						}, step.title))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-light text-foreground mb-4",
							children: copy.evidence
						}), /* @__PURE__ */ jsx("p", {
							className: "text-foreground/65 leading-relaxed",
							children: copy.evidenceDescription
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ jsx("ul", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-4",
							children: service.proofPoints.map((point) => /* @__PURE__ */ jsx("li", {
								className: "border border-border bg-surface p-5 text-sm leading-relaxed text-foreground/75",
								children: point
							}, point))
						})
					})]
				}),
				relatedArticles.length > 0 ? /* @__PURE__ */ jsxs("section", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-light text-foreground mb-4",
							children: copy.relatedReading
						}), /* @__PURE__ */ jsx("p", {
							className: "text-foreground/65 leading-relaxed",
							children: copy.relatedReadingDescription
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-8 space-y-4",
						children: relatedArticles.map((article) => /* @__PURE__ */ jsxs(import_dist.Link, {
							to: localizePath(`/articles/${article.slug}/`, language),
							onPointerEnter: () => prefetchRoute("articlePage"),
							onFocus: () => prefetchRoute("articlePage"),
							className: "group block border border-border bg-surface p-5 hover:border-primary/50 transition-colors",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "block text-xs font-mono uppercase tracking-widest text-foreground/55 mb-3",
									children: [
										article.readingMinutes,
										" ",
										copy.minRead
									]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "block text-xl font-light text-foreground group-hover:text-primary transition-colors mb-2",
									children: article.title
								}),
								/* @__PURE__ */ jsx("span", {
									className: "block text-sm leading-relaxed text-foreground/65",
									children: article.description
								})
							]
						}, article.slug))
					})]
				}) : null,
				/* @__PURE__ */ jsx("section", {
					className: "border border-border bg-surface p-8 md:p-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-8",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-3xl font-light text-foreground mb-4",
								children: copy.ctaTitle
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground/70 leading-relaxed",
								children: copy.ctaDescription
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "md:col-span-4",
							children: /* @__PURE__ */ jsxs("a", {
								href: mailto(SITE_EMAILS.sales),
								className: "inline-flex w-full items-center justify-between px-6 py-4 kg-action-primary transition-colors",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: copy.emailSales
								}), /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							})
						})]
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/Articles.tsx
var Articles_exports = /* @__PURE__ */ __exportAll({ default: () => Articles });
function Articles() {
	const { language } = useLanguage();
	const copy = articleIndexCopy[language];
	const localizedArticles = articles.map((article) => localizeArticle(article, language));
	const localizedServices = growthServicePages.map((service) => localizeGrowthServicePage(service, language));
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-20",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: copy.seoTitle,
			description: copy.seoDescription,
			keywords: copy.seoKeywords,
			path: localizePath("/articles/", language)
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "max-w-4xl mb-16",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase",
						children: copy.badge
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-6xl font-light leading-tight text-foreground mb-6",
						children: copy.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg md:text-xl text-foreground/70 font-light leading-relaxed",
						children: copy.description
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-8 space-y-6",
					children: localizedArticles.map((article) => /* @__PURE__ */ jsxs("article", {
						className: "border border-border bg-surface p-6 md:p-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-5 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-foreground/55",
								children: [/* @__PURE__ */ jsx("span", { children: formatLocalizedDate(article.updatedAt, language, "short") }), /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
										article.readingMinutes,
										" ",
										copy.minRead
									]
								})]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-light text-foreground mb-4",
								children: /* @__PURE__ */ jsx(import_dist.Link, {
									to: localizePath(`/articles/${article.slug}/`, language),
									onPointerEnter: () => prefetchRoute("articlePage"),
									onFocus: () => prefetchRoute("articlePage"),
									className: "hover:text-primary transition-colors",
									children: article.title
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-base text-foreground/70 leading-relaxed mb-6",
								children: article.description
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2 mb-6",
								children: article.tags.slice(0, 4).map((tag) => /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 border border-border px-2.5 py-1 text-xs text-foreground/65",
									children: [/* @__PURE__ */ jsx(Tags, { className: "h-3 w-3" }), tag]
								}, tag))
							}),
							/* @__PURE__ */ jsxs(import_dist.Link, {
								to: localizePath(`/articles/${article.slug}/`, language),
								onPointerEnter: () => prefetchRoute("articlePage"),
								onFocus: () => prefetchRoute("articlePage"),
								className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors",
								children: [copy.readArticle, /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, article.slug))
				}), /* @__PURE__ */ jsx("aside", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "sticky top-28 border border-border bg-background p-6",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5",
							children: copy.relatedServices
						}), /* @__PURE__ */ jsx("div", {
							className: "space-y-4",
							children: localizedServices.slice(0, 5).map((service) => /* @__PURE__ */ jsxs(import_dist.Link, {
								to: localizePath(`/services/${service.slug}/`, language),
								onPointerEnter: () => prefetchRoute("serviceLandingPage"),
								onFocus: () => prefetchRoute("serviceLandingPage"),
								className: "group block border-l border-border pl-4 hover:border-primary transition-colors",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-sm font-medium text-foreground group-hover:text-primary transition-colors",
									children: service.shortTitle
								}), /* @__PURE__ */ jsx("span", {
									className: "mt-1 block text-sm text-foreground/60 leading-relaxed",
									children: service.description
								})]
							}, service.slug))
						})]
					})
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/ArticlePage.tsx
var ArticlePage_exports = /* @__PURE__ */ __exportAll({ default: () => ArticlePage });
function ArticlePage() {
	const { slug } = (0, import_dist.useParams)();
	const { language } = useLanguage();
	const copy = articleDetailCopy[language];
	const article = getLocalizedArticle(slug, language);
	if (!article) return /* @__PURE__ */ jsx(NotFound, {});
	const canonicalPath = localizePath(`/articles/${article.slug}/`, language);
	const relatedServices = article.relatedServiceSlugs.map((serviceSlug) => getLocalizedGrowthServicePage(serviceSlug, language)).filter((service) => Boolean(service));
	return /* @__PURE__ */ jsxs("article", {
		className: "min-h-screen bg-background pt-32 pb-20",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${article.title} | Kernel Guard`,
			description: article.description,
			keywords: article.tags.join(", "),
			path: canonicalPath,
			type: "article",
			schema: buildArticleSchema({
				title: article.title,
				description: article.description,
				path: canonicalPath,
				language,
				publishedAt: article.publishedAt,
				updatedAt: article.updatedAt,
				keywords: article.tags
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "max-w-4xl mb-14",
				children: [
					/* @__PURE__ */ jsxs(import_dist.Link, {
						to: localizePath("/articles/", language),
						onPointerEnter: () => prefetchRoute("articles"),
						onFocus: () => prefetchRoute("articles"),
						className: "inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-8",
						children: [/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 rotate-180" }), copy.articles]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mb-6 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-foreground/55",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(CalendarDays, { className: "h-3.5 w-3.5" }),
								copy.updated,
								" ",
								formatLocalizedDate(article.updatedAt, language)
							]
						}), /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
								article.readingMinutes,
								" ",
								copy.minRead
							]
						})]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-6xl font-light leading-tight text-foreground mb-6",
						children: article.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg md:text-xl text-foreground/70 font-light leading-relaxed",
						children: article.description
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ jsxs("section", {
							className: "border-y border-border py-8 mb-10",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5",
								children: copy.keyPoints
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-3",
								children: article.summary.map((point) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-3 text-foreground/80 leading-relaxed",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mt-2 h-1.5 w-1.5 shrink-0 bg-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ jsx("span", { children: point })]
								}, point))
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "space-y-12",
							children: article.sections.map((section) => /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl md:text-3xl font-light text-foreground mb-5",
								children: section.heading
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-5 text-base md:text-lg text-foreground/75 leading-relaxed font-light",
								children: [section.paragraphs?.map((paragraph) => /* @__PURE__ */ jsx("p", { children: paragraph }, paragraph)), section.bullets ? /* @__PURE__ */ jsx("ul", {
									className: "space-y-3 text-base md:text-lg",
									children: section.bullets.map((bullet) => /* @__PURE__ */ jsxs("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "mt-3 h-1.5 w-1.5 shrink-0 bg-primary",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsx("span", { children: bullet })]
									}, bullet))
								}) : null]
							})] }, section.heading))
						}),
						article.references.length > 0 ? /* @__PURE__ */ jsxs("section", {
							className: "mt-14 border-t border-border pt-8",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5",
								children: copy.references
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-3",
								children: article.references.map((reference) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: reference.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors",
									children: [reference.label, /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })]
								}) }, reference.url))
							})]
						}) : null
					]
				}), /* @__PURE__ */ jsx("aside", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "sticky top-28 space-y-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "border border-border bg-surface p-6",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5",
								children: copy.tags
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: article.tags.map((tag) => /* @__PURE__ */ jsx("span", {
									className: "border border-border px-2.5 py-1 text-xs text-foreground/70",
									children: tag
								}, tag))
							})]
						}), relatedServices.length > 0 ? /* @__PURE__ */ jsxs("div", {
							className: "border border-border bg-surface p-6",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5",
								children: copy.services
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: relatedServices.map((service) => /* @__PURE__ */ jsxs(import_dist.Link, {
									to: localizePath(`/services/${service.slug}/`, language),
									onPointerEnter: () => prefetchRoute("serviceLandingPage"),
									onFocus: () => prefetchRoute("serviceLandingPage"),
									className: "group block",
									children: [/* @__PURE__ */ jsx("span", {
										className: "block text-sm font-medium text-foreground group-hover:text-primary transition-colors",
										children: service.shortTitle
									}), /* @__PURE__ */ jsx("span", {
										className: "mt-1 block text-sm text-foreground/60 leading-relaxed",
										children: service.intent
									})]
								}, service.slug))
							})]
						}) : null]
					})
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/EnterprisePage.tsx
function renderSectionItem(item) {
	if (item.startsWith("Email: ")) {
		const email = item.replace("Email: ", "");
		return /* @__PURE__ */ jsxs(Fragment, { children: [
			"Email:",
			" ",
			/* @__PURE__ */ jsx("a", {
				className: "text-primary hover:underline",
				href: mailto(email),
				children: email
			})
		] });
	}
	return item;
}
function EnterprisePage({ pageKey }) {
	const { language } = useLanguage();
	const page = enterprisePages[language].pages[pageKey];
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: page.seoTitle,
			description: page.seoDescription
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "max-w-3xl mb-16",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase",
							children: page.badge
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-4xl md:text-5xl font-light text-foreground mb-6",
							children: page.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg md:text-xl text-foreground/70 font-light leading-relaxed",
							children: page.description
						})
					]
				}),
				/* @__PURE__ */ jsx("section", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-16",
					children: page.facts.map((fact) => /* @__PURE__ */ jsxs("div", {
						className: "border border-border bg-surface p-6",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "font-mono text-xs uppercase text-foreground/50 mb-6",
								children: fact.label
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-3xl font-mono text-foreground mb-3",
								children: fact.value
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-foreground/70 leading-relaxed",
								children: fact.detail
							})
						]
					}, fact.label))
				}),
				/* @__PURE__ */ jsx("section", {
					className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
					children: page.sections.map((section) => /* @__PURE__ */ jsxs("article", {
						className: "border border-border bg-surface p-8",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-light text-foreground mb-4",
								children: section.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-foreground/70 leading-relaxed font-light mb-8",
								children: section.body
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-4",
								children: section.items.map((item) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 text-sm text-foreground/80",
									children: [/* @__PURE__ */ jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ jsx("span", { children: renderSectionItem(item) })]
								}, item))
							})
						]
					}, section.title))
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/Security.tsx
var Security_exports = /* @__PURE__ */ __exportAll({ default: () => Security });
function Security() {
	return /* @__PURE__ */ jsx(EnterprisePage, { pageKey: "security" });
}
//#endregion
//#region src/components/SecurityEvidence.tsx
/**
* @license
* SPDX-License-Identifier: Apache-2.0
*
* Measured security evidence: the actual security headers enforced at the edge
* (Cloudflare), plus a link for visitors to verify the grade themselves.
* "Evidence over claims" — we show the live policy, not a promise.
*/
var VERIFY_URL = "https://securityheaders.com/?q=https%3A%2F%2Fwww.kernelguard.net&followRedirects=on";
var POLICY_TOKENS = [
	"HSTS · 1y · includeSubDomains · preload",
	"CSP · script-src 'self' (no inline) · object-src 'none' · frame-ancestors 'none'",
	"X-Frame-Options: DENY",
	"X-Content-Type-Options: nosniff",
	"Referrer-Policy: strict-origin-when-cross-origin",
	"Permissions-Policy · ~20 features denied"
];
var CONTENT = {
	en: {
		eyebrow: "Security",
		heading: "Hardened at the edge.",
		subline: "Every response ships strict security headers — enforced by Cloudflare on the production domain, not just promised in a policy.",
		labels: [
			"Transport security",
			"Content Security Policy",
			"Clickjacking",
			"MIME sniffing",
			"Referrer",
			"Browser features"
		],
		verify: "Verify it yourself",
		note: "Live response headers, measured on the production domain."
	},
	tr: {
		eyebrow: "Güvenlik",
		heading: "Uçta sertleştirildi.",
		subline: "Her yanıt katı güvenlik başlıkları gönderir — bir politikada vaat edilmekle kalmaz, üretim alanında Cloudflare tarafından uygulanır.",
		labels: [
			"Taşıma güvenliği",
			"İçerik Güvenlik Politikası",
			"Tıklama hırsızlığı",
			"MIME koklama",
			"Yönlendiren",
			"Tarayıcı özellikleri"
		],
		verify: "Kendiniz doğrulayın",
		note: "Üretim alanında ölçülen canlı yanıt başlıkları."
	},
	de: {
		eyebrow: "Sicherheit",
		heading: "Am Edge gehärtet.",
		subline: "Jede Antwort liefert strenge Security-Header — von Cloudflare auf der Produktionsdomain durchgesetzt, nicht nur in einer Richtlinie versprochen.",
		labels: [
			"Transportsicherheit",
			"Content-Security-Policy",
			"Clickjacking",
			"MIME-Sniffing",
			"Referrer",
			"Browser-Funktionen"
		],
		verify: "Selbst überprüfen",
		note: "Live-Response-Header, auf der Produktionsdomain gemessen."
	},
	es: {
		eyebrow: "Seguridad",
		heading: "Reforzado en el edge.",
		subline: "Cada respuesta envía cabeceras de seguridad estrictas — aplicadas por Cloudflare en el dominio de producción, no solo prometidas en una política.",
		labels: [
			"Seguridad de transporte",
			"Política de seguridad de contenido",
			"Clickjacking",
			"Sniffing de MIME",
			"Referente",
			"Funciones del navegador"
		],
		verify: "Verifícalo tú mismo",
		note: "Cabeceras de respuesta en vivo, medidas en el dominio de producción."
	},
	fr: {
		eyebrow: "Sécurité",
		heading: "Renforcé en périphérie.",
		subline: "Chaque réponse envoie des en-têtes de sécurité stricts — appliqués par Cloudflare sur le domaine de production, pas seulement promis dans une politique.",
		labels: [
			"Sécurité du transport",
			"Politique de sécurité du contenu",
			"Détournement de clic",
			"Sniffing MIME",
			"Référent",
			"Fonctions du navigateur"
		],
		verify: "Vérifiez par vous-même",
		note: "En-têtes de réponse en direct, mesurés sur le domaine de production."
	},
	ja: {
		eyebrow: "セキュリティ",
		heading: "エッジで堅牢化。",
		subline: "すべてのレスポンスは厳格なセキュリティヘッダーを送出します — ポリシー文書での約束ではなく、本番ドメインで Cloudflare により強制されます。",
		labels: [
			"転送のセキュリティ",
			"コンテンツセキュリティポリシー",
			"クリックジャッキング",
			"MIME スニッフィング",
			"リファラー",
			"ブラウザ機能"
		],
		verify: "自分で検証する",
		note: "本番ドメインで測定した実際のレスポンスヘッダー。"
	},
	"zh-CN": {
		eyebrow: "安全",
		heading: "在边缘加固。",
		subline: "每个响应都发送严格的安全标头——由 Cloudflare 在生产域上强制执行，而不仅仅是写在策略里。",
		labels: [
			"传输安全",
			"内容安全策略",
			"点击劫持",
			"MIME 嗅探",
			"来源引用",
			"浏览器功能"
		],
		verify: "自行验证",
		note: "在生产域上测量的实时响应标头。"
	},
	ko: {
		eyebrow: "보안",
		heading: "엣지에서 강화.",
		subline: "모든 응답은 엄격한 보안 헤더를 전송합니다 — 정책 문서의 약속이 아니라, 운영 도메인에서 Cloudflare가 실제로 적용합니다.",
		labels: [
			"전송 보안",
			"콘텐츠 보안 정책",
			"클릭재킹",
			"MIME 스니핑",
			"리퍼러",
			"브라우저 기능"
		],
		verify: "직접 확인하기",
		note: "운영 도메인에서 측정한 실시간 응답 헤더."
	}
};
function SecurityEvidence() {
	const { language } = useLanguage();
	const t = CONTENT[language] ?? CONTENT.en;
	return /* @__PURE__ */ jsx("section", {
		className: "border-t border-border bg-surface py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mb-4",
					children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-primary" }), /* @__PURE__ */ jsxs("span", {
						className: "text-xs font-mono uppercase tracking-[0.25em] text-foreground/55",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-signature",
							children: "// "
						}), t.eyebrow]
					})]
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-3xl md:text-4xl font-light text-foreground tracking-tight mb-5",
					children: t.heading
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-lg font-light text-foreground/70 max-w-2xl mb-10 leading-relaxed",
					children: t.subline
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border",
					children: POLICY_TOKENS.map((token, i) => /* @__PURE__ */ jsxs("div", {
						className: "bg-background p-5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs font-mono uppercase tracking-wider text-foreground/50 mb-2",
							children: t.labels[i]
						}), /* @__PURE__ */ jsx("div", {
							className: "text-sm font-mono text-foreground break-words",
							children: token
						})]
					}, token))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 flex flex-col sm:flex-row gap-4 items-start",
					children: /* @__PURE__ */ jsxs("a", {
						href: VERIFY_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center justify-between px-6 py-4 kg-action-primary w-full sm:w-72",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: t.verify
						}), /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })]
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-xs font-mono text-foreground/50 normal-case",
					children: t.note
				})
			]
		})
	});
}
//#endregion
//#region src/pages/Engineering.tsx
var Engineering_exports = /* @__PURE__ */ __exportAll({ default: () => Engineering });
function Engineering() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(EnterprisePage, { pageKey: "engineering" }), /* @__PURE__ */ jsx(SecurityEvidence, {})] });
}
//#endregion
//#region src/pages/Status.tsx
var Status_exports = /* @__PURE__ */ __exportAll({ default: () => Status });
function Status() {
	return /* @__PURE__ */ jsx(EnterprisePage, { pageKey: "status" });
}
//#endregion
//#region src/pages/Changelog.tsx
var Changelog_exports = /* @__PURE__ */ __exportAll({ default: () => Changelog });
function Changelog() {
	return /* @__PURE__ */ jsx(EnterprisePage, { pageKey: "changelog" });
}
//#endregion
//#region src/pages/Terms.tsx
var Terms_exports = /* @__PURE__ */ __exportAll({ default: () => Terms });
function Terms() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${t.terms.title} | Kernel-Guard`,
			description: t.terms.section1.content
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-light mb-4 text-foreground",
					children: t.terms.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-foreground/60 text-sm mb-12 font-mono",
					children: t.terms.lastUpdated
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-12 text-foreground/80 leading-relaxed font-light",
					children: [
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: t.terms.section1.title
						}), /* @__PURE__ */ jsx("p", { children: t.terms.section1.content })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: t.terms.section2.title
						}), /* @__PURE__ */ jsx("p", { children: t.terms.section2.content })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: t.terms.section3.title
						}), /* @__PURE__ */ jsx("p", { children: t.terms.section3.content })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: "Acceptable use"
						}), /* @__PURE__ */ jsx("p", { children: "Do not use the website, contact form, admin endpoints, or public repositories for abuse, spam, unauthorized access, service disruption, credential harvesting, or attempts to access data that is not yours." })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: "Security research"
						}), /* @__PURE__ */ jsxs("p", { children: [
							"Good-faith vulnerability reports should follow the public security policy and be sent to",
							" ",
							/* @__PURE__ */ jsx("a", {
								className: "text-primary hover:underline",
								href: mailto(SITE_EMAILS.security),
								children: SITE_EMAILS.security
							}),
							". Do not publicly disclose a vulnerability before triage and remediation coordination."
						] })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: "Legal contact"
						}), /* @__PURE__ */ jsxs("p", { children: [
							"For legal notices or terms-related requests, email",
							" ",
							/* @__PURE__ */ jsx("a", {
								className: "text-primary hover:underline",
								href: mailto(SITE_EMAILS.legal),
								children: SITE_EMAILS.legal
							}),
							"."
						] })] })
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/Privacy.tsx
var Privacy_exports = /* @__PURE__ */ __exportAll({ default: () => Privacy });
function Privacy() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${t.privacy.title} | Kernel-Guard`,
			description: t.privacy.section1.content
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-light mb-4 text-foreground",
					children: t.privacy.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-foreground/60 text-sm mb-12 font-mono",
					children: t.privacy.lastUpdated
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-12 text-foreground/80 leading-relaxed font-light",
					children: [
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: t.privacy.section1.title
						}), /* @__PURE__ */ jsx("p", { children: t.privacy.section1.content })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: t.privacy.section2.title
						}), /* @__PURE__ */ jsx("p", { children: t.privacy.section2.content })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: t.privacy.section3.title
						}), /* @__PURE__ */ jsx("p", { children: t.privacy.section3.content })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: "Service providers"
						}), /* @__PURE__ */ jsx("p", { children: "Kernel Guard uses infrastructure and workflow providers to operate the website, process contact requests, protect the admin workflow, and host source code. These may include Cloudflare, Web3Forms, GitHub, and Google Workspace, depending on the feature being used." })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: "Retention"
						}), /* @__PURE__ */ jsx("p", { children: "Contact form submissions and business correspondence are kept only as long as needed to answer the request, maintain business records, protect the service, or comply with legal obligations." })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: "Your requests"
						}), /* @__PURE__ */ jsx("p", { children: "You can request access, correction, deletion, or restriction of personal information associated with your inquiry. We may need to retain limited records where required for security, fraud prevention, or legal compliance." })] }),
						/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: "Privacy contact"
						}), /* @__PURE__ */ jsxs("p", { children: [
							"For privacy requests or data protection questions, email",
							" ",
							/* @__PURE__ */ jsx("a", {
								className: "text-primary hover:underline",
								href: mailto(SITE_EMAILS.privacy),
								children: SITE_EMAILS.privacy
							}),
							"."
						] })] })
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/Cookies.tsx
var Cookies_exports = /* @__PURE__ */ __exportAll({ default: () => Cookies });
function Cookies() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-24",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: `${t.cookies.title} | Kernel-Guard`,
			description: t.cookies.desc
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-light mb-4 text-foreground",
					children: t.cookies.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-foreground/60 text-sm mb-12 font-mono",
					children: t.cookies.lastUpdated
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-12 text-foreground/80 leading-relaxed font-light",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-lg",
							children: t.cookies.desc
						}),
						/* @__PURE__ */ jsx("section", {
							className: "p-6 border border-border bg-surface rounded-lg",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "text-xl font-medium text-foreground mb-1",
									children: t.cookies.essential.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-foreground/70",
									children: t.cookies.essential.desc
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-12 h-6 bg-primary rounded-full relative",
										children: /* @__PURE__ */ jsx("div", { className: "absolute right-1 top-1 w-4 h-4 bg-white rounded-full" })
									}), /* @__PURE__ */ jsx("span", {
										className: "ml-3 text-sm font-medium",
										children: "Always Active"
									})]
								})]
							})
						}),
						/* @__PURE__ */ jsx("section", {
							className: "p-6 border border-border bg-surface rounded-lg",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "text-xl font-medium text-foreground mb-1",
									children: t.cookies.analytics.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-foreground/70",
									children: t.cookies.analytics.desc
								})] }), /* @__PURE__ */ jsx("div", {
									className: "flex items-center",
									children: /* @__PURE__ */ jsx("button", {
										className: "w-12 h-6 bg-border rounded-full relative transition-colors hover:bg-gray-400",
										children: /* @__PURE__ */ jsx("div", { className: "absolute left-1 top-1 w-4 h-4 bg-white rounded-full" })
									})
								})]
							})
						}),
						/* @__PURE__ */ jsx("button", {
							className: "px-8 py-4 kg-action-primary transition-colors font-medium",
							children: t.cookies.save
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/config/forms.ts
var WEB3FORMS_ACCESS_KEY = "7c8be6f4-ff09-49f5-b754-60878bc0c970";
//#endregion
//#region src/pages/Contact.tsx
var Contact_exports = /* @__PURE__ */ __exportAll({ default: () => Contact });
var contactChannels = [
	{
		label: "Sales",
		email: SITE_EMAILS.sales,
		Icon: BriefcaseBusiness
	},
	{
		label: "Support",
		email: SITE_EMAILS.support,
		Icon: LifeBuoy
	},
	{
		label: "Security",
		email: SITE_EMAILS.security,
		Icon: ShieldCheck
	},
	{
		label: "Privacy",
		email: SITE_EMAILS.privacy,
		Icon: LockKeyhole
	},
	{
		label: "Legal",
		email: SITE_EMAILS.legal,
		Icon: FileText
	}
];
function Contact() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-32 pb-20",
		children: [/* @__PURE__ */ jsx(SEO, {
			title: t.contact.seo.title,
			description: t.contact.seo.description,
			keywords: t.contact.seo.keywords
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl mb-16",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-light text-foreground mb-6",
					children: t.contact.title
				}), /* @__PURE__ */ jsx("p", {
					className: "text-lg md:text-xl text-foreground/70 font-light leading-relaxed",
					children: t.contact.subtitle
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12",
				children: [/* @__PURE__ */ jsxs("aside", {
					className: "border border-border bg-surface p-8 h-fit",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-medium text-foreground mb-4",
							children: t.contact.info.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/70 font-light leading-relaxed mb-10",
							children: t.contact.info.desc
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsxs("a", {
									href: mailto(SITE_EMAILS.contact),
									className: "flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex h-11 w-11 items-center justify-center border border-border text-primary",
										children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" })
									}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
										className: "block text-sm text-foreground/50",
										children: t.contact.info.email
									}), /* @__PURE__ */ jsx("span", {
										className: "font-medium",
										children: SITE_EMAILS.contact
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4 text-foreground/80",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex h-11 w-11 items-center justify-center border border-border text-primary",
										children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" })
									}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
										className: "block text-sm text-foreground/50",
										children: t.contact.info.location
									}), /* @__PURE__ */ jsx("span", {
										className: "font-medium",
										children: t.contact.info.locationValue
									})] })]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "https://github.com/Kernel-Guard",
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex h-11 w-11 items-center justify-center border border-border text-primary",
										children: /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" })
									}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
										className: "block text-sm text-foreground/50",
										children: t.contact.info.social
									}), /* @__PURE__ */ jsx("span", {
										className: "font-medium",
										children: t.contact.info.github
									})] })]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 border-t border-border pt-8",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "mb-4 text-sm font-medium uppercase tracking-wide text-foreground/60",
								children: "Direct channels"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3",
								children: contactChannels.map(({ label, email, Icon }) => /* @__PURE__ */ jsxs("a", {
									href: mailto(email),
									className: "flex items-center justify-between gap-4 border border-border bg-background px-4 py-3 text-sm text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex min-w-0 items-center gap-3",
										children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
											className: "font-medium",
											children: label
										})]
									}), /* @__PURE__ */ jsx("span", {
										className: "truncate font-mono text-xs text-foreground/55",
										children: email
									})]
								}, email))
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("form", {
					action: "https://api.web3forms.com/submit",
					method: "POST",
					className: "border border-border bg-surface p-8 space-y-6",
					children: [
						/* @__PURE__ */ jsx("input", {
							type: "hidden",
							name: "access_key",
							value: WEB3FORMS_ACCESS_KEY
						}),
						/* @__PURE__ */ jsx("input", {
							type: "hidden",
							name: "subject",
							value: "Kernel Guard contact form"
						}),
						/* @__PURE__ */ jsx("input", {
							type: "checkbox",
							name: "botcheck",
							className: "hidden",
							tabIndex: -1
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "name",
							className: "block text-sm font-medium text-foreground mb-2",
							children: t.contact.form.name
						}), /* @__PURE__ */ jsx("input", {
							id: "name",
							name: "name",
							type: "text",
							required: true,
							autoComplete: "name",
							placeholder: t.contact.form.namePlaceholder,
							className: "w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "email",
							className: "block text-sm font-medium text-foreground mb-2",
							children: t.contact.form.email
						}), /* @__PURE__ */ jsx("input", {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							autoComplete: "email",
							placeholder: t.contact.form.emailPlaceholder,
							className: "w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "message",
							className: "block text-sm font-medium text-foreground mb-2",
							children: t.contact.form.message
						}), /* @__PURE__ */ jsx("textarea", {
							id: "message",
							name: "message",
							required: true,
							rows: 7,
							placeholder: t.contact.form.messagePlaceholder,
							className: "w-full resize-none border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
						})] }),
						/* @__PURE__ */ jsxs("button", {
							type: "submit",
							className: "inline-flex w-full sm:w-auto items-center justify-center gap-3 kg-action-primary px-8 py-4 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
							children: [/* @__PURE__ */ jsx("span", { children: t.contact.form.submit }), /* @__PURE__ */ jsx(Send, { className: "h-5 w-5" })]
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/entry-server.tsx
function LocalizedRoutes() {
	return /* @__PURE__ */ jsx(import_dist.Routes, { children: /* @__PURE__ */ jsxs(import_dist.Route, {
		path: "/",
		element: /* @__PURE__ */ jsx(Layout, {}),
		children: [
			/* @__PURE__ */ jsx(import_dist.Route, {
				index: true,
				element: /* @__PURE__ */ jsx(Home, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "projects",
				element: /* @__PURE__ */ jsx(Projects, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "projects/:id",
				element: /* @__PURE__ */ jsx(ProjectDetails, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "completed-projects",
				element: /* @__PURE__ */ jsx(CompletedProjects, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "completed-projects/:id",
				element: /* @__PURE__ */ jsx(CompletedProjectDetails, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "services",
				element: /* @__PURE__ */ jsx(Services, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "services/secure-frontend",
				element: /* @__PURE__ */ jsx(SecureFrontend, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "services/hardened-backend",
				element: /* @__PURE__ */ jsx(HardenedBackend, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "services/data-protection",
				element: /* @__PURE__ */ jsx(DataProtection, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "services/high-performance",
				element: /* @__PURE__ */ jsx(HighPerformance, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "services/:slug",
				element: /* @__PURE__ */ jsx(ServiceLandingPage, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "articles",
				element: /* @__PURE__ */ jsx(Articles, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "articles/:slug",
				element: /* @__PURE__ */ jsx(ArticlePage, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "security",
				element: /* @__PURE__ */ jsx(Security, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "engineering",
				element: /* @__PURE__ */ jsx(Engineering, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "status",
				element: /* @__PURE__ */ jsx(Status, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "changelog",
				element: /* @__PURE__ */ jsx(Changelog, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "terms",
				element: /* @__PURE__ */ jsx(Terms, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "privacy",
				element: /* @__PURE__ */ jsx(Privacy, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "cookies",
				element: /* @__PURE__ */ jsx(Cookies, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "contact",
				element: /* @__PURE__ */ jsx(Contact, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "not-found",
				element: /* @__PURE__ */ jsx(NotFound, {})
			}),
			/* @__PURE__ */ jsx(import_dist.Route, {
				path: "*",
				element: /* @__PURE__ */ jsx(NotFound, {})
			})
		]
	}) });
}
function renderRoute(url, language) {
	const helmetContext = {};
	return {
		html: renderToString(/* @__PURE__ */ jsx(HelmetProvider, {
			context: helmetContext,
			children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(import_dist.StaticRouter, {
				location: url,
				children: /* @__PURE__ */ jsxs(import_dist.Routes, { children: [
					/* @__PURE__ */ jsx(import_dist.Route, {
						path: "/en/*",
						element: /* @__PURE__ */ jsxs(LanguageProvider, {
							initialLanguage: "en",
							children: [
								/* @__PURE__ */ jsx(CanonicalPathRedirect, {}),
								/* @__PURE__ */ jsx(ScrollToTop, {}),
								/* @__PURE__ */ jsx(LocalizedRoutes, {})
							]
						}, "en")
					}),
					/* @__PURE__ */ jsx(import_dist.Route, {
						path: "/de/*",
						element: /* @__PURE__ */ jsxs(LanguageProvider, {
							initialLanguage: "de",
							children: [
								/* @__PURE__ */ jsx(CanonicalPathRedirect, {}),
								/* @__PURE__ */ jsx(ScrollToTop, {}),
								/* @__PURE__ */ jsx(LocalizedRoutes, {})
							]
						}, "de")
					}),
					/* @__PURE__ */ jsx(import_dist.Route, {
						path: "/ja/*",
						element: /* @__PURE__ */ jsxs(LanguageProvider, {
							initialLanguage: "ja",
							children: [
								/* @__PURE__ */ jsx(CanonicalPathRedirect, {}),
								/* @__PURE__ */ jsx(ScrollToTop, {}),
								/* @__PURE__ */ jsx(LocalizedRoutes, {})
							]
						}, "ja")
					}),
					/* @__PURE__ */ jsx(import_dist.Route, {
						path: "/zh-cn/*",
						element: /* @__PURE__ */ jsxs(LanguageProvider, {
							initialLanguage: "zh-CN",
							children: [
								/* @__PURE__ */ jsx(CanonicalPathRedirect, {}),
								/* @__PURE__ */ jsx(ScrollToTop, {}),
								/* @__PURE__ */ jsx(LocalizedRoutes, {})
							]
						}, "zh-CN")
					}),
					/* @__PURE__ */ jsx(import_dist.Route, {
						path: "/es/*",
						element: /* @__PURE__ */ jsxs(LanguageProvider, {
							initialLanguage: "es",
							children: [
								/* @__PURE__ */ jsx(CanonicalPathRedirect, {}),
								/* @__PURE__ */ jsx(ScrollToTop, {}),
								/* @__PURE__ */ jsx(LocalizedRoutes, {})
							]
						}, "es")
					}),
					/* @__PURE__ */ jsx(import_dist.Route, {
						path: "/fr/*",
						element: /* @__PURE__ */ jsxs(LanguageProvider, {
							initialLanguage: "fr",
							children: [
								/* @__PURE__ */ jsx(CanonicalPathRedirect, {}),
								/* @__PURE__ */ jsx(ScrollToTop, {}),
								/* @__PURE__ */ jsx(LocalizedRoutes, {})
							]
						}, "fr")
					}),
					/* @__PURE__ */ jsx(import_dist.Route, {
						path: "/ko/*",
						element: /* @__PURE__ */ jsxs(LanguageProvider, {
							initialLanguage: "ko",
							children: [
								/* @__PURE__ */ jsx(CanonicalPathRedirect, {}),
								/* @__PURE__ */ jsx(ScrollToTop, {}),
								/* @__PURE__ */ jsx(LocalizedRoutes, {})
							]
						}, "ko")
					}),
					/* @__PURE__ */ jsx(import_dist.Route, {
						path: "/*",
						element: /* @__PURE__ */ jsxs(LanguageProvider, {
							initialLanguage: language,
							children: [
								/* @__PURE__ */ jsx(CanonicalPathRedirect, {}),
								/* @__PURE__ */ jsx(ScrollToTop, {}),
								/* @__PURE__ */ jsx(LocalizedRoutes, {})
							]
						}, "tr")
					})
				] })
			}) })
		})),
		helmet: helmetContext.helmet ?? {}
	};
}
//#endregion
export { ExternalLink as n, ArrowRight as r, renderRoute, Lock as t };
