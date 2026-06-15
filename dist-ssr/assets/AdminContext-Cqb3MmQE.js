import { t as createLucideIcon } from "./createLucideIcon-d-ZGlwaX.js";
import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
//#endregion
//#region src/services/githubApi.ts
var GithubService = class {
	constructor(config) {
		this.apiUrl = "/api/github";
		this.config = config;
	}
	async fetchApi(action, payload = {}) {
		if (action === "createSession" && !this.config.password) throw new Error("Password is required to create an admin session.");
		const body = {
			action,
			email: this.config.email,
			...payload
		};
		if (action === "createSession") body.password = this.config.password;
		const response = await fetch(this.apiUrl, {
			method: "POST",
			credentials: "same-origin",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		const rawBody = await response.text();
		let data = {};
		try {
			data = rawBody ? JSON.parse(rawBody) : {};
		} catch {
			data = { error: rawBody || "Unexpected API response." };
		}
		if (!response.ok) throw new Error(data.error || "API Request Failed");
		return data;
	}
	async createSession(turnstileToken) {
		return this.fetchApi("createSession", { turnstileToken });
	}
	async logout() {
		await this.fetchApi("logout");
	}
	/**
	* Reads a JSON file from the repository.
	*/
	async getJsonFile(path) {
		return this.fetchApi("readFile", { path });
	}
	/**
	* Updates a JSON file in the repository.
	*/
	async updateJsonFile(path, content, message, sha) {
		return this.fetchApi("updateFile", {
			path,
			content,
			message,
			sha
		});
	}
	/**
	* Uploads an image (base64) to the repository and returns its path.
	*/
	async uploadImage(filename, base64Content) {
		const path = `public/images/projects/${filename}`;
		await this.fetchApi("uploadImage", {
			path,
			content: base64Content,
			message: `Upload image ${filename}`
		});
		return `/images/projects/${filename}`;
	}
};
//#endregion
//#region src/context/AdminContext.tsx
var AdminContext = createContext(void 0);
var ADMIN_IDENTITY_STORAGE_KEY = "kg_admin_identity";
var LEGACY_ADMIN_CONFIG_STORAGE_KEY = "kg_admin_config";
function AdminProvider({ children }) {
	const [identity, setIdentity] = useState(null);
	const [service, setService] = useState(null);
	const config = identity ? { email: identity.email } : null;
	useEffect(() => {
		const saved = sessionStorage.getItem(ADMIN_IDENTITY_STORAGE_KEY);
		if (saved) try {
			const parsed = JSON.parse(saved);
			if (parsed.email) {
				setIdentity({ email: parsed.email });
				setService(new GithubService({ email: parsed.email }));
			}
		} catch (e) {
			sessionStorage.removeItem(ADMIN_IDENTITY_STORAGE_KEY);
		}
		sessionStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
		localStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
	}, []);
	const login = (newIdentity) => {
		const nextIdentity = { email: newIdentity.email };
		sessionStorage.setItem(ADMIN_IDENTITY_STORAGE_KEY, JSON.stringify(nextIdentity));
		localStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
		setIdentity(nextIdentity);
		setService(new GithubService(nextIdentity));
	};
	const logout = async () => {
		const activeService = service;
		sessionStorage.removeItem(ADMIN_IDENTITY_STORAGE_KEY);
		sessionStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
		localStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
		setIdentity(null);
		setService(null);
		if (activeService) try {
			await activeService.logout();
		} catch {}
	};
	return /* @__PURE__ */ jsx(AdminContext.Provider, {
		value: {
			identity,
			config,
			service,
			login,
			logout
		},
		children
	});
}
function useAdmin() {
	const context = useContext(AdminContext);
	if (context === void 0) throw new Error("useAdmin must be used within an AdminProvider");
	return context;
}
//#endregion
export { CircleAlert as a, LoaderCircle as i, useAdmin as n, GithubService as r, AdminProvider as t };
